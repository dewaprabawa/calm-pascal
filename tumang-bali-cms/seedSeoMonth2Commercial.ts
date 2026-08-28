/**
 * Month 2 commercial SEO articles — idempotent seed batch.
 * Run via: npx tsx --env-file=.env seedSeoMonth2Commercial.ts
 * Or production: POST /api/seed-seo-articles (included in cron maintenance)
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import { pathToFileURL } from 'url'
import type { ArticleSeedInput } from './src/lib/articleSeedRunner'

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

export const articles: ArticleSeedInput[] = [
  {
    slug: 'vegetarian-cooking-class-ubud-guide',
    title: 'Vegetarian Cooking Class in Ubud — Full Plant-Based Menu 2026',
    excerpt:
      'Looking for a vegetarian cooking class in Ubud? Tumang Bali offers a complete plant-based Balinese menu — not a side salad. Market tour, 10+ dishes, vegan options. From IDR 350K.',
    image: 'blog/cooking-local-family.webp',
    imageAlt: 'Vegetarian cooking class in Ubud — plant-based Balinese dishes prepared in a village kitchen',
    metaTitle: 'Vegetarian Cooking Class Ubud 2026 — Full Plant-Based Menu',
    metaDescription:
      'Book a vegetarian cooking class in Ubud with a full plant-based Balinese menu. Vegan adaptations, market tour, 10+ dishes. IDR 350K. Free hotel pickup.',
    author: 'Made Ayu',
    authorRole: 'Vegetarian Cuisine Specialist',
    authorBio:
      'Made specialises in plant-based Balinese cuisine and traditional desserts at Tumang Bali Cooking Class near Ubud.',
    articleSection: 'Travel Guide',
    keywords: [
      'vegetarian cooking class ubud',
      'vegan cooking class bali',
      'plant based cooking class ubud',
      'vegetarian balinese cooking class',
      'vegan cooking class ubud',
    ],
    faq: [
      {
        question: 'Is there a vegetarian cooking class in Ubud?',
        answer:
          'Yes. At Tumang Bali the entire shared class menu can be cooked vegetarian — tempeh satay, tofu pepes, vegetable kare, sayur urap, sambal matah, and dadar gulung. It is a full plant-based menu, not a meat class with one veg option.',
      },
      {
        question: 'Can vegans join a Ubud cooking class?',
        answer:
          'Yes. Tell us when you book and we adapt every dish — no fish sauce, shrimp paste, or animal stock. Coconut milk, tempeh, tofu, and fresh herbs form the base of the vegan menu.',
      },
      {
        question: 'How much is a vegetarian cooking class in Ubud?',
        answer:
          'Same price as our standard class: IDR 350,000 per person for shared morning or afternoon. Private vegetarian kitchen from IDR 650,000. No surcharge for plant-based menus.',
      },
    ],
    content: root([
      paragraph([
        text('A '),
        text('vegetarian cooking class in Ubud', 1),
        text(' should mean a full Balinese feast — not watching others cook meat while you get a plate of steamed vegetables. At Tumang Bali, plant-based guests cook a complete menu of traditional dishes using tempeh, tofu, coconut, and spice pastes ground from scratch.'),
      ]),
      heading('h2', 'What vegetarians cook in our Ubud class'),
      list([
        'Sup Sayur — fragrant vegetable soup with lemongrass and galangal',
        'Tempe Manis — sweet caramelised tempeh',
        'Sayur Urap — mixed vegetables tossed in spiced grated coconut',
        'Sate Tempe — tempeh skewers with peanut sauce',
        'Tofu Pepes — steamed tofu and mushrooms in banana leaf',
        'Kare Tahu — mild coconut curry with tofu',
        'Nasi Kuning — turmeric coconut rice',
        'Sambal Matah — raw shallot-chili salsa (vegan version without shrimp paste)',
        'Dadar Gulung — pandan coconut crepes for dessert',
      ]),
      heading('h2', 'Vegetarian vs vegan at Tumang Bali'),
      paragraph([
        text('Vegetarian guests get the full plant-based menu by default. Vegans: tell us at booking and we remove shrimp paste, eggs (where used), and honey. See our '),
        link('vegetarian cooking class landing page', '/vegetarian-cooking-class-ubud'),
        text(' for inclusions and booking, or read the broader '),
        link('vegetarian eating guide for Ubud', '/blog/vegetarian-guide-eating-ubud'),
        text('.'),
      ]),
      heading('h2', 'Why book a vegetarian cooking class in Ubud'),
      list([
        'Balinese cuisine is naturally plant-forward — coconut, tempeh, and herbs are everyday staples',
        'You grind Base Genep spice paste yourself — the same foundation as meat dishes',
        'Small groups (max 8) so chefs can adapt every pan for dietary needs',
        'Market tour shows how locals shop for vegetarian ingredients',
        'Same price as the regular shared class — no plant-based surcharge',
      ]),
      heading('h2', 'Price and how to book'),
      paragraph([
        text('Shared vegetarian class: IDR 350,000. Private: IDR 650,000. Free Ubud hotel pickup. Full '),
        link('Ubud cooking class price guide', '/blog/ubud-cooking-class-price'),
        text('. '),
        link('Book your vegetarian cooking class', '/vegetarian-cooking-class-ubud'),
        text(' or '),
        link('reserve online', '/book-your-cooking-class'),
        text('.'),
      ]),
    ]),
  },
  {
    slug: 'morning-cooking-class-ubud-market-tour',
    title: 'Morning Cooking Class in Ubud with Market Tour — Full Guide 2026',
    excerpt:
      'The morning cooking class in Ubud includes a traditional market tour, rice-field walk, and hands-on cooking of 10+ dishes. Best for first-time visitors. From IDR 350K with free pickup.',
    image: 'blog/rice-field-class.webp',
    imageAlt: 'Morning cooking class Ubud market tour — guests shopping for spices before cooking',
    metaTitle: 'Morning Cooking Class Ubud with Market Tour — 2026 Guide',
    metaDescription:
      'Morning cooking class in Ubud: market tour, rice-field walk, 10+ dishes, lunch. 08:30–12:30. IDR 350K. Free hotel pickup. Book Tumang Bali.',
    author: 'Chef Wayan',
    authorRole: 'Head Chef',
    authorBio:
      'Chef Wayan leads morning market tours and cooking classes in Tumang village near Ubud.',
    articleSection: 'Travel Guide',
    keywords: [
      'morning cooking class ubud',
      'cooking class with market tour ubud',
      'ubud market cooking class',
      'morning market tour cooking class bali',
      'cooking class ubud morning',
    ],
    faq: [
      {
        question: 'What time does the morning cooking class in Ubud start?',
        answer:
          'Our morning class runs approximately 08:30–12:30 (3–4 hours). Hotel pickup in the Ubud area starts earlier so you arrive for the market tour on time.',
      },
      {
        question: 'Does the morning class include a market tour?',
        answer:
          'Yes. The morning session always includes a guided tour of a traditional local market, where you see and buy ingredients you will cook that day — then a rice-field walk to our village kitchen.',
      },
      {
        question: 'Morning or afternoon cooking class in Ubud — which is better?',
        answer:
          'Choose morning if you want the full cultural experience (market + rice fields + cooking + lunch). Choose afternoon if you prefer a later start and cook-and-dine without the market. See our morning vs afternoon guide for details.',
      },
    ],
    content: root([
      paragraph([
        text('A '),
        text('morning cooking class in Ubud with a market tour', 1),
        text(' is the classic Bali food experience: shop where locals shop, walk through rice paddies, then cook 10+ dishes from scratch before a shared lunch. It is the session most first-time visitors book.'),
      ]),
      heading('h2', 'Morning cooking class Ubud schedule'),
      list([
        'Hotel pickup from Ubud area (complimentary)',
        'Guided traditional morning market tour',
        'Rice-field walk to Tumang village kitchen',
        'Grind Base Genep spice paste on a stone mortar',
        'Hands-on cooking of 10+ Balinese dishes',
        'Shared lunch of everything you made + recipe booklet',
      ]),
      paragraph([
        text('Session length is roughly 3–4 hours (about 08:30–12:30). See our dedicated '),
        link('cooking class with market tour page', '/cooking-class-with-market-tour-ubud'),
        text(' for logistics and booking.'),
      ]),
      heading('h2', 'What you see at the Ubud morning market'),
      paragraph([
        text('Your guide explains tropical fruit, fresh turmeric, galangal, lemongrass, and chili varieties. You buy what you will cook — not souvenir stalls. Pair this with our '),
        link('Ubud morning market guide', '/blog/ubud-morning-market-guide'),
        text(' if you want to explore markets on other days too.'),
      ]),
      heading('h2', 'Morning vs afternoon — quick decision'),
      paragraph([
        text('Morning = market tour + rice fields + full cooking + lunch. Afternoon = cook-and-dine without the market (ideal after temples or a spa). Full comparison: '),
        link('morning vs afternoon cooking class Ubud', '/blog/morning-vs-afternoon-tours-bali'),
        text('. Complete booking overview: '),
        link('cooking class Ubud guide 2026', '/blog/cooking-class-ubud-guide-2026'),
        text('.'),
      ]),
      heading('h2', 'Price and booking'),
      paragraph([
        text('Shared morning class: IDR 350,000 per person including market, cooking, lunch, pickup, and recipes. '),
        link('Book the morning cooking class in Ubud', '/balinese-cooking-class-ubud'),
        text(' or '),
        link('reserve online', '/book-your-cooking-class'),
        text('.'),
      ]),
    ]),
  },
]

async function seed() {
  const { runArticleSeedBatch } = await import('./src/lib/articleSeedRunner')
  const payload = await getPayload({ config: configPromise })
  const result = await runArticleSeedBatch(payload, articles)
  console.log(JSON.stringify(result, null, 2))
}

const isDirectRun =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href

if (isDirectRun) {
  seed().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
