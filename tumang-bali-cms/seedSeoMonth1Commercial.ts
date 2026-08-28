/**
 * Month 1 commercial SEO articles — idempotent seed batch.
 * Run via: npx tsx --env-file=.env seedSeoMonth1Commercial.ts
 * Or production: POST /api/seed-seo-articles (included in cron maintenance)
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'
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
    slug: 'cooking-class-ubud-for-couples',
    title: 'Cooking Class in Ubud for Couples — Romantic Date Idea in Bali',
    excerpt:
      'Planning a couples trip to Ubud? A Balinese cooking class is one of the best date experiences in Bali — market tour, hands-on cooking together, and a private feast overlooking rice fields. From IDR 350K.',
    image: 'dining-table.jpg',
    imageAlt: 'Couple enjoying a romantic Balinese cooking class feast in Ubud',
    metaTitle: 'Cooking Class Ubud for Couples — Romantic Bali Date 2026',
    metaDescription:
      'Best cooking class in Ubud for couples — cook 10+ Balinese dishes together, market tour, rice-field setting. Shared IDR 350K or private kitchen IDR 650K. Book Tumang Bali.',
    author: 'Tumang Bali Team',
    authorRole: 'Local Food Guide',
    authorBio:
      'We host couples from around the world for authentic Balinese cooking experiences in Tumang village near Ubud.',
    articleSection: 'Travel Guide',
    keywords: [
      'cooking class ubud couples',
      'couples cooking class bali',
      'romantic cooking class ubud',
      'date idea ubud',
      'cooking class for two bali',
    ],
    faq: [
      {
        question: 'Is a cooking class in Ubud good for couples?',
        answer:
          'Yes — couples consistently rate it as a top Ubud date. You shop at the market together, grind spices side by side, and share a feast you cooked overlooking rice paddies. It is hands-on, romantic, and more memorable than a standard restaurant dinner.',
      },
      {
        question: 'Should couples book a private or shared cooking class in Ubud?',
        answer:
          'Shared class (IDR 350K each) is social and fun — max 8 guests. Private class (IDR 650K for one person, kitchen exclusive) is best for anniversaries, proposals, or couples who want the chef\'s full attention. Both include the full menu and meal.',
      },
      {
        question: 'Morning or afternoon class for couples in Ubud?',
        answer:
          'Morning class includes the market tour and rice-field walk — best for active couples who want the full cultural experience. Afternoon class is ideal if you want a slow morning and a sunset-style dinner feast without the early start.',
      },
    ],
    content: root([
      paragraph([
        text('A '),
        text('cooking class in Ubud for couples', 1),
        text(' is one of the most booked experiences for romantic getaways in Bali — and for good reason. You work together, learn something new, and end with a feast in a village kitchen surrounded by rice terraces. It beats another generic dinner on Jalan Raya.'),
      ]),
      heading('h2', 'Why couples love a Ubud cooking class'),
      list([
        'Hands-on teamwork — grinding bumbu, wrapping sate lilit, plating lawar together',
        'Beautiful setting — open-air kitchen with rice-field views, not a hotel basement',
        'Shared accomplishment — you eat what you made, which feels more special than ordering off a menu',
        'Stories to take home — recipe booklet plus skills you can recreate together',
        'Small groups — intimate atmosphere, max 8 guests in shared class',
      ]),
      heading('h2', 'Morning vs afternoon for couples'),
      paragraph([
        text('The '),
        link('morning vs afternoon class guide', '/blog/morning-vs-afternoon-tours-bali'),
        text(' explains the full difference. In short: morning adds the market tour and rice-field walk (best for first-time visitors). Afternoon skips the market but keeps the full 10+ dish cooking menu — perfect if you slept in or had a spa morning.'),
      ]),
      heading('h2', 'Private cooking class for couples'),
      paragraph([
        text('For anniversaries or honeymoons, book a '),
        link('private cooking class in Ubud', '/private-cooking-class-ubud'),
        text(' — IDR 650,000 for one person with the kitchen to yourselves. Kids rate IDR 550K if you are travelling as a family. See our '),
        link('Ubud cooking class price guide', '/blog/ubud-cooking-class-price'),
        text(' for the full 2026 pricing table.'),
      ]),
      heading('h2', 'What you will cook together'),
      paragraph([
        text('Your couples menu includes Balinese classics: sate lilit, lawar, sambal matah, pepes ikan, ayam betutu, nasi goreng, and dadar gulung for dessert. You grind '),
        link('bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text(' from scratch — the heart of every dish. Vegetarian couples get a full plant-based menu on request.'),
      ]),
      heading('h2', 'Book a couples cooking class in Ubud'),
      paragraph([
        text('Shared class from IDR 350,000 per person. Free Ubud hotel pickup. TripAdvisor Travelers\' Choice 2026. '),
        link('Book our cooking class in Ubud', '/balinese-cooking-class-ubud'),
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
