import type { NextRequest } from 'next/server'

/** Shared auth for SEO seed + cron routes (manual or Vercel Cron). */
export function isSeoMaintenanceAuthorized(request: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET
  const seedKey = process.env.SEED_ARTICLES_KEY
  const configured = cronSecret || seedKey
  if (!configured) return false

  const auth = request.headers.get('authorization') || ''
  const bearer = auth.replace(/^Bearer\s+/i, '')
  const headerKey = request.headers.get('x-seed-key')
  const queryKey = request.nextUrl.searchParams.get('key')
  const candidate = bearer || headerKey || queryKey || ''

  if (!candidate) return false

  if (cronSecret && candidate === cronSecret) return true
  if (seedKey && candidate === seedKey) return true

  return false
}

export function seoMaintenanceConfigured(): boolean {
  return Boolean(process.env.CRON_SECRET || process.env.SEED_ARTICLES_KEY)
}
