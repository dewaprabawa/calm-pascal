import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Locale policy:
 * - Default is always English (`/`).
 * - Indonesian (`/id`) is only shown when the visitor navigates there
 *   (language switcher click or a direct `/id` link).
 * - Do not auto-redirect `/` → `/id` from cookies or Accept-Language.
 * - Keep bots on English `/` for stable hreflang indexing.
 *
 * Also strip Sec-CH-Prefers-Color-Scheme Critical-CH headers that force an
 * extra document round-trip (~800ms) and tank mobile LCP on PageSpeed.
 */
export function middleware(_request: NextRequest) {
  const response = NextResponse.next()
  response.headers.delete('Accept-CH')
  response.headers.delete('Critical-CH')
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets and image optimizer.
     * Clearing Critical-CH on HTML navigations is what matters for LCP.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|js|css|woff2?)$).*)',
  ],
}
