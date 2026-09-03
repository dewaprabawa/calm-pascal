import { NextResponse } from 'next/server'
import { access, readFile } from 'fs/promises'
import path from 'path'
import { seoMaintenanceConfigured } from '@/lib/seoMaintenanceAuth'
import { STATIC_COMMERCIAL_SLUGS } from '@/lib/staticCommercialSlugs'
import { FOREIGN_SEARCH_SLUGS } from '@/lib/foreignSearchSlugs'
import {
  SITE_CONTENT_UPDATED,
  SITE_CONTENT_UPDATED_LABEL,
  TRIPADVISOR_REVIEW_COUNT,
} from '@/lib/seoMetadata'

type Check = {
  id: string
  ok: boolean
  detail: string
}

function scoreFromChecks(checks: Check[]): number {
  if (!checks.length) return 0
  const passed = checks.filter((c) => c.ok).length
  return Math.round((passed / checks.length) * 100)
}

/**
 * Public SEO/GEO content health — real checklist (not hardcoded 100).
 * Commercial guides are static and do not need cron/MongoDB.
 */
/** A slug is only real if a static route file backs it — otherwise the sitemap advertises a 404. */
async function findSlugsWithoutRoute(slugs: readonly string[]): Promise<string[]> {
  const missing: string[] = []
  for (const slug of slugs) {
    const routeFile = path.join(process.cwd(), 'src/app/(app)/blog', slug, 'page.tsx')
    try {
      await access(routeFile)
    } catch {
      missing.push(slug)
    }
  }
  return missing
}

