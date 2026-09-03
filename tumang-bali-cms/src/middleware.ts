import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const LOCALE_COOKIE = 'tb_locale'

const BOT_UA =
  /bot|crawl|spider|slurp|facebookexternalhit|preview|whatsapp|telegram|discord|linkedinbot|embedly|quora|pinterest|redditbot|applebot|bingbot|yandex|duckduck|baidu|semrush|ahrefs|mj12|dotbot|petalbot|bytespider|gptbot|claudebot|google-extended/i

function preferredLocale(acceptLanguage: string | null): 'id' | 'en' {
  if (!acceptLanguage) return 'en'

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const qParam = params.find((p) => p.trim().startsWith('q='))
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { tag } of ranked) {
    if (tag === '*' ) continue
    if (tag.startsWith('id')) return 'id'
    if (tag.startsWith('en')) return 'en'
  }

  return 'en'
}

function withLocaleCookie(response: NextResponse, locale: 'en' | 'id') {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  return response
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const ua = request.headers.get('user-agent') || ''
  const isBot = BOT_UA.test(ua)
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value

  if (pathname === '/id') {
    if (isBot || cookie === 'id') return NextResponse.next()
    return withLocaleCookie(NextResponse.next(), 'id')
  }

  if (pathname !== '/') return NextResponse.next()

  // Keep crawlers on the English homepage for stable hreflang indexing.
  if (isBot) return NextResponse.next()

  if (cookie === 'en') return NextResponse.next()

  if (cookie === 'id' || preferredLocale(request.headers.get('accept-language')) === 'id') {
    const url = request.nextUrl.clone()
    url.pathname = '/id'
    return withLocaleCookie(NextResponse.redirect(url), 'id')
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/id'],
}
