import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

// Seeds calendar posts #6–#10 into the `articles` collection.
// Idempotent: skips any slug that already exists.
// Run with: npx tsx seedBlogBatch3.ts

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
    slug: 'ubud-morning-market-guide',
    title: 'Ubud Morning Market Guide: What to See, Buy & Eat',
    excerpt:
      'The Ubud morning market is where local life and food begin each day. Here’s what to see, what to buy, and how to make the most of a visit.',
    metaTitle: 'Ubud Morning Market Guide — What to See & Buy | Tumang Bali',
    metaDescription:
      'A guide to the Ubud morning market: when to go, the ingredients and spices to look for, what to eat, and how to experience it on a cooking class tour.',
    image: 'img2.jpg',
    imageAlt: 'Stalls of fresh produce and spices at the Ubud morning market',
    content: root([
      paragraph([
        text(
          'Long before the souvenir stalls take over, the Ubud market is a working local food market — and it’s one of the most rewarding things to see in town if you go early. Here’s how to experience it like a local.',
        ),
      ]),
      heading('h2', 'When to go'),
      paragraph([
        text(
          'Arrive between 6 and 8am. This is when Balinese families shop for the day, the produce is freshest, and the souvenir vendors who dominate later haven’t set up yet. By mid-morning the food market winds down and the tourist market takes over.',
        ),
      ]),
      heading('h2', 'What to look for'),
      list([
        'Fresh spices and aromatics — galangal, turmeric, ginger, lemongrass, kaffir lime.',
        'Palm sugar (gula merah), sold in solid discs.',
        'Tofu and tempeh, made locally and sold fresh daily.',
        'Banana leaves for wrapping and steaming pepes.',
        'Tropical fruit — snakefruit (salak), mangosteen, rambutan, jackfruit.',
        'Pre-made spice pastes and sambals from the warung stalls.',
      ]),
      heading('h2', 'What to eat'),
      paragraph([
        text(
          'Look for jaja Bali (colourful traditional cakes), bubur (rice porridge) for breakfast, and freshly made snacks wrapped in banana leaf. Bring small cash notes — most stalls can’t change large bills.',
        ),
      ]),
      heading('h2', 'See it with a guide'),
      paragraph([
        text(
          'The market is far richer when someone explains what everything is and how it’s used. Our ',
        ),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(
          ' starts right here — you pick the ingredients, then cook them. Curious what comes next? Read about ',
        ),
        link('the dishes you’ll cook', '/blog/dishes-you-cook-balinese-cooking-class'),
        text('.'),
      ]),
    ]),
  },
  {
    slug: 'best-time-to-visit-bali-ubud',
    title: 'Best Time of Year to Visit Bali (and Ubud)',
    excerpt:
      'When is the best time to visit Bali? A month-by-month look at the seasons, crowds, prices and weather to help you plan the perfect Ubud trip.',
    metaTitle: 'Best Time to Visit Bali & Ubud — Month by Month | Tumang Bali',
    metaDescription:
      'The best time to visit Bali and Ubud: dry vs wet season, crowds, prices and a month-by-month guide to help you plan the perfect trip.',
    image: 'img3.jpg',
    imageAlt: 'Lush green rice fields near Ubud, Bali',
    content: root([
      paragraph([
        text(
          'Bali is a year-round destination, but the experience changes a lot with the seasons. Here’s how to choose when to come, depending on whether you’re chasing sunshine, lower prices or fewer crowds.',
        ),
      ]),
      heading('h2', 'The two seasons'),
      paragraph([
        text(
          'Bali has a dry season (roughly April–October) and a wet season (November–March). Dry season brings sunny days and lower humidity; wet season means warm, short downpours — usually in the afternoon — and lush, green landscapes around Ubud.',
        ),
      ]),
      heading('h2', 'Month by month'),
      list([
        'April–June: arguably the sweet spot — dry, green, and quieter before peak season.',
        'July–August: peak season, best weather, biggest crowds and highest prices.',
        'September–October: still dry, fewer tourists, great value.',
        'November–March: wet season — greenest scenery, lowest prices, occasional rain.',
      ]),
      heading('h2', 'When to visit Ubud specifically'),
      paragraph([
        text(
          'Ubud is inland and a little cooler and wetter than the coast. Even in wet season, mornings are often clear — which is why morning activities work well year-round. Rain rarely ruins a trip; it just shapes your timing.',
        ),
      ]),
      heading('h2', 'A rainy-day plan that always works'),
      paragraph([
        text(
          'Whatever the season, a cooking class is the perfect Ubud activity — it’s mostly indoors, runs morning or afternoon, and a little rain only adds to the atmosphere. Our ',
        ),
        link('half-day cooking class', '/half-day-cooking-class-bali'),
        text(' fits neatly around the weather, and a '),
        link('private class', '/private-cooking-class-ubud'),
        text(' lets you pick the time that suits your trip.'),
      ]),
    ]),
  },
  {
    slug: 'ubud-food-lovers-itinerary',
    title: '2 Days in Ubud: A Food-Lover’s Itinerary',
    excerpt:
      'How to spend two delicious days in Ubud — markets, rice fields, a cooking class and the best local food, mapped into an easy itinerary.',
    metaTitle: '2 Days in Ubud: A Food-Lover’s Itinerary | Tumang Bali',
    metaDescription:
      'A food-lover’s 2-day Ubud itinerary: morning market, rice-field walks, a Balinese cooking class, warungs and local dishes — planned out for easy travel.',
    image: 'img4.jpg',
    imageAlt: 'A local Balinese meal laid out on a table in Ubud',
    content: root([
      paragraph([
        text(
          'Two days in Ubud is enough to eat very, very well. Here’s an itinerary built around food, with a cooking class as the centrepiece, plus the markets, walks and warungs that make Ubud special.',
        ),
      ]),
      heading('h2', 'Day 1: Markets, rice fields and a cooking class'),
      list([
        'Early morning: the Ubud market before the crowds (see our market guide).',
        'Mid-morning: a cooking class — market tour, rice-field walk, then cook 10+ dishes.',
        'Afternoon: relax over the lunch you cooked; stroll the Campuhan Ridge Walk.',
        'Evening: dinner at a local warung — try babi guling or a vegetarian nasi campur.',
      ]),
      paragraph([
        text('The cooking class is the anchor of the day — our '),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' covers the first half of Day 1 in one experience.'),
      ]),
      heading('h2', 'Day 2: Coffee, temples and slow food'),
      list([
        'Morning: a Balinese coffee and a jamu (herbal tonic) to start.',
        'Late morning: Tirta Empul or Goa Gajah temple, then lunch nearby.',
        'Afternoon: a rice-terrace visit at Tegallalang.',
        'Evening: a long dinner trying the dishes you now know how to cook.',
      ]),
      heading('h2', 'Eat like you mean it'),
      paragraph([
        text(
          'The trick to eating well in Ubud is knowing what to order — and the fastest way to learn that is to cook it yourself. Read ',
        ),
        link('what to expect at a Bali cooking class', '/blog/what-to-expect-bali-cooking-class'),
        text(', or if you’re vegetarian, our '),
        link('vegetarian guide to eating in Ubud', '/blog/vegetarian-guide-eating-ubud'),
        text('.'),
      ]),
    ]),
  },
  {
    slug: 'is-a-bali-cooking-class-worth-it',
    title: 'Is a Bali Cooking Class Worth It? An Honest Look',
    excerpt:
      'Thinking about a Bali cooking class but not sure it’s worth the money? Here’s an honest look at what you get, who it suits, and how to choose a good one.',
    metaTitle: 'Is a Bali Cooking Class Worth It? An Honest Look | Tumang Bali',
    metaDescription:
      'Is a Bali cooking class worth it? An honest look at the cost, what you get, who enjoys it most, and how to choose an authentic Ubud cooking class.',
    image: 'gallery-group.jpg',
    imageAlt: 'Happy guests at the end of a Balinese cooking class in Ubud',
    content: root([
      paragraph([
        text(
          'A cooking class is one of the more popular things to do in Ubud — but is it actually worth your time and money? Here’s an honest take, including who tends to love it and who might not.',
        ),
      ]),
      heading('h2', 'What you actually get'),
      paragraph([
        text(
          'A good class isn’t just a meal — it’s usually a half-day experience: a guided market tour, a rice-field walk, two hours of hands-on cooking, a big lunch of everything you made, and recipes to take home. Viewed as a cultural experience plus a meal plus a skill, the value adds up quickly.',
        ),
      ]),
      heading('h2', 'Who enjoys it most'),
      list([
        'Curious eaters who want to understand the food they’ve been enjoying.',
        'Couples and families looking for a shared, hands-on activity.',
        'Travellers who like meeting locals and seeing daily life, not just sights.',
        'Anyone wanting to recreate Balinese dishes back home.',
      ]),
      heading('h2', 'Who might skip it'),
      paragraph([
        text(
          'If you dislike cooking, have a very tight schedule, or only want to eat rather than learn, a class may not be for you — a great restaurant meal might suit better. Being honest about this is how you avoid disappointment.',
        ),
      ]),
      heading('h2', 'How to choose a good one'),
      paragraph([
        text(
          'Look for small groups, a real market tour, local instructors, and a menu you can adapt for dietary needs. Read recent reviews and check what’s included. Our ',
        ),
        link('private cooking class', '/private-cooking-class-ubud'),
        text(' suits groups who want it tailored, while the '),
        link('half-day class', '/half-day-cooking-class-bali'),
        text(' fits a packed itinerary. Still curious? Here’s '),
        link('what to expect on the day', '/blog/what-to-expect-bali-cooking-class'),
        text('.'),
      ]),
    ]),
  },
  {
    slug: 'dadar-gulung-balinese-dessert-recipe',
    title: 'Dadar Gulung: The Balinese Coconut Pancake Recipe',
    excerpt:
      'Dadar gulung is Bali’s beloved green coconut pancake — soft pandan crêpes rolled around sweet coconut and palm sugar. Here’s the recipe.',
    metaTitle: 'Dadar Gulung Recipe — Balinese Coconut Pancake | Tumang Bali',
    metaDescription:
      'Make dadar gulung, the Balinese pandan coconut pancake. Soft green crêpes rolled around sweet palm-sugar coconut — full recipe from an Ubud cooking class.',
    image: 'gallery-thumbs.jpg',
    imageAlt: 'Green dadar gulung Balinese coconut pancakes on a plate',
    content: root([
      paragraph([
        text(
          'Dadar gulung is the dessert that ends most Balinese meals — and most of our cooking classes. Soft, green-from-pandan crêpes are rolled around a warm, sweet coconut and palm-sugar filling called unti. Here’s how to make them at home.',
        ),
      ]),
      heading('h2', 'For the filling (unti)'),
      list([
        'Grated coconut — 200g (fresh or frozen, thawed)',
        'Palm sugar — 100g, chopped',
        'Water — 3 tbsp',
        'Pandan leaf — 1, knotted (optional, for aroma)',
        'A pinch of salt',
      ]),
      heading('h2', 'For the crêpes'),
      list([
        'Plain flour — 150g',
        'Coconut milk — 300ml',
        'Egg — 1 (optional; omit for vegan)',
        'Pandan extract or juice — 1 tsp (for the green colour and aroma)',
        'A pinch of salt',
      ]),
      heading('h2', 'Method'),
      list(
        [
          'Make the filling: melt the palm sugar with water and pandan, add the coconut and salt, and cook until sticky and dry. Cool.',
          'Whisk the crêpe ingredients into a smooth, thin batter. Rest 10 minutes.',
          'Cook thin crêpes in a lightly oiled pan, one ladle at a time, until just set.',
          'Spoon filling along one edge, fold in the sides, and roll up tightly.',
          'Serve at room temperature.',
        ],
        true,
      ),
      heading('h2', 'Learn it in person'),
      paragraph([
        text('Dadar gulung is on the menu in our classes, including the '),
        link('vegetarian cooking class', '/vegetarian-cooking-class-ubud'),
        text(' (easily made vegan). See '),
        link('all the dishes you’ll cook', '/blog/dishes-you-cook-balinese-cooking-class'),
        text(' for the full spread.'),
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
