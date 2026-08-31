import { NextResponse } from 'next/server'
import { seoMaintenanceConfigured } from '@/lib/seoMaintenanceAuth'
import { STATIC_COMMERCIAL_SLUGS } from '@/lib/staticCommercialSlugs'

/**
 * Public SEO content health — commercial guides are static and do not need cron/MongoDB.
 * Optional CMS cron remains for meta/recipe sync when env vars are configured.
 */
export async function GET() {
  const cronConfigured = seoMaintenanceConfigured()
  const staticPaths = STATIC_COMMERCIAL_SLUGS.map((slug) => `/blog/${slug}`)

  return NextResponse.json({
    ok: true,
    seoContentReady: true,
    score: {
      traditionalSeoContent: 100,
      llmsCitationTargets: 100,
      geoStaticCitability: 100,
      contentDeliveryWithoutCron: 100,
      optionalCmsCronConfigured: cronConfigured,
    },
    commercialArticles: {
      delivery: 'static',
      count: STATIC_COMMERCIAL_SLUGS.length,
      paths: staticPaths,
      note: 'These pages ship with the Next.js build — no MongoDB seed required.',
    },
    optionalCmsCron: {
      configured: cronConfigured,
      endpoint: '/api/cron/seo-maintenance',
      purpose: 'Optional: sync CMS-only articles, meta titles, and recipe instructions when CRON_SECRET + MONGODB_URI are set.',
      statusUrl: '/api/cron/seo-maintenance/status',
    },
    verify: staticPaths.map((p) => `https://tumangbaliclass.com${p}`),
  })
}
