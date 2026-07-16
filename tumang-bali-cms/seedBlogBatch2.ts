import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

// Seeds calendar posts #4 and #5 into the `articles` collection.
// Idempotent: skips any slug that already exists.
// Run with: npx tsx seedBlogBatch2.ts

// --- Minimal Lexical helpers ------------------------------------------------
type LexNode = Record<string, unknown>

const text = (value: string, format = 0): LexNode => ({
  type: 'text',
  version: 1,
  detail: 0,
  format,
  mode: 'normal',
  style: '',
  text: value,
})

const link = (value: string, url: string): LexNode => ({
  type: 'link',
  version: 2,
  fields: { url, newTab: false, linkType: 'custom' },
  direction: 'ltr',
  format: '',
  indent: 0,
  children: [text(value)],
})

const paragraph = (children: LexNode[]): LexNode => ({
  type: 'paragraph',
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children,
})

const heading = (tag: 'h2' | 'h3', value: string): LexNode => ({
  type: 'heading',
  tag,
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children: [text(value)],
})

const list = (items: string[], ordered = false): LexNode => ({
  type: 'list',
  version: 1,
  listType: ordered ? 'number' : 'bullet',
  start: 1,
  tag: ordered ? 'ol' : 'ul',
  direction: 'ltr',
  format: '',
  indent: 0,
  children: items.map((it, i) => ({
    type: 'listitem',
    version: 1,
    value: i + 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children: [text(it)],
  })),
})

const root = (children: LexNode[]): LexNode => ({
  root: {
    type: 'root',
    version: 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children,
  },
})

// --- Article definitions ----------------------------------------------------
type ArticleDef = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  content: LexNode
}

