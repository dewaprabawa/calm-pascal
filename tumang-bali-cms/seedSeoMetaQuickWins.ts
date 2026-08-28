/**
 * Updates meta titles/descriptions for high-impression, low-CTR pages in Search Console.
 * Idempotent — safe to re-run.
 *
 * Run: npx tsx --env-file=.env seedSeoMetaQuickWins.ts
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

const META_UPDATES: { slug: string; metaTitle: string; metaDescription: string }[] = [
  {
    slug: 'how-to-make-bumbu-bali',
    metaTitle: 'How to Make Bumbu Bali — Learn It in Our Ubud Cooking Class',
    metaDescription:
      'Make authentic Balinese bumbu spice paste from scratch. Step-by-step guide from Tumang Bali — book a hands-on cooking class in Ubud to grind it yourself.',
  },
  {
    slug: 'dadar-gulung-balinese-dessert-recipe',
    metaTitle: 'Dadar Gulung Recipe — Balinese Coconut Pancake | Cook in Ubud',
    metaDescription:
      'Learn to make Dadar Gulung — Bali\'s green pandan coconut crepe. Authentic recipe from our Ubud cooking class. Book a class to cook it hands-on.',
  },
  {
    slug: 'sambal-matah-recipe',
    metaTitle: 'Sambal Matah Recipe — Fresh Balinese Chili Salsa | Ubud Class',
    metaDescription:
      'Make sambal matah the Balinese way — fresh shallots, lemongrass, and chili. Recipe from Tumang Bali cooking class in Ubud. Book to cook it live.',
  },
  {
    slug: 'best-things-to-do-in-ubud',
    metaTitle: '10 Best Things to Do in Ubud — Include a Balinese Cooking Class',
    metaDescription:
      'Top Ubud experiences for food lovers and culture seekers — rice terraces, markets, temples, and an authentic Balinese cooking class in Tumang village.',
  },
  {
    slug: 'cooking-class-bali-faqs',
    metaTitle: 'Bali Cooking Class FAQs — Price, What to Wear, Pickup & More',
    metaDescription:
      'Answers to the most common Bali cooking class questions — cost, duration, dietary options, hotel pickup, and what to expect at Tumang Bali in Ubud.',
  },
  {
    slug: 'best-cooking-class-in-ubud',
    metaTitle: 'Best Cooking Class in Ubud 2026 — Market Tour & 10+ Dishes',
    metaDescription:
      'Looking for the best cooking class in Ubud? Compare what matters — market tour, hands-on cooking, group size, and authentic Balinese dishes at Tumang Bali.',
  },
  {
    slug: 'best-cooking-class-in-bali',
    metaTitle: 'Best Cooking Class in Bali 2026 — Authentic Ubud Experience',
    metaDescription:
      'The best Bali cooking classes include a real market tour and hands-on cooking with local chefs. See why travelers choose Tumang Bali in Ubud village.',
  },
  {
    slug: 'ubud-cooking-class-price',
    metaTitle: 'Ubud Cooking Class Price 2026 — IDR 350K Shared, Private Rates',
    metaDescription:
      'How much is a cooking class in Ubud in 2026? Shared class IDR 350K, private IDR 650K, kids IDR 550K. Full inclusions: market tour, 10+ dishes, pickup, recipes.',
  },
  {
    slug: 'morning-vs-afternoon-tours-bali',
    metaTitle: 'Morning vs Afternoon Cooking Class Ubud — Which to Book?',
    metaDescription:
      'Morning class includes market tour and rice-field walk. Afternoon class is cook-and-dine without the market. Compare times, menus, and which suits your Ubud itinerary.',
  },
  {
    slug: 'is-a-bali-cooking-class-worth-it',
    metaTitle: 'Is a Bali Cooking Class Worth It? Honest 2026 Answer',
    metaDescription:
      'Weighing cost vs experience for a Bali cooking class. What you get for IDR 350K, who should book, and when a class is not worth it — honest guide from Tumang Bali.',
  },
  {
    slug: 'what-to-expect-bali-cooking-class',
    metaTitle: 'What to Expect at a Bali Cooking Class — Full Day Guide',
    metaDescription:
      'Step-by-step: market tour, spice grinding, 10+ dishes, and shared feast. What to wear, how long it takes, and what makes Tumang Bali different in Ubud.',
  },
  {
    slug: 'ubud-morning-market-guide',
    metaTitle: 'Ubud Morning Market Guide — What to See Before Your Cooking Class',
    metaDescription:
      'Guide to Ubud\'s traditional morning market — ingredients, spices, and what you will buy before cooking. Pairs with our Balinese cooking class in Tumang village.',
  },
]

async function main() {
  const payload = await getPayload({ config: configPromise })
  const results: { slug: string; status: string }[] = []

  for (const update of META_UPDATES) {
    const { docs } = await payload.find({
      collection: 'articles',
      where: { slug: { equals: update.slug } },
      limit: 1,
    })
    const article = docs[0]
    if (!article) {
      results.push({ slug: update.slug, status: 'not_found' })
      continue
    }

    await payload.update({
      collection: 'articles',
      id: article.id,
      data: {
        meta: {
          title: update.metaTitle,
          description: update.metaDescription,
        },
      },
    })
    results.push({ slug: update.slug, status: 'updated' })
    console.log(`✅ Updated meta: ${update.slug}`)
  }

  console.log(JSON.stringify(results, null, 2))
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}

export { META_UPDATES }
