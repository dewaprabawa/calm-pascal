import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

const SLUG = 'how-to-make-bumbu-bali'

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

  // Define files to upload
  const mediaFiles = [
    {
      key: 'hero',
      filename: 'bumbu-guide-hero.webp',
      alt: 'Chef Wayan grinding Balinese spice paste (bumbu) with a stone mortar and pestle in a rice paddy setting',
    },
    {
      key: 'ingredients',
      filename: 'bumbu-ingredients.webp',
      alt: 'Fresh ingredients for Balinese spice paste: turmeric, galangal, shallots, and red chilies',
    },
    {
      key: 'action',
      filename: 'bumbu-action-shot.webp',
      alt: 'Hand grinding red chilies and shrimp paste in a cobek (stone mortar)',
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

  // Build content using the media IDs
  const content = root([
    paragraph([
      text("If you've ever tried to recreate a dish from a Balinese restaurant at home and found it missing that deep, mysterious flavor, you've likely hit the exact same wall that almost every home cook hits: "),
      text("the bumbu.", 1),
    ]),
    paragraph([
      text("In Balinese cuisine, the "),
      text("bumbu", 2),
      text(" (spice paste) is the absolute foundation. It's not just a sauce or a marinade—it's the soul of the dish. A Balinese grandmother might not know the exact temperature of her oven, but she will "),
      text("never", 2),
      text(" get her bumbu wrong."),
    ]),
    paragraph([
      text("At Tumang Bali Cooking Class, grinding bumbu by hand is the very first step of our morning market tour. Here is the inside scoop on what goes into it, the tools you need, and the technique to make it at home."),
    ]),

    heading('h2', 'What Exactly Is Bumbu Bali?'),
    paragraph([
      text("Bumbu is a paste made from fresh herbs, spices, and aromatics ground together. Unlike the curry pastes of neighboring Thailand or Malaysia (which are often dried and powdery), authentic Balinese bumbu is entirely fresh and wet."),
    ]),
    paragraph([
      text("There are hundreds of variations, but almost everything comes from the "),
      text("Base Genep", 1),
      text("—the \"all-purpose\" base that goes into savory dishes—paired with the "),
      text("Base Lambak", 1),
      text("—a spicy, sweet, sour base used in certain ceremonial dishes and sambals."),
    ]),

    heading('h2', 'The 5 Key Ingredients of Base Genep'),
    paragraph([
      text("If you want to make authentic Balinese chicken, you need these five pillars:"),
    ]),
    list([
      "Turmeric (Kunyit): Gives the food its signature golden-yellow color and earthy warmth.",
      "Shallots (Bawang Merah) & Garlic (Bawang Putih): The aromatic foundation of almost every Balinese dish.",
      "Red Chilies (Cabe Merah): You'll see two types used—the smaller, hotter cabe merah keriting for heat, and the larger cabe merah besar for mild flavor and bright color.",
      "Shrimp Paste (Terasi): The secret weapon. Terasi is fermented shrimp that is roasted over a flame before being ground. It adds an earthy, funky umami depth that salt alone cannot achieve. (We offer a vegetarian alternative for guests who prefer it).",
      "Galangal (Lengkuas) & Ginger (Jahe): While ginger adds a sharp kick, galangal adds a piney, citrusy aroma that is unique to Southeast Asian cooking."
    ]),

    // Embed ingredients image
    uploadImage(mediaIds.ingredients),

    heading('h2', 'The Tool: Mortar and Pestle (Cobek dan Alu)'),
    paragraph([
      text("Can you use a blender? You "),
      text("can", 2),
      text(", but you shouldn't."),
    ]),
    paragraph([
      text("In Bali, we use a "),
      text("cobek", 1),
      text(" (a heavy volcanic stone mortar) and an "),
      text("alu", 1),
      text(" (a stone pestle)."),
    ]),
    paragraph([
      text("Why does it matter? ", 1),
      text("A blender pulverizes the spices into a watery slurry. A stone mortar crushes the cell walls of the herbs, releasing their essential oils and creating a thick, aromatic, grainy paste. The friction of the stone also slightly \"cooks\" the spices, especially the shallots and chilies, mellowing their raw bite before they even hit the pan."),
    ]),

    heading('h2', 'The Technique: How to Grind Bumbu Correctly'),
    paragraph([
      text("If you've ever ground spices at home and ended up with a chunky, uneven mess, you likely skipped the order of operations. Here is the proper sequence:"),
    ]),
    list([
      "Roast the Terasi: Always roast the shrimp paste (wrapped in foil or banana leaf) over an open flame until it smells fragrant. Do not skip this step.",
      "Start with the Hard Ingredients: The salt, chilies, and shrimp paste go in first. Grind them until they are a fine powder or paste. If you do this last, you'll end up with chunky bits of salt scattered in your dish.",
      "Add the Aromatics: Next, add the turmeric, galangal, ginger, and garlic. Grind these until the stone starts to feel warm and the paste begins to release its oils.",
      "Finish with the Soft Ingredients: Finally, add the shallots and any fresh herbs. These are soft and will incorporate quickly, bringing the whole paste together into a unified, fragrant paste."
    ], true),
    paragraph([
      text("The goal is a paste that is uniform in color and texture. If you can see individual flecks of ginger or red chili, you need to grind it a little longer."),
    ]),

    // Embed action shot image
    uploadImage(mediaIds.action),

    heading('h2', 'How Long Does Bumbu Last?'),
    paragraph([
      text("Because it's made of fresh ingredients (no preservatives, no canning), fresh bumbu is a perishable item."),
    ]),
    list([
      "In the fridge: It will last for about 2 to 3 days.",
      "In the freezer: You can freeze it in small portions for up to 2 months."
    ]),
    paragraph([
      text("Pro-tip from Chef Wayan: \"If your bumbu looks dull or smells slightly sour, throw it away. It's better to spend an extra 20 minutes making a fresh batch.\"", 2),
    ]),

    heading('h2', 'Frequently Asked Questions'),
    paragraph([
      text("Can I make Balinese bumbu without shrimp paste (terasi)?", 1),
    ]),
    paragraph([
      text("Yes. While traditional savory dishes almost always include terasi, you can substitute it with a pinch of sugar and extra shallots, or simply omit it. We offer vegetarian options at our cooking class so everyone can enjoy the flavors."),
    ]),
    paragraph([
      text("What is the difference between Bumbu Bali and Bumbu Jawa (Javanese spice paste)?", 1),
    ]),
    paragraph([
      text("Balinese bumbu generally relies more heavily on turmeric, giving it a yellow/golden color, whereas Javanese bumbu tends to be darker, richer, and relies more on shalot and sweet soy sauce (kecap manis)."),
    ]),
    paragraph([
      text("Do I really need a stone mortar and pestle?", 1),
    ]),
    paragraph([
      text("While a high-powered blender works in a pinch, a stone mortar produces a much more aromatic and flavorful paste. For the authentic experience, we highly recommend using a cobek."),
    ]),

    paragraph([
      text("Ready to grind your first bumbu by hand? Join our morning market tour and cooking class in Ubud — "),
      link("Book your class here", "/#classes"),
      text("."),
    ]),
  ])

  // Create article in Payload
  await payload.create({
    collection: 'articles',
    data: {
      title: 'The Ultimate Guide to Balinese Spice Paste (Bumbu): How to Make It at Home',
      slug: SLUG,
      status: 'published',
      publishedDate: new Date('2026-07-04').toISOString(),
      author: 'Chef Wayan',
      featuredImage: mediaIds.hero,
      excerpt: 'Learn how to make authentic Bumbu Bali (Balinese spice paste). Discover the ingredients, tools, and techniques behind every traditional Balinese dish.',
      content: content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
      meta: {
        title: 'How to Make Balinese Spice Paste (Bumbu) | Tumang Bali',
        description: 'Learn how to make authentic Bumbu Bali (Balinese spice paste). Discover the ingredients, tools, and techniques behind every traditional Balinese dish.',
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
