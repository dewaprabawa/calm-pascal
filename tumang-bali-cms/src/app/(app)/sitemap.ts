import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { recipeSlug } from '@/lib/recipeSlug'

export const revalidate = 3600

const SITE = 'https://tumangbaliclass.com'

// Slugs of high-value commercial-intent blog articles → priority 0.8
const HIGH_PRIORITY_BLOG_SLUGS = new Set([
  'what-to-expect-bali-cooking-class',
  'ubud-cooking-class-first-timers-guide',
  'how-to-make-bumbu-bali',
  'how-to-make-base-genep',
  'is-a-bali-cooking-class-worth-it',
  'vegetarian-guide-eating-ubud',
  'cooking-class-bali-faqs',
  'private-group-cooking-class-ubud',
  'tumang-bali-vs-casa-luna-cooking-class-ubud',
  '10-dishes-cooking-class',
])

// Static, hand-built routes under (app).
const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/vegetarian-cooking-class-ubud', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/private-cooking-class-ubud', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/cooking-class-with-market-tour-ubud', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/half-day-cooking-class-bali', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/authentic-balinese-cooking-class', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/best-bali-cooking-class', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/bali-cooking-class-for-beginners', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/what-to-wear-bali-cooking-class', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/where-to-stay-bali-cooking-class', priority: 0.7, changeFrequency: 'monthly' },
  // SERP feature landing pages
  { path: '/cooking-class-bali', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/balinese-cooking-class-ubud', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/best-cooking-classes-bali', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tumang-village', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tumpeng-making-class', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/bali-cooking-experience', priority: 0.9, changeFrequency: 'monthly' },
  // Competitor comparison page
  { path: '/compare-ubud-cooking-classes', priority: 0.9, changeFrequency: 'monthly' },
  // Blog article about Tumang
  { path: '/blog/what-is-tumang-bali', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/recipes', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/id', priority: 0.6, changeFrequency: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${SITE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  // Track seen URLs to prevent duplicates (e.g. recipes with identical slugs).
  const seenUrls = new Set(entries.map((e) => e.url))

  try {
    const payload = await getPayload({ config: configPromise })

    // Recipe pages (slug derived from title — see recipeSlug).
    const { docs: recipes } = await payload.find({ collection: 'recipes', limit: 1000 })
    for (const r of recipes) {
      const url = `${SITE}/recipes/${recipeSlug(r.title as string)}`
      if (seenUrls.has(url)) continue
      seenUrls.add(url)
      entries.push({
        url,
        lastModified: r.updatedAt ? new Date(r.updatedAt as string) : now,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }

    // Published blog articles — tiered priority based on commercial intent.
    const { docs: articles } = await payload.find({
      collection: 'articles',
      where: { status: { equals: 'published' } },
      limit: 1000,
    })
    for (const a of articles) {
      if (!a.slug) continue
      const url = `${SITE}/blog/${a.slug as string}`
      if (seenUrls.has(url)) continue
      seenUrls.add(url)
      entries.push({
        url,
        lastModified: a.updatedAt ? new Date(a.updatedAt as string) : now,
        changeFrequency: 'monthly',
        priority: HIGH_PRIORITY_BLOG_SLUGS.has(a.slug as string) ? 0.8 : 0.6,
      })
    }
  } catch (err) {
    // If the CMS is unreachable at build time, still return the static routes.
    console.error('sitemap: failed to load dynamic routes', err)
  }

  return entries
}

