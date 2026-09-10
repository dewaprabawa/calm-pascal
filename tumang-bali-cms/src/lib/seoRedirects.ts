/**
 * Paths that permanently redirect (see next.config.ts).
 * Keep sitemap, internal links, and listings off these URLs so Ahrefs /
 * Search Console do not flag "3XX in sitemap" or "links to redirect".
 */
export const SEO_REDIRECTS: Record<string, string> = {
  '/cooking-class-bali': '/balinese-cooking-class-ubud',
  '/blog/pepes-ikan-recipe-bali': '/recipes/pepes-ikan',
  '/blog/dishes-you-cook-balinese-cooking-class': '/authentic-balinese-cooking-class',
  '/faq': '/#faq',
  '/reviews': '/#reviews',
  '/index.html': '/',
  '/blog.html': '/blog',
  '/blog/2-days-ubud-food-itinerary': '/blog/ubud-food-lovers-itinerary',
  '/experiences': '/tours',
  '/tour': '/tours',
}

/** Blog slugs that 308 elsewhere — never list or sitemap them. */
export const REDIRECTED_BLOG_SLUGS = new Set(
  Object.keys(SEO_REDIRECTS)
    .filter((path) => path.startsWith('/blog/'))
    .map((path) => path.slice('/blog/'.length)),
)

/** Rewrite an internal href to its final destination when it redirects. */
export function resolveSeoHref(href: string | undefined | null): string | undefined | null {
  if (!href) return href
  try {
    const base = 'https://tumangbaliclass.com'
    const url = href.startsWith('http') ? new URL(href) : new URL(href, base)
    if (url.hostname !== 'tumangbaliclass.com' && url.hostname !== 'www.tumangbaliclass.com') {
      return href
    }
    const path = url.pathname.replace(/\/$/, '') || '/'
    const dest = SEO_REDIRECTS[path]
    if (!dest) return href
    if (dest.startsWith('http')) return dest
    return `${dest}${url.search}${url.hash}`
  } catch {
    return href
  }
}
