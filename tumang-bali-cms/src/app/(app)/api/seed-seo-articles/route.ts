import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { runArticleSeedBatch } from '@/lib/articleSeedRunner'
import { runMetaSeedBatch } from '@/lib/articleMetaSeedRunner'
import { articles as foodTravelArticles } from '../../../../../seedSeoFoodTravelArticles'
import { articles as culinaryArticles } from '../../../../../seedSeoCulinaryBaliForeign'

export const maxDuration = 300

function isAuthorized(request: NextRequest): boolean {
  const configured = process.env.SEED_ARTICLES_KEY
  if (!configured) return false
  const key =
    request.headers.get('x-seed-key') ||
    request.nextUrl.searchParams.get('key') ||
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  return key === configured
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const allArticles = [...foodTravelArticles, ...culinaryArticles]

    const foodTravel = await runArticleSeedBatch(payload, foodTravelArticles)
    const culinary = await runArticleSeedBatch(payload, culinaryArticles)
    const meta = await runMetaSeedBatch(payload)

    return NextResponse.json({
      ok: true,
      totalTargeted: allArticles.length,
      foodTravel,
      culinary,
      meta,
      summary: {
        created: foodTravel.created.length + culinary.created.length,
        skipped: foodTravel.skipped.length + culinary.skipped.length,
        errors: foodTravel.errors.length + culinary.errors.length,
        metaUpdated: meta.updated.length,
        metaNotFound: meta.notFound.length,
        metaErrors: meta.errors.length,
      },
    })
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
