import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { recipeSlug } from '@/lib/recipeSlug'
import { STATIC_COMMERCIAL_SLUGS } from '@/lib/staticCommercialSlugs'
import { FOREIGN_SEARCH_SLUGS } from '@/lib/foreignSearchSlugs'

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
  'ubud-cooking-class-price',
  'private-cooking-class-ubud-price',
  'how-to-make-sate-lilit',
  'cooking-class-ubud-from-canggu',
  'best-cooking-class-in-ubud',
  'best-cooking-class-in-bali',
  'bali-cooking-class-for-food-travelers',
  'bali-cooking-class-for-content-creators',
  'filming-bali-cooking-class-instagram-tiktok',
  'ubud-food-guide-what-to-eat',
  'babi-guling-ubud-where-to-eat',
  'nasi-campur-bali-explained',
  'ayam-betutu-recipe-bali',
  'lawar-balinese-salad-recipe',
  'pepes-ikan-recipe-bali',
  'balinese-vs-indonesian-food',
  'cooking-class-ubud-for-couples',
  'cooking-class-ubud-guide-2026',
  'ubud-cooking-class-for-families',
  'vegetarian-cooking-class-ubud-guide',
  'morning-cooking-class-ubud-market-tour',
  'lemongrass-cooking-class-ubud',
  'tumang-bali-cooking-class-experience',
  'sambal-matah-cooking-class-ubud',
  'small-group-cooking-class-ubud',
  'balinese-spice-paste-cooking-class',
  'book-cooking-class-ubud-getyourguide',
  'book-cooking-class-ubud-tripadvisor',
  'book-cooking-class-ubud-viator',
  'book-cooking-class-ubud-airbnb',
  'morning-vs-afternoon-tours-bali',
  'rice-terrace-cooking-class-ubud',
  'balinese-home-cooking-class-ubud',
  // Foreign search intent cluster (top Bali queries → cooking class funnel)
  'bali-villas-guide-where-to-stay',
  'best-time-to-visit-bali',
  'things-to-do-in-bali',
  'bali-resorts-guide',
  'ubud-vs-canggu-vs-seminyak',
  'bali-visa-requirements',
  'bali-new-tourist-rules-2026',
  'is-bali-cheap-or-expensive',
  'how-to-pay-in-bali',
  'how-to-get-around-bali',
  'how-to-avoid-bali-belly',
  'bali-scooter-rental-rules',
  'can-you-drink-tap-water-bali',
  'dangerous-animals-bali',
  'where-is-bali-located',
  'best-beaches-in-bali',
  'what-to-wear-in-bali-temples',
  'is-bali-safe-for-tourists',
  'what-religion-is-bali',
  'bali-day-of-silence-nyepi',
])

// Static, hand-built routes under (app).
const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/book-your-cooking-class', priority: 0.9, changeFrequency: 'weekly' },
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
  { path: '/tripadvisor-cooking-class-ubud', priority: 0.9, changeFrequency: 'monthly' },
  // Family & kids cooking class
  { path: '/family-cooking-class-bali', priority: 0.9, changeFrequency: 'monthly' },
  // Blog article about Tumang
  { path: '/blog/what-is-tumang-bali', priority: 0.7, changeFrequency: 'monthly' },
  // Static commercial articles derived from STATIC_COMMERCIAL_SLUGS (no hand-list drift)
  ...STATIC_COMMERCIAL_SLUGS.map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  })),
  // Bali trip-planning cluster — top-of-funnel volume feeding the cooking class pages
  ...FOREIGN_SEARCH_SLUGS.map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  })),
  { path: '/recipes', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/llms.txt', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/llms-full.txt', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/id', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/press', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/refund-policy', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.6, changeFrequency: 'yearly' },
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
