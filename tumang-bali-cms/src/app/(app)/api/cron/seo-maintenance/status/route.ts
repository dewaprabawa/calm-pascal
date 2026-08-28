import { NextResponse } from 'next/server'
import { seoMaintenanceConfigured } from '@/lib/seoMaintenanceAuth'

/** Public health check — no secrets exposed. */
export async function GET() {
  return NextResponse.json({
    seoMaintenanceConfigured: seoMaintenanceConfigured(),
  })
}
