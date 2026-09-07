import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

// Idempotent: skips article slugs that already exist; upserts private class pricing.
// Run with: npx tsx --env-file=.env seedNewArticlesAugust2026.ts

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

const articles = [
  {
    slug: 'ubud-cooking-class-price',
    title: 'Ubud Cooking Class Price 2026 — What You Actually Pay',
    excerpt:
      'How much does a cooking class in Ubud cost in 2026? Shared classes start at IDR 506,370. A private class for 1 person is IDR 633,090; kids are IDR 1,266,180. Full inclusions explained.',
    image: 'img2.jpg',
    imageAlt: 'Guests cooking together during a Balinese cooking class in Ubud',
    metaTitle: 'Ubud Cooking Class Price 2026 | Tumang Bali',
    metaDescription:
      'Ubud cooking class prices in 2026: IDR 506,370 shared, IDR 633,090 private for 1 person, IDR 1,266,180 kids. Includes pickup, market tour, 10+ dishes and lunch.',
    content: root([
      paragraph([
        text('Travellers searching '),
        text('Ubud cooking class price', 1),
        text(' or '),
        text('how much is a cooking class in Bali', 1),
        text(' usually want a clear number — not a range that hides extras. Here is what Tumang Bali charges in 2026, and what is included so you can compare fairly.'),
      ]),
      heading('h2', 'Quick answer'),
      list([
        'Shared morning or afternoon class: IDR 506,370 per adult (2+ participants; IDR 616,032 for 1)',
        'Private class for 1 person (adult): IDR 633,090',
        'Kids on a private class: IDR 1,266,180',
      ]),
      paragraph([
        text('Those prices include Ubud hotel pickup and drop-off, the class itself, ingredients, the meal you cook, and a printed recipe booklet. Morning sessions also include the traditional market tour and rice-field walk.'),
      ]),
      heading('h2', 'What other Ubud classes typically charge'),
      paragraph([
        text('Independent 2026 guides put village and family-run Ubud classes around IDR 450,000–650,000, mid-range school kitchens around IDR 600,000–800,000, and hotel-style classes higher still. Private 1–2 person sessions elsewhere often sit at IDR 1,200,000–2,500,000. Our shared class at IDR 506,370 is positioned for value; our private 1-person rate at IDR 633,090 is still well below many exclusive villa chefs.'),
      ]),
      heading('h2', 'Shared vs private — which should you book?'),
      paragraph([
        text('Book the shared class if you are happy to cook alongside other travellers (small groups). Book a '),
        link('private cooking class', '/private-cooking-class-ubud'),
        text(' if you want the kitchen to yourself — solo travellers, honeymoons, families with young children, or anyone who wants a slower pace.'),
      ]),
      heading('h2', 'What is not extra'),
      list([
        'No separate market-tour fee on the morning class',
        'No equipment hire',
        'Vegetarian and vegan menus at the same price if you tell us when you book',
      ]),
      heading('h2', 'How to book'),
      paragraph([
        text('Use '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text(' for instant checkout, or WhatsApp us to secure a private date. See also '),
        link('is a Bali cooking class worth it', '/blog/is-a-bali-cooking-class-worth-it'),
        text(' if you are still deciding.'),
      ]),
    ]),
  },
  {
    slug: 'private-cooking-class-ubud-price',
    title: 'Private Cooking Class Ubud — 1 Person IDR 633,090, Min. 2 IDR 1,266,180',
    excerpt:
      'Want a private Balinese cooking class in Ubud for one person or a family? Adult / solo rate is IDR 633,090. Kids are IDR 1,266,180. Your own chef, your menu, no other guests.',
    image: 'gallery-group.jpg',
    imageAlt: 'Private group cooking class in a Balinese kitchen in Ubud',
    metaTitle: 'Private Cooking Class Ubud Price | 1 Person 650K, Kids 550K',
    metaDescription:
      'Private cooking class in Ubud: IDR 633,090 for 1 person, IDR 1,266,180 for kids. Exclusive kitchen, local chef, market tour and hotel pickup.',
    content: root([
      paragraph([
        text('Searches like '),
        text('private cooking class Ubud', 1),
        text(', '),
        text('cooking class for one person Bali', 1),
        text(', and '),
        text('private cooking class with kids', 1),
        text(' all point to the same need: the kitchen should be yours. Here are the 2026 private rates at Tumang Bali.'),
      ]),
      heading('h2', 'Private class prices'),
      list([
        '1 person / adult: IDR 633,090',
        'Kids: IDR 1,266,180',
        'Shared (non-private) class, if you prefer a group: IDR 506,370 per adult (2+ participants; IDR 616,032 for 1)',
      ]),
      heading('h2', 'Who the 1-person class is for'),
      paragraph([
        text('Solo travellers often skip cooking classes because they do not want to join a big table. A private 1-person class means the chef, the market walk (morning), and the stove are dedicated to you. You can go slower on '),
        link('bumbu', '/blog/how-to-make-bumbu-bali'),
        text(' or skip dishes you already know.'),
      ]),
      heading('h2', 'Families and kids'),
      paragraph([
        text('Children in a private class pay IDR 1,266,180. They grind spices, wrap sate lilit, and mix sambal — adults handle hot pans. Kids under 4 can usually sit in without a cooking station; ask us when you book.'),
      ]),
      heading('h2', 'What you get'),
      list([
        'Kitchen exclusive to your booking — no other guests',
        'Complimentary pickup in the Ubud area',
        'Hands-on cooking of 10+ dishes and the meal you make',
        'Recipe booklet to take home',
        'Vegetarian, vegan and allergy menus when requested in advance',
      ]),
      heading('h2', 'Book a private date'),
      paragraph([
        text('See the full private class page: '),
        link('Private Cooking Class in Ubud', '/private-cooking-class-ubud'),
        text('. WhatsApp is best if you need a specific date; GetYourGuide, Viator, or Airbnb Book now is instant paid checkout.'),
      ]),
    ]),
  },
  {
    slug: 'how-to-make-sate-lilit',
    title: 'How to Make Sate Lilit — Balinese Minced Satay Recipe',
    excerpt:
      'Sate lilit is minced meat or fish mixed with bumbu and coconut, wrapped around lemongrass, then grilled. Learn the authentic Ubud method we teach in class.',
    image: 'gallery-satay.jpg',
    imageAlt: 'Balinese sate lilit grilling over charcoal during a cooking class',
    metaTitle: 'How to Make Sate Lilit | Balinese Satay Recipe',
    metaDescription:
      'Learn how to make sate lilit — Balinese minced satay on lemongrass. Ingredients, grinding bumbu, wrapping technique, and vegetarian tempeh version.',
    content: root([
      paragraph([
        text('Sate lilit is one of the dishes guests search for after a '),
        link('Balinese cooking class in Ubud', '/balinese-cooking-class-ubud'),
        text('. Unlike skewer satay made from cubes, lilit means “to wrap”: you press a seasoned mince around a stalk of lemongrass and grill it over charcoal.'),
      ]),
      heading('h2', 'Ingredients (about 10 sticks)'),
      list([
        '300g minced chicken, fish, or tempeh for a vegetarian version',
        '2 tbsp freshly grated coconut (or unsweetened desiccated, soaked)',
        '3–4 tbsp cooked Base Genep / bumbu Bali',
        '1 tsp palm sugar, salt to taste',
        'Kaffir lime leaves, finely sliced',
        '10 lemongrass stalks or bamboo sticks',
      ]),
      heading('h2', 'Method'),
      list(
        [
          'Make or warm your spice paste. In class we grind it on a cobek — see how to make bumbu Bali.',
          'Mix mince, coconut, bumbu, palm sugar, salt and lime leaf until sticky. If it falls apart, it is too dry; add a spoon of coconut milk.',
          'With wet hands, wrap a thin sausage of mix around each lemongrass stalk. Press firmly so it does not crack on the grill.',
          'Grill over medium charcoal 3–4 minutes per side until fragrant and lightly charred. Do not rush — burning the lemongrass makes it bitter.',
          'Serve with sambal matah and rice.',
        ],
        true,
      ),
      heading('h2', 'Tips from the village kitchen'),
      paragraph([
        text('The mix should cling without being pasty. Fish lilit is more delicate than chicken. For vegan class we use tempeh and extra coconut. You will make sate lilit hands-on in both morning and afternoon sessions at Tumang Bali.'),
      ]),
      heading('h2', 'Cook it with us in Ubud'),
      paragraph([
        text('Book a '),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' to buy the coconut and spices yourself, then grill lilit the same morning. Full dish list: '),
        link('what you cook in class', '/blog/10-dishes-cooking-class'),
        text('.'),
      ]),
    ]),
  },
  {
    slug: 'cooking-class-ubud-from-canggu',
    title: 'Cooking Class in Ubud from Canggu or Seminyak — Pickup Guide',
    excerpt:
      'Can you do a cooking class in Ubud if you stay in Canggu or Seminyak? Yes. Free pickup is for the Ubud area; we arrange extra transport from the coast. Timing and what to expect.',
    image: 'img4.jpg',
    imageAlt: 'Scenic drive and rice fields on the way to a cooking class near Ubud',
    metaTitle: 'Ubud Cooking Class from Canggu or Seminyak | Pickup',
    metaDescription:
      'Doing an Ubud cooking class from Canggu or Seminyak: travel time, pickup fees, morning vs afternoon, and how to book with Tumang Bali.',
    content: root([
      paragraph([
        text('A common search is '),
        text('cooking class Ubud from Canggu', 1),
        text(' or '),
        text('Seminyak to Ubud cooking class', 1),
        text('. You do not need to change hotels. The class is in the Ubud area; the question is only transport and start time.'),
      ]),
      heading('h2', 'How long is the drive?'),
      paragraph([
        text('Canggu or Seminyak to Ubud is typically 1–1.5 hours depending on traffic. Morning market-tour classes start around 08:30, so a coast pickup is early. Afternoon class (14:30) is easier if you do not want a dawn start.'),
      ]),
      heading('h2', 'Is pickup free from Canggu?'),
      paragraph([
        text('Complimentary pickup and drop-off is for guests staying in the Ubud area. From Canggu, Seminyak, Sanur or the airport belt we can arrange a driver for a small extra fee — tell us your hotel when you book. You can also use your own driver.'),
      ]),
      heading('h2', 'Which session should coast guests choose?'),
      list([
        'Morning class: market tour + fullest experience; leave the coast by about 07:00',
        'Afternoon class: cooking and dinner, no market (markets wind down); gentler timing',
        'Private class: we can adjust pace if you are travelling with kids',
      ]),
      heading('h2', 'What to bring'),
      paragraph([
        text('Closed shoes for the market, a hat for the rice-field walk, and cash or a card if you paid a transport top-up. We provide aprons and all ingredients. More packing notes: '),
        link('what to wear to a Bali cooking class', '/what-to-wear-bali-cooking-class'),
        text('.'),
      ]),
      heading('h2', 'Book from the coast'),
      paragraph([
        text('Message WhatsApp with your hotel name and preferred date. Or book online via '),
        link('book your cooking class', '/book-your-cooking-class'),
        text('. Shared class IDR 506,370; '),
        link('private 1 person', '/private-cooking-class-ubud'),
        text(' IDR 633,090, min. 2 IDR 1,266,180.'),
      ]),
    ]),
  },
]

