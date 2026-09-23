/**
 * Updates meta titles/descriptions for high-impression, low-CTR pages in Search Console.
 * Idempotent — safe to re-run. Also applied by the SEO maintenance cron via
 * `runMetaSeedBatch` in `src/lib/articleMetaSeedRunner.ts`.
 *
 * Run: npx tsx --env-file=.env seedSeoMetaQuickWins.ts
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

const META_UPDATES: { slug: string; metaTitle: string; metaDescription: string }[] = [
  // P0 — impression leaders (CTR leak)
  {
    slug: 'how-to-make-bumbu-bali',
    metaTitle: 'Bumbu Bali Recipe — Make Balinese Spice Paste at Home',
    metaDescription:
      'Bumbu Bali (base genep) recipe: ingredients, stone-mortar tips, and how we cook with it in class. Step-by-step paste — then book an Ubud hands-on class with free pickup.',
  },
  {
    slug: 'dadar-gulung-balinese-dessert-recipe',
    metaTitle: 'Dadar Gulung Recipe — Pandan Coconut Crepe (Easy)',
    metaDescription:
      'Dadar gulung recipe: green pandan crepe + sweet coconut filling. Exact home steps from our Ubud kitchen. Cook it live in class — free hotel pickup included.',
  },
  {
    slug: 'sambal-matah-recipe',
    metaTitle: 'Sambal Matah Recipe — Raw Balinese Chili Salsa',
    metaDescription:
      'Sambal matah recipe in 10 minutes: shallot, lemongrass, chili, coconut oil. Authentic Balinese salsa from Tumang Bali Ubud — cook it hands-on in class.',
  },
  // P1 — extend coverage from GSC audit
  {
    slug: 'ayam-betutu-recipe-bali',
    metaTitle: 'Ayam Betutu Recipe — Balinese Spiced Chicken in Banana Leaf',
    metaDescription:
      'Ayam betutu recipe: chicken in base genep, wrapped in banana leaf. Home method plus tips from our Ubud cooking class. Book a class to cook Balinese classics.',
  },
  {
    slug: 'what-is-the-subak-system-bali',
    metaTitle: 'What Is the Subak System in Bali? Rice Terraces Explained',
    metaDescription:
      'What is Bali’s subak system? UNESCO rice-terrace irrigation, how villages share water, and why it still shapes food culture near Ubud — clear visitor guide.',
  },
  {
    slug: 'best-time-to-visit-bali-ubud',
    metaTitle: 'Best Time to Visit Bali & Ubud 2026 — Month-by-Month Guide',
    metaDescription:
      'Best time to visit Bali and Ubud: dry vs wet season, crowds, prices, and month-by-month tips. Plan weather, festivals, and when cooking classes run year-round.',
  },
  // Existing commercial / supporting posts
  {
    slug: 'cooking-class-bali-faqs',
    metaTitle: 'Bali Cooking Class FAQs — Price, Pickup, What to Wear',
    metaDescription:
      'Bali cooking class FAQs: shared IDR 506,370 (2+) / IDR 616,032 (1), private IDR 633,090. Free Ubud pickup, max 8 guests, vegetarian options, what to wear, how long it takes.',
  },
  {
    slug: 'best-cooking-class-in-ubud',
    metaTitle: 'Best Cooking Class in Ubud 2026 — Market Tour & 10+ Dishes',
    metaDescription:
      'Best cooking class in Ubud: compare market tour, group size, price, and hands-on cooking. Tumang Bali — from IDR 506,370, max 8 guests, free pickup, TripAdvisor favorite.',
  },
  {
    slug: 'best-cooking-class-in-bali',
    metaTitle: 'Best Cooking Class in Bali 2026 — Authentic Ubud Experience',
    metaDescription:
      'Best cooking class in Bali: real market tour, village kitchen near Ubud, 10+ dishes. From IDR 506,370 with free hotel pickup — why travelers pick Tumang Bali.',
  },
  {
    slug: 'ubud-cooking-class-price',
    metaTitle: 'Ubud Cooking Class Price 2026 — Shared & Private Rates',
    metaDescription:
      'Ubud cooking class price 2026: shared IDR 506,370 (2+) / IDR 616,032 (1), private IDR 633,090. Includes market tour, 10+ dishes, recipes, and free hotel pickup near Ubud.',
  },
  {
    slug: 'morning-vs-afternoon-tours-bali',
    metaTitle: 'Morning vs Afternoon Cooking Class Ubud — Which to Book?',
    metaDescription:
      'Morning Ubud cooking class includes market tour and rice-field walk. Afternoon is cook-and-dine. Compare times, menus, and pickup — from IDR 506,370.',
  },
  {
    slug: 'is-a-bali-cooking-class-worth-it',
    metaTitle: 'Is a Bali Cooking Class Worth It? Honest 2026 Answer',
    metaDescription:
      'Is a Bali cooking class worth it? Cost vs experience at IDR 506,370, who should book, and when to skip — honest guide from Tumang Bali near Ubud.',
  },
  {
    slug: 'what-to-expect-bali-cooking-class',
    metaTitle: 'What to Expect at a Bali Cooking Class — Full Day Guide',
    metaDescription:
      'What to expect at a Bali cooking class: market tour, spice grinding, 10+ dishes, shared feast. Duration, what to wear, group size, and free hotel pickup.',
  },
  {
    slug: 'ubud-morning-market-guide',
    metaTitle: 'Ubud Morning Market Guide — Before Your Cooking Class',
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
