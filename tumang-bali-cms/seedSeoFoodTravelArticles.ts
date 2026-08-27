import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

// Idempotent: skips article slugs that already exist.
// Run with: npx tsx --env-file=.env seedSeoFoodTravelArticles.ts

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

const articles: ArticleSeed[] = [
  {
    slug: 'best-cooking-class-in-ubud',
    title: 'Best Cooking Class in Ubud (2026) — How to Choose the Right One',
    excerpt:
      'Searching for the best cooking class in Ubud? Compare what matters — market tours, group size, authenticity, and price — and see why village-based classes rank highest for food travelers.',
    image: 'blog/tumang-vibe.webp',
    imageAlt: 'Guests cooking in an authentic Balinese kitchen near Ubud during a morning class',
    metaTitle: 'Best Cooking Class in Ubud 2026 — How to Choose',
    metaDescription:
      'Looking for the best cooking class in Ubud? We compare market tours, group sizes, authenticity and price so you can book the right Balinese cooking experience in 2026.',
    author: 'Chef Wayan',
    authorRole: 'Head Chef',
    authorBio:
      'Born in a Balinese village near Ubud, Chef Wayan has taught thousands of travellers to cook authentic Balinese food since 2010.',
    articleSection: 'Travel Guide',
    keywords: [
      'best cooking class in Ubud',
      'best cooking class Ubud',
      'Ubud cooking class',
      'Balinese cooking class',
      'authentic cooking class Ubud',
    ],
    faq: [
      {
        question: 'What is the best cooking class in Ubud?',
        answer:
          'The best cooking class in Ubud includes a real morning market tour, hand-ground spice paste, 10+ dishes cooked from scratch, and a local Balinese chef — not a hotel demo kitchen. Village-based classes like Tumang Bali consistently rank highest for authenticity and value.',
      },
      {
        question: 'How much does the best cooking class in Ubud cost?',
        answer:
          'Quality Ubud cooking classes range from IDR 350,000 for a shared village class to IDR 650,000+ for a private session. Avoid classes under IDR 300K — they often skip the market or use premade spice jars.',
      },
      {
        question: 'Is Ubud the best place in Bali for a cooking class?',
        answer:
          'Yes. Ubud sits at the cultural heart of Bali with access to traditional markets, rice terraces, and family-run kitchens. Most travellers searching for the best cooking class in Bali end up in or near Ubud.',
      },
    ],
    content: root([
      paragraph([
        text('If you are Googling '),
        text('best cooking class in Ubud', 1),
        text(', you are not alone — it is one of the most searched experiences in Bali. But "best" depends on what you care about: a real market tour, small groups, hand-ground bumbu, or a photogenic kitchen. This guide breaks down how to choose, what to avoid, and where Tumang Bali fits in.'),
      ]),
      heading('h2', 'What makes the best cooking class in Ubud'),
      paragraph([
        text('After years of teaching guests from every continent, the classes people remember — and review five stars — share four things. Miss any one and the experience feels like a tourist demo rather than a genuine '),
        text('Balinese cooking class', 1),
        text('.'),
      ]),
      list([
        'A real morning market tour at a local pasar — not a walk past souvenir stalls in central Ubud',
        'Spice paste ground on a cobek (stone mortar), not scooped from a jar',
        '10 or more dishes cooked from scratch, including sate lilit, lawar, and sambal matah',
        'A local Balinese chef who lives in the village, not a hotel instructor reading from a card',
      ]),
      heading('h2', 'Best cooking class in Ubud — quick comparison'),
      paragraph([
        text('Ubud has dozens of options. The table below summarises how the main types compare. For a full side-by-side breakdown, see our '),
        link('compare Ubud cooking classes', '/compare-ubud-cooking-classes'),
        text(' page.'),
      ]),
      list([
        'Village-based (Tumang, Paon): market tour, rice-field walk, 10+ dishes, IDR 350K–650K — best for authenticity',
        'Central Ubud schools (Casa Luna, etc.): indoor kitchen, fewer dishes, IDR 600K–800K — best for convenience',
        'Resort/hotel classes: polished setting, adapted menu, IDR 900K+ — best for luxury travellers who want ease over depth',
      ]),
      heading('h2', 'Why village classes rank as the best cooking class in Ubud'),
      paragraph([
        text('Classes held in working villages — a short drive from central Ubud — tend to win on authenticity. You shop where locals shop, walk through active rice paddies on the subak irrigation system, and cook in an open-air warung with views of green terraces. That is the experience most food travelers came to Bali for.'),
      ]),
      paragraph([
        text('At Tumang Bali, the morning class starts with hotel pickup, a guided tour of the traditional market, a gentle rice-field walk, then two hours of hands-on cooking. You grind '),
        link('bumbu Bali', '/blog/how-to-make-bumbu-bali'),
        text(', wrap sate lilit around lemongrass, and plate lawar before sitting down to the feast you made. Afternoon sessions skip the market but keep the full cooking menu.'),
      ]),
      heading('h2', 'How to spot a class that is not worth booking'),
      list([
        'No market tour — you cannot learn Balinese cooking without seeing the ingredients first',
        'Groups of 20+ — you will watch more than you cook',
        'Premade spice paste — the soul of Balinese food is in the grinding',
        'Only 3–4 dishes — you will leave hungry and without real skills',
        'No recent reviews mentioning the chef by name',
      ]),
      heading('h2', 'Best cooking class in Ubud for different travellers'),
      paragraph([
        text('Solo travellers and couples often prefer a '),
        link('private cooking class', '/private-cooking-class-ubud'),
        text(' (IDR 650K for one person) so the kitchen is theirs alone. Families with kids love the shared morning class — children grind spices and wrap satay while adults handle the hot pans. Vegetarians should look for classes that adapt every dish; ours does at no extra cost.'),
      ]),
      paragraph([
        text('Food travelers building a Ubud itinerary should pair the class with our '),
        link('Ubud food-lovers itinerary', '/blog/ubud-food-lovers-itinerary'),
        text(' and '),
        link('morning market guide', '/blog/ubud-morning-market-guide'),
        text('. Still deciding? Read '),
        link('is a Bali cooking class worth it', '/blog/is-a-bali-cooking-class-worth-it'),
        text(' for an honest cost-benefit look.'),
      ]),
      heading('h2', 'Book the best cooking class in Ubud'),
      paragraph([
        text('Shared class from IDR 350,000. Private 1-person class IDR 650,000. Free Ubud pickup, recipe booklet included. '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text(' online or message us on WhatsApp for a private date.'),
      ]),
    ]),
  },
  {
    slug: 'best-cooking-class-in-bali',
    title: 'Best Cooking Class in Bali (2026) — Where to Book & Why Ubud Wins',
    excerpt:
      'Looking for the best cooking class in Bali? Most top-rated experiences are in Ubud. Here is how Bali classes compare by location, what to expect, and how to book an authentic one.',
    image: 'gallery-group.jpg',
    imageAlt: 'Group enjoying the best cooking class in Bali — hands-on Balinese dishes',
    metaTitle: 'Best Cooking Class in Bali 2026 — Where to Book',
    metaDescription:
      'Find the best cooking class in Bali for 2026. Compare Ubud, Seminyak and village options, see what is included, and book an authentic Balinese cooking experience.',
    author: 'Tumang Bali Team',
    authorRole: 'Local Food Guide',
    authorBio:
      'The Tumang Bali team has hosted food travelers from 80+ countries in our village kitchen near Ubud since 2010.',
    articleSection: 'Travel Guide',
    keywords: [
      'best cooking class in Bali',
      'best cooking class Bali',
      'Bali cooking class',
      'Balinese cooking experience',
      'Ubud cooking class Bali',
    ],
    faq: [
      {
        question: 'Where is the best cooking class in Bali?',
        answer:
          'The best cooking class in Bali is in the Ubud area — close to traditional markets, rice terraces, and village kitchens. Seminyak and Nusa Dua offer hotel-style classes, but they lack the market tour and village atmosphere that define authentic Balinese cooking.',
      },
      {
        question: 'How do I find the best cooking class in Bali on TripAdvisor?',
        answer:
          'Filter by "cooking class" in Ubud, read reviews from the last 12 months, and look for mentions of market tours, spice grinding, and the chef\'s name. Classes with 500+ reviews and consistent 5-star ratings for "authentic" are usually safe bets.',
      },
      {
        question: 'Can I do the best Bali cooking class from Seminyak or Canggu?',
        answer:
          'Yes. Most top classes offer pickup from the Ubud area free; from Canggu or Seminyak you can arrange extra transport or drive yourself. Morning classes require an early start — about 1–1.5 hours from the coast.',
      },
    ],
    content: root([
      paragraph([
        text('The '),
        text('best cooking class in Bali', 1),
        text(' is not always the most expensive — and it is rarely in a hotel lobby. Travellers who search this phrase usually want an authentic, hands-on day: market, spices, rice fields, and a meal they cooked themselves. Here is where to find that in 2026.'),
      ]),
      heading('h2', 'Why the best cooking class in Bali is near Ubud'),
      paragraph([
        text('Bali is an island, but almost every "best of" list points to Ubud and its surrounding villages. The reason is practical: Ubud has the traditional morning markets, the subak rice terraces, and family kitchens that have been cooking the same recipes for generations. Seminyak and Canggu have excellent restaurants, but their cooking classes tend to be shorter, indoor, and adapted for resort guests.'),
      ]),
      paragraph([
        text('Our full breakdown of the '),
        link('best cooking classes in Bali', '/best-cooking-classes-bali'),
        text(' compares ten options by authenticity, value, and location. Tumang Bali ranks highly because it combines a village setting with a real market tour and 10+ dishes — at IDR 350K for a shared class.'),
      ]),
      heading('h2', 'What the best cooking class in Bali includes'),
      list([
        'Hotel pickup and drop-off in the Ubud area',
        'Guided morning market tour (identify turmeric, galangal, kencur, salam leaf)',
        'Rice-field walk through working paddies',
        'Hands-on cooking of 10+ Balinese dishes',
        'Shared feast of everything you made',
        'Printed recipe booklet to take home',
      ]),
      heading('h2', 'Best cooking class in Bali by traveller type'),
      paragraph([
        text('Different travellers need different formats. Here is a quick match:'),
      ]),
      list([
        'First-time visitors: morning class with market tour — see our half-day guide',
        'Food travelers on a tight schedule: afternoon class (cook and dine, no market)',
        'Solo travellers: private 1-person class so you are not lost in a big group',
        'Families: shared class — kids love grinding spices and wrapping sate lilit',
        'Vegetarians/vegans: choose a class that adapts every dish, not just one token plate',
      ]),
      paragraph([
        text('See the dedicated pages: '),
        link('half-day cooking class Bali', '/half-day-cooking-class-bali'),
        text(', '),
        link('family cooking class Bali', '/family-cooking-class-bali'),
        text(', and '),
        link('vegetarian cooking class Ubud', '/vegetarian-cooking-class-ubud'),
        text('.'),
      ]),
      heading('h2', 'Bali cooking class locations compared'),
      paragraph([
        text('Not all "Bali cooking class" results are equal. Central Ubud studios are convenient but often larger and more commercial. Village classes in Tumang, Payangan, or Batubulan require a short drive but deliver the atmosphere that earns "best cooking class in Bali" reviews. Resort classes in Nusa Dua suit luxury travellers who prioritise comfort over depth.'),
      ]),
      heading('h2', 'Price guide for the best cooking class in Bali (2026)'),
      paragraph([
        text('Expect IDR 350,000–450,000 for a quality shared village class, IDR 600,000–800,000 for central Ubud schools, and IDR 650,000+ for a private session. Our pricing breakdown: '),
        link('Ubud cooking class price 2026', '/blog/ubud-cooking-class-price'),
        text('. Anything dramatically cheaper usually cuts the market tour or uses premade ingredients.'),
      ]),
      heading('h2', 'Book the best cooking class in Bali'),
      paragraph([
        text('Ready to cook? Start with our '),
        link('authentic Balinese cooking class', '/authentic-balinese-cooking-class'),
        text(' overview, then '),
        link('book online', '/book-your-cooking-class'),
        text('. Coming from Canggu? Read '),
        link('cooking class Ubud from Canggu', '/blog/cooking-class-ubud-from-canggu'),
        text(' for transport tips.'),
      ]),
    ]),
  },
  {
    slug: 'bali-cooking-class-for-food-travelers',
    title: 'Bali Cooking Class for Food Travelers — What to Eat, Cook & Book',
    excerpt:
      'Planning a food-focused trip to Bali? A cooking class is the anchor experience every culinary traveler needs. Market tours, dishes to cook, and how to build your Ubud food itinerary.',
    image: 'blog/tumang-market.webp',
    imageAlt: 'Food traveler exploring a traditional Ubud morning market before a cooking class',
    metaTitle: 'Bali Cooking Class for Food Travelers | Ubud Guide',
    metaDescription:
      'Food traveler heading to Bali? A cooking class in Ubud is the must-do culinary experience. Market tours, 10+ dishes, itinerary tips, and how to book an authentic class.',
    author: 'Tumang Bali Team',
    authorRole: 'Local Food Guide',
    authorBio:
      'We guide food travelers through Balinese markets and village kitchens daily — from first-time visitors to repeat culinary tourists.',
    articleSection: 'Travel Guide',
    keywords: [
      'food traveler Bali',
      'culinary travel Bali',
      'Bali food trip',
      'Ubud food travel',
      'Bali cooking class food lovers',
    ],
    faq: [
      {
        question: 'Is a cooking class essential for food travelers in Bali?',
        answer:
          'For culinary travelers, yes — it is the single best way to connect restaurant meals with the ingredients and techniques behind them. You will shop at a local market, learn spice combinations, and eat a feast you cooked. No restaurant tour replaces that hands-on depth.',
      },
      {
        question: 'What dishes should food travelers cook in Bali?',
        answer:
          'Prioritise classes that cover sate lilit, lawar, urap, sambal matah, pepes ikan, and base genep (spice paste). These are the dishes you cannot easily replicate at home without learning the bumbu first.',
      },
      {
        question: 'How many days should a food traveler spend in Ubud?',
        answer:
          'Two to three days minimum. Day 1: morning cooking class + market. Day 2: explore Ubud warungs and coffee. Day 3: optional second class or day trip to a spice farm. See our 2-day food-lovers itinerary for a full plan.',
      },
    ],
    content: root([
      paragraph([
        text('If you identify as a '),
        text('food traveler', 1),
        text(' — someone who plans trips around markets, street food, and local kitchens — Bali belongs on your list. And within Bali, a '),
        text('cooking class in Ubud', 1),
        text(' is the experience that ties everything together: the morning market, the spice paste, the rice terraces, and a lunch you made with your own hands.'),
      ]),
      heading('h2', 'Why food travelers book a Bali cooking class first'),
      paragraph([
        text('Restaurants show you the finished dish. A cooking class shows you the journey: which chilies to pick at the market, how much turmeric goes into base genep, why Balinese food tastes different from Indonesian food elsewhere. Food travelers who take a class early in their trip eat better for the rest of it — they recognise bumbu on the plate, know what to order, and appreciate the labour behind a simple lawar.'),
      ]),
      paragraph([
        text('At Tumang Bali, the morning session is built for curious eaters. We start at a traditional pasar where vendors sell ingredients you will not find in a Western supermarket — fresh turmeric root, kencur (lesser galangal), salam leaves, and shrimp paste wrapped in banana leaf. You carry some of it to the kitchen. That market-to-table arc is what separates a food travel experience from a tourist activity.'),
      ]),
      heading('h2', 'Build your Ubud food travel itinerary around the class'),
      paragraph([
        text('Smart food travelers anchor their Ubud days around the cooking class. Our suggested flow:'),
      ]),
      list(
        [
          'Day 1 morning: cooking class with market tour (08:30 pickup) — finishes around 13:00 with a big lunch',
          'Day 1 afternoon: explore Ubud warungs — try babi guling or nasi campur with new understanding',
          'Day 2: visit a coffee plantation (luwak or standard), then Seniman Coffee or another specialty roaster',
          'Day 2 evening: fine dining at Locavore, Mozaic, or a traditional Bebek Bengil feast',
        ],
        true,
      ),
      paragraph([
        text('For a complete plan, see our '),
        link('2-day Ubud food-lovers itinerary', '/blog/ubud-food-lovers-itinerary'),
        text(' and '),
        link('vegetarian guide to eating in Ubud', '/blog/vegetarian-guide-eating-ubud'),
        text('.'),
      ]),
      heading('h2', 'Dishes every food traveler should cook in Bali'),
      paragraph([
        text('Not all class menus are equal. Food travelers should prioritise classes covering these Balinese essentials:'),
      ]),
      list([
        'Base genep / bumbu Bali — the master spice paste behind most savoury dishes',
        'Sate lilit — minced satay wrapped on lemongrass, grilled over charcoal',
        'Lawar — finely chopped vegetables and coconut with spice paste',
        'Sambal matah — raw Balinese sambal with shallot, chili, and lemongrass',
        'Pepes ikan — fish steamed in banana leaf with spices',
        'Dadar gulung — pandan coconut pancakes for dessert',
      ]),
      paragraph([
        text('Full dish list from our class: '),
        link('10 dishes you cook in a Balinese cooking class', '/blog/dishes-you-cook-balinese-cooking-class'),
        text('.'),
      ]),
      heading('h2', 'Food traveler tips for the Ubud morning market'),
      paragraph([
        text('The market tour is where food travelers get the most value. Ask your guide to explain ingredients you have never seen. Smell the fresh turmeric. Watch how locals select fish. Bring small cash if you want to buy spices or coffee to take home. Our detailed guide: '),
        link('Ubud morning market guide', '/blog/ubud-morning-market-guide'),
        text('.'),
      ]),
      heading('h2', 'Best cooking class format for food travelers'),
      paragraph([
        text('Book the '),
        link('morning class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' if this is your first Bali trip — it is the fullest experience. Returning food travelers often choose a '),
        link('private class', '/private-cooking-class-ubud'),
        text(' to go deeper on bumbu technique or request specific regional dishes. Shared class IDR 350K; private 1-person IDR 650K.'),
      ]),
      heading('h2', 'Book your food travel cooking class'),
      paragraph([
        text('Ready to eat Bali properly? '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text(' or read '),
        link('what to expect on the day', '/blog/what-to-expect-bali-cooking-class'),
        text(' before you go.'),
      ]),
    ]),
  },
  {
    slug: 'bali-cooking-class-for-content-creators',
    title: 'Bali Cooking Class for Food Bloggers & Content Creators',
    excerpt:
      'Food bloggers, Instagram creators, and TikTok filmmakers — a Bali cooking class is one of the highest-engagement experiences you can shoot. Tips for filming, best angles, and what to book.',
    image: 'blog/bumbu-action-shot.webp',
    imageAlt: 'Food content creator filming spice grinding during a Balinese cooking class in Ubud',
    metaTitle: 'Bali Cooking Class for Food Bloggers & Creators',
    metaDescription:
      'Food content creator visiting Bali? A cooking class in Ubud delivers market B-roll, spice-grinding action shots, and a feast finale. Tips for filming and booking a creator-friendly class.',
    author: 'Tumang Bali Team',
    authorRole: 'Culinary Expert',
    authorBio:
      'We welcome food bloggers and content creators to our village kitchen — many of our guest reels have reached millions of views.',
    articleSection: 'Travel Guide',
    keywords: [
      'food content creator Bali',
      'food blogger Bali cooking class',
      'Instagram cooking class Bali',
      'TikTok Bali food content',
      'Bali cooking class photography',
    ],
    faq: [
      {
        question: 'Can I film a cooking class in Bali for Instagram or TikTok?',
        answer:
          'Yes. Most village cooking classes allow phones and cameras throughout. Ask when booking if you need a tripod or ring light — private classes give you more space and time for setup without blocking other guests.',
      },
      {
        question: 'What is the best Bali cooking class for food content creators?',
        answer:
          'Choose a class with a morning market tour (great B-roll), outdoor rice-field setting (natural light), and hands-on spice grinding (satisfying close-ups). Village classes near Ubud offer the most photogenic backdrops.',
      },
      {
        question: 'Do I need a private class to film content?',
        answer:
          'Not necessarily, but private classes (from IDR 650K for 1 person) let you control pacing, retake shots, and ask the chef to repeat a step for camera. Shared classes work fine for casual Stories and Reels.',
      },
    ],
    content: root([
      paragraph([
        text('If you are a '),
        text('food content creator', 1),
        text(' — food blogger, Instagram reel maker, TikTok filmmaker, or YouTube travel channel — a '),
        text('Bali cooking class', 1),
        text(' is one of the highest-ROI experiences on the island. It delivers market B-roll, action shots of spice grinding, sizzling wok footage, and a colourful feast finale in a single half-day. Here is how to plan it for maximum content output.'),
      ]),
      heading('h2', 'Why food content creators love Bali cooking classes'),
      paragraph([
        text('Bali cooking classes are content gold because they combine multiple visual beats in one session: the chaotic energy of a morning market, the tactile satisfaction of grinding bumbu on a stone mortar, steam rising from a wok, and a table full of 10+ colourful dishes at the end. Unlike a restaurant shoot, you have access to the entire process — and a local chef who can explain ingredients on camera.'),
      ]),
      paragraph([
        text('Our village kitchen near Ubud offers open-air cooking with rice paddies in the background — natural light, green tones, and no hotel fluorescent overhead. The morning market tour alone can fill 60 seconds of Reel content before you even reach the kitchen.'),
      ]),
      heading('h2', 'Best shots for food bloggers and creators'),
      list([
        'Market: close-ups of turmeric, chilies, and unfamiliar spices; vendor interactions; cash transactions',
        'Rice fields: wide establishing shots walking through green paddies',
        'Spice grinding: overhead cobek shots, slow-motion pestle strikes, colour transformation of the paste',
        'Cooking: wok flames, sate lilit on charcoal, banana-leaf wrapping for pepes',
        'Plating: overhead flat-lay of the full spread before eating',
        'Reaction: first bite of sambal matah — genuine heat reactions perform well on TikTok',
      ]),
      heading('h2', 'Shared vs private class for content creation'),
      paragraph([
        text('Shared classes (IDR 350K) work well for casual Stories, quick Reels, and phone-only shooting. You will have other guests in frame — which can add energy — but less control over pacing.'),
      ]),
      paragraph([
        text('A '),
        link('private cooking class', '/private-cooking-class-ubud'),
        text(' (IDR 650K for 1 person) is worth it if you need: tripod setup without blocking others, the chef to repeat a step for a second take, custom dish requests for your niche (vegan, seafood-only), or extended time at the market. Many food bloggers book private sessions specifically for this flexibility.'),
      ]),
      heading('h2', 'Filming tips from our kitchen'),
      list([
        'Book the morning class — best natural light and the market tour adds 30+ minutes of content',
        'Charge batteries and bring a portable power bank — there are no outlets in the rice fields',
        'Ask the chef to explain ingredients to camera — authentic voiceover beats scripted VO',
        'Shoot vertical for Reels/TikTok and horizontal for YouTube — both work in our open kitchen',
        'The feast finale is your thumbnail — shoot overhead before anyone picks up a fork',
      ]),
      paragraph([
        text('More filming-specific advice: '),
        link('filming a Bali cooking class for Instagram and TikTok', '/blog/filming-bali-cooking-class-instagram-tiktok'),
        text('.'),
      ]),
      heading('h2', 'Content ideas that perform well'),
      list([
        '"POV: you learn to make sambal matah in Bali" — short, punchy, relatable',
        '"Ingredients you will only find at a Balinese market" — educational hook',
        '"I cooked 10 dishes in 3 hours in Ubud" — challenge format',
        '"Balinese bumbu vs Thai curry paste" — comparison for food nerd audiences',
        '"What a Bali cooking class actually costs" — links to our price guide',
      ]),
      heading('h2', 'Collaborations and press visits'),
      paragraph([
        text('We welcome food bloggers and creators with engaged audiences. Message us on WhatsApp or Instagram (@tumangbali_) with your channel link, follower count, and proposed content format. We cannot guarantee complimentary visits but prioritise creators who align with authentic Balinese food culture.'),
      ]),
      heading('h2', 'Book a creator-friendly cooking class'),
      paragraph([
        text('Shared or private — '),
        link('book your cooking class', '/book-your-cooking-class'),
        text('. See all '),
        link('dishes you will cook', '/blog/dishes-you-cook-balinese-cooking-class'),
        text(' for menu planning your content.'),
      ]),
    ]),
  },
  {
    slug: 'filming-bali-cooking-class-instagram-tiktok',
    title: 'How to Film a Bali Cooking Class for Instagram & TikTok',
    excerpt:
      'Practical filming guide for food creators: best angles at the Ubud market, spice-grinding shots, lighting tips, and how to structure a Reel or TikTok from a half-day cooking class.',
    image: 'gallery-chopping.jpg',
    imageAlt: 'Overhead shot of hands chopping ingredients during a Bali cooking class — ideal for Instagram Reels',
    metaTitle: 'Film a Bali Cooking Class for Instagram & TikTok',
    metaDescription:
      'Food creator guide to filming a Bali cooking class: market B-roll, spice-grinding close-ups, Reel structure, and booking a private class in Ubud for better shots.',
    author: 'Tumang Bali Team',
    authorRole: 'Culinary Expert',
    authorBio:
      'Our kitchen has been the backdrop for hundreds of food Reels and TikToks — here is what we have learned about shooting in a village setting.',
    articleSection: 'Cooking Tips',
    keywords: [
      'film Bali cooking class',
      'Instagram Reel cooking class Bali',
      'TikTok Bali food',
      'cooking class content creation',
      'Bali food photography tips',
    ],
    faq: [
      {
        question: 'What gear do I need to film a Bali cooking class?',
        answer:
          'A smartphone with a good camera is enough for Reels and TikTok. Add a mini tripod or gimbal for stable market shots. A wireless lapel mic helps capture the chef\'s voice over wok noise. No professional camera required.',
      },
      {
        question: 'How long should a cooking class Reel be?',
        answer:
          '30–60 seconds for TikTok and Reels. Structure: 3-second market hook, 5 seconds of spice grinding, 10 seconds of cooking action, 5 seconds of the feast reveal, 3 seconds of reaction. Use trending audio or the chef\'s natural voice.',
      },
      {
        question: 'Can I use a drone at a Bali cooking class?',
        answer:
          'Drones are generally not suitable at village cooking classes — small space, other guests, and rice-field regulations. Stick to phone and handheld camera for the best results.',
      },
    ],
    content: root([
      paragraph([
        text('A half-day '),
        text('Bali cooking class', 1),
        text(' can produce enough footage for three Reels, two TikToks, and a carousel post — if you plan your shots. This guide is for '),
        text('food content creators', 1),
        text(' who want practical filming advice, not generic travel tips. We run classes near Ubud daily and see what footage performs.'),
      ]),
      heading('h2', 'Reel and TikTok structure that works'),
      paragraph([
        text('The highest-performing cooking class videos follow a simple arc:'),
      ]),
      list(
        [
          'Hook (0–3 sec): the most visual moment — chilli pile at the market, or steam from the wok',
          'Context (3–8 sec): "I\'m at a cooking class in Ubud, Bali" text overlay or voiceover',
          'Process (8–40 sec): quick cuts of market → grinding → cooking → plating',
          'Payoff (40–55 sec): overhead shot of the full meal spread',
          'CTA (55–60 sec): "Save this for your Bali trip" or "Link in bio to book"',
        ],
        true,
      ),
      heading('h2', 'Filming at the Ubud morning market'),
      paragraph([
        text('The market is your best B-roll location. Arrive ready to shoot:'),
      ]),
      list([
        'Shoot in 4K if your phone allows — you will crop to vertical later',
        'Get macro shots of turmeric being sliced, chilies in baskets, and banana-leaf packets',
        'Film the chef pointing at ingredients and explaining names — great for educational content',
        'Capture ambient sound: vendors calling, knives chopping, motorbikes passing',
        'Keep shots under 3 seconds each — you will cut fast in editing',
      ]),
      heading('h2', 'Best cooking class shots for Instagram'),
      paragraph([
        text('These angles consistently get saves and shares:'),
      ]),
      list([
        'Overhead cobek shot: spice paste mid-grind, hands visible, stone texture in frame',
        'Sate lilit on charcoal: flames licking the lemongrass stalk, smoke rising',
        'Banana-leaf wrapping: hands folding pepes ikan — satisfying ASMR potential',
        'Feast flat-lay: all 10+ dishes on banana leaf, shot from directly above before eating',
        'Sambal reaction: genuine first taste of sambal matah — authenticity beats performance',
      ]),
      heading('h2', 'Lighting and timing tips'),
      paragraph([
        text('Book the '),
        link('morning cooking class', '/cooking-class-with-market-tour-ubud'),
        text(' for the best natural light. The kitchen is open-air with rice paddies behind — golden light hits between 09:00 and 11:00. Avoid afternoon classes if lighting is your priority (though afternoon works fine for warm, moody tones). Overcast days are actually ideal: even light, no harsh shadows on food.'),
      ]),
      heading('h2', 'Private class vs shared for filming'),
      paragraph([
        text('If you need multiple takes, tripod setup, or extended market time, book a '),
        link('private cooking class in Ubud', '/private-cooking-class-ubud'),
        text(' (IDR 650K for 1 person). Shared classes (IDR 350K) are fine for run-and-gun phone shooting but you cannot block the group for retakes. Many TikTok food creators specifically book private sessions for this reason.'),
      ]),
      heading('h2', 'Editing and posting tips'),
      list([
        'Cut on the beat — match spice-grinding strikes to music drops',
        'Use captions for ingredient names — many viewers will not recognise kencur or salam leaf',
        'Post the feast shot as a carousel cover — it gets the most saves',
        'Tag location as Ubud, Bali for local discovery',
        'Link to your blog post or the class booking page in bio',
      ]),
      heading('h2', 'Book a filming-friendly cooking class'),
      paragraph([
        text('Ready to shoot? '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text('. For creator-specific questions, DM us on Instagram. More context for food travelers: '),
        link('Bali cooking class for content creators', '/blog/bali-cooking-class-for-content-creators'),
        text(' and '),
        link('Bali cooking class for food travelers', '/blog/bali-cooking-class-for-food-travelers'),
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

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
