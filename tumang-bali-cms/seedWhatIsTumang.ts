import { getPayload } from 'payload'
import configPromise from './src/payload.config'

// Seeds the "What is Tumang Bali?" blog article into the `articles` collection.
// Idempotent: skips if an article with the same slug already exists.
// Run with: npx tsx seedWhatIsTumang.ts

const SLUG = 'what-is-tumang-bali'

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
      'Tumang Bali refers to the village of Tumang in Central Bali — a traditional Balinese village that is home to one of the island\'s most authentic cooking class experiences. Tumang sits in Kabupaten Gianyar (Gianyar Regency), approximately 30 minutes north of Ubud\'s cultural centre and 45 minutes from Ngurah Rai International Airport. If you\'ve been searching for "what is Tumang Bali," you\'ve likely heard about our cooking class. But the village itself is worth understanding: it is a real working community, not a tourist attraction.',
    ),
  ]),

  heading('h2', 'Where is Tumang Village located?'),
  paragraph([
    text(
      'Tumang is located in the Central Bali region, between the tourist hub of Ubud and the famous Tegallalang Rice Terraces. The village sits at an elevation of around 300 metres above sea level, which gives it a slightly cooler climate than the coastal areas and beautiful views of the surrounding rice paddies and distant mountains. Its location makes it easy to reach from most hotels in the Ubud area — and we pick up guests complimentary from anywhere in the Ubud region.',
    ),
  ]),

  heading('h2', 'Why Tumang is the best setting for a cooking class'),
  paragraph([
    text(
      'Not all cooking classes in Bali are held in the same kind of kitchen. Some take place in purpose-built studios in Ubud centre. Others are held in resort spaces that feel polished but impersonal. At Tumang, our kitchen is part of a real Balinese family compound surrounded by rice terraces. This setting shapes the entire experience: you walk through rice paddies and irrigation channels to reach the kitchen, you see families making flower offerings in their front yards, and you eat lunch with a view of the green fields that define Central Bali.',
    ),
  ]),

  heading('h2', 'What Tumang is known for'),
  paragraph([
    text(
      'Most visitors discover Tumang through our cooking class — it is where our morning market tour begins, where the rice-field walk leads to, and where the cooking happens. But the village has several other points of interest:',
    ),
  ]),
  list([
    'Authentic village life — Tumang is a working community where Balinese families maintain daily traditions, including flower offerings and temple ceremonies.',
    'Rice paddy surroundings — the village is surrounded by green terraces managed through the subak irrigation system, a UNESCO-recognised water management tradition.',
    'Proximity to major attractions — the Tegallalang Rice Terraces are 20 minutes away, the Sukawati Art Market is 25 minutes south, and the holy water temple Pura Tirta Empul is about 30 minutes north.',
    'Cooler climate — the elevation gives Tumang a fresher, more comfortable temperature than the hot, humid areas near the coast.',
  ]),

  heading('h2', 'What to expect on a cooking class in Tumang'),
  paragraph([
    text(
      'Our Tumang Bali Cooking Class is a full-day experience that takes you from the early-morning market tour through the rice fields to the village kitchen. You will grind your own spice paste, cook 10+ traditional Balinese dishes, sit down to eat everything you made, and leave with a recipe booklet and a certificate of completion. Classes run daily, and morning sessions include the market tour — the part most guests say is the highlight of their trip.',
    ),
  ]),

  heading('h2', 'Things to do near Tumang village'),
  paragraph([
    text(
      'If you are staying in or near Tumang, the surrounding area has plenty to offer beyond our cooking class:',
    ),
  ]),
  list([
    'Tegallalang Rice Terraces — 20 minutes north, these iconic terraces are one of Bali\'s most photographed sights.',
    'Sukawati Art Market — 25 minutes south, a traditional market for batik, wood carvings, and souvenirs.',
    'Pura Tirta Empul — 30 minutes north, a holy water temple where locals and visitors perform purification rituals.',
    'Ubud centre — 30 minutes south, with its art galleries, monkey forest, restaurants, and night market.',
  ]),

  heading('h2', 'Ready to experience Tumang for yourself?'),
  paragraph([
    text(
      'The best way to learn about Tumang is to experience it. Join us for a cooking class, walk through the rice paddies, taste the food you cooked, and discover what makes this village one of the most authentic places to experience Balinese culture. Book your class today and leave with real skills — and a taste of Bali you will carry home.',
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

  // Use a fallback image from the existing public assets
  const fallbackImage = '/images/gallery-girls.jpg'

  await payload.create({
    collection: 'articles',
    data: {
      title: 'What is Tumang Bali? — The Village Behind Our Famous Cooking Class',
      slug: SLUG,
      status: 'published',
      publishedDate: new Date().toISOString(),
      author: 'Tumang Bali Team',
      excerpt:
        'Tumang Bali refers to the village of Tumang in Central Bali — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the Tumang Bali Cooking Class experience.',
      content: content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
      meta: {
        title: 'What is Tumang Bali? — The Village Behind Our Cooking Class | Tumang Bali',
        description:
          'Tumang Bali refers to the village of Tumang in Central Bali — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the Tumang Bali Cooking Class experience.',
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
