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
  {
    slug: 'cooking-class-ubud-guide-2026',
    title: 'Cooking Class Ubud — Complete Guide to Booking in 2026',
    excerpt:
      'Everything you need to know about booking a cooking class in Ubud — prices, morning vs afternoon, what is included, and how to choose an authentic Balinese experience in Tumang village.',
    image: 'blog/rice-field-class.webp',
    imageAlt: 'Cooking class in Ubud Bali with rice-field views — guests learning Balinese dishes',
    metaTitle: 'Cooking Class Ubud 2026 — Price, What to Expect & How to Book',
    metaDescription:
      'Complete guide to cooking class Ubud — IDR 350K shared, market tour, 10+ dishes, free pickup. Morning vs afternoon, what to wear, and how to book Tumang Bali.',
    author: 'Chef Wayan',
    authorRole: 'Head Chef',
    authorBio:
      'Chef Wayan has taught thousands of guests to cook authentic Balinese food in Tumang village near Ubud since 2010.',
    articleSection: 'Travel Guide',
    keywords: [
      'cooking class ubud',
      'cooking class in ubud',
      'ubud cooking class',
      'balinese cooking class ubud',
      'cooking class ubud price',
    ],
    faq: [
      {
        question: 'How much is a cooking class in Ubud?',
        answer:
          'Our shared cooking class in Ubud is IDR 350,000 per person in 2026. That includes the morning market tour, rice-field walk, 10+ dishes, the full meal, hotel pickup, and a recipe booklet. Private class for one person is IDR 650,000.',
      },
      {
        question: 'What is included in a cooking class Ubud experience?',
        answer:
          'A full Tumang Bali class includes: complimentary Ubud hotel pickup, guided morning market tour, rice-paddy walk, hands-on cooking of 10+ Balinese dishes, grinding bumbu spice paste from scratch, a shared feast, and a printed recipe booklet.',
      },
      {
        question: 'Morning or afternoon cooking class in Ubud?',
        answer:
          'Morning class (08:30–12:30) includes the market tour and rice-field walk — best for first-time visitors. Afternoon class (14:30–17:30) skips the market but keeps the full cooking menu — ideal if you want a slow morning or have temple plans early.',
      },
    ],
    content: root([
      paragraph([
        text('Searching for a '),
        text('cooking class in Ubud', 1),
        text('? You are in the right place. Ubud is Bali\'s cultural heart — home to traditional markets, rice terraces, and family-run kitchens where you grind spice paste by hand and cook 10+ dishes from scratch. This guide covers price, what is included, and how to book the right class for your trip.'),
      ]),
      heading('h2', 'What a cooking class in Ubud includes'),
      list([
        'Complimentary hotel pickup from any hotel in the Ubud area',
        'Guided morning market tour — buy ingredients you will cook that day',
        'Rice-field walk through active subak irrigation paddies',
        'Hands-on cooking of 10+ Balinese dishes with a local chef',
        'Grinding Base Genep bumbu spice paste on a stone mortar',
        'Shared feast of everything you made, plus a recipe booklet to take home',
      ]),
      heading('h2', 'Cooking class Ubud price (2026)'),
      paragraph([
        text('Shared morning or afternoon class: IDR 350,000 per person. Private class for one person: IDR 650,000. Kids aged 8+: IDR 550,000. See our detailed '),
        link('Ubud cooking class price guide', '/blog/ubud-cooking-class-price'),
        text(' for a full breakdown of inclusions and how we compare to other classes in town.'),
      ]),
      heading('h2', 'Morning vs afternoon cooking class Ubud'),
      paragraph([
        text('The '),
        link('morning vs afternoon class comparison', '/blog/morning-vs-afternoon-tours-bali'),
        text(' is one of the most common questions we get. Morning adds the market and rice-field walk — the full cultural immersion. Afternoon is cook-and-dine without the market, perfect for a packed itinerary or if you prefer a later start.'),
      ]),
      heading('h2', 'Why choose a village cooking class over central Ubud'),
      paragraph([
        text('Classes in Tumang village — about 30 minutes from Ubud centre — offer what most travelers want: a real market, rice-field setting, small groups (max 8), and local family chefs. Central Ubud schools often skip the market or use premade spice paste. Read our '),
        link('best cooking class in Ubud', '/blog/best-cooking-class-in-ubud'),
        text(' guide for a full comparison.'),
      ]),
      heading('h2', 'Who is a cooking class in Ubud best for?'),
      list([
        'Couples — romantic hands-on date overlooking rice fields',
        'Families with kids 8+ — children love grinding spices and wrapping sate lilit',
        'Food travelers — the single best way to understand Balinese cuisine',
        'First-time Bali visitors — market tour plus cooking in one half-day',
        'Vegetarians and vegans — full plant-based menu available on request',
      ]),
      paragraph([
        text('Couples should read our '),
        link('cooking class Ubud for couples', '/blog/cooking-class-ubud-for-couples'),
        text(' guide. Families with children see '),
        link('Ubud cooking class for families', '/blog/ubud-cooking-class-for-families'),
        text('. Still deciding? '),
        link('Is a Bali cooking class worth it?', '/blog/is-a-bali-cooking-class-worth-it'),
      ]),
      heading('h2', 'Book your cooking class in Ubud'),
      paragraph([
        text('TripAdvisor Travelers\' Choice 2026. Shared class from IDR 350K. Free Ubud pickup. '),
        link('Book our cooking class in Ubud', '/balinese-cooking-class-ubud'),
        text(' or '),
        link('reserve online', '/book-your-cooking-class'),
        text('.'),
      ]),
    ]),
  },
  {
    slug: 'ubud-cooking-class-for-families',
    title: 'Ubud Cooking Class for Families — Kids Welcome from Age 8+',
    excerpt:
      'Planning a family trip to Ubud? A Balinese cooking class is one of the best activities for kids and parents — hands-on, educational, and you eat what you make. Kids rate IDR 550K. Free hotel pickup.',
    image: 'blog/cooking-local-family.webp',
    imageAlt: 'Family with children enjoying a Balinese cooking class in Ubud village kitchen',
    metaTitle: 'Ubud Cooking Class for Families — Kids 8+ Welcome | 2026',
    metaDescription:
      'Best family cooking class in Ubud — kids grind spices, wrap sate lilit, and eat the feast they made. IDR 550K kids, IDR 350K adults. Market tour, 10+ dishes, free pickup.',
    author: 'Tumang Bali Team',
    authorRole: 'Local Food Guide',
    authorBio:
      'We welcome families from around the world to cook together in our village kitchen near Ubud — kids aged 8+ love the hands-on experience.',
    articleSection: 'Travel Guide',
    keywords: [
      'ubud cooking class for families',
      'family cooking class ubud',
      'cooking class with kids bali',
      'bali cooking class children',
      'kids cooking class ubud',
    ],
    faq: [
      {
        question: 'Can children join a cooking class in Ubud?',
        answer:
          'Yes — children aged 8 and above are welcome in our shared cooking class. Younger kids can join with adult supervision on a case-by-case basis — message us before booking. Kids rate is IDR 550,000 per child.',
      },
      {
        question: 'Is a Ubud cooking class safe for kids?',
        answer:
          'Our chefs guide every step. Kids handle safe tasks like grinding spices on the cobek, wrapping sate lilit around lemongrass, and mixing sambal. Hot pan work is supervised by adults. The open-air village kitchen has space for children to move around safely.',
      },
      {
        question: 'What do kids cook in a Balinese cooking class?',
        answer:
          'Kids love wrapping sate lilit, pounding bumbu in the mortar, rolling dadar gulung pancakes, and plating lawar. They eat everything they helped make — often the highlight of a family Bali trip.',
      },
    ],
    content: root([
      paragraph([
        text('A '),
        text('Ubud cooking class for families', 1),
        text(' is one of the most memorable activities you can do with kids in Bali. It is hands-on, screen-free, and you sit down together to eat the feast you made — overlooking rice paddies in a real Balinese village. No experience needed.'),
      ]),
      heading('h2', 'Why families love our cooking class in Ubud'),
      list([
        'Kids aged 8+ get their own station — grinding spices, wrapping satay, mixing sambal',
        'Educational — learn where Balinese ingredients come from at the morning market',
        'Small groups (max 8) — intimate, not overwhelming for children',
        'Vegetarian kids get a full plant-based menu — no awkward substitutions',
        'Recipe booklet to take home — kids love showing friends what they learned',
        'Free Ubud hotel pickup — no taxi logistics with tired children',
      ]),
      heading('h2', 'Family cooking class Ubud pricing'),
      paragraph([
        text('Adults: IDR 350,000 per person. Kids (8+): IDR 550,000. Private family class (kitchen to yourselves): IDR 650,000 for one person base rate. Full '),
        link('Ubud cooking class price table', '/blog/ubud-cooking-class-price'),
        text(' with inclusions on our blog.'),
      ]),
      heading('h2', 'Morning class vs afternoon for families'),
      paragraph([
        text('Morning class includes the market tour — great for curious kids who want to see tropical fruit, spices, and live chickens at the pasar. Afternoon class skips the market and starts directly with cooking — better if your children are not early risers. See '),
        link('morning vs afternoon class', '/blog/morning-vs-afternoon-tours-bali'),
        text(' for the full comparison.'),
      ]),
      heading('h2', 'What families cook together'),
      paragraph([
        text('Your family menu includes Balinese classics: sate lilit, lawar, sambal matah, pepes ikan, ayam betutu, nasi goreng, and dadar gulung for dessert. Kids especially enjoy wrapping satay and grinding '),
        link('bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text(' in the stone mortar — loud, messy, and fun.'),
      ]),
      heading('h2', 'Tips for families booking a cooking class in Ubud'),
      list([
        'Book morning class if kids wake early and love exploring markets',
        'Wear closed-toe shoes for the rice-field walk — flip-flops are fine in the kitchen',
        'Tell us about allergies or vegetarian kids when booking — we adapt every dish',
        'Bring a camera — the rice-field setting makes great family photos',
        'Pair with our half-day class page if you have a packed Bali itinerary',
      ]),
      paragraph([
        text('Read '),
        link('what to expect at a Bali cooking class', '/blog/what-to-expect-bali-cooking-class'),
        text(' for a step-by-step timeline. Couples travelling without kids may prefer our '),
        link('cooking class for couples', '/blog/cooking-class-ubud-for-couples'),
        text(' guide instead.'),
      ]),
      heading('h2', 'Book a family cooking class in Ubud'),
      paragraph([
        text('Kids 8+ welcome. IDR 350K adults, IDR 550K kids. Market tour, 10+ dishes, free pickup. '),
        link('Book our Ubud cooking class', '/balinese-cooking-class-ubud'),
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
