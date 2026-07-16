import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

const SLUG = 'tumang-vs-ubud-cooking-class'

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

const uploadImage = (mediaId: string | number): LexNode => ({
  type: 'upload',
  version: 1,
  relationTo: 'media',
  value: mediaId,
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

  // Upload images
  const mediaFiles = [
    {
      key: 'hero',
      filename: 'tumang-vibe.webp',
      alt: 'Traditional Balinese cooking class in rice paddies at Tumang Bali',
    },
    {
      key: 'market',
      filename: 'tumang-market.webp',
      alt: 'Local vegetable market tour in Batubulan, Bali for cooking class',
    },
  ]

  const mediaIds: Record<string, string | number> = {}

  for (const m of mediaFiles) {
    const imgPath = path.resolve(__dirname, 'public', 'images', 'blog', m.filename)
    if (!fs.existsSync(imgPath)) {
      console.error(`Image not found at ${imgPath}. Aborting.`)
      process.exit(1)
    }

    const stat = fs.statSync(imgPath)
    const media = await payload.create({
      collection: 'media',
      data: { alt: m.alt },
      file: {
        data: fs.readFileSync(imgPath),
        mimetype: 'image/webp',
        name: m.filename,
        size: stat.size,
      },
    })
    mediaIds[m.key] = media.id
    console.log(`Uploaded media "${m.filename}" with ID: ${media.id}`)
  }

  // Build the comparison article content
  const content = root([
    paragraph([
      text("If you are planning a trip to Bali, one question comes up more than any other: "),
      text("\"Where should I go for the best Balinese cooking class?\"", 2),
    ]),
    paragraph([
      text("Most travelers naturally think of "),
      text("Ubud", 1),
      text(". It's the cultural heart of Bali, famous for its monkeys, rice terraces, and luxury resorts. It's convenient, safe, and the classes are great."),
    ]),
    paragraph([
      text("But if you are looking for the "),
      text("most authentic", 2),
      text(" Balinese experience—the kind where you visit a local market, walk through working rice paddies, and cook in a family compound rather than a hotel kitchen—you need to drive just 20 minutes further to "),
      text("Tumang (Batubulan).", 1),
    ]),
    paragraph([
      text("Here is the honest breakdown of the differences between a cooking class in Ubud versus a cooking class in Tumang, and why choosing the village might be the highlight of your trip."),
    ]),

    heading('h2', '1. The Atmosphere: Bustling Town vs. Working Village'),
    paragraph([
      text("Ubud: ", 1),
      text("A class in Ubud takes you to the center of the island's busiest tourist hub. The streets are lined with souvenir shops, art galleries, and crowded cafes. It is vibrant, but it can feel commercial. You are cooking in the town."),
    ]),
    paragraph([
      text("Tumang (Batubulan): ", 1),
      text("Tumang is a traditional \"village\" (desa) that works alongside tourism but hasn't let it take over. Our kitchen is open-air, right next to the rice paddies. When you aren't chopping vegetables, you can hear the village roosters and see the local farmers working in the fields. You feel like a guest in a Balinese home, not a tourist in a workshop."),
    ]),

    // Embed vibe image
    uploadImage(mediaIds.hero),

    heading('h2', '2. The Market Tour: Tourist Souvenirs vs. Local Ingredients'),
    paragraph([
      text("Ubud: ", 1),
      text("Most classes in the town center start with a trip to a local market, but in Ubud, those markets are often filled with tourists taking photos. It's fun, but it's not exactly a \"local\" experience."),
    ]),
    paragraph([
      text("Tumang: ", 1),
      text("At Tumang, our morning market tour is different. We walk through markets used by the people of Batubulan and Sukawati. Here, you see Balinese farmers selling fresh vegetables harvested that morning, local herbs, and traditional spices that tourists rarely see. You are learning how the Balinese actually feed their families."),
    ]),

    // Embed market image
    uploadImage(mediaIds.market),

    heading('h2', '3. The \"Canang Sari\" Offering: A Tour vs. A Tradition'),
    paragraph([
      text("Ubud: ", 1),
      text("In many Ubud classes, making the Canang Sari (the daily Balinese flower offering) is a quick, 15-minute demonstration to get it over with."),
    ]),
    paragraph([
      text("Tumang: ", 1),
      text("In the Balinese village way of life, these offerings are sacred. At Tumang, we take the time to show you the meaning behind every flower and leaf, often while standing in front of a family temple. It isn't just a craft activity; it is a moment of cultural connection that explains why Bali is called the \"Island of the Gods.\""),
    ]),

    heading('h2', 'Comparison: Which Class is Right for You?'),
    list([
      "Ubud Classes: Center of town location, bustling tourist atmosphere, busy local/tourist markets, walkable from central hotels, best for travelers short on time or transport.",
      "Tumang Classes (Batubulan): Traditional village / rice fields location, peaceful village life, authentic village markets, 20 mins drive (we provide free pickup!), best for travelers seeking culture & nature."
    ]),

    heading('h2', 'So, Should You Choose Tumang or Ubud?'),
    paragraph([
      text("The truth is, you can't go wrong with either—but you have to decide what you are looking for."),
    ]),
    heading('h3', 'Choose a class in Ubud if:'),
    list([
      "You don't have a scooter or car and prefer walking.",
      "You want to combine your class with shopping for art or jewelry later that afternoon.",
      "You prefer the air-conditioned comfort of a resort or modern kitchen."
    ]),
    heading('h3', 'Choose a class in Tumang if:'),
    list([
      "You want to escape the crowds and heat of the town.",
      "You are interested in the real Balinese way of life, not just the surface-level sights.",
      "You want to cook with ingredients you've just bought from a village market."
    ]),
    heading('h3', 'The Tumang Advantage:'),
    paragraph([
      text("At "),
      text("Tumang Bali Cooking Class", 1),
      text(", we are located in Batubulan, just a short, comfortable ride from Ubud. Because of this, we have the best of both worlds: you get the authentic village setting, but we provide free pickup from your hotel in central Ubud, so you don't have to worry about the traffic."),
    ]),

    heading('h2', 'Frequently Asked Questions'),
    paragraph([
      text("Is Tumang (Batubulan) close to Ubud?", 1),
    ]),
    paragraph([
      text("Yes, it is very close. Tumang is only about 10–15 minutes from the center of Ubud. We pick up guests from their hotels in the morning and drop them off after lunch."),
    ]),
    paragraph([
      text("Is the cooking class in Tumang more authentic than in Ubud?", 1),
    ]),
    paragraph([
      text("Generally, yes. Because Tumang is a working village and not a tourism hub, the classes are often more focused on daily Balinese life and family traditions."),
    ]),
    paragraph([
      text("Do I need to rent a scooter to join the Tumang cooking class?", 1),
    ]),
    paragraph([
      text("No. We provide free hotel pickup from the Ubud area. We drive you to the local market, then to the rice paddy kitchen, and back to your hotel."),
    ]),

    paragraph([
      text("Ready to see the \"real\" side of Bali? Book your cooking class in Tumang today — "),
      link("Book your class here", "/#classes"),
      text("."),
    ]),
  ])

  // Create article in Payload
  await payload.create({
    collection: 'articles',
    data: {
      title: 'Tumang vs. Ubud: Where to Find the Most Authentic Balinese Cooking Class',
      slug: SLUG,
      status: 'published',
      publishedDate: new Date('2026-07-04').toISOString(),
      author: 'Chef Wayan',
      featuredImage: mediaIds.hero,
      excerpt: 'Choosing between a Tumang cooking class or one in Ubud? Discover the key differences in atmosphere, markets, and the authenticity of the experience.',
      content: content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
      meta: {
        title: 'Tumang vs Ubud: Where to Find the Most Authentic Balinese Cooking Class',
        description: 'Choosing between a Tumang cooking class or one in Ubud? Discover the key differences in atmosphere, markets, and the authenticity of the experience.',
      },
    },
  })
  console.log(`Seeded article "${SLUG}" successfully.`)

  // --- INTERNAL LINKING IN EXISTING BLOG POSTS ---

  // 1. Update Bumbu post (slug: 'how-to-make-bumbu-bali')
  const bumbuResult = await payload.find({
    collection: 'articles',
    where: { slug: { equals: 'how-to-make-bumbu-bali' } },
    limit: 1,
  })
  if (bumbuResult.docs.length > 0) {
    const bumbuDoc = bumbuResult.docs[0]
    const contentNodes = (bumbuDoc.content as any)?.root?.children || []
    
    // Find index of heading "## How Long Does Bumbu Last?" (or "How Long Does Bumbu Last?")
    const idx = contentNodes.findIndex((n: any) => n.type === 'heading' && n.children?.[0]?.text === 'How Long Does Bumbu Last?')
    if (idx !== -1) {
      // Insert before this heading
      contentNodes.splice(idx, 0, paragraph([
        text("Want to know how our village market differs from the one in Ubud? Read our guide on "),
        link("Tumang vs. Ubud", "/blog/tumang-vs-ubud-cooking-class"),
        text(".")
      ]))
      await payload.update({
        collection: 'articles',
        id: bumbuDoc.id,
        data: {
          content: bumbuDoc.content,
        }
      })
      console.log('Updated "how-to-make-bumbu-bali" with link to "tumang-vs-ubud-cooking-class".')
    }
  }

  // 2. Update Dishes post (slug: 'dishes-you-cook-balinese-cooking-class')
  const dishesResult = await payload.find({
    collection: 'articles',
    where: { slug: { equals: 'dishes-you-cook-balinese-cooking-class' } },
    limit: 1,
  })
  if (dishesResult.docs.length > 0) {
    const dishesDoc = dishesResult.docs[0]
    const contentNodes = (dishesDoc.content as any)?.root?.children || []
    
    // Find index of heading "## Cook them yourself" or "Cook them yourself"
    const idx = contentNodes.findIndex((n: any) => n.type === 'heading' && n.children?.[0]?.text === 'Cook them yourself')
    if (idx !== -1) {
      // Insert before this heading
      contentNodes.splice(idx, 0, paragraph([
        text("Read our comparison: "),
        link("Is it better to cook in a hotel or a rice paddy kitchen?", "/blog/tumang-vs-ubud-cooking-class")
      ]))
      await payload.update({
        collection: 'articles',
        id: dishesDoc.id,
        data: {
          content: dishesDoc.content,
        }
      })
      console.log('Updated "dishes-you-cook-balinese-cooking-class" with link to "tumang-vs-ubud-cooking-class".')
    }
  }

  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
