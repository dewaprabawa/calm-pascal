import { NextResponse } from 'next/server'
import { seoMaintenanceConfigured } from '@/lib/seoMaintenanceAuth'
import { STATIC_COMMERCIAL_SLUGS } from '@/lib/staticCommercialSlugs'

/** Public health check — no secrets exposed. */
export async function GET() {
  const configured = seoMaintenanceConfigured()

  return NextResponse.json({
    seoMaintenanceConfigured: configured,
    /** Commercial SEO content is static — not blocked by cron/MongoDB. */
    seoContentReady: true,
    contentDelivery: 'static-first',
    staticCommercialArticleCount: STATIC_COMMERCIAL_SLUGS.length,
    staticCommercialPaths: STATIC_COMMERCIAL_SLUGS.map((s) => `/blog/${s}`),
    contentHealthUrl: '/api/seo-content-health',
    cronEndpoint: '/api/cron/seo-maintenance',
    ...(configured
      ? {
          auth: 'Authorization: Bearer <CRON_SECRET or SEED_ARTICLES_KEY>',
          note: 'CMS cron ready for optional meta/recipe sync.',
        }
      : {
          optionalSetup: [
            'CMS cron is optional. Commercial articles already live as static pages.',
            'To enable optional CMS seed: set CRON_SECRET, SEED_ARTICLES_KEY, and MONGODB_URI on tumang-bali-cms Production, then redeploy.',
          ],
        }),
  })
}
