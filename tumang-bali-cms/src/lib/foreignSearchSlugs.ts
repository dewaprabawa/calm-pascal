import { foreignSearchArticleSeeds } from './foreignSearchArticles'

/** Bali trip-planning blog slugs shipped as static pages (no CMS/seed required).
 *  Derived from the article data so the sitemap and llms files cannot drift. */
export const FOREIGN_SEARCH_SLUGS: string[] = foreignSearchArticleSeeds.map((a) => a.slug)
