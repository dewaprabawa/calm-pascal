import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

// Seeds the next batch of blog articles (calendar posts #2 and #3) into the
// `articles` collection. Idempotent: skips any slug that already exists.
// Run with: npx tsx seedBlogBatch.ts

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

// An inline link node (for internal links inside paragraphs)
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
    slug: 'dishes-you-cook-balinese-cooking-class',
    title: 'The 10 Dishes You’ll Cook in a Balinese Cooking Class',
    excerpt:
      'From sate ayam to dadar gulung — a dish-by-dish look at the traditional Balinese food you’ll actually make in a hands-on Ubud cooking class.',
    metaTitle: '10 Dishes You Cook in a Balinese Cooking Class | Tumang Bali',
    metaDescription:
      'A dish-by-dish guide to the traditional Balinese food you cook in an Ubud cooking class — satay, pepes, sayur urap, sambal matah, dadar gulung and more.',
    image: 'gallery-satay.jpg',
    imageAlt: 'Traditional Balinese dishes prepared during a cooking class in Ubud',
    content: root([
      paragraph([
        text(
          'Wondering what you actually cook in a Balinese cooking class? At Tumang Bali you prepare a full traditional spread — usually ten or more dishes — from the spice paste up. Here’s the menu, dish by dish, so you know exactly what to look forward to.',
        ),
      ]),
      heading('h2', 'It all starts with Base Genep'),
      paragraph([
        text(
          'Before any dish comes together, you grind the Base Genep — the complete Balinese spice paste of shallots, garlic, galangal, turmeric, ginger, chilli, candlenut and more. Master this one paste and you can recreate Balinese flavours in any kitchen. We cover it in depth in our ',
        ),
        link('guide to making Base Genep', '/blog/how-to-make-base-genep'),
        text('.'),
      ]),
      heading('h2', 'The savoury dishes'),
      list([
        'Sate Ayam — chicken satay grilled over coconut husks with peanut sauce.',
        'Pepes Ikan — fish steamed in banana leaf with lemon basil and spice paste.',
        'Sayur Urap — vegetables tossed in toasted spiced grated coconut.',
        'Kare Ayam — fragrant Balinese chicken curry with coconut milk.',
        'Nasi Goreng or Nasi Kuning — fried rice or turmeric yellow rice.',
        'Pergedel Jagung — crisp sweetcorn fritters.',
        'Sambal Matah — the fresh, raw shallot-and-lemongrass sambal.',
      ]),
      heading('h2', 'The vegetarian version'),
      paragraph([
        text(
          'Every dish has a plant-based counterpart — tempe manis, kare tahu, tofu pepes and sate tempe — so vegetarians cook a complete menu, not a side adaptation. See our ',
        ),
        link('vegetarian cooking class', '/vegetarian-cooking-class-ubud'),
        text(' for the full plant-based spread.'),
      ]),
      heading('h2', 'And something sweet'),
      paragraph([
        text(
          'You finish with Dadar Gulung — a pandan crêpe rolled around sweet coconut and palm sugar. It’s the perfect end to the meal and a guest favourite.',
        ),
      ]),
      heading('h2', 'Cook them yourself'),
      paragraph([
        text('The best way to learn these dishes is hands-on. Our '),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' starts at the Ubud market and ends with you eating everything above, or pick the '),
        link('half-day class', '/half-day-cooking-class-bali'),
        text(' if you’re short on time.'),
      ]),
    ]),
  },
  {
    slug: 'how-to-make-base-genep',
    title: 'How to Make Base Genep (The Balinese Spice Paste Behind Every Dish)',
    excerpt:
      'Base Genep is the foundation of Balinese cooking. Here’s what goes into it, how to make it, and how to use it — the recipe we teach in every class.',
    metaTitle: 'How to Make Base Genep — Balinese Spice Paste Recipe | Tumang Bali',
    metaDescription:
      'Learn to make Base Genep, the complete Balinese spice paste behind every dish. Ingredients, step-by-step method, and tips from an Ubud cooking class.',
    image: 'gallery-chopping.jpg',
    imageAlt: 'Fresh spices and aromatics for making Balinese Base Genep spice paste',
    content: root([
      paragraph([
        text(
          'If you learn one thing from Balinese cooking, make it Base Genep — the “complete spice” paste that forms the base of nearly every savoury dish on the island. Get this right and curries, satays and vegetables all fall into place. Here’s how we make it in class.',
        ),
      ]),
      heading('h2', 'What is Base Genep?'),
      paragraph([
        text(
          'Base Genep (literally “complete seasoning”) is a wet spice paste of aromatics, roots and chillies, fried gently until fragrant. Unlike a quick stir-fry paste, it’s cooked slowly so the raw edge disappears and the flavours marry into something deep and savoury.',
        ),
      ]),
      heading('h2', 'Ingredients'),
      list([
        'Shallots — 10, peeled',
        'Garlic — 6 cloves',
        'Red chillies — 4 (adjust to taste)',
        'Fresh turmeric — a 3 cm piece (or 1 tsp ground)',
        'Galangal — a 3 cm piece',
        'Ginger — a 2 cm piece',
        'Candlenuts — 4 (or macadamia as a substitute)',
        'Lemongrass — 2 stalks, bruised',
        'Coriander seeds — 1 tsp, toasted',
        'Shrimp paste (terasi) — 1 tsp (omit for vegan)',
        'Coconut oil — 4 tbsp, plus salt and palm sugar to taste',
      ]),
      heading('h2', 'Method'),
      list(
        [
          'Roughly chop the shallots, garlic, chillies, turmeric, galangal, ginger and candlenuts.',
          'Pound everything (except the oil and lemongrass) into a coarse paste using a mortar and pestle — or pulse in a blender with a splash of oil.',
          'Heat the coconut oil in a pan over low-medium heat. Add the paste and the bruised lemongrass.',
          'Fry gently, stirring often, for 15–20 minutes until the paste darkens, the oil separates, and it smells rich and toasty.',
          'Season with salt and a little palm sugar. Cool and store.',
        ],
        true,
      ),
      heading('h2', 'How to use and store it'),
      paragraph([
        text(
          'Use Base Genep as the foundation for curries, sautéed vegetables, marinades for satay, and pepes. It keeps in the fridge for up to a week, or freeze it in small portions for months.',
        ),
      ]),
      heading('h2', 'Learn it hands-on'),
      paragraph([
        text('Grinding Base Genep by hand is the heart of every one of our classes. Join a '),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' to source the ingredients yourself, or read about '),
        link('the dishes you’ll cook with it', '/blog/dishes-you-cook-balinese-cooking-class'),
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
