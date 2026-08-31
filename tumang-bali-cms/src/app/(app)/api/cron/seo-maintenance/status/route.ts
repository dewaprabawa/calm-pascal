import { NextResponse } from 'next/server'
import { seoMaintenanceConfigured } from '@/lib/seoMaintenanceAuth'

/** Public health check — no secrets exposed. */
export async function GET() {
  const configured = seoMaintenanceConfigured()

  if (configured) {
    return NextResponse.json({
      seoMaintenanceConfigured: true,
      cronEndpoint: '/api/cron/seo-maintenance',
      auth: 'Authorization: Bearer <CRON_SECRET or SEED_ARTICLES_KEY>',
    })
  }

  return NextResponse.json({
    seoMaintenanceConfigured: false,
    setupRequired: true,
    instructions: [
      'In Vercel → Project → Settings → Environment Variables, add CRON_SECRET and/or SEED_ARTICLES_KEY for Production.',
      'Redeploy production after saving env vars.',
      'Run once: GET /api/cron/seo-maintenance with header Authorization: Bearer <your-secret>',
      'This seeds Month 1/2 commercial articles, meta updates, and recipe step-by-step content into MongoDB.',
    ],
    verifyAfterSetup: 'https://tumangbaliclass.com/api/cron/seo-maintenance/status',
  })
}
