import { SITE } from '@/lib/seoMetadata'

/** Default photo when a recipe has no CMS upload — cooking-class food, not a logo. */
export const DEFAULT_RECIPE_IMAGE = '/images/blog/dishes.jpg'

/**
 * Dish photos for recipes that Google flagged as missing schema `image`.
 * Paths are site-relative; schema must use the absolute form.
 */
const RECIPE_IMAGE_BY_SLUG: Record<string, string> = {
  'sambal-matah': '/images/blog/sambal-matah.jpg',
  'sate-tempe': '/images/gallery-satay.jpg',
  'sate-ayam': '/images/gallery-satay.jpg',
  'sup-sayur': '/images/blog/vegetarian-ubud.jpg',
  'kare-tahu': '/images/blog/vegetarian-ubud.jpg',
  'dadar-gulung': '/images/itinerary/dadar-gulung-close.jpg',
  'tempe-manis': '/images/blog/vegetarian-ubud.jpg',
}

function cmsUploadUrl(image: unknown): string | null {
  if (!image || typeof image !== 'object' || !('url' in image)) return null
  const url = (image as { url?: unknown }).url
  return typeof url === 'string' && url.length > 0 ? url : null
}

/** Site-relative or already-absolute URL for next/image and Open Graph. */
export function recipeImageSrc(slug: string, image: unknown): string {
  return cmsUploadUrl(image) || RECIPE_IMAGE_BY_SLUG[slug] || DEFAULT_RECIPE_IMAGE
}

/** Absolute HTTPS URL — required for schema.org/Recipe `image` rich results. */
export function recipeImageAbsoluteUrl(slug: string, image: unknown): string {
  const src = recipeImageSrc(slug, image)
  if (src.startsWith('https://') || src.startsWith('http://')) return src
  if (src.startsWith('//')) return `https:${src}`
  return `${SITE}${src.startsWith('/') ? src : `/${src}`}`
}
