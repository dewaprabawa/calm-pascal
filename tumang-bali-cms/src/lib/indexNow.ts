import { SITE } from '@/lib/seoMetadata'

/** Public IndexNow key — file served at /{INDEXNOW_KEY}.txt */
export const INDEXNOW_KEY = 'tumangbali-indexnow-chatgpt-bing-2026'

/** Priority URLs for ChatGPT (Bing-backed) and Bing Copilot discovery. */
export const INDEXNOW_PRIORITY_URLS = [
  `${SITE}/`,
  `${SITE}/balinese-cooking-class-ubud`,
  `${SITE}/book-your-cooking-class`,
  `${SITE}/compare-ubud-cooking-classes`,
  `${SITE}/llms.txt`,
  `${SITE}/llms-full.txt`,
  `${SITE}/blog/best-cooking-class-in-ubud`,
  `${SITE}/blog/ubud-cooking-class-price`,
  `${SITE}/blog/cooking-class-ubud-guide-2026`,
  `${SITE}/press`,
] as const

type IndexNowPayload = {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

export async function submitIndexNow(urls: string[] = [...INDEXNOW_PRIORITY_URLS]): Promise<{
  ok: boolean
  status: number
  submitted: number
  body: string
}> {
  const host = new URL(SITE).host
  const payload: IndexNowPayload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList: urls.slice(0, 10_000),
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  const body = await res.text().catch(() => '')
  return {
    ok: res.ok || res.status === 202,
    status: res.status,
    submitted: payload.urlList.length,
    body: body.slice(0, 500),
  }
}
