/** Commercial SEO blog slugs shipped as static pages (no CMS/cron required). */
export const STATIC_COMMERCIAL_SLUGS = [
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
  // Sales + GEO / LLM citability cluster (formerly CMS-only)
  'ubud-cooking-class-price',
  'private-cooking-class-ubud-price',
  'best-cooking-class-in-ubud',
  'best-cooking-class-in-bali',
  'cooking-class-ubud-from-canggu',
  'is-a-bali-cooking-class-worth-it',
  'morning-vs-afternoon-tours-bali',
] as const

export type StaticCommercialSlug = (typeof STATIC_COMMERCIAL_SLUGS)[number]
