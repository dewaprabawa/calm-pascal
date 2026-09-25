/**
 * Related commercial keyword → canonical URL map for SEO internal linking + llms citation.
 * Strategy: KEEP the full commercial + foreign article cluster as spokes; point head-term
 * intents at the money page `/balinese-cooking-class-ubud`. Dedicated pickup/competitor
 * blogs own their long-tail queries when those URLs exist.
 *
 * Anti-cannibalization: each `query` appears once. Never map the same query to two paths.
 * Policy: docs/SEO-CANNIBALIZATION-POLICY.md
 */
export const RELATED_COOKING_CLASS_KEYWORDS: { query: string; path: string; label: string }[] = [
  // Head term → money page (rank consolidation)
  { query: 'cooking class ubud', path: '/balinese-cooking-class-ubud', label: 'Cooking class Ubud' },
  { query: 'ubud cooking class', path: '/balinese-cooking-class-ubud', label: 'Ubud cooking class' },
  { query: 'cooking classes ubud', path: '/balinese-cooking-class-ubud', label: 'Cooking classes Ubud' },

  // Dedicated hotel-pickup spoke (competitor SERP cluster)
  { query: 'hotel pickup cooking class ubud', path: '/blog/cooking-class-ubud-hotel-pickup', label: 'Hotel pickup cooking class Ubud' },
  { query: 'free hotel pickup ubud', path: '/blog/cooking-class-ubud-hotel-pickup', label: 'Free hotel & villa pickup in Ubud' },
  { query: 'cooking class ubud hotel pickup', path: '/blog/cooking-class-ubud-hotel-pickup', label: 'Cooking class Ubud hotel pickup' },
  { query: 'cooking class ubud hotel transfer', path: '/blog/cooking-class-ubud-hotel-pickup', label: 'Cooking class with hotel transfer' },

  // Research / comparison spokes (keep articles)
  { query: 'best cooking class in ubud', path: '/blog/best-cooking-class-in-ubud', label: 'Best cooking class in Ubud' },
  { query: 'best cooking class in bali', path: '/blog/best-cooking-class-in-bali', label: 'Best cooking class in Bali' },
  { query: 'ubud cooking class price', path: '/blog/ubud-cooking-class-price', label: 'Ubud cooking class price' },
  { query: 'private cooking class ubud price', path: '/blog/private-cooking-class-ubud-price', label: 'Private cooking class price' },
  { query: 'private cooking class ubud', path: '/private-cooking-class-ubud', label: 'Private cooking class Ubud' },
  { query: 'cooking class with market tour ubud', path: '/cooking-class-with-market-tour-ubud', label: 'Market tour cooking class' },
  { query: 'morning cooking class ubud', path: '/blog/morning-cooking-class-ubud-market-tour', label: 'Morning cooking class + market tour' },
  { query: 'rice terrace cooking class ubud', path: '/blog/rice-terrace-cooking-class-ubud', label: 'Rice terrace cooking class' },
  { query: 'balinese home cooking class ubud', path: '/blog/balinese-home-cooking-class-ubud', label: 'Balinese home cooking class' },
  { query: 'half day cooking class bali', path: '/half-day-cooking-class-bali', label: 'Half-day cooking class Bali' },
  { query: 'vegetarian cooking class ubud', path: '/blog/vegetarian-cooking-class-ubud-guide', label: 'Vegetarian cooking class Ubud' },
  { query: 'vegan cooking class bali', path: '/vegetarian-cooking-class-ubud', label: 'Vegan cooking class Bali' },
  { query: 'gluten free cooking class ubud', path: '/blog/gluten-free-cooking-class-ubud', label: 'Gluten-free cooking class Ubud' },
  { query: 'halal cooking class ubud', path: '/blog/halal-cooking-class-ubud', label: 'Halal cooking class Ubud' },
  { query: 'market to table cooking class ubud', path: '/blog/market-to-table-cooking-class-ubud', label: 'Market-to-table cooking class Ubud' },
  { query: 'farm to table cooking class ubud', path: '/blog/market-to-table-cooking-class-ubud', label: 'Farm-to-table cooking class Ubud' },
  { query: 'cooking class ubud solo traveler', path: '/blog/cooking-class-ubud-for-solo-travelers', label: 'Cooking class for solo travelers' },
  { query: 'family cooking class bali', path: '/family-cooking-class-bali', label: 'Family cooking class Bali' },
  { query: 'ubud cooking class for families', path: '/blog/ubud-cooking-class-for-families', label: 'Ubud cooking class for families' },
  { query: 'cooking class ubud for couples', path: '/blog/cooking-class-ubud-for-couples', label: 'Couples cooking class Ubud' },
  { query: 'honeymoon cooking class ubud', path: '/blog/cooking-class-ubud-for-couples', label: 'Honeymoon cooking class Ubud' },
  { query: 'bali cooking class for beginners', path: '/bali-cooking-class-for-beginners', label: 'Cooking class for beginners' },
  { query: 'authentic balinese cooking class', path: '/authentic-balinese-cooking-class', label: 'Authentic Balinese cooking class' },
  { query: 'cooking class ubud from canggu', path: '/blog/cooking-class-ubud-from-canggu', label: 'Cooking class from Canggu' },
  { query: 'small group cooking class ubud', path: '/blog/small-group-cooking-class-ubud', label: 'Small group cooking class' },
  { query: 'is bali cooking class worth it', path: '/blog/is-a-bali-cooking-class-worth-it', label: 'Is a Bali cooking class worth it?' },
  { query: 'cooking class ubud guide', path: '/blog/cooking-class-ubud-guide-2026', label: 'Cooking class Ubud guide 2026' },
  { query: 'afternoon cooking class ubud', path: '/blog/morning-vs-afternoon-tours-bali', label: 'Afternoon cooking class Ubud' },
  { query: 'is ubud busy high season', path: '/blog/ubud-high-season-crowds', label: 'Is Ubud busy in high season?' },
  { query: 'lemongrass cooking class ubud', path: '/blog/lemongrass-cooking-class-ubud', label: 'Lemongrass cooking class Ubud' },
  { query: 'sambal matah cooking class', path: '/blog/sambal-matah-cooking-class-ubud', label: 'Sambal matah cooking class' },
  { query: 'balinese spice paste cooking class', path: '/blog/balinese-spice-paste-cooking-class', label: 'Balinese spice paste class' },
  { query: 'tumang bali cooking class', path: '/blog/tumang-bali-cooking-class-experience', label: 'Tumang Bali cooking class experience' },
  { query: 'ubud food lovers itinerary', path: '/blog/ubud-food-lovers-itinerary', label: 'Ubud food lovers itinerary' },
  { query: 'zapier smart assistant cooking class', path: '/blog/zapier-smart-assistant-ubud-cooking-class', label: 'Zapier smart assistant' },
  { query: 'book cooking class ubud getyourguide', path: '/blog/book-cooking-class-ubud-getyourguide', label: 'Book on GetYourGuide' },
  { query: 'book cooking class ubud tripadvisor', path: '/blog/book-cooking-class-ubud-tripadvisor', label: 'Book on TripAdvisor' },
  { query: 'book cooking class ubud viator', path: '/blog/book-cooking-class-ubud-viator', label: 'Book on Viator' },
  { query: 'book cooking class ubud airbnb', path: '/blog/book-cooking-class-ubud-airbnb', label: 'Book on Airbnb' },

  // Competitor SERP cluster (Paon, Casa Luna, hands-on)
  { query: 'paon bali cooking class', path: '/blog/paon-bali-vs-tumang-cooking-class', label: 'Paon Bali vs Tumang' },
  { query: 'paon bali vs tumang', path: '/blog/paon-bali-vs-tumang-cooking-class', label: 'Paon Bali vs Tumang cooking class' },
  { query: 'casa luna cooking class', path: '/blog/casa-luna-vs-tumang-cooking-class', label: 'Casa Luna vs Tumang' },
  { query: 'casa luna vs tumang', path: '/blog/casa-luna-vs-tumang-cooking-class', label: 'Casa Luna vs Tumang cooking class' },
  { query: 'hands on cooking class ubud', path: '/blog/hands-on-cooking-class-ubud', label: 'Hands-on cooking class Ubud' },

  // Sales / CTA cluster (booking-stage)
  { query: 'last minute cooking class ubud', path: '/blog/last-minute-cooking-class-ubud', label: 'Last-minute cooking class Ubud' },
  { query: 'same day cooking class ubud', path: '/blog/last-minute-cooking-class-ubud', label: 'Same-day cooking class Ubud' },
  { query: 'how to book cooking class ubud', path: '/blog/how-to-book-cooking-class-ubud', label: 'How to book a cooking class in Ubud' },
  { query: 'book cooking class ubud online', path: '/blog/how-to-book-cooking-class-ubud', label: 'Book cooking class Ubud online' },
  { query: 'cooking class ubud duration', path: '/blog/cooking-class-ubud-duration-schedule', label: 'Cooking class Ubud duration' },
  { query: 'cooking class ubud schedule', path: '/blog/cooking-class-ubud-duration-schedule', label: 'Cooking class Ubud schedule' },
  { query: 'how long cooking class ubud', path: '/blog/cooking-class-ubud-duration-schedule', label: 'How long is a cooking class in Ubud' },
  { query: 'allergy friendly cooking class ubud', path: '/blog/allergy-friendly-cooking-class-ubud', label: 'Allergy-friendly cooking class Ubud' },
  { query: 'dairy free cooking class bali', path: '/blog/allergy-friendly-cooking-class-ubud', label: 'Dairy-free cooking class Bali' },
  { query: 'birthday cooking class ubud', path: '/blog/birthday-cooking-class-ubud', label: 'Birthday cooking class Ubud' },
  { query: 'team building cooking class bali', path: '/blog/team-building-cooking-class-bali', label: 'Team-building cooking class Bali' },
  { query: 'corporate cooking class ubud', path: '/blog/team-building-cooking-class-bali', label: 'Corporate cooking class Ubud' },

  {
    query: 'taman dukuh vs tresna vs lemongrass cooking class',
    path: '/blog/taman-dukuh-vs-tresna-vs-lemongrass-cooking-class',
    label: 'Taman Dukuh vs Tresna vs Lemongrass',
  },
  {
    query: 'taman dukuh bali farm cooking class',
    path: '/blog/taman-dukuh-vs-tresna-vs-lemongrass-cooking-class',
    label: 'Taman Dukuh cooking class compared',
  },
  {
    query: 'tresna bali cooking class',
    path: '/blog/taman-dukuh-vs-tresna-vs-lemongrass-cooking-class',
    label: 'Tresna Bali cooking class compared',
  },
  { query: 'compare ubud cooking classes', path: '/compare-ubud-cooking-classes', label: 'Compare Ubud cooking classes' },

  // Foreign / trip-planning spokes (keep)
  { query: 'things to do in ubud', path: '/blog/things-to-do-in-ubud', label: 'Things to do in Ubud' },
  { query: '7 day bali itinerary', path: '/blog/7-day-bali-itinerary', label: '7-day Bali itinerary' },
  { query: 'tegallalang rice terrace', path: '/blog/tegallalang-rice-terrace-guide', label: 'Tegallalang rice terrace guide' },
  { query: 'one day in ubud', path: '/blog/one-day-ubud-itinerary', label: 'One day in Ubud itinerary' },
  { query: 'bali rainy season', path: '/blog/bali-rainy-season-what-to-do', label: 'Bali rainy season what to do' },
  { query: 'bali airport to ubud', path: '/blog/bali-airport-to-ubud', label: 'Bali airport to Ubud' },
  { query: 'bali packing list', path: '/blog/bali-packing-list', label: 'Bali packing list' },
  {
    query: '5 tours to anticipate before bali',
    path: '/blog/5-tours-to-anticipate-before-bali',
    label: '5 tours to anticipate before Bali',
  },
  { query: 'tours to book before bali', path: '/blog/5-tours-to-anticipate-before-bali', label: 'Tours to book before Bali' },
  { query: 'what to anticipate before bali', path: '/blog/5-tours-to-anticipate-before-bali', label: 'What to anticipate before Bali' },
]

export function relatedKeywordsForSlug(slug: string, limit = 6): typeof RELATED_COOKING_CLASS_KEYWORDS {
  return RELATED_COOKING_CLASS_KEYWORDS.filter((k) => !k.path.endsWith(`/${slug}`) && k.path !== `/blog/${slug}`).slice(
    0,
    limit,
  )
}
