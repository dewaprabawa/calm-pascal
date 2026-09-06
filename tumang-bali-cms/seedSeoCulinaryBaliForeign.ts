import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

// Idempotent: skips article slugs that already exist.
// Run with: npx tsx --env-file=.env seedSeoCulinaryBaliForeign.ts
//
 // SEO batch: popular culinary queries searched by foreign / English-speaking
// travellers (what to eat, iconic dishes, recipes) → funnel to cooking class.

type LexNode = Record<string, unknown>
type FaqItem = { question: string; answer: string }

type ArticleSeed = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  metaTitle: string
  metaDescription: string
  author: string
  authorRole: string
  authorBio: string
  articleSection: string
  keywords: string[]
  faq: FaqItem[]
  content: LexNode
}

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

export const articles: ArticleSeed[] = [
  {
    slug: 'ubud-food-guide-what-to-eat',
    title: 'Ubud Food Guide 2026 — What to Eat (For Foreign Travellers)',
    excerpt:
      'What to eat in Ubud as a foreign traveller: babi guling, nasi campur, sate lilit, lawar, sambal matah, best warungs, and how a cooking class unlocks every meal after.',
    image: 'blog/tumang-market.webp',
    imageAlt: 'Colourful Ubud morning market ingredients for authentic Balinese food',
    metaTitle: 'Ubud Food Guide 2026 — What to Eat',
    metaDescription:
      'What to eat in Ubud in 2026: babi guling, nasi campur, sate lilit, lawar and more. A foreign traveller’s guide to warungs, markets and Balinese cooking.',
    author: 'Chef Wayan',
    authorRole: 'Head Chef',
    authorBio:
      'Born near Ubud, Chef Wayan has guided thousands of international travellers through Balinese markets and village kitchens since 2010.',
    articleSection: 'Travel Guide',
    keywords: [
      'what to eat in Ubud',
      'Ubud food guide',
      'Balinese food for tourists',
      'Ubud must eat',
      'best food in Ubud',
    ],
    faq: [
      {
        question: 'What should foreigners eat first in Ubud?',
        answer:
          'Start with nasi campur (mixed rice) to sample many flavours at once, then try babi guling if you eat pork, sate lilit, and sambal matah. Vegetarians should order lawar putih, urap, and tempeh dishes.',
      },
      {
        question: 'Is Balinese food very spicy for foreigners?',
        answer:
          'It can be. Ask for “tidak pedas” (not spicy) or “sedikit pedas” (a little spicy). Sambal is usually served on the side so you control the heat.',
      },
      {
        question: 'Is a cooking class worth it for food travellers in Ubud?',
        answer:
          'Yes. A morning market tour plus hands-on cooking teaches you the spice paste behind every warung dish. After the class, every nasi campur plate makes more sense. Shared classes from IDR 350,000.',
      },
    ],
    content: root([
      paragraph([
        text('Searching '),
        text('what to eat in Ubud', 1),
        text(' or '),
        text('Ubud food guide', 1),
        text('? This 2026 guide is written for foreign travellers who want real Balinese flavours — not only café brunch. Below: the dishes to prioritise, how to order at a warung, and how a cooking class turns every meal into something you understand.'),
      ]),
      heading('h2', 'What to eat in Ubud — the essential list'),
      paragraph([
        text('Ubud sits at the cultural heart of Bali. That means more ceremonial dishes, stronger spice pastes (base genep / bumbu Bali), and warungs that still cook for locals at lunch. If you only have a few days, eat these first:'),
      ]),
      list([
        'Nasi campur — rice with small portions of whatever the warung cooked that day (the everyday Balinese meal)',
        'Babi guling — spit-roasted suckling pig with crispy skin (Hindu Bali’s iconic dish; not for Muslim or vegetarian travellers)',
        'Sate lilit — minced fish or chicken wrapped around lemongrass and grilled',
        'Lawar — finely chopped coconut, vegetables and spices (ask for lawar putih if you prefer no blood)',
        'Bebek or ayam betutu — slow-cooked duck or chicken in banana leaf with rich spice paste',
        'Sambal matah — raw shallot–lemongrass–chili relish; put a little on everything',
        'Dadar gulung — green pandan pancake with sweet coconut filling',
      ]),
      heading('h2', 'How foreigners should order at a warung'),
      paragraph([
        text('A warung is a family eatery — plastic tables, no white tablecloths, often cash only. Look for places busy with locals between 11:00 and 14:00. Point at the glass display if there is no English menu. Useful phrases:'),
      ]),
      list([
        'Nasi campur — “mixed rice plate”',
        'Tidak pedas — not spicy',
        'Vegetarian / no meat — say “sayur saja” or “tanpa daging”',
        'Prices: expect IDR 25,000–80,000 for a full local lunch plate',
      ]),
      heading('h2', 'Ubud food guide by meal'),
      heading('h3', 'Breakfast'),
      paragraph([
        text('Locals eat early. Try bubur (rice porridge), pisang goreng, or a simple nasi goreng. Specialty coffee is everywhere if you need a Western caffeine fix before the morning market.'),
      ]),
      heading('h3', 'Lunch — when Balinese food peaks'),
      paragraph([
        text('Lunch is when babi guling warungs and nasi campur counters are at their best. Many sell out by mid-afternoon. Pair your meal with '),
        link('our Ubud morning market guide', '/blog/ubud-morning-market-guide'),
        text(' if you want to see the ingredients before they hit the plate.'),
      ]),
      heading('h3', 'Dinner'),
      paragraph([
        text('Evenings lean more international in central Ubud (fusion, pizza, fine dining). For traditional flavours after dark, look for warungs still serving sate, pepes ikan, and rice plates — or cook your own dinner in an '),
        link('afternoon cooking class', '/half-day-cooking-class-bali'),
        text('.'),
      ]),
      heading('h2', 'Vegetarian and vegan food in Ubud'),
      paragraph([
        text('Ubud is one of the easiest places in Indonesia to eat plant-based. Ask for tempeh, tahu, urap (coconut vegetable salad), and lawar sayur. Full guide: '),
        link("a vegetarian's guide to eating in Ubud", '/blog/vegetarian-guide-eating-ubud'),
        text('. Our '),
        link('vegetarian cooking class', '/vegetarian-cooking-class-ubud'),
        text(' adapts every dish.'),
      ]),
      heading('h2', 'Deep-dive dishes worth reading about'),
      paragraph([
        text('Want more detail on the icons? Read: '),
        link('babi guling in Ubud', '/blog/babi-guling-ubud-where-to-eat'),
        text(', '),
        link('nasi campur Bali explained', '/blog/nasi-campur-bali-explained'),
        text(', '),
        link('ayam betutu recipe', '/blog/ayam-betutu-recipe-bali'),
        text(', and '),
        link('lawar Balinese salad', '/blog/lawar-balinese-salad-recipe'),
        text('.'),
      ]),
      heading('h2', 'Build a food-lover Ubud itinerary'),
      paragraph([
        text('Day 1 morning: '),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' (pickup ~08:30). Day 1 afternoon: walk central Ubud and try a warung. Day 2: coffee plantation + another nasi campur. Full plan: '),
        link("2 days in Ubud food-lover's itinerary", '/blog/ubud-food-lovers-itinerary'),
        text('.'),
      ]),
      heading('h2', 'Why a cooking class belongs in this food guide'),
      paragraph([
        text('Restaurants serve the finished plate. A cooking class shows you the market, the cobek (stone mortar), and the '),
        link('bumbu Bali spice paste', '/blog/how-to-make-bumbu-bali'),
        text(' behind almost every dish above. That is why food travellers rate village classes so highly. Shared class from IDR 350K — '),
        link('book your cooking class', '/book-your-cooking-class'),
        text(' or see the '),
        link('best cooking class in Ubud', '/blog/best-cooking-class-in-ubud'),
        text(' guide.'),
      ]),
    ]),
  },
  {
    slug: 'babi-guling-ubud-where-to-eat',
    title: 'Babi Guling in Ubud — Where to Eat & What Foreigners Should Know',
    excerpt:
      'Babi guling is Bali’s iconic spit-roasted pork. Where to eat it in Ubud, what comes on the plate, price tips, and why the spice paste matters for foreign travellers.',
    image: 'blog/dishes.jpg',
    imageAlt: 'Balinese feast plate with rice, meat and sambal — classic Ubud warung style',
    metaTitle: 'Babi Guling Ubud — Where to Eat (2026)',
    metaDescription:
      'Where to eat babi guling in Ubud: what is on the plate, when to go, price range, and tips for foreign travellers. Plus how the spice paste is made.',
    author: 'Tumang Bali Team',
    authorRole: 'Local Food Guide',
    authorBio:
      'Local guides from the Ubud area who help international guests navigate Balinese warungs, markets and ceremonial food culture.',
    articleSection: 'Travel Guide',
    keywords: [
      'babi guling Ubud',
      'best babi guling Bali',
      'Balinese roast pork',
      'suckling pig Ubud',
      'where to eat babi guling',
    ],
    faq: [
      {
        question: 'What is babi guling?',
        answer:
          'Babi guling is Balinese spit-roasted suckling pig, stuffed and rubbed with a turmeric-heavy spice paste, roasted until the skin is glass-crisp. It is usually served with rice, lawar, sausage (urutan), crispy skin and a small broth.',
      },
      {
        question: 'Where should foreigners eat babi guling in Ubud?',
        answer:
          'Famous spots include Warung Babi Guling Ibu Oka (tourist-famous) and smaller neighbourhood warungs preferred by locals. Arrive before noon — many places sell out by early afternoon.',
      },
      {
        question: 'Is babi guling halal?',
        answer:
          'No. It is pork. Muslim travellers and anyone avoiding pork should choose bebek/ayam betutu, sate lilit (fish or chicken), or nasi campur without pork instead.',
      },
    ],
    content: root([
      paragraph([
        text('Ask almost any foreign food traveller what they ate in Bali and '),
        text('babi guling', 1),
        text(' comes up fast. It is spit-roasted suckling pig with shatteringly crisp skin and a turmeric-lemongrass spice paste that defines Hindu Bali. Here is how to eat it properly in Ubud — without the tourist traps.'),
      ]),
      heading('h2', 'What is babi guling?'),
      paragraph([
        text('A whole young pig is rubbed inside and out with basa gede / base genep (shallots, garlic, turmeric, galangal, lemongrass, chili, and more), stuffed with cassava leaves or spices, then slowly turned over coconut-husk coals for hours. The skin lacquered to a glass crackle; the meat stays juicy from its own juices and the paste.'),
      ]),
      paragraph([
        text('On the plate you usually get: steamed rice, slices of roast pork, shards of crispy skin (kulit), a length of urutan (spiced sausage), a scoop of '),
        link('lawar', '/blog/lawar-balinese-salad-recipe'),
        text(', and a small bowl of broth. That full plate is often called nasi babi guling.'),
      ]),
      heading('h2', 'Where to eat babi guling in Ubud'),
      paragraph([
        text('Ubud is the most searched place for '),
        text('babi guling Ubud', 1),
        text(' for a reason — several specialist warungs sit near the centre. The most internationally famous is Warung Babi Guling Ibu Oka (Anthony Bourdain helped put it on the map). It is busy, touristy, and still a solid first try. Locals often also recommend quieter branches or neighbourhood warungs with a whole pig displayed out front and a line of Balinese customers.'),
      ]),
      list([
        'Go for lunch, not dinner — most babi guling warungs peak 11:00–14:00 and may close when sold out',
        'Order the special / set plate so you get skin, sausage, lawar and broth — not just meat',
        'Eat the skin immediately — it softens if boxed “to go”',
        'Expect roughly IDR 45,000–80,000 for a full plate in 2026 (tourist spots skew higher)',
      ]),
      heading('h2', 'Tips for foreign travellers'),
      list([
        'Bring cash — many warungs do not take cards',
        'Queues are normal at famous spots; secondary branches are often faster with similar quality',
        'If you do not eat pork, skip this dish entirely — try ayam betutu or nasi campur instead',
        'Ask for sambal on the side if you are heat-sensitive',
      ]),
      heading('h2', 'The spice paste behind the pig'),
      paragraph([
        text('What makes babi guling taste “Balinese” is the same family of pastes you grind in a cooking class: '),
        link('how to make bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text(' and '),
        link('base genep', '/blog/how-to-make-base-genep'),
        text('. Once you smell fresh turmeric and kencur at the market, you will recognise them on the plate.'),
      ]),
      heading('h2', 'What else to eat the same day'),
      paragraph([
        text('Balance a rich babi guling lunch with something lighter later: '),
        link('sambal matah', '/blog/sambal-matah-recipe'),
        text(' on grilled fish, or '),
        link('sate lilit', '/blog/how-to-make-sate-lilit'),
        text('. Full context: '),
        link('Ubud food guide — what to eat', '/blog/ubud-food-guide-what-to-eat'),
        text('.'),
      ]),
      heading('h2', 'Cook Balinese flavours yourself'),
      paragraph([
        text('We do not roast a whole pig in class (that needs hours and a spit), but you will cook the related spice pastes, lawar-style salads, sate lilit and sambals that sit on every babi guling plate. Book a '),
        link('morning market + cooking class', '/cooking-class-with-market-tour-ubud'),
        text(' or '),
        link('book online', '/book-your-cooking-class'),
        text('.'),
      ]),
    ]),
  },
  {
    slug: 'nasi-campur-bali-explained',
    title: 'Nasi Campur Bali Explained — How Foreigners Should Order It',
    excerpt:
      'Nasi campur is the everyday Balinese meal: rice with small sides. Learn what goes on the plate, how to order as a foreigner, vegetarian options, and what it costs in Ubud.',
    image: 'dining-table.jpg',
    imageAlt: 'Shared Balinese meal with rice and multiple side dishes — nasi campur style',
    metaTitle: 'Nasi Campur Bali Explained — How to Order',
    metaDescription:
      'What is nasi campur Bali? How foreigners order mixed rice at a warung, typical sides, prices in Ubud, vegetarian tips, and how it connects to a cooking class.',
    author: 'Tumang Bali Team',
    authorRole: 'Local Food Guide',
    authorBio:
      'We teach international guests to recognise warung staples — nasi campur, sambal, and spice pastes — so they eat smarter for the rest of their Bali trip.',
    articleSection: 'Travel Guide',
    keywords: [
      'nasi campur Bali',
      'what is nasi campur',
      'nasi campur Ubud',
      'Balinese mixed rice',
      'how to order nasi campur',
    ],
    faq: [
      {
        question: 'What is nasi campur?',
        answer:
          'Nasi campur means “mixed rice”: a scoop of steamed rice with small portions of several side dishes — vegetables, tempeh or tofu, egg, meat or fish, crackers, and sambal. It is how Balinese people eat lunch most days.',
      },
      {
        question: 'How do foreigners order nasi campur in Bali?',
        answer:
          'Point at the dishes in the glass display, or say “nasi campur” and let the server assemble a standard plate. Ask “tidak pedas” if you want mild heat. Vegetarian? Say “sayur saja” or point only at plant-based sides.',
      },
      {
        question: 'How much does nasi campur cost in Ubud?',
        answer:
          'At local warungs expect roughly IDR 25,000–50,000. Tourist-facing cafés charge more. If a simple plate is over IDR 80,000, you are likely in a restaurant, not a warung.',
      },
    ],
    content: root([
      paragraph([
        text('If you only learn one Balinese meal as a foreign traveller, make it '),
        text('nasi campur', 1),
        text('. It is not a single recipe — it is a plate format: rice in the centre, surrounded by whatever the warung cooked that morning. Master ordering it and you can eat well anywhere on the island.'),
      ]),
      heading('h2', 'What is nasi campur Bali?'),
      paragraph([
        text('Nasi = rice. Campur = mixed. A typical Ubud plate might include shredded chicken, tempeh goreng, boiled egg, urap (vegetables with grated coconut), a stick of sate, peanut crackers (rempeyek), and a spoon of '),
        link('sambal matah', '/blog/sambal-matah-recipe'),
        text(' or sambal goreng. Portions are small so you taste variety without ordering five mains.'),
      ]),
      heading('h2', 'How to order nasi campur as a foreigner'),
      list(
        [
          'Find a warung with a glass display of ready dishes and a local lunch crowd.',
          'Say “nasi campur” or point at the sides you want.',
          'Ask “berapa?” to hear the price before they plate it if you are unsure.',
          'Request “tidak pedas” (not spicy) — sambal is often added by default.',
          'Pay in cash; sit down; eat with a spoon and fork (or right hand if that is the house style).',
        ],
        true,
      ),
      heading('h2', 'What usually goes on the plate'),
      list([
        'Protein: chicken, pork, fish, egg, tempeh, tofu',
        'Vegetables: urap, stir-fried greens, lawar sayur',
        'Crunch: krupuk or rempeyek',
        'Heat: sambal (start with a little)',
        'Rice: white steamed rice; some places offer red rice',
      ]),
      heading('h2', 'Vegetarian nasi campur'),
      paragraph([
        text('Point at tempeh, tofu, egg (if you eat it), and vegetable sides only. Ubud warungs and cafés are used to foreign vegetarians. More tips: '),
        link('vegetarian guide to eating in Ubud', '/blog/vegetarian-guide-eating-ubud'),
        text('.'),
      ]),
      heading('h2', 'Nasi campur vs nasi goreng'),
      paragraph([
        text('Foreigners often confuse them. Nasi goreng is fried rice — one cooked dish. Nasi campur is plain rice plus many sides. For “what do locals actually eat for lunch?”, nasi campur wins.'),
      ]),
      heading('h2', 'Why cooking class guests recognise nasi campur better'),
      paragraph([
        text('In our class you cook several of the sides that appear on nasi campur plates — coconut vegetable salads, sate lilit, sambals, and spice pastes. After that, every warung display looks familiar. See '),
        link('dishes you cook in a Balinese cooking class', '/blog/10-dishes-cooking-class'),
        text(' and '),
        link('book a class', '/book-your-cooking-class'),
        text('.'),
      ]),
      heading('h2', 'Where nasi campur fits in your Ubud food plan'),
      paragraph([
        text('Eat nasi campur at least once a day if you want real local food on a budget. Pair it with our '),
        link('Ubud food guide', '/blog/ubud-food-guide-what-to-eat'),
        text(' and, if you eat pork, a midday '),
        link('babi guling', '/blog/babi-guling-ubud-where-to-eat'),
        text(' feast.'),
      ]),
    ]),
  },
  {
    slug: 'ayam-betutu-recipe-bali',
    title: 'Ayam Betutu Recipe — Balinese Slow-Cooked Chicken (Home + Class)',
    excerpt:
      'Ayam betutu is chicken coated in base genep, wrapped in banana leaf and slow-cooked until falling apart. Full home-friendly recipe plus where to taste it in Bali.',
    image: 'blog/bumbu-ingredients.webp',
    imageAlt: 'Fresh Balinese spices for base genep used in ayam betutu',
    metaTitle: 'Ayam Betutu Recipe — Balinese Spiced Chicken',
    metaDescription:
      'Learn ayam betutu: Balinese chicken in base genep spice paste, wrapped in banana leaf and slow-cooked. Home oven method, tips, and cooking class link.',
    author: 'Chef Wayan',
    authorRole: 'Head Chef',
    authorBio:
      'Chef Wayan teaches base genep and ceremonial Balinese dishes to travellers in a village kitchen near Ubud.',
    articleSection: 'Recipes',
    keywords: [
      'ayam betutu recipe',
      'bebek betutu',
      'Balinese chicken recipe',
      'betutu Bali',
      'base genep chicken',
    ],
    faq: [
      {
        question: 'What is the difference between ayam betutu and bebek betutu?',
        answer:
          'Ayam betutu uses chicken; bebek betutu uses duck. Both are coated in rich Balinese spice paste, wrapped in banana leaf (and traditionally areca sheath), then slow-cooked until tender. Duck is gamier and often more ceremonial.',
      },
      {
        question: 'Can I make ayam betutu without banana leaves?',
        answer:
          'Banana leaves add aroma, but you can use parchment and foil in a covered Dutch oven or baking dish. The spice paste and low slow heat matter more than the leaf.',
      },
      {
        question: 'Is ayam betutu spicy?',
        answer:
          'It is aromatic and can be medium-hot depending on chili in the paste. Reduce bird’s-eye chilies for a milder version — easy to do in a private cooking class.',
      },
    ],
    content: root([
      paragraph([
        text('Search '),
        text('ayam betutu recipe', 1),
        text(' and you will find Bali’s slow-cooked, banana-leaf chicken — the dish locals recommend almost as often as babi guling. It is built on '),
        text('base genep', 1),
        text(', the complete spice paste. Here is a home-friendly method plus how we teach the flavours in Ubud.'),
      ]),
      heading('h2', 'What is ayam betutu?'),
      paragraph([
        text('Betutu means the bird is smothered in spice paste and cooked low and slow — traditionally in embers. Ayam = chicken; bebek betutu is the duck version. Hotels and warungs across Bali serve it; Gianyar is especially famous for betutu.'),
      ]),
      heading('h2', 'Ingredients (serves 4)'),
      heading('h3', 'Spice paste (base genep style)'),
      list([
        '8 shallots, 6 garlic cloves',
        '3 cm fresh turmeric, 3 cm galangal, 2 cm ginger, 2 cm kencur if available',
        '4–8 red chilies (to taste)',
        '3 candlenuts (or macadamia)',
        '1 tsp coriander seed, pinch of cumin, clove, nutmeg',
        '1 stalk lemongrass (white part), 3 kaffir lime leaves',
        '1 tsp shrimp paste (optional), salt, palm sugar, coconut oil',
      ]),
      heading('h3', 'Chicken'),
      list([
        '1 whole chicken (1.2–1.5 kg) or 8 bone-in thighs',
        'Banana leaves for wrapping (or parchment + foil)',
        'Extra salam / bay leaf if you have it',
      ]),
      heading('h2', 'Method'),
      list(
        [
          'Blend or grind the paste until smooth. Fry in coconut oil 5–8 minutes until fragrant and the raw smell is gone.',
          'Rub the paste all over and inside the chicken. Marinate at least 1 hour (overnight is better).',
          'Wrap tightly in banana leaf (or parchment/foil). Place in a baking dish with a splash of water.',
          'Oven: 150°C / 300°F for about 2 hours until meat pulls from the bone. Or steam 1.5–2 hours then crisp briefly in a hot pan.',
          'Rest 10 minutes. Serve with rice, sambal matah, and steamed greens.',
        ],
        true,
      ),
      heading('h2', 'Tips from the village kitchen'),
      list([
        'Do not rush the paste — frying it properly is half the flavour',
        'Thighs are more forgiving than breast for first-timers',
        'Make extra paste and freeze — it is the same base behind many Balinese dishes',
        'For vegan guests we use the same paste on tempeh or jackfruit in class',
      ]),
      heading('h2', 'Learn base genep properly'),
      paragraph([
        text('Betutu lives or dies on the paste. Deep dives: '),
        link('how to make base genep', '/blog/how-to-make-base-genep'),
        text(' and '),
        link('how to make bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text('. Related banana-leaf technique: '),
        link('pepes ikan recipe', '/recipes/pepes-ikan'),
        text('.'),
      ]),
      heading('h2', 'Cook it on your Bali trip'),
      paragraph([
        text('In our hands-on class you grind the paste on a cobek and cook related ceremonial flavours — then take recipes home. '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text(' or choose a '),
        link('private session', '/private-cooking-class-ubud'),
        text(' if you want to focus on betutu-style spices.'),
      ]),
    ]),
  },
  {
    slug: 'lawar-balinese-salad-recipe',
    title: 'Lawar Recipe — Balinese Ceremonial Salad (Vegetarian Option)',
    excerpt:
      'Lawar is Bali’s spiced chopped salad of coconut, vegetables and base genep. Learn lawar putih (no blood), a vegetarian version, and how it appears with babi guling.',
    image: 'blog/sambal-matah.jpg',
    imageAlt: 'Fresh shallots, chili and herbs — the aromatic base of Balinese lawar and sambal',
    metaTitle: 'Lawar Recipe — Balinese Salad (Veg Option)',
    metaDescription:
      'How to make Balinese lawar: chopped coconut salad with spices. Lawar putih, vegetarian lawar, what foreigners should know, and cooking class tips.',
    author: 'Chef Wayan',
    authorRole: 'Head Chef',
    authorBio:
      'Chef Wayan prepares ceremonial and everyday lawar with international guests, including vegetarian lawar putih.',
    articleSection: 'Recipes',
    keywords: [
      'lawar recipe',
      'lawar Bali',
      'vegetarian lawar',
      'Balinese salad',
      'lawar putih',
    ],
    faq: [
      {
        question: 'What is lawar?',
        answer:
          'Lawar is a Balinese mixture of finely chopped vegetables or young jackfruit, grated coconut, spice paste, and sometimes minced meat. Ceremonial lawar merah may include a little fresh blood; lawar putih omits blood and is what most visitors eat.',
      },
      {
        question: 'Is lawar vegetarian?',
        answer:
          'Traditional lawar often includes meat or blood. Ask for lawar sayur or lawar putih without meat. Vegetarian versions with young jackfruit, green beans, and coconut are common in Ubud and in our cooking class.',
      },
      {
        question: 'Is lawar very spicy?',
        answer:
          'Yes, it can be. Portions are small. Start with a spoonful beside rice. We tone down chili for foreign guests when asked.',
      },
    ],
    content: root([
      paragraph([
        text('Foreign travellers meet '),
        text('lawar', 1),
        text(' on babi guling plates and ceremonial feasts — a finely chopped, coconut-heavy “salad” that tastes nothing like Western salad. It is herbal, spicy, and built on base genep. Here is how to understand it, order it, and make a home version.'),
      ]),
      heading('h2', 'What is Balinese lawar?'),
      paragraph([
        text('Lawar mixes grated coconut, aromatics, and finely chopped vegetables or fruit (often green beans or young jackfruit) with spice paste. Meat versions add minced pork or chicken. Lawar merah (red) traditionally includes a small amount of fresh blood for colour and depth; '),
        text('lawar putih', 1),
        text(' (white) skips blood and is the safer first try for visitors.'),
      ]),
      heading('h2', 'Vegetarian lawar (lawar sayur)'),
      paragraph([
        text('For vegetarians and many foreigners, lawar sayur is the move: young jackfruit or long beans, roasted grated coconut, fried shallots, and a plant-based spice paste (skip shrimp paste / terasi or use a mushroom alternative). We cook this style in our '),
        link('vegetarian cooking class in Ubud', '/vegetarian-cooking-class-ubud'),
        text('.'),
      ]),
      heading('h2', 'Home recipe — lawar putih style (serves 4 as a side)'),
      list([
        '200g long beans or thinly sliced young jackfruit, blanched',
        '150g freshly grated coconut (or unsweetened desiccated, lightly toasted)',
        '3–4 tbsp cooked base genep / bumbu Bali',
        '2 kaffir lime leaves, finely sliced',
        'Fried shallots, lime juice, salt, palm sugar to taste',
        'Optional: minced cooked chicken for a non-veg version',
      ]),
      heading('h2', 'Method'),
      list(
        [
          'Blanch vegetables until just tender; drain and chop finely.',
          'Mix with coconut, warm spice paste, lime leaf, salt and a pinch of palm sugar.',
          'Adjust with lime juice — lawar should taste bright, not heavy.',
          'Serve immediately at room temperature beside rice. Do not make it hours ahead — coconut and aromatics fade.',
        ],
        true,
      ),
      heading('h2', 'Where foreigners taste lawar in Ubud'),
      paragraph([
        text('It appears as a scoop on '),
        link('babi guling', '/blog/babi-guling-ubud-where-to-eat'),
        text(' plates and as a side with '),
        link('nasi campur', '/blog/nasi-campur-bali-explained'),
        text('. If a server asks “lawar?”, and you are unsure about blood or meat, say “lawar putih, sayur”.'),
      ]),
      heading('h2', 'Spice paste first'),
      paragraph([
        text('Without good paste, lawar is just chopped coconut. Learn '),
        link('base genep', '/blog/how-to-make-base-genep'),
        text(' and '),
        link('bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text(' before you chase perfection at home.'),
      ]),
      heading('h2', 'Make lawar in our kitchen'),
      paragraph([
        text('Hands-on lawar (including vegetarian) is part of the spread guests cook with us. '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text(' — or read the full '),
        link('Ubud food guide', '/blog/ubud-food-guide-what-to-eat'),
        text(' for what to eat around town.'),
      ]),
    ]),
  },
  {
    slug: 'pepes-ikan-recipe-bali',
    title: 'Pepes Ikan Recipe — Balinese Fish in Banana Leaf',
    excerpt:
      'Pepes ikan is fish marinated in Balinese spices, wrapped in banana leaf, then steamed or grilled. A fragrant, foreigner-friendly recipe from Ubud cooking classes.',
    image: 'gallery-chopping.jpg',
    imageAlt: 'Chopping fresh herbs and spices for Balinese pepes ikan',
    metaTitle: 'Pepes Ikan Recipe — Fish in Banana Leaf',
    metaDescription:
      'Make pepes ikan: Balinese spiced fish wrapped in banana leaf. Ingredients, steam or grill method, vegetarian tofu option, and Ubud cooking class tips.',
    author: 'Chef Wayan',
    authorRole: 'Head Chef',
    authorBio:
      'Chef Wayan teaches banana-leaf techniques — pepes and related wraps — to travellers cooking in Bali for the first time.',
    articleSection: 'Recipes',
    keywords: [
      'pepes ikan recipe',
      'Balinese fish banana leaf',
      'pepes Bali',
      'grilled fish Bali recipe',
      'Indonesian pepes',
    ],
    faq: [
      {
        question: 'What is pepes ikan?',
        answer:
          'Pepes ikan is fish coated in spice paste, wrapped in banana leaf, then steamed or grilled. The leaf steams the fish in its own juices and adds aroma. It is common across Indonesia; the Balinese version leans on bumbu Bali and lemongrass.',
      },
      {
        question: 'Can I make pepes without a grill?',
        answer:
          'Yes. Steam the parcels 10–15 minutes or bake at 180°C / 350°F for 12–15 minutes depending on fillet thickness. Finish on a dry pan if you want light charring on the leaf.',
      },
      {
        question: 'What fish is best for pepes ikan?',
        answer:
          'Firm white fish — snapper, mahi-mahi, or mackerel. In class we also show a tofu or tempeh pepes for vegetarians.',
      },
    ],
    content: root([
      paragraph([
        text('Among recipes foreigners search after a Bali trip, '),
        text('pepes ikan', 1),
        text(' ranks high: spiced fish wrapped in banana leaf, steamed or grilled until fragrant. It looks impressive, tastes clean, and teaches the same paste logic as betutu and sate lilit.'),
      ]),
      heading('h2', 'Ingredients (4 parcels)'),
      list([
        '4 firm white fish fillets (150–200g each)',
        'Juice of 2 limes, salt',
        'Banana leaves (or parchment) cut into large rectangles',
        'Spice paste: shallots, garlic, turmeric, galangal, ginger, chilies, lemongrass, candlenut, coconut oil',
        'Basil or kemangi, spring onion, kaffir lime leaf',
      ]),
      heading('h2', 'Method'),
      list(
        [
          'Season fish with lime and salt.',
          'Fry the spice paste until fragrant; cool slightly; mix with sliced herbs.',
          'Spread paste on the leaf, add fish, top with more paste and herbs.',
          'Fold into a tight parcel; secure with toothpicks or string.',
          'Steam 10–15 minutes or grill/bake until fish flakes. Serve with rice and sambal matah.',
        ],
        true,
      ),
      heading('h2', 'Vegetarian pepes'),
      paragraph([
        text('Replace fish with thick tofu or tempeh slices. The banana-leaf method stays the same. Popular in our '),
        link('vegetarian cooking class', '/vegetarian-cooking-class-ubud'),
        text('.'),
      ]),
      heading('h2', 'Related Balinese techniques'),
      paragraph([
        text('If you like pepes, you will also like '),
        link('ayam betutu', '/blog/ayam-betutu-recipe-bali'),
        text(' (slow banana-leaf chicken) and '),
        link('sate lilit', '/blog/how-to-make-sate-lilit'),
        text('. The shared foundation is '),
        link('bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text('.'),
      ]),
      heading('h2', 'Cook pepes in Ubud'),
      paragraph([
        text('Banana-leaf wrapping is one of the most photogenic — and useful — skills in our kitchen. '),
        link('Book a cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' to buy the aromatics yourself, then wrap and steam the same morning.'),
      ]),
    ]),
  },
  {
    slug: 'balinese-vs-indonesian-food',
    title: 'Balinese Food vs Indonesian Food — What’s the Difference?',
    excerpt:
      'Foreign travellers often say “Indonesian food” in Bali — but Balinese cuisine is its own tradition. Spice pastes, pork, ceremonial dishes, and what that means for your trip.',
    image: 'blog/bumbu-guide-hero.webp',
    imageAlt: 'Traditional Balinese spice paste ingredients that distinguish Bali from other Indonesian cooking',
    metaTitle: 'Balinese vs Indonesian Food — Key Differences',
    metaDescription:
      'Balinese food vs Indonesian food explained for foreigners: base genep, babi guling, lawar, Hindu food culture, and why Ubud tastes different from Jakarta.',
    author: 'Tumang Bali Team',
    authorRole: 'Local Food Guide',
    authorBio:
      'We help international guests understand why food in Bali tastes different from the rest of Indonesia — before they cook it themselves.',
    articleSection: 'Culture',
    keywords: [
      'Balinese vs Indonesian food',
      'Balinese cuisine',
      'Indonesian food Bali',
      'what makes Balinese food different',
      'Bali food culture',
    ],
    faq: [
      {
        question: 'Is Balinese food the same as Indonesian food?',
        answer:
          'No. Balinese cuisine is one regional tradition within Indonesia. It uses distinctive spice pastes (base genep), features pork more often (Hindu majority), and includes ceremonial dishes like lawar and betutu that you will not eat the same way in Jakarta or Yogyakarta.',
      },
      {
        question: 'Why does food in Bali taste different from Java?',
        answer:
          'Balinese pastes lean heavily on fresh turmeric, kencur, and lemongrass. Javanese cooking often uses more sweet soy (kecap manis) and different sweetness–salt balances. Coastal Bali also emphasises fresh sambal matah on grilled seafood.',
      },
      {
        question: 'What should foreigners try that is uniquely Balinese?',
        answer:
          'Babi guling, sate lilit on lemongrass, lawar, sambal matah, and ayam/bebek betutu. Nasi goreng and sate with peanut sauce are pan-Indonesian — delicious, but not Bali-specific.',
      },
    ],
    content: root([
      paragraph([
        text('Foreign travellers often search “Indonesian food” while standing in Ubud — but '),
        text('Balinese food vs Indonesian food', 1),
        text(' is a real distinction. Indonesia has hundreds of regional cuisines. Bali’s is shaped by Hindu ceremony, village spice pastes, and dishes you simply will not find the same way in Jakarta.'),
      ]),
      heading('h2', 'The big differences at a glance'),
      list([
        'Spice paste: Bali’s base genep / bumbu Bali vs Java’s sweeter, kecap-leaning profiles',
        'Pork: common in Hindu Bali (babi guling); rarer in Muslim-majority regions',
        'Sambal: sambal matah (raw shallot–lemongrass) is a Bali signature',
        'Ceremony: lawar and betutu appear in temple and family rituals',
        'Everyday plate: nasi campur with distinctly Balinese sides',
      ]),
      heading('h2', 'Base genep — Bali’s flavour engine'),
      paragraph([
        text('If Indonesian food had regional “mother sauces,” Bali’s would be base genep: shallots, garlic, turmeric, galangal, kencur, chilies, candlenut, lemongrass, and warm spices. Learn it once and you understand warung food island-wide. Guides: '),
        link('base genep recipe', '/blog/how-to-make-base-genep'),
        text(' and '),
        link('bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text('.'),
      ]),
      heading('h2', 'Dishes that are uniquely Balinese'),
      paragraph([
        text('Prioritise these if you want Bali — not generic “Indo”: '),
        link('babi guling', '/blog/babi-guling-ubud-where-to-eat'),
        text(', '),
        link('sate lilit', '/blog/how-to-make-sate-lilit'),
        text(', '),
        link('lawar', '/blog/lawar-balinese-salad-recipe'),
        text(', '),
        link('sambal matah', '/blog/sambal-matah-recipe'),
        text(', '),
        link('ayam betutu', '/blog/ayam-betutu-recipe-bali'),
        text('.'),
      ]),
      heading('h2', 'What foreigners already know (pan-Indonesian)'),
      paragraph([
        text('Nasi goreng, mie goreng, gado-gado, and sate with peanut sauce appear all over the archipelago. Eat them — but do not stop there or you will miss what makes Bali different.'),
      ]),
      heading('h2', 'Religion and diet on the plate'),
      paragraph([
        text('Bali’s Hindu majority means pork and certain ceremonial foods are everyday culture. Muslim visitors and pork-avoiding travellers still eat extremely well: fish, chicken, tempeh, and vegetarian lawar. See '),
        link('what to eat in Ubud', '/blog/ubud-food-guide-what-to-eat'),
        text(' and the '),
        link('vegetarian Ubud guide', '/blog/vegetarian-guide-eating-ubud'),
        text('.'),
      ]),
      heading('h2', 'Taste the difference in a cooking class'),
      paragraph([
        text('The fastest way to feel the difference is to grind Balinese paste yourself and cook five or six village dishes in one morning. That is what we do at Tumang Bali — '),
        link('best cooking class in Ubud', '/blog/best-cooking-class-in-ubud'),
        text(', '),
        link('book now', '/book-your-cooking-class'),
        text('.'),
      ]),
    ]),
  },
]

function resolveImagePath(image: string): string {
  const candidates = [
    path.resolve(__dirname, 'public', 'images', image),
    path.resolve(__dirname, 'public', 'images', 'blog', image.replace(/^blog\//, '')),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  return candidates[0]
}

function mimeFor(filePath: string): string {
  if (filePath.endsWith('.webp')) return 'image/webp'
  if (filePath.endsWith('.png')) return 'image/png'
  return 'image/jpeg'
}

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

    const imgPath = resolveImagePath(art.image)
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
        mimetype: mimeFor(imgPath),
        name: `blog-${art.slug}${path.extname(imgPath)}`,
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
        author: art.author,
        authorRole: art.authorRole,
        authorBio: art.authorBio,
        featuredImage: media.id,
        excerpt: art.excerpt,
        content: art.content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
        meta: { title: art.metaTitle, description: art.metaDescription },
        articleSection: art.articleSection,
        keywords: art.keywords.map((keyword) => ({ keyword })),
        faq: art.faq,
      },
    })
    console.log(`Created "${art.slug}".`)
    created++
  }

  console.log(`Done. Created ${created}, skipped ${skipped}.`)
  process.exit(0)
}

const isDirectRun =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href

if (isDirectRun) {
  seed().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
