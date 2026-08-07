/**
 * seedComparisonBlog.ts
 * Seeds the "Tumang Bali vs Casa Luna" comparison blog post.
 * Run once: npx tsx seedComparisonBlog.ts
 * Idempotent — skips if slug already exists.
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function main() {
  const payload = await getPayload({ config: configPromise })

  const slug = 'tumang-bali-vs-casa-luna-cooking-class-ubud'

  // Idempotency check
  const existing = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log(`Skipping: article "${slug}" already exists.`)
    process.exit(0)
  }

  await payload.create({
    collection: 'articles',
    data: {
      title: 'Tumang Bali vs Casa Luna: Which Ubud Cooking Class Is Better in 2026?',
      slug,
      status: 'published',
      publishedDate: new Date().toISOString(),
      excerpt:
        'Comparing two of the top cooking classes in Ubud head-to-head: Tumang Bali and Casa Luna. We look at price, inclusions, group size, and experience to help you decide.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              version: 1,
              children: [
                {
                  type: 'text',
                  version: 1,
                  text: 'Planning a cooking class in Ubud? Two names come up again and again: Tumang Bali and Casa Luna. Both are highly rated, both include a market tour (on select sessions), and both teach authentic Balinese recipes. But they are very different experiences — and the right one depends entirely on what you are looking for.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              version: 1,
              children: [{ type: 'text', version: 1, text: 'At a Glance: Tumang Bali vs Casa Luna' }],
            },
            {
              type: 'paragraph',
              version: 1,
              children: [
                {
                  type: 'text',
                  version: 1,
                  text: 'Tumang Bali (IDR 350,000) costs significantly less than Casa Luna (IDR 450,000–650,000) and includes more activities: a rice field walk and a Canang Sari flower offering that Casa Luna does not offer. Tumang Bali also caps at 8 guests versus Casa Luna\'s 12–15, making it the more intimate option.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              version: 1,
              children: [{ type: 'text', version: 1, text: 'Casa Luna\'s Strengths' }],
            },
            {
              type: 'paragraph',
              version: 1,
              children: [
                {
                  type: 'text',
                  version: 1,
                  text: 'Founded in 1992 by Janet DeNeefe, Casa Luna is an institution. If brand legacy matters to you, or if you want a specialized themed class — Twilight Smoked Duck, Ceremonial, or a dedicated Plant-based session — Casa Luna has offerings Tumang Bali does not. Their lush garden setting at the Honeymoon Guesthouse is also beautiful.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              version: 1,
              children: [{ type: 'text', version: 1, text: 'Tumang Bali\'s Strengths' }],
            },
            {
              type: 'paragraph',
              version: 1,
              children: [
                {
                  type: 'text',
                  version: 1,
                  text: 'Tumang Bali packs the most activities into a single session at the lowest price. The rice field walk is genuinely unique — no other leading Ubud class offers it as standard. The flower offering (Canang Sari) adds a layer of cultural depth that goes beyond cooking. And the 10+ dish count means you leave knowing more than just one or two recipes.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              version: 1,
              children: [{ type: 'text', version: 1, text: 'Verdict: Which Should You Book?' }],
            },
            {
              type: 'paragraph',
              version: 1,
              children: [
                {
                  type: 'text',
                  version: 1,
                  text: 'If you want the best value, smallest groups, and the most cultural activities in one session — book Tumang Bali. If you want a prestigious branded school with themed menus and a 30-year heritage — Casa Luna is a fine choice. Either way, you will eat well.',
                },
              ],
            },
            {
              type: 'paragraph',
              version: 1,
              children: [
                {
                  type: 'text',
                  version: 1,
                  text: 'See our full comparison of all Ubud cooking classes — including Paon Bali and Ketut\'s — at our compare page.',
                },
              ],
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      meta: {
        title: 'Tumang Bali vs Casa Luna: Which Ubud Cooking Class Is Better? (2026)',
        description:
          'Head-to-head comparison of Tumang Bali and Casa Luna cooking classes in Ubud. Price, inclusions, group size, and our honest verdict for 2026.',
      },
    },
  })

  console.log('✅ Blog post seeded:', slug)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
