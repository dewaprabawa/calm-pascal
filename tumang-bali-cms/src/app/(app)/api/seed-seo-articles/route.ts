import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { runSeoSeedMaintenance } from '@/lib/seoSeedMaintenance'
import { isSeoMaintenanceAuthorized } from '@/lib/seoMaintenanceAuth'

export const maxDuration = 300

export async function POST(request: NextRequest) {
  if (!isSeoMaintenanceAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await runSeoSeedMaintenance(payload)
    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  return POST(request)
}