const articles: ArticleDef[] = [
  {
    slug: 'sambal-matah-recipe',
    title: 'Sambal Matah: The Raw Balinese Sambal Recipe',
    excerpt:
      'Sambal matah is Bali’s famous raw shallot-and-lemongrass sambal — bright, fresh and fiery. Here’s the authentic recipe we teach in our Ubud classes.',
    metaTitle: 'Sambal Matah Recipe — Raw Balinese Sambal | Tumang Bali',
    metaDescription:
      'Make authentic sambal matah, Bali’s raw shallot-and-lemongrass sambal. Simple ingredients, step-by-step method and tips from an Ubud cooking class.',
    image: 'blog/sambal-matah.jpg',
    imageAlt: 'Fresh shallots, lemongrass and chilli for making Balinese sambal matah',
    content: root([
      paragraph([
        text(
          'Of all the sambals in Indonesia, sambal matah is the one visitors fall for in Bali. “Matah” means raw — there’s no cooking, just finely sliced aromatics dressed in hot coconut oil and lime. It’s bright, crunchy, fragrant and addictive, and it takes minutes. Here’s the version we teach in class.',
        ),
      ]),
      heading('h2', 'Ingredients'),
      list([
        'Shallots — 10, very thinly sliced',
        'Lemongrass — 2 stalks, tender white part only, finely sliced',
        'Bird’s-eye chillies — 5, thinly sliced (adjust to taste)',
        'Kaffir lime leaves — 4, central rib removed, very finely shredded',
        'Garlic — 2 cloves, minced (optional)',
        'Shrimp paste (terasi) — ½ tsp, toasted (omit for vegan)',
        'Coconut oil — 4 tbsp',
        'Lime juice — from 1 lime, plus salt to taste',
      ]),
      heading('h2', 'Method'),
      list(
        [
          'Combine the sliced shallots, lemongrass, chillies, lime leaves and garlic in a bowl.',
          'Heat the coconut oil until just hot, then stir in the toasted shrimp paste until dissolved.',
          'Pour the warm oil over the aromatics and toss well — the heat lightly softens the edges without cooking them.',
          'Finish with lime juice and salt. Taste and adjust. Serve at room temperature.',
        ],
        true,
      ),
      heading('h2', 'Tips for the best sambal matah'),
      paragraph([
        text(
          'Slice everything as thinly as you can — texture is everything here. Use only the tender lower part of the lemongrass, and make it fresh; sambal matah is best within an hour or two of mixing. For a vegan version, simply leave out the shrimp paste and add a pinch more salt.',
        ),
      ]),
      heading('h2', 'What to serve it with'),
      paragraph([
        text('Sambal matah is brilliant with grilled fish, '),
        link('chicken or tempe satay', '/blog/dishes-you-cook-balinese-cooking-class'),
        text(', rice, or simply spooned over anything that needs a lift. It’s a staple of our '),
        link('vegetarian cooking class', '/vegetarian-cooking-class-ubud'),
        text(' too. Want to make it alongside a full Balinese spread? Join a '),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' in Ubud.'),
      ]),
    ]),
  },
  {
    slug: 'vegetarian-guide-eating-ubud',
    title: 'A Vegetarian’s Guide to Eating in Ubud',
    excerpt:
      'Ubud is one of the easiest places in Asia to eat vegetarian. Here’s what to order, the dishes to know, and how to enjoy plant-based Balinese food.',
    metaTitle: 'Vegetarian Guide to Eating in Ubud | Tumang Bali',
    metaDescription:
      'A vegetarian’s guide to eating in Ubud, Bali — the plant-based Balinese dishes to know, what to order, and how to cook them yourself in a class.',
    image: 'blog/vegetarian-ubud.jpg',
    imageAlt: 'Plant-based Balinese dishes on a table in Ubud',
    content: root([
      paragraph([
        text(
          'Ubud is a dream for vegetarians and vegans. Between its yoga-and-wellness culture and a local cuisine that leans heavily on vegetables, tofu, tempeh and coconut, eating plant-based here is easy and delicious. Here’s how to do it well.',
        ),
      ]),
      heading('h2', 'Why Balinese food suits vegetarians'),
      paragraph([
        text(
          'Traditional Balinese home cooking uses meat sparingly. Many everyday dishes are naturally vegetable-forward, built on the same Base Genep spice paste that flavours everything else. That means you’re not eating a compromise — you’re eating the real cuisine.',
        ),
      ]),
      heading('h2', 'Balinese vegetarian dishes to know'),
      list([
        'Tempe Manis — sweet, sticky fried tempeh in palm sugar and kecap manis.',
        'Sayur Urap — steamed vegetables in toasted spiced coconut.',
        'Kare Tahu — tofu in a fragrant coconut curry.',
        'Tofu Pepes — tofu and mushroom steamed in banana leaf.',
        'Gado-gado — vegetables with peanut sauce (found across Indonesia).',
        'Sambal Matah — the raw sambal; ask for it without shrimp paste.',
      ]),
      paragraph([
        text('Most of these you can learn to make yourself — see our '),
        link('recipe for sambal matah', '/blog/sambal-matah-recipe'),
        text(' to start.'),
      ]),
      heading('h2', 'Tips for ordering as a vegan'),
      paragraph([
        text(
          'Two ingredients to watch for: terasi (shrimp paste), which hides in many sambals and pastes, and egg in some fried rice. A simple “tanpa terasi, tanpa telur” (without shrimp paste, without egg) goes a long way. Most warungs and restaurants in Ubud are very used to the request.',
        ),
      ]),
      heading('h2', 'Cook it yourself'),
      paragraph([
        text(
          'The best souvenir from Ubud is knowing how to recreate the food at home. Our ',
        ),
        link('vegetarian cooking class in Ubud', '/vegetarian-cooking-class-ubud'),
        text(
          ' is a complete plant-based menu — market tour included — and we can make the whole class vegan on request. Curious what a class is like first? Read ',
        ),
        link('what to expect at a Bali cooking class', '/blog/what-to-expect-bali-cooking-class'),
        text('.'),
      ]),
    ]),
  },
]

async function seed() {
  const payload = await getPayload({ config: configPromise })
  let created = 0
  let skipped = 0

  for (const art of articles) {
    const existing = await payload.find({
      collection: 'articles',
      where: { slug: { equals: art.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`Skipping "${art.slug}" — already exists.`)
      skipped++
      continue
    }

    const imgPath = path.resolve(__dirname, 'public', 'images', art.image)
    if (!fs.existsSync(imgPath)) {
      console.warn(`Image not found for "${art.slug}" (${imgPath}) — skipping to keep required field valid.`)
      skipped++
      continue
    }
    const stat = fs.statSync(imgPath)
    const media = await payload.create({
      collection: 'media',
      data: { alt: art.imageAlt },
      file: {
        data: fs.readFileSync(imgPath),
        mimetype: 'image/jpeg',
        name: `blog-${art.slug}.jpg`,
        size: stat.size,
      },
    })

    await payload.create({
      collection: 'articles',
      data: {
        title: art.title,
        slug: art.slug,
        status: 'published',
        publishedDate: new Date().toISOString(),
        author: 'Tumang Bali Team',
        featuredImage: media.id,
        excerpt: art.excerpt,
        content: art.content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
        meta: { title: art.metaTitle, description: art.metaDescription },
      },
    })
    console.log(`Created "${art.slug}".`)
    created++
  }

  console.log(`Done. Created ${created}, skipped ${skipped}.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
