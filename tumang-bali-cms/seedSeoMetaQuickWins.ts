/**
 * Updates meta titles/descriptions for high-impression, low-CTR pages in Search Console.
 * Idempotent — safe to re-run. Also applied by the SEO maintenance cron via
 * `runMetaSeedBatch` in `src/lib/articleMetaSeedRunner.ts`.
 *
 * Run locally:  npx tsx --env-file=.env seedSeoMetaQuickWins.ts
 * Production:   POST /api/seed-seo-articles (CRON_SECRET / SEED_ARTICLES_KEY)
 *               or wait for /api/cron/seo-maintenance
 *
 * Titles must stay ≤46 chars so pageTitle() does not insert “…” before | Tumang Bali.
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

const META_UPDATES: { slug: string; metaTitle: string; metaDescription: string }[] = [
  // P0 — impression leaders (CTR leak). Dish-first + “Recipe” + concrete benefit.
  {
    slug: 'how-to-make-bumbu-bali',
    metaTitle: 'Bumbu Bali Recipe — Homemade Spice Paste',
    metaDescription:
      'Bumbu Bali (base genep) recipe: ingredients list, stone-mortar tips, and storage. Cook it hands-on in our Ubud class — free hotel pickup, max 8 guests.',
  },
  {
    slug: 'dadar-gulung-balinese-dessert-recipe',
    metaTitle: 'Dadar Gulung Recipe — Easy Pandan Crepe',
    metaDescription:
      'Dadar gulung recipe: green pandan crepe + sweet coconut filling. Exact home steps from Tumang Bali. Book an Ubud class to cook it live — pickup included.',
  },
  {
    slug: 'sambal-matah-recipe',
    metaTitle: 'Sambal Matah Recipe — Chili Salsa (10 Min)',
    metaDescription:
      'Sambal matah in 10 minutes: shallot, lemongrass, chili, coconut oil. Authentic raw Balinese salsa — cook it hands-on in our Ubud village class.',
  },
  // P1 — extend coverage from GSC audit
  {
    slug: 'ayam-betutu-recipe-bali',
    metaTitle: 'Ayam Betutu Recipe — Banana Leaf Chicken',
    metaDescription:
      'Ayam betutu recipe: chicken in base genep, banana-leaf wrap, oven or steamer method. Tips from our Ubud cooking class — book to cook Balinese classics.',
  },
  {
    slug: 'what-is-the-subak-system-bali',
    metaTitle: 'Subak System Bali — Rice Terrace Guide',
    metaDescription:
      'What is Bali’s subak system? UNESCO rice-terrace irrigation, shared water temples, and why it still shapes food culture near Ubud — clear visitor guide.',
  },
  {
    slug: 'best-time-to-visit-bali-ubud',
    metaTitle: 'Best Time to Visit Bali & Ubud 2026',
    metaDescription:
      'Best time to visit Bali and Ubud: dry vs wet season, crowds, prices, festivals. Month-by-month tips — cooking classes run year-round with free Ubud pickup.',
  },
  // Commercial / supporting posts — price + pickup in every description (US/UK/SG CTR)
  {
    slug: 'cooking-class-bali-faqs',
    metaTitle: 'Bali Cooking Class FAQs — Price & Pickup',
    metaDescription:
      'Bali cooking class FAQs: shared IDR 506,370 (2+) / IDR 616,032 (1), private IDR 633,090. Free Ubud pickup, max 8 guests, vegetarian options, what to wear.',
  },
  {
    slug: 'best-cooking-class-in-ubud',
    metaTitle: 'Best Cooking Class in Ubud 2026 Guide',
    metaDescription:
      'Best cooking class in Ubud: market tour, max 8, price, hands-on vs demo. Tumang Bali from IDR 506,370 with free hotel pickup — TripAdvisor Travelers’ Choice.',
  },
  {
    slug: 'best-cooking-class-in-bali',
    metaTitle: 'Best Cooking Class in Bali 2026 Guide',
    metaDescription:
      'Best cooking class in Bali: village kitchen near Ubud, real market tour, 10+ dishes. From IDR 506,370 with free hotel pickup — why travelers pick Tumang Bali.',
  },
  {
    slug: 'ubud-cooking-class-price',
    metaTitle: 'Ubud Cooking Class Price 2026 Rates',
    metaDescription:
      'Ubud cooking class price: shared IDR 506,370 (2+) / IDR 616,032 (1), private IDR 633,090. Market tour, 10+ dishes, recipes, free hotel pickup — same on every channel.',
  },
  {
    slug: 'morning-vs-afternoon-tours-bali',
    metaTitle: 'Morning vs Afternoon Cooking Class Ubud',
    metaDescription:
      'Morning Ubud cooking class = market tour + rice fields. Afternoon = cook-and-dine. Same IDR 506,370 shared rate, free pickup — which session fits your itinerary?',
  },
  {
    slug: 'is-a-bali-cooking-class-worth-it',
    metaTitle: 'Is a Bali Cooking Class Worth It?',
    metaDescription:
      'Is a Bali cooking class worth IDR 506,370? What’s included, who should book, and when to skip — honest guide from a village kitchen near Ubud with free pickup.',
  },
  {
    slug: 'what-to-expect-bali-cooking-class',
    metaTitle: 'What to Expect at a Bali Cooking Class',
    metaDescription:
      'What to expect: market tour, spice grinding, 10+ dishes, shared feast. Duration, what to wear, max 8 guests, free hotel pickup — Tumang Bali near Ubud.',
  },
  {
    slug: 'ubud-morning-market-guide',
    metaTitle: 'Ubud Morning Market Guide — Before Class',
    metaDescription:
      'Ubud morning market guide: spices, produce, and what you buy before cooking. Pairs with Tumang Bali’s class — from IDR 506,370, free pickup, max 8 guests.',
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
