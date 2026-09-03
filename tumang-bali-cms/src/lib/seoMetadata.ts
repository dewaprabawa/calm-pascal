import type { Metadata } from 'next'

export const SITE = 'https://tumangbaliclass.com'
/** ISO date for schema dateModified and visible freshness signals. */
export const SITE_CONTENT_UPDATED = '2026-09-03'
/** Human-readable freshness label for UI + GEO citability blocks. */
export const SITE_CONTENT_UPDATED_LABEL = 'September 2026'
/** TripAdvisor aggregate review count used in schema (keep consistent sitewide). */
export const TRIPADVISOR_REVIEW_COUNT = '1500'
export const BRAND = 'Tumang Bali'
export const BRAND_SUFFIX = ` | ${BRAND}`

/** Primary money page for "cooking class Ubud" queries — consolidate internal links here. */
export const PRIMARY_COOKING_CLASS_PATH = '/balinese-cooking-class-ubud'
export const PRIMARY_COOKING_CLASS_URL = `${SITE}${PRIMARY_COOKING_CLASS_PATH}`

/** Build a title that bypasses the layout template suffix (avoids double "| Tumang Bali"). */
export function pageTitle(text: string, maxBaseLen = 58): Metadata['title'] {
  const base = text.replace(/\s*\|\s*Tumang Bali\s*$/i, '').trim()
  const trimmed = base.length > maxBaseLen ? `${base.slice(0, maxBaseLen - 3)}...` : base
  return { absolute: `${trimmed}${BRAND_SUFFIX}` }
}

export function truncateDescription(text: string, maxLen = 160): string {
  if (text.length <= maxLen) return text
  return `${text.slice(0, maxLen - 3)}...`
}

export function buildPageMetadata(opts: {
  title: string
  description: string
  path: string
  ogTitle?: string
  image?: string
  imageAlt?: string
  keywords?: string[]
}): Metadata {
  const title = pageTitle(opts.title)
  const description = truncateDescription(opts.description)
  const url = `${SITE}${opts.path}`
  return {
    title,
    description,
    keywords: opts.keywords?.length ? opts.keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: opts.ogTitle ?? (typeof title === 'object' && title && 'absolute' in title ? title.absolute : opts.title),
      description,
      url,
      siteName: 'Tumang Bali Cooking Class',
      locale: 'en_US',
      type: 'website',
      images: opts.image
        ? [{ url: opts.image, width: 1200, height: 630, alt: opts.imageAlt ?? opts.title }]
        : undefined,
    },
  }
}

/** Metadata helper for static commercial blog articles (includes keyword tags). */
export function buildStaticArticleMetadata(article: {
  slug: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  keywords: string[]
}): Metadata {
  return buildPageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    ogTitle: article.metaTitle,
    image: article.image,
    imageAlt: article.imageAlt,
    keywords: article.keywords,
  })
}
