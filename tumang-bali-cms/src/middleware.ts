import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Locale policy:
 * - Default is always English (`/`).
 * - Indonesian (`/id`) is only shown when the visitor navigates there
 *   (language switcher click or a direct `/id` link).
 * - Do not auto-redirect `/` → `/id` from cookies or Accept-Language.
 * - Keep bots on English `/` for stable hreflang indexing.
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/id'],
}
