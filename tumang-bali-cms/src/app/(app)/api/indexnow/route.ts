import { NextResponse } from 'next/server'
import { INDEXNOW_KEY, INDEXNOW_PRIORITY_URLS, submitIndexNow } from '@/lib/indexNow'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/indexnow — notify Bing IndexNow (powers ChatGPT web search discovery).
 * Optional JSON body: { "urls": ["https://tumangbaliclass.com/..."] }
 * GET returns key location + default URL list (no side effects).
 */
export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyLocation: `https://tumangbaliclass.com/${INDEXNOW_KEY}.txt`,
    defaultUrls: INDEXNOW_PRIORITY_URLS,
    endpoint: 'https://api.indexnow.org/indexnow',
  })
}

export async function POST(request: Request) {
  let urls: string[] | undefined
  try {
    const body = await request.json().catch(() => null)
    if (body && Array.isArray(body.urls)) {
      urls = body.urls.filter((u: unknown): u is string => typeof u === 'string' && u.startsWith('https://'))
    }
  } catch {
    urls = undefined
  }

  const result = await submitIndexNow(urls?.length ? urls : undefined)
  return NextResponse.json(result, { status: result.ok ? 200 : 502 })
}
