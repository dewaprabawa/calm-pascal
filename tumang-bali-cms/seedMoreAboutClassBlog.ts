import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

const SLUG = 'more-about-our-cooking-class'

// --- Lexical helpers --------------------------------------------------------
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

// --- Seed function ----------------------------------------------------------
async function seed() {
  const payload = await getPayload({ config: configPromise })

  // Check if article already exists
  const existing = await payload.find({
    collection: 'articles',
    where: { slug: { equals: SLUG } },
    limit: 1,
  })
  if (existing.docs.length > 0) {
    console.log(`Article "${SLUG}" already exists — skipping.`)
    process.exit(0)
  }

  // Upload image
  const imgPath = path.resolve(__dirname, 'public', 'images', 'blog', 'couples-cooking-class.webp')
  if (!fs.existsSync(imgPath)) {
    console.error(`Image not found at ${imgPath}. Aborting.`)
    process.exit(1)
  }

  const stat = fs.statSync(imgPath)
  const media = await payload.create({
    collection: 'media',
    data: { alt: 'A happy couple cooking together in an open-air Balinese kitchen compound' },
    file: {
      data: fs.readFileSync(imgPath),
      mimetype: 'image/webp',
      name: 'couples-cooking-class.webp',
      size: stat.size,
    },
  })
  console.log(`Uploaded media "couples-cooking-class.webp" with ID: ${media.id}`)

  // Build the article content
  const content = root([
    paragraph([
      text("Welcome to the second part of our complete guide! If you're ready to book your cooking class in Ubud, you likely have a few specific questions. Here is everything else you need to know to make the perfect choice."),
    ]),

    heading('h2', 'Is This Class Good for Couples?'),
    paragraph([
      text("Yes, it’s actually one of the most popular activities for couples!"),
    ]),
    paragraph([
      text("Unlike a stuffy restaurant dinner, a cooking class is interactive and fun. You’ll be mixing spices, laughing when a spice gets in your eye, and learning each other's secrets. It’s a fantastic way to bond and create a "),
      text("memory", 2),
      text(" (and a delicious meal) together. Many couples tell us it was the highlight of their honeymoon or anniversary trip."),
    ]),

    heading('h2', 'What If I Have a Group or Family?'),
    paragraph([
      text("We welcome groups of all sizes!"),
    ]),
    list([
      "Private Group: If you are 6 or more people (family or friends), we can arrange a private class just for you. You'll have the whole kitchen and the chef to yourselves.",
      "Family Friendly: We love kids! Just let us know the ages of the children. We can adjust the spice levels and give them simpler tasks (like rolling dough or folding spring rolls) so everyone feels involved."
    ]),

    heading('h2', 'How Much Does It Cost?'),
    paragraph([
      text("We believe in honest, fair pricing."),
    ]),
    list([
      "The standard price covers the hotel pickup, the full market tour, the cooking lesson, the lunch/dinner, the recipe book, and the drop-off.",
      "Why it's worth it: You aren't just paying for food; you are paying for a 4-5 hour cultural immersion. Plus, since we handle the transportation and ingredients, it saves you the hassle and cost of hiring your own driver or buying hard-to-find ingredients.",
      "Note: Please check our booking page for the most up-to-date pricing in IDR and USD."
    ]),

    heading('h2', 'What Do People Say? (The Reviews)'),
    paragraph([
      text("We don't just say we're good—let the guests do the talking!"),
    ]),
    list([
      "\"Wayan is the best!\" is our most common comment. Guests love his sense of humor and his calm, patient teaching style.",
      "\"The market tour was the highlight.\" Many travelers have only seen Ubud from the back of a scooter; seeing the local market is a rare treat.",
      "\"Better than a resort class.\" Several guests who took a class in their resort in Nusa Dua told us ours was much more authentic and much more fun."
    ]),

    heading('h2', 'What Exactly is \"All-Inclusive\"?'),
    paragraph([
      text("We try to remove all the stress so you can just show up. Our \"all-inclusive\" price covers:"),
    ]),
    list([
      "Pickup & Drop-off from your hotel in the Ubud area.",
      "The Market Tour (entry is free, but guides are part of the price).",
      "All Ingredients & Equipment.",
      "The Lunch/Dinner (you get to eat everything you cooked!).",
      "The Recipe Book (to take home)."
    ]),
    paragraph([
      text("Note: We do not include alcoholic beverages or personal shopping in the market, though we are happy to advise you!"),
    ]),

    heading('h2', 'How Do I Book?'),
    paragraph([
      text("The easiest way is to book online via our \"Book Now\" button. This guarantees your spot. Since we only run a few classes a day (to keep groups small), we do recommend booking at least 24 hours in advance."),
    ]),
  ])

  // Create article in Payload
  await payload.create({
    collection: 'articles',
    data: {
      title: 'More About Our Class: Couples, Groups, Prices, and Reviews',
      slug: SLUG,
      status: 'published',
      publishedDate: new Date('2026-07-04').toISOString(),
      author: 'Chef Wayan',
      featuredImage: media.id,
      excerpt: "Ready to book your cooking class in Ubud? Here is everything else you need to know about pricing, group bookings, couples classes, reviews, and what is included.",
      content: content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
      meta: {
        title: 'Cooking Class Ubud: Couples, Groups, Prices, & Reviews | Tumang Bali',
        description: 'Ready to book your cooking class in Ubud? Here is everything else you need to know about pricing, group bookings, couples classes, reviews, and what is included.',
      },
    },
  })
  console.log(`Seeded article "${SLUG}" successfully.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