async function upsertPrivateActivity(payload: Awaited<ReturnType<typeof getPayload>>) {
  const { docs } = await payload.find({
    collection: 'activities',
    where: { title: { contains: 'Private' } },
    limit: 5,
  })

  const data = {
    title: 'Private Cooking Class',
    durationHours: 4,
    price: 633090,
    groupPrice: 1266180,
    includedItems: [
      { item: 'Kitchen exclusive to you' },
      { item: 'Market Tour (morning)' },
      { item: 'Hands-on Cooking (10+ Dishes)' },
      { item: 'Ubud Hotel Transport' },
      { item: 'Recipe Book' },
    ],
  }

  if (docs.length > 0) {
    await payload.update({
      collection: 'activities',
      id: docs[0].id,
      data,
    })
    console.log(`Updated private activity ${docs[0].id} to 650 / kids 550.`)
    return
  }

  const instructors = await payload.find({ collection: 'instructors', limit: 1 })
  await payload.create({
    collection: 'activities',
    data: {
      ...data,
      instructor: instructors.docs[0]?.id,
    },
  })
  console.log('Created private activity at 650 / kids 550.')
}

async function seed() {
  const payload = await getPayload({ config: configPromise })
  await upsertPrivateActivity(payload)

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
      console.warn(`Image not found for "${art.slug}" (${imgPath}) — skipping.`)
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
        articleSection: 'Cooking Class Guides',
        keywords: [{ keyword: 'Ubud cooking class' }, { keyword: 'Bali cooking class price' }],
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
