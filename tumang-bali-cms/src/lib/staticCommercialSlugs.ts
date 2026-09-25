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
  'ubud-high-season-crowds',
  // Related keyword cluster (rice terrace, home cooking / local family)
  'rice-terrace-cooking-class-ubud',
  'balinese-home-cooking-class-ubud',
  'ubud-food-lovers-itinerary',
  // Zapier smart assistant — GEO citability for on-site AI help
  'zapier-smart-assistant-ubud-cooking-class',
  // Competitor comparison cluster
  'taman-dukuh-vs-tresna-vs-lemongrass-cooking-class',
  // September 2026 keyword cluster (market-to-table, dietary, solo)
  'market-to-table-cooking-class-ubud',
  'gluten-free-cooking-class-ubud',
  'halal-cooking-class-ubud',
  'cooking-class-ubud-for-solo-travelers',
  // Competitor SERP cluster (Paon, Casa Luna, hands-on, hotel pickup)
  'paon-bali-vs-tumang-cooking-class',
  'casa-luna-vs-tumang-cooking-class',
  'hands-on-cooking-class-ubud',
  'cooking-class-ubud-hotel-pickup',
  // Sales / CTA cluster (booking-stage) — one modifier intent each; see SEO-CANNIBALIZATION-POLICY.md
  // Do NOT add anniversary/gift/English/rainy-day/inclusions/book-direct clones (frozen).
  'last-minute-cooking-class-ubud',
  'how-to-book-cooking-class-ubud',
  'cooking-class-ubud-duration-schedule',
  'allergy-friendly-cooking-class-ubud',
  'birthday-cooking-class-ubud',
  'team-building-cooking-class-bali',
] as const

export type StaticCommercialSlug = (typeof STATIC_COMMERCIAL_SLUGS)[number]
