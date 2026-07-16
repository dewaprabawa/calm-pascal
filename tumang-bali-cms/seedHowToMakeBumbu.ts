import { getPayload } from 'payload'
import configPromise from './src/payload.config'

// Seeds the "How to Make Bumbu Bali" blog article into the `articles` collection.
// Idempotent: skips if an article with the same slug already exists.
// Run with: npx tsx seedBumbuBlog.ts

const SLUG = 'how-to-make-bumbu-bali'

// Minimal Lexical helpers
const text = (value: string, format = 0) => ({
  type: 'text', version: 1, detail: 0, format, mode: 'normal', style: '', text: value,
})
const paragraph = (children: any[]) => ({
  type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children,
})
const heading = (tag: 'h2' | 'h3', value: string) => ({
  type: 'heading', tag, version: 1, direction: 'ltr', format: '', indent: 0,
  children: [text(value)],
})
const list = (items: string[], ordered = false) => ({
  type: 'list', version: 1, listType: ordered ? 'number' : 'bullet',
  start: 1, tag: ordered ? 'ol' : 'ul', direction: 'ltr', format: '', indent: 0,
  children: items.map((it, i) => ({
    type: 'listitem', version: 1, value: i + 1, direction: 'ltr', format: '', indent: 0,
    children: [text(it)],
  })),
})
const root = (children: any[]) => ({
  root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children },
})

const content = root([
  paragraph([
    text(
      'Bumbu Bali — the Balinese spice paste — is the foundation of nearly every savoury dish in Balinese cuisine. It is what transforms ordinary ingredients into the complex, aromatic, deeply flavoured food that makes a Balinese cooking class so rewarding. In this guide, we explain what bumbu is, what goes into it, and how to make it the authentic way.',
    ),
  ]),

  heading('h2', 'What is Bumbu Bali?'),
  paragraph([
    text(
      'Bumbu Bali (also called Base Genep or Base Gede) is a complete spice paste made from a combination of fresh aromatics — shallots, garlic, galangal, turmeric, ginger, lemongrass, shrimp paste (terasi), candlenuts, and bird\'s-eye chillies — ground together into a thick, fragrant paste. This paste is the first thing prepared in every Balinese kitchen and forms the flavour base for almost every dish: sate, pepes, betutu, sayur urap, and more.',
    ),
  ]),

  heading('h2', 'What goes into authentic Bumbu Bali?'),
  paragraph([
    text(
      'The exact combination of ingredients varies by region and by family, but a traditional Base Genep includes:',
    ),
  ]),
  list([
    'Shallots — the sweet, aromatic base of the paste.',
    'Garlic — adds depth and pungency.',
    'Galangal — a rhizome with a sharp, citrusy flavour unique to Southeast Asian cooking.',
    'Turmeric — gives Balinese dishes their distinctive golden-yellow colour and earthy flavour.',
    'Ginger — adds warmth and a slight bite.',
    'Lemongrass — provides a bright, citrusy aroma.',
    'Shrimp paste (terasi) — fermented shrimp that adds umami depth (vegetarian versions use soy or miso).',
    'Candlenuts — toasted and ground to create a creamy, rich texture.',
    'Bird\'s-eye chillies — for heat; the amount is adjusted to taste.',
    'Salt and palm sugar — to balance the flavours.',
  ]),

  heading('h2', 'How to make Bumbu Bali the authentic way'),
  paragraph([
    text(
      'There are two ways to make bumbu: with a blender (quick but less aromatic) or with a traditional stone mortar and pestle (cobek). The authentic way is always the cobek, and it makes a noticeable difference in flavour.',
    ),
  ]),
  heading('h3', 'Step 1: Prepare the ingredients'),
  paragraph([
    text(
      'Peel and clean all aromatics. Toast the shrimp paste briefly on a dry pan until fragrant. Lightly toast the candlenuts until golden. This step releases the essential oils in each ingredient and is essential for a well-developed flavour.',
    ),
  ]),
  heading('h3', 'Step 2: Grind the aromatics'),
  paragraph([
    text(
      'Using a stone mortar (cobek) and pestle (ulekan), start by grinding the harder ingredients — galangal, ginger, and turmeric — into a rough paste. Then add the shallots, garlic, and chillies. Finally, add the toasted shrimp paste, candlenuts, salt, and palm sugar. Grind until you have a smooth, even paste.',
    ),
  ]),
  heading('h3', 'Step 3: Cook the paste'),
  paragraph([
    text(
      'Heat a little oil in a pan and fry the ground paste for 5–10 minutes until it darkens slightly and becomes fragrant. This step, called "menggoreng bumbu," is what unlocks the full flavour and aroma of the paste. Once cooked, your Base Genep is ready to use in any Balinese dish.',
    ),
  ]),

  heading('h2', 'Why hand-grinding makes a difference'),
  paragraph([
    text(
      'When you blend bumbu in a food processor, the blades generate heat that can destroy some of the more delicate aromatic compounds. A stone mortar works at room temperature, preserving those flavours. The friction of hand-grinding also helps release oils from the ingredients more evenly, resulting in a paste that is more aromatic and flavourful than a blended version.',
    ),
  ]),

  heading('h2', 'Where to learn more — our cooking class'),
  paragraph([
    text(
      'The best way to learn to make authentic Bumbu Bali is with a local Balinese chef. At our cooking class in Tumang village, you will grind your own spice paste by hand, learn the story behind each ingredient, and use it to cook a full menu of traditional Balinese dishes. We pick up guests from their Ubud hotel, take them to the morning market, and walk through the rice paddies to our village kitchen. Classes start at $35 per person and include everything.',
    ),
  ]),
])

async function seed() {
  const payload = await getPayload({ config: configPromise })

  const existing = await payload.find({
    collection: 'articles',
    where: { slug: { equals: SLUG } },
    limit: 1,
  })
  if (existing.docs.length > 0) {
    console.log(`Article "${SLUG}" already exists — skipping.`)
    process.exit(0)
  }

  await payload.create({
    collection: 'articles',
    data: {
      title: 'How to Make Bumbu Bali — The Authentic Balinese Spice Paste',
      slug: SLUG,
      status: 'published',
      publishedDate: new Date().toISOString(),
      author: 'Tumang Bali Team',
      excerpt:
        'Learn how to make authentic Bumbu Bali (Base Genep) spice paste — the foundation of every savoury Balinese dish. Includes the full recipe, the traditional stone mortar method, and why hand-grinding makes a difference.',
      content: content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
      meta: {
        title: 'How to Make Bumbu Bali — Authentic Balinese Spice Paste Recipe',
        description:
          'Learn how to make authentic Bumbu Bali (Base Genep) spice paste — the foundation of every savoury Balinese dish. Includes the full recipe and traditional stone mortar method.',
      },
    },
  })

  console.log(`Seeded article "${SLUG}".`)
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
