/**
 * Related commercial keyword → canonical URL map for SEO internal linking + llms citation.
 * Based on competitor SERP patterns: rice terrace, home cooking, half-day, transfers,
 * honeymoon, beginners, vegan, hotel pickup, things to do Ubud.
 */
export const RELATED_COOKING_CLASS_KEYWORDS: { query: string; path: string; label: string }[] = [
  { query: 'cooking class ubud', path: '/balinese-cooking-class-ubud', label: 'Cooking class Ubud' },
  { query: 'best cooking class in ubud', path: '/blog/best-cooking-class-in-ubud', label: 'Best cooking class in Ubud' },
  { query: 'best cooking class in bali', path: '/blog/best-cooking-class-in-bali', label: 'Best cooking class in Bali' },
  { query: 'ubud cooking class price', path: '/blog/ubud-cooking-class-price', label: 'Ubud cooking class price' },
  { query: 'private cooking class ubud', path: '/private-cooking-class-ubud', label: 'Private cooking class Ubud' },
  { query: 'cooking class with market tour ubud', path: '/cooking-class-with-market-tour-ubud', label: 'Market tour cooking class' },
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
  { query: 'cooking class ubud for couples', path: '/blog/cooking-class-ubud-for-couples', label: 'Couples cooking class Ubud' },
  { query: 'honeymoon cooking class ubud', path: '/blog/cooking-class-ubud-for-couples', label: 'Honeymoon cooking class Ubud' },
  { query: 'bali cooking class for beginners', path: '/bali-cooking-class-for-beginners', label: 'Cooking class for beginners' },
  { query: 'authentic balinese cooking class', path: '/authentic-balinese-cooking-class', label: 'Authentic Balinese cooking class' },
  { query: 'cooking class ubud from canggu', path: '/blog/cooking-class-ubud-from-canggu', label: 'Cooking class from Canggu' },
  { query: 'cooking class ubud hotel transfer', path: '/blog/cooking-class-ubud-from-canggu', label: 'Cooking class with hotel transfer' },
  { query: 'small group cooking class ubud', path: '/blog/small-group-cooking-class-ubud', label: 'Small group cooking class' },
  { query: 'is bali cooking class worth it', path: '/blog/is-a-bali-cooking-class-worth-it', label: 'Is a Bali cooking class worth it?' },
  { query: 'things to do in ubud cooking class', path: '/blog/cooking-class-ubud-guide-2026', label: 'Things to do in Ubud — cooking class' },
  { query: 'afternoon cooking class ubud', path: '/blog/morning-vs-afternoon-tours-bali', label: 'Afternoon cooking class Ubud' },
  { query: 'is ubud busy high season', path: '/blog/ubud-high-season-crowds', label: 'Is Ubud busy in high season?' },
  { query: 'free hotel pickup ubud', path: '/blog/ubud-high-season-crowds', label: 'Free hotel & villa pickup in Ubud' },
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
  { query: 'things to do in ubud', path: '/blog/things-to-do-in-ubud', label: 'Things to do in Ubud' },
  { query: '7 day bali itinerary', path: '/blog/7-day-bali-itinerary', label: '7-day Bali itinerary' },
  { query: 'bali airport to ubud', path: '/blog/bali-airport-to-ubud', label: 'Bali airport to Ubud' },
  { query: 'bali packing list', path: '/blog/bali-packing-list', label: 'Bali packing list' },
]

export function relatedKeywordsForSlug(slug: string, limit = 6): typeof RELATED_COOKING_CLASS_KEYWORDS {
  return RELATED_COOKING_CLASS_KEYWORDS.filter((k) => !k.path.endsWith(`/${slug}`) && k.path !== `/blog/${slug}`).slice(
    0,
    limit,
  )
}