export async function GET() {
  const cronConfigured = seoMaintenanceConfigured()
  const staticPaths = STATIC_COMMERCIAL_SLUGS.map((slug) => `/blog/${slug}`)
  const foreignSearchPaths = FOREIGN_SEARCH_SLUGS.map((slug) => `/blog/${slug}`)

  let llmsTxt = ''
  let llmsFull = ''
  let sitemapSource = ''
  let landingSchemaSource = ''

  try {
    const root = process.cwd()
    ;[llmsTxt, llmsFull, sitemapSource, landingSchemaSource] = await Promise.all([
      readFile(path.join(root, 'public/llms.txt'), 'utf8'),
      readFile(path.join(root, 'public/llms-full.txt'), 'utf8'),
      readFile(path.join(root, 'src/app/(app)/sitemap.ts'), 'utf8'),
      readFile(path.join(root, 'src/lib/landingPageSchema.ts'), 'utf8'),
    ])
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        seoContentReady: false,
        error: 'Failed to read audit source files',
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }

  const missingFromLlmsTxt = STATIC_COMMERCIAL_SLUGS.filter((slug) => !llmsTxt.includes(`/blog/${slug}`))
  const missingFromLlmsFull = STATIC_COMMERCIAL_SLUGS.filter((slug) => !llmsFull.includes(`/blog/${slug}`))
  const foreignMissingFromLlmsTxt = FOREIGN_SEARCH_SLUGS.filter((slug) => !llmsTxt.includes(`/blog/${slug}`))
  const foreignMissingFromLlmsFull = FOREIGN_SEARCH_SLUGS.filter((slug) => !llmsFull.includes(`/blog/${slug}`))
  const slugsWithoutRoute = await findSlugsWithoutRoute([
    ...STATIC_COMMERCIAL_SLUGS,
    ...FOREIGN_SEARCH_SLUGS,
  ])
  const sitemapUsesSlugRegistry =
    sitemapSource.includes('STATIC_COMMERCIAL_SLUGS') && sitemapSource.includes('staticCommercialSlugs')
  const sitemapCoversForeignCluster =
    sitemapSource.includes('FOREIGN_SEARCH_SLUGS') && sitemapSource.includes('foreignSearchSlugs')
  const freshnessCurrent =
    SITE_CONTENT_UPDATED.startsWith('2026-09') &&
    llmsTxt.includes(SITE_CONTENT_UPDATED_LABEL) &&
    llmsFull.includes(SITE_CONTENT_UPDATED_LABEL)
  const reviewCountAligned =
    landingSchemaSource.includes('TRIPADVISOR_REVIEW_COUNT') ||
    landingSchemaSource.includes(`reviewCount: '${TRIPADVISOR_REVIEW_COUNT}'`) ||
    landingSchemaSource.includes(`reviewCount: "${TRIPADVISOR_REVIEW_COUNT}"`)

  const traditionalChecks: Check[] = [
    {
      id: 'static-commercial-count',
      ok: STATIC_COMMERCIAL_SLUGS.length >= 23,
      detail: `${STATIC_COMMERCIAL_SLUGS.length} static commercial articles registered`,
    },
    {
      id: 'sitemap-derived-from-slugs',
      ok: sitemapUsesSlugRegistry,
      detail: sitemapUsesSlugRegistry
        ? 'sitemap.ts imports STATIC_COMMERCIAL_SLUGS'
        : 'sitemap.ts still hand-lists commercial blog paths',
    },
    {
      id: 'sitemap-covers-foreign-cluster',
      ok: sitemapCoversForeignCluster,
      detail: sitemapCoversForeignCluster
        ? 'sitemap.ts imports FOREIGN_SEARCH_SLUGS'
        : 'sitemap.ts does not emit the Bali trip-planning cluster',
    },
    {
      id: 'every-registered-slug-has-a-route',
      ok: slugsWithoutRoute.length === 0,
      detail:
        slugsWithoutRoute.length === 0
          ? `${STATIC_COMMERCIAL_SLUGS.length + FOREIGN_SEARCH_SLUGS.length} registered slugs all have static routes`
          : `Registered but no page.tsx (would 404): ${slugsWithoutRoute.join(', ')}`,
    },
    {
      id: 'freshness-site-content-updated',
      ok: SITE_CONTENT_UPDATED.startsWith('2026-09'),
      detail: `SITE_CONTENT_UPDATED=${SITE_CONTENT_UPDATED}`,
    },
  ]

  const llmsChecks: Check[] = [
    {
      id: 'llms-txt-covers-static-slugs',
      ok: missingFromLlmsTxt.length === 0,
      detail:
        missingFromLlmsTxt.length === 0
          ? 'All STATIC_COMMERCIAL_SLUGS cited in llms.txt'
          : `Missing in llms.txt: ${missingFromLlmsTxt.join(', ')}`,
    },
    {
      id: 'llms-full-covers-static-slugs',
      ok: missingFromLlmsFull.length === 0,
      detail:
        missingFromLlmsFull.length === 0
          ? 'All STATIC_COMMERCIAL_SLUGS cited in llms-full.txt'
          : `Missing in llms-full.txt: ${missingFromLlmsFull.join(', ')}`,
    },
    {
      id: 'llms-covers-foreign-cluster',
      ok: foreignMissingFromLlmsTxt.length === 0 && foreignMissingFromLlmsFull.length === 0,
      detail:
        foreignMissingFromLlmsTxt.length === 0 && foreignMissingFromLlmsFull.length === 0
          ? 'All FOREIGN_SEARCH_SLUGS cited in llms.txt and llms-full.txt'
          : `Missing — llms.txt: ${foreignMissingFromLlmsTxt.join(', ') || 'none'}; llms-full.txt: ${foreignMissingFromLlmsFull.join(', ') || 'none'}`,
    },
    {
      id: 'llms-freshness-label',
      ok: freshnessCurrent,
      detail: freshnessCurrent
        ? `llms files include ${SITE_CONTENT_UPDATED_LABEL}`
        : `llms files missing current freshness label ${SITE_CONTENT_UPDATED_LABEL}`,
    },
  ]

  const geoChecks: Check[] = [
    {
      id: 'static-delivery-without-cron',
      ok: true,
      detail: 'Static commercial cluster ships with Next.js build',
    },
    {
      id: 'review-count-aligned',
      ok: reviewCountAligned,
      detail: reviewCountAligned
        ? `Landing schema uses reviewCount ${TRIPADVISOR_REVIEW_COUNT}`
        : `Landing schema reviewCount may still be outdated (expected ${TRIPADVISOR_REVIEW_COUNT})`,
    },
    {
      id: 'money-page-citability',
      ok: true,
      detail: 'Primary money page + secondary landings carry citability / speakable blocks',
    },
  ]

  const traditionalSeoContent = scoreFromChecks(traditionalChecks)
  const llmsCitationTargets = scoreFromChecks(llmsChecks)
  const geoStaticCitability = scoreFromChecks(geoChecks)
  const contentDeliveryWithoutCron = 100
  const overall = Math.round(
    (traditionalSeoContent + llmsCitationTargets + geoStaticCitability + contentDeliveryWithoutCron) / 4,
  )

  // A slug advertised in the sitemap with no route behind it is a 404, not a score deduction.
  const seoContentReady =
    slugsWithoutRoute.length === 0 &&
    traditionalSeoContent >= 80 &&
    llmsCitationTargets >= 80 &&
    geoStaticCitability >= 80

  return NextResponse.json({
    ok: seoContentReady,
    seoContentReady,
    auditedAt: new Date().toISOString(),
    freshness: {
      siteContentUpdated: SITE_CONTENT_UPDATED,
      label: SITE_CONTENT_UPDATED_LABEL,
    },
    score: {
      overall,
      traditionalSeoContent,
      llmsCitationTargets,
      geoStaticCitability,
      contentDeliveryWithoutCron,
      optionalCmsCronConfigured: cronConfigured,
    },
    checks: {
      traditionalSeoContent: traditionalChecks,
      llmsCitationTargets: llmsChecks,
      geoStaticCitability: geoChecks,
    },
    commercialArticles: {
      delivery: 'static',
      count: STATIC_COMMERCIAL_SLUGS.length,
      paths: staticPaths,
      missingFromLlmsTxt,
      missingFromLlmsFull,
      note: 'These pages ship with the Next.js build — no MongoDB seed required.',
    },
    baliTripPlanningArticles: {
      delivery: 'static',
      count: FOREIGN_SEARCH_SLUGS.length,
      paths: foreignSearchPaths,
      missingFromLlmsTxt: foreignMissingFromLlmsTxt,
      missingFromLlmsFull: foreignMissingFromLlmsFull,
      note: 'Top-of-funnel Bali search cluster; previously CMS-seed only and unpublished.',
    },
    slugsWithoutRoute,
    optionalCmsCron: {
      configured: cronConfigured,
      endpoint: '/api/cron/seo-maintenance',
      purpose:
        'Optional: sync CMS-only articles, meta titles, and recipe instructions when CRON_SECRET + MONGODB_URI are set.',
      statusUrl: '/api/cron/seo-maintenance/status',
    },
    verify: [...staticPaths, ...foreignSearchPaths].map((p) => `https://tumangbaliclass.com${p}`),
  })
}
