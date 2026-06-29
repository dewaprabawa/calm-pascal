import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

// Seeds a first real, planning-intent blog article into the `articles`
// collection. Idempotent: skips if an article with the same slug already
// exists. Run with: npx tsx seedBlog.ts  (or your project's ts runner)

const SLUG = 'what-to-expect-bali-cooking-class'

// Minimal Lexical helpers ----------------------------------------------------
type LexNode = Record<string, unknown>

const text = (value: string, format = 0) => ({
  type: 'text',
  version: 1,
  detail: 0,
  format,
  mode: 'normal',
  style: '',
  text: value,
})

const paragraph = (children: LexNode[]) => ({
  type: 'paragraph',
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children,
})

const heading = (tag: 'h2' | 'h3', value: string) => ({
  type: 'heading',
  tag,
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children: [text(value)],
})

const list = (items: string[], ordered = false) => ({
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

const root = (children: LexNode[]) => ({
  root: {
    type: 'root',
    version: 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children,
  },
})

// Article body --------------------------------------------------------------
const content = root([
  paragraph([
    text(
      "Booking your first cooking class in Bali and not sure what actually happens on the day? Here is exactly what to expect at a traditional Balinese cooking class in Ubud — from the early-morning market to the moment you sit down to eat everything you made.",
    ),
  ]),

  heading('h2', 'A typical day, hour by hour'),
  paragraph([
    text(
      'Most authentic classes in Ubud run for around four to five hours and follow a similar rhythm. At Tumang Bali, the morning looks like this:',
    ),
  ]),
  list([
    'Hotel pickup from the Ubud area and a short ride to the market.',
    'A guided tour of the traditional morning market to choose fresh ingredients.',
    'A scenic walk through the rice fields on the way to the kitchen.',
    'Two hours of hands-on cooking — grinding spice paste and preparing 10+ dishes.',
    'Sitting down together to eat the full meal you cooked.',
  ]),

  heading('h2', 'The market tour: where it really begins'),
  paragraph([
    text(
      'The market is the part most first-timers remember. Your guide walks you past stalls of galangal, turmeric, lemongrass, palm sugar, fresh tofu and tempeh, banana leaves and bird’s-eye chillies, explaining what each ingredient does in Balinese cooking. It is also a genuine slice of daily Ubud life that most visitors never see.',
    ),
  ]),

  heading('h2', 'What you will cook'),
  paragraph([
    text(
      'The heart of every dish is the Base Genep — the complete Balinese spice paste you grind by hand. From there you typically prepare a spread that may include chicken or tofu satay, pepes (fish or tofu steamed in banana leaf), sayur urap, a curry, sambal matah, and a coconut-pandan dessert called dadar gulung. Vegetarian and vegan guests cook a full plant-based version of the menu.',
    ),
  ]),

  heading('h2', 'What to wear and bring'),
  list([
    'Comfortable, breathable clothing — kitchens in Bali are warm.',
    'Closed or comfortable shoes for the market and rice-field walk.',
    'A hat and sunscreen for the outdoor portions of the morning.',
    'An appetite — you will eat a large meal at the end, so go easy on breakfast.',
  ]),

  heading('h2', 'Frequently asked practical questions'),
  paragraph([
    text(
      'Do you need cooking experience? No — classes are designed for complete beginners, with chefs guiding every step. Is hotel pickup included? Within the Ubud area, yes. Can dietary needs be accommodated? Vegetarian, vegan and most allergies are easily handled when you mention them at booking. Do you take the recipes home? Yes — guests receive a recipe book covering the dishes they cooked.',
    ),
  ]),

  heading('h2', 'Ready to experience it yourself?'),
  paragraph([
    text(
      'A Balinese cooking class is one of the most rewarding things to do in Ubud — equal parts food, culture and a genuinely good day out. If you are planning your trip, book early, as small-group classes fill up quickly in high season.',
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

  // Upload a featured image from the existing public assets
  const imgPath = path.resolve(__dirname, 'public', 'images', 'blog', 'what-to-expect.jpg')
  let featuredImageId: string | number | undefined
  if (fs.existsSync(imgPath)) {
    const stat = fs.statSync(imgPath)
    const media = await payload.create({
      collection: 'media',
      data: { alt: 'Guests at a Balinese cooking class in Ubud' },
      file: {
        data: fs.readFileSync(imgPath),
        mimetype: 'image/jpeg',
        name: 'blog-what-to-expect.jpg',
        size: stat.size,
      },
    })
    featuredImageId = media.id
  } else {
    console.warn('Featured image not found; aborting so the required field is not left empty.')
    process.exit(1)
  }

  await payload.create({
    collection: 'articles',
    data: {
      title: 'What to Expect at a Bali Cooking Class (Ubud First-Timer’s Guide)',
      slug: SLUG,
      status: 'published',
      publishedDate: new Date().toISOString(),
      author: 'Tumang Bali Team',
      featuredImage: featuredImageId,
      excerpt:
        'Booking your first cooking class in Ubud? Here is exactly what to expect — the market tour, the dishes you cook, what to wear, and answers to the most common questions.',
      content: content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
      meta: {
        title: 'What to Expect at a Bali Cooking Class | Ubud First-Timer’s Guide',
        description:
          'A first-timer’s guide to a Bali cooking class in Ubud: the market tour, rice-field walk, dishes you cook, what to wear and bring, and common questions answered.',
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
