import {
  type ArticleSeed,
  commercialClose,
  heading,
  link,
  list,
  paragraph,
  root,
  text,
} from './lexicalArticleHelpers'

const TEAM = {
  author: 'Tumang Bali Team',
  authorRole: 'Local Food & Travel Guide',
  authorBio:
    'We run family cooking classes in Tumang village near Ubud and help thousands of foreign travellers plan food-focused days in Bali each year.',
}

/** Source of truth for the foreign-search (Bali trip planning) article cluster.
 *  Rendered as static pages under /blog and reused by the CMS seed script. */
export const foreignSearchArticleSeeds: ArticleSeed[] = [
  // 1 — Bali villas
  {
    slug: 'bali-villas-guide-where-to-stay',
    title: 'Bali Villas — Where to Stay & What to Book Near Ubud',
    excerpt:
      'Searching Bali villas for your trip? Compare Ubud jungle villas, Seminyak beach houses, and Canggu surf stays — plus the best day trip to add from any villa base.',
    image: 'blog/tumang-vibe.webp',
    imageAlt: 'Guests leaving a Ubud-area villa for a morning Balinese cooking class',
    metaTitle: 'Bali Villas Guide — Where to Stay & Day Trips',
    metaDescription:
      'Bali villas explained: best areas for foreigners, price ranges, villa vs resort, and why a village cooking class is the top day trip from your Ubud or Canggu villa.',
    articleSection: 'Trip Planning',
    keywords: ['Bali villas', 'villa rental Bali', 'Ubud villa', 'where to stay Bali', 'luxury villa Bali'],
    faq: [
      {
        question: 'Where are the best Bali villas for first-time visitors?',
        answer:
          'Ubud suits culture and food lovers; Seminyak and Canggu suit beach and nightlife. Many foreigners book 3–4 nights in a villa near Ubud, then move south. Tumang Bali offers free pickup in the Ubud area for cooking classes.',
      },
      {
        question: 'How much do Bali villas cost per night?',
        answer:
          'Budget villas start around USD 80–120; mid-range pool villas USD 150–300; luxury beachfront villas USD 400+. Cooking classes (IDR 506,370 shared) are one of the best-value cultural experiences to pair with a villa stay.',
      },
      {
        question: 'Can I book a cooking class if I stay in a villa outside Ubud?',
        answer:
          'Yes. We pick up free in central Ubud. From Canggu or Seminyak villas, guests often combine the morning class with an Ubud day — see our Canggu transport guide or book a private class for flexible timing.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali villas', 1),
        text(' are the highest-volume accommodation search for foreigners planning a trip — and for good reason. Private pools, open-air living, and staff who know the island beat a standard hotel room for families, couples, and remote-work groups. But "villa" covers everything from a one-bedroom in the rice fields to a cliffside estate in Uluwatu. This guide helps you choose an area, budget realistically, and plan the experiences that make a villa week memorable — starting with the one day trip almost every food-loving guest books.'),
      ]),
      heading('h2', 'Best areas for Bali villas'),
      list([
        'Ubud & Payangan — jungle views, culture, markets; ideal if food and temples are your focus',
        'Canggu — surf, cafés, digital-nomad vibe; 45–75 min to Ubud for a morning cooking class',
        'Seminyak — upscale dining and beach clubs; villa + day trip to Ubud works well',
        'Sanur & Nusa Dua — calmer coast, resort-adjacent; book transport for inland experiences',
        'Uluwatu & Bukit — clifftop luxury; plan full-day drives for Ubud activities',
      ]),
      paragraph([
        text('If your villa search started with "luxury" or "beachfront," you may still want one inland day. Our '),
        link('Ubud food-lovers itinerary', '/blog/ubud-food-lovers-itinerary'),
        text(' centres on a '),
        link('morning cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' — the single most-booked experience among villa guests who message us from Seminyak and Canggu.'),
      ]),
      heading('h2', 'Villa vs resort — what foreigners actually choose'),
      paragraph([
        text('Resorts bundle breakfast, kids\' clubs, and beach access. Villas give privacy and kitchen space — perfect if you want to recreate dishes after a '),
        link('Balinese cooking class', '/balinese-cooking-class-ubud'),
        text('. Many villa managers can arrange drivers; we include Ubud pickup on the class itself so you do not pay extra on the day.'),
      ]),
      heading('h2', 'Planning your villa week around food'),
      paragraph([
        text('Book the cooking class early in your trip. You will shop the morning market, learn what goes into bumbu and lawar, and eat a feast you cooked — then use that knowledge at warungs and villa BBQs for the rest of your holiday. See '),
        link('where to stay for a cooking class', '/where-to-stay-bali-cooking-class'),
        text(' for villa zones with the easiest pickup.'),
      ]),
      ...commercialClose(
        'Staying in a Bali villa? Block one morning for market, rice fields, and 10+ dishes — the experience villa guests rate highest in our reviews.',
      ),
    ]),
  },

  // 2 — Best time to visit Bali (head term)
  {
    slug: 'best-time-to-visit-bali',
    title: 'Best Time to Visit Bali — Dry Season, Crowds & What to Book',
    excerpt:
      'When is the best time to visit Bali? Dry season (April–October) vs wet season (November–March), peak crowds, and the Ubud experiences worth reserving in advance.',
    image: 'blog/best-time.jpg',
    imageAlt: 'Green rice terraces near Ubud during Bali dry season',
    metaTitle: 'Best Time to Visit Bali 2026 — Seasons & Planning',
    metaDescription:
      'Best time to visit Bali: month-by-month weather, dry vs wet season, Nyepi dates, and why booking a cooking class early matters in July–August peak season.',
    articleSection: 'Trip Planning',
    keywords: ['best time to visit Bali', 'Bali dry season', 'Bali wet season', 'when to visit Ubud', 'Bali weather'],
    faq: [
      {
        question: 'What is the best time to visit Bali for good weather?',
        answer:
          'April through October is dry season — sunny days, lower humidity, best for beaches and outdoor tours. September and early October often offer dry weather with fewer crowds than July–August.',
      },
      {
        question: 'Is wet season a bad time to visit Bali?',
        answer:
          'No. November–March brings short afternoon rains and lush scenery. Morning activities like cooking classes and temple visits work year-round; prices and crowds are lower.',
      },
      {
        question: 'When should I book a cooking class in Bali peak season?',
        answer:
          'Book 1–2 weeks ahead for July–August and Christmas. Tumang Bali runs morning and afternoon sessions year-round; shared classes fill first because groups are capped at 8 guests.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('The '),
        text('best time to visit Bali', 1),
        text(' depends on whether you prioritise sunshine, low prices, or thin crowds. Most foreigners search this before they book flights — so here is a practical month-by-month view, plus what to reserve early so your Ubud days are not sold out.'),
      ]),
      heading('h2', 'Dry season vs wet season'),
      paragraph([
        text('Dry season runs roughly April to October: less rain, busy beaches, higher villa and flight prices. Wet season (November–March) means warm tropical showers, often in the afternoon, and the greenest rice terraces around Ubud. Neither season "ruins" a trip — it changes timing. Mornings stay clear even in January.'),
      ]),
      heading('h2', 'Month-by-month snapshot'),
      list([
        'April–June: sweet spot — dry, green, moderate crowds',
        'July–August: peak season; book cooking classes and popular villas early',
        'September–October: still dry, fewer tourists, strong value',
        'November–March: wetter, cheaper; perfect for cultural indoor/outdoor mix days',
      ]),
      paragraph([
        text('For a deeper Ubud-specific breakdown see '),
        link('best time to visit Bali and Ubud', '/blog/best-time-to-visit-bali-ubud'),
        text('. Whatever month you choose, a '),
        link('half-day cooking class', '/half-day-cooking-class-bali'),
        text(' fits morning or afternoon and runs in rain or shine.'),
      ]),
      heading('h2', 'Events that affect your dates'),
      paragraph([
        text('Nyepi (Day of Silence) closes the airport for 24 hours — plan around it. Galungan and Kuningan bring beautiful temple ceremonies and extra traffic. Read our '),
        link('Nyepi guide', '/blog/bali-day-of-silence-nyepi'),
        text(' before you lock flights.'),
      ]),
      ...commercialClose(
        'High season or low, a morning market tour and cooking class is the most reliable "great day" on any Bali calendar — book your slot before you fly.',
      ),
    ]),
  },

  // 3 — Things to do in Bali
  {
    slug: 'things-to-do-in-bali',
    title: 'Things to Do in Bali — Top Experiences for Foreign Travellers',
    excerpt:
      'The best things to do in Bali: temples, rice terraces, beaches, and the cultural experience foreigners book most — a hands-on Balinese cooking class in Ubud.',
    image: 'blog/best-things-to-do-in-ubud.webp',
    imageAlt: 'Travellers cooking Balinese food during a top things to do in Bali experience',
    metaTitle: 'Things to Do in Bali — Top Experiences 2026',
    metaDescription:
      'Things to do in Bali for foreigners: Ubud culture, beaches, waterfalls, and why a village cooking class ranks among the best half-day activities on the island.',
    articleSection: 'Trip Planning',
    keywords: ['things to do in Bali', 'Bali activities', 'Ubud things to do', 'Bali experiences', 'what to do Bali'],
    faq: [
      {
        question: 'What are the must-do things in Bali for first-time visitors?',
        answer:
          'Most lists include Tanah Lot or Uluwatu temples, Tegallalang rice terraces, and at least one cultural experience. A Balinese cooking class with market tour combines food, village life, and hands-on learning in one half-day.',
      },
      {
        question: 'Is a cooking class one of the best things to do in Bali?',
        answer:
          'Yes — especially for food-focused travellers. Unlike a passive tour, you shop local ingredients, grind spice paste, and eat what you cook. Tumang Bali is rated Travelers\' Choice 2026 with 1500+ reviews.',
      },
      {
        question: 'How long do the best Bali activities take?',
        answer:
          'Cooking classes run 3–4 hours (morning with market tour). Temples and rice fields are 1–2 hours each. Plan one major experience per day given Bali traffic.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Things to do in Bali', 1),
        text(' span surf breaks, cliff temples, waterfall hikes, and beach clubs — but the experiences foreigners remember longest usually involve people and food. This guide ranks the activities that match how most visitors actually travel, and where a village cooking class fits on any itinerary.'),
      ]),
      heading('h2', 'Culture & food — the Ubud cluster'),
      list([
        'Balinese cooking class with morning market tour — hands-on, edible, shareable',
        'Tegallalang or Jatiluwih rice terraces — best after you understand subak irrigation from class',
        'Ubud Monkey Forest and Saraswati Temple — pair with an afternoon cook session',
        'Traditional dance performances — evening option after a morning class',
      ]),
      paragraph([
        text('Our '),
        link('best things to do in Ubud', '/blog/things-to-do-in-ubud'),
        text(' list goes deeper on local picks. For island-wide planning, start with '),
        link('best cooking class in Bali', '/blog/best-cooking-class-in-bali'),
        text(' — most "things to do" searches end up here for at least one food day.'),
      ]),
      heading('h2', 'Coast & adventure'),
      paragraph([
        text('South Bali delivers beaches, diving, and nightlife. North and west Bali offer quieter shores. Wherever you base, one inland day in Ubud balances the trip. Guests from Canggu often book our '),
        link('cooking class from Canggu', '/blog/cooking-class-ubud-from-canggu'),
        text(' guide for transport tips.'),
      ]),
      heading('h2', 'How to build a 5-day Bali plan'),
      list([
        'Day 1–2: South coast arrival, beach, adjust to time zone',
        'Day 3: Ubud — morning cooking class, rice terraces, evening warung crawl',
        'Day 4: Temple or waterfall day',
        'Day 5: Spa, shopping, or repeat your favourite meal',
      ]),
      ...commercialClose(
        'If you only add one "things to do in Bali" booking, make it a morning class — market, rice fields, sate lilit, and lawar on one plate you made yourself.',
      ),
    ]),
  },

  // 4 — Bali resorts
  {
    slug: 'bali-resorts-guide',
    title: 'Bali Resorts — Family, Luxury & All-Inclusive Options',
    excerpt:
      'Comparing Bali resorts for families and luxury travellers — Nusa Dua, Sanur, Ubud hills — and the best cultural day trip resort guests book outside the property.',
    image: 'gallery-group.jpg',
    imageAlt: 'Resort guests enjoying a Balinese cooking class day trip from Nusa Dua',
    metaTitle: 'Bali Resorts Guide — Family & Luxury Stays',
    metaDescription:
      'Bali resorts compared: Nusa Dua family resorts, luxury brands, all-inclusive reality, and why resort guests book a village cooking class as their top off-property day.',
    articleSection: 'Trip Planning',
    keywords: ['Bali resorts', 'family resort Bali', 'luxury resort Bali', 'Nusa Dua resort', 'all inclusive Bali'],
    faq: [
      {
        question: 'Where are the best family-friendly Bali resorts?',
        answer:
          'Nusa Dua and Sanur offer calm beaches and kids\' facilities. Many families take one day trip to Ubud for culture — a cooking class is safe, educational, and fun for ages 8+.',
      },
      {
        question: 'Are there true all-inclusive resorts in Bali?',
        answer:
          'Full all-inclusive is rare; most resorts offer breakfast packages or dining credits. Budget for experiences like cooking classes (IDR 506,370 shared) and temple tours separately.',
      },
      {
        question: 'Do Bali resorts offer cooking classes on-site?',
        answer:
          'Many do, but hotel classes are often shorter and use premade spice paste. Village classes like Tumang Bali include real market tours and 10+ dishes — why resort concierges recommend us.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali resorts', 1),
        text(' attract families and luxury travellers who want pools, kids\' clubs, and beach access without planning every meal. Nusa Dua, Sanur, Jimbaran, and branded properties in Ubud hills dominate searches. This guide compares what you get in-resort versus what is worth leaving the property for — especially food and culture.'),
      ]),
      heading('h2', 'Resort zones foreigners search most'),
      list([
        'Nusa Dua — gated, calm beach, international brands; 60–90 min to Ubud',
        'Sanur — relaxed east coast, good for older travellers and families',
        'Seminyak — boutique luxury, dining scene; day-trip distance to Ubud',
        'Ubud hills — jungle resorts near culture; easiest pickup for our cooking class',
      ]),
      heading('h2', 'Resort cooking class vs village class'),
      paragraph([
        text('Resort kitchens are comfortable but rarely include a traditional pasar visit or rice-field walk. If you want the experience travel magazines photograph — mortar, lemongrass sate lilit, open-air village kitchen — book a '),
        link('family cooking class', '/family-cooking-class-bali'),
        text(' or '),
        link('authentic Balinese cooking class', '/authentic-balinese-cooking-class'),
        text(' off-property. Concierge desks often suggest Tumang Bali because guests return with skills, not just photos.'),
      ]),
      heading('h2', 'Planning one cultural day from your resort'),
      paragraph([
        text('Arrange a driver for the morning session (08:30 pickup in Ubud area; ask us if you are staying at an Ubud resort). You will shop the market, cook 10+ dishes, and eat lunch — back at the pool by mid-afternoon. Private class (IDR 633,090 for one person) suits honeymoon resort stays.'),
      ]),
      ...commercialClose(
        'Resort comfort is wonderful — but the story you tell friends usually comes from the village day. Reserve your cooking class before checkout-heavy departure days.',
      ),
    ]),
  },

  // 5 — Ubud vs Canggu vs Seminyak
  {
    slug: 'ubud-vs-canggu-vs-seminyak',
    title: 'Ubud vs Canggu vs Seminyak — Which Bali Area Fits You?',
    excerpt:
      'Ubud vs Canggu vs Seminyak: compare vibe, beaches, food, and nightlife — and why most foreigners split their trip or day-trip to Ubud for a cooking class.',
    image: 'blog/ubud-market.jpg',
    imageAlt: 'Ubud morning market — why food travellers choose Ubud over Canggu or Seminyak',
    metaTitle: 'Ubud vs Canggu vs Seminyak — Bali Area Guide',
    metaDescription:
      'Ubud vs Canggu vs Seminyak compared: culture, surf, nightlife, food, and where to book the best Balinese cooking class on your Bali trip.',
    articleSection: 'Trip Planning',
    keywords: ['Ubud vs Canggu', 'Ubud vs Seminyak', 'where to stay Bali', 'Canggu or Ubud', 'Seminyak vs Ubud'],
    faq: [
      {
        question: 'Should I stay in Ubud or Canggu?',
        answer:
          'Choose Ubud for temples, rice fields, and food culture. Choose Canggu for surf, cafés, and nightlife. Many travellers stay in Canggu and day-trip to Ubud for a morning cooking class.',
      },
      {
        question: 'Is Seminyak better than Ubud for first-time visitors?',
        answer:
          'Seminyak suits beach and upscale dining; Ubud suits culture. First-timers often do both — 3 nights Ubud plus 3 nights Seminyak is a classic split.',
      },
      {
        question: 'Can I do a cooking class if I stay in Canggu or Seminyak?',
        answer:
          'Yes. Leave early for the 08:30 morning class with market tour, or book the afternoon session. See our Canggu transport guide; shared class IDR 506,370 includes Ubud pickup only — coastal guests arrange driver or self-drive.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Ubud vs Canggu vs Seminyak', 1),
        text(' is one of the hardest pre-trip decisions for foreigners. Each area has a distinct vibe: jungle culture hub, surf-and-café town, or upscale beach strip. Here is an honest comparison — and why food travellers almost always schedule at least one Ubud day regardless of where they sleep.'),
      ]),
      heading('h2', 'Quick comparison'),
      list([
        'Ubud — culture, markets, rice terraces, yoga; no beach; best for cooking classes and temples',
        'Canggu — surf, digital nomads, casual dining; 45–75 min to Ubud; young crowd',
        'Seminyak — boutiques, beach clubs, fine dining; similar drive to Ubud; higher spend',
      ]),
      heading('h2', 'Food scene by area'),
      paragraph([
        text('Seminyak and Canggu excel at international cafés and trendy warungs. Ubud has the traditional morning pasar and village kitchens where Balinese food is taught properly. That is why '),
        link('best cooking class in Ubud', '/blog/best-cooking-class-in-ubud'),
        text(' searches outnumber coastal equivalents ten to one.'),
      ]),
      heading('h2', 'Split-stay vs day trip'),
      paragraph([
        text('Split 4–7 nights between coast and Ubud if you can. If you only book one coast base, plan a single Ubud day around our '),
        link('morning cooking class and market tour', '/blog/morning-cooking-class-ubud-market-tour'),
        text('. Canggu guests: read '),
        link('cooking class Ubud from Canggu', '/blog/cooking-class-ubud-from-canggu'),
        text('.'),
      ]),
      ...commercialClose(
        'Coast or jungle — block one Ubud morning for the cooking class foreigners call their trip highlight. Shared from IDR 506,370.',
      ),
    ]),
  },

  // 6 — Bali visa requirements
  {
    slug: 'bali-visa-requirements',
    title: 'Bali Visa Requirements — VoA, Extensions & 2026 Rules',
    excerpt:
      'Bali visa requirements for tourists: Visa on Arrival countries, cost, extension steps, and what to book before you land — including your cooking class slot.',
    image: 'img2.jpg',
    imageAlt: 'International travellers arriving in Bali planning visa and activities',
    metaTitle: 'Bali Visa Requirements 2026 — VoA Guide',
    metaDescription:
      'Bali visa requirements explained: Visa on Arrival eligibility, IDR cost, 30-day extension, new 2026 tourist rules, and planning your Ubud cooking class after entry.',
    articleSection: 'Money & Logistics',
    keywords: ['Bali visa requirements', 'Bali Visa on Arrival', 'VoA Bali', 'Indonesia tourist visa', 'extend visa Bali'],
    faq: [
      {
        question: 'Do I need a visa for Bali?',
        answer:
          'Many nationalities get Visa on Arrival (VoA) for 30 days, paid at the airport. Check Indonesia immigration for your passport — rules change; verify before flying.',
      },
      {
        question: 'How much is Bali Visa on Arrival?',
        answer:
          'VoA is typically IDR 500,000 (cash or card at airport). Extension for another 30 days requires a visa agent or immigration office visit — plan ahead.',
      },
      {
        question: 'Can I book activities before my Bali visa is confirmed?',
        answer:
          'Yes. Book refundable flights first, then secure popular experiences like small-group cooking classes early — they sell out in peak season regardless of visa type.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali visa requirements', 1),
        text(' sit at the top of every pre-trip checklist for foreigners. Indonesia governs entry — Bali is a province, not a separate country — and most short-stay tourists use Visa on Arrival (VoA) or visa-free entry depending on nationality. Here is what travellers need to know in 2026, plus how to plan experiences once you are cleared to land.'),
      ]),
      heading('h2', 'Visa on Arrival basics'),
      list([
        'Valid passport (typically 6+ months remaining)',
        'Return or onward ticket (often checked)',
        'VoA fee paid at airport — keep receipt for extension paperwork',
        '30 days initial stay; extension possible through official channels',
      ]),
      paragraph([
        text('Always confirm on the official Indonesian immigration site before travel — this article is guidance, not legal advice. For proposed financial checks and new tourist rules, see our '),
        link('Bali new tourist rules 2026', '/blog/bali-new-tourist-rules-2026'),
        text(' update.'),
      ]),
      heading('h2', 'After immigration — what to book first'),
      paragraph([
        text('Once dates are firm, reserve high-demand cultural slots. Our shared cooking classes cap at 8 guests; morning market tours fill first in July–August. '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text(' online — you will need your hotel area for pickup, not visa documents.'),
      ]),
      heading('h2', 'Budget line items beyond the visa'),
      paragraph([
        text('VoA is a one-time entry cost; daily Bali spending varies widely. See '),
        link('is Bali cheap or expensive', '/blog/is-bali-cheap-or-expensive'),
        text(' and '),
        link('how to pay in Bali', '/blog/how-to-pay-in-bali'),
        text(' for money planning. A cooking class at IDR 506,370 is mid-range value — lunch included.'),
      ]),
      ...commercialClose(
        'Visa sorted? Lock in your Balinese cooking class — the experience that turns "I visited Bali" into "I cooked Bali."',
      ),
    ]),
  },

  // 7 — Bali new tourist rules
  {
    slug: 'bali-new-tourist-rules-2026',
    title: 'Bali New Tourist Rules 2026 — What Foreigners Must Know',
    excerpt:
      'Bali new tourist rules for 2026: financial checks, levy updates, behaviour guidelines — and how to plan compliant, memorable days like a village cooking class.',
    image: 'group-shrine.jpg',
    imageAlt: 'Balinese temple etiquette — part of new tourist rules awareness in Bali',
    metaTitle: 'Bali New Tourist Rules 2026 — Visitor Guide',
    metaDescription:
      'Bali new tourist rules 2026: proposed financial resource checks, tourist levy, dos and don\'ts, and booking legitimate cultural experiences like Tumang Bali cooking class.',
    articleSection: 'Money & Logistics',
    keywords: ['Bali new tourist rules', 'Bali tourist tax 2026', 'Bali entry requirements', 'Bali tourist levy', 'Indonesia tourist rules'],
    faq: [
      {
        question: 'What are the new Bali tourist rules for 2026?',
        answer:
          'Rules evolve — tourist levy, conduct codes, and proposed proof-of-funds checks have been discussed. Verify official sources before travel; respect temple dress codes and local customs always.',
      },
      {
        question: 'Do new Bali rules affect booking tours and classes?',
        answer:
          'Licensed operators continue as normal. Book through official websites or verified OTAs. Tumang Bali is a registered experience with direct booking and TripAdvisor presence.',
      },
      {
        question: 'How can tourists show respect under new Bali guidelines?',
        answer:
          'Wear sarong at temples, do not climb sacred trees or enter ceremonies uninvited, and choose ethical experiences that pay local staff — village cooking classes support community kitchens directly.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali new tourist rules', 1),
        text(' trend whenever Indonesia updates entry policy or Bali tightens visitor behaviour — especially proposals around financial resource checks and the ongoing tourist levy discussion in 2026. Foreigners search this heavily before booking flights. Here is a calm, practical read on what is confirmed versus rumour, and how to travel respectfully while still enjoying the island\'s best experiences.'),
      ]),
      heading('h2', 'What has actually changed recently'),
      list([
        'Tourist levy (contribution) — pay online or on arrival per official Bali portal; keep receipt',
        'Conduct reminders — temples, drones, and sacred sites under closer scrutiny',
        'Proposed financial checks — verify with immigration before relying on social-media posts',
        'Motorcycle and traffic enforcement — see our scooter rental rules guide',
      ]),
      paragraph([
        text('Policies shift — check Indonesian immigration and Bali provincial sites the week you fly. Pair compliance reading with practical guides: '),
        link('Bali visa requirements', '/blog/bali-visa-requirements'),
        text(', '),
        link('what to wear in Bali temples', '/blog/what-to-wear-in-bali-temples'),
        text('.'),
      ]),
      heading('h2', 'Book legitimate, community-based experiences'),
      paragraph([
        text('Crackdowns target illegal operators and disrespectful behaviour, not small family businesses. Our '),
        link('village cooking class', '/tumang-village'),
        text(' employs local staff, teaches temple-offering food culture, and books through official channels — direct site, TripAdvisor, Viator, GetYourGuide, and Airbnb Experiences.'),
      ]),
      heading('h2', 'Plan ahead despite rule headlines'),
      paragraph([
        text('Headline anxiety should not cancel your trip — it should sharpen your planning. Reserve refundable hotels, buy travel insurance, and pre-book capped experiences. Morning cooking classes with market tours are a compliant, educational way to learn Balinese Hindu food traditions firsthand.'),
      ]),
      ...commercialClose(
        'New rules or old, respectful travellers who cook with a local family leave Bali as ambassadors — book your class through our official page.',
      ),
    ]),
  },

  // 8 — Is Bali cheap or expensive
  {
    slug: 'is-bali-cheap-or-expensive',
    title: 'Is Bali Cheap or Expensive? — Real 2026 Budget Guide',
    excerpt:
      'Is Bali cheap or expensive for foreigners? Daily costs by budget tier, hidden expenses, and why a cooking class is one of the best-value cultural spends.',
    image: 'blog/itinerary.jpg',
    imageAlt: 'Balinese feast — value comparison for is Bali cheap or expensive',
    metaTitle: 'Is Bali Cheap or Expensive? — 2026 Budget Guide',
    metaDescription:
      'Is Bali cheap or expensive? Budget vs luxury daily costs, villa prices, dining tiers, and where a IDR 506,370 cooking class fits as top value for money.',
    articleSection: 'Money & Logistics',
    keywords: ['is Bali cheap or expensive', 'Bali cost of travel', 'Bali budget', 'Bali daily costs', 'how much Bali trip'],
    faq: [
      {
        question: 'Is Bali cheap for Western tourists?',
        answer:
          'Bali can be cheap (guesthouses, warungs) or expensive (luxury villas, fine dining). Daily budgets range from USD 40 backpacker to USD 300+ luxury excluding flights.',
      },
      {
        question: 'What is good value in Bali?',
        answer:
          'Warung meals, local transport, and small-group cultural experiences. A cooking class with market tour, 10+ dishes, and lunch at IDR 506,370 beats many tourist dinners on value.',
      },
      {
        question: 'What makes Bali expensive for tourists?',
        answer:
          'Imported alcohol, cliff villas, private drivers every day, and peak-season flights. Book a few splurges — like one morning cooking class — and eat local otherwise.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Is Bali cheap or expensive?', 1),
        text(' — foreigners ask this constantly because the answer is genuinely "both." Bali offers USD 3 nasi campur and USD 300 tasting menus in the same week. Your spend depends on accommodation tier, transport habits, and how often you eat Western food. Here is a realistic 2026 breakdown, with one experience we think is underpriced for what you get.'),
      ]),
      heading('h2', 'Daily budget tiers (per person, excluding flights)'),
      list([
        'Budget — USD 40–70: guesthouse, warungs, scooter, public beach',
        'Mid-range — USD 80–150: pool villa split, mix of warungs and cafés, Grab rides',
        'Luxury — USD 200+: branded resort, fine dining, private driver daily',
      ]),
      heading('h2', 'Where money disappears'),
      paragraph([
        text('Accommodation and transport dominate. A single taxi from Seminyak to Ubud can cost more than a '),
        link('shared cooking class', '/blog/ubud-cooking-class-price'),
        text(' (IDR 506,370). Alcohol is taxed heavily. ATM fees and poor exchange booths add up — read '),
        link('how to pay in Bali', '/blog/how-to-pay-in-bali'),
        text('.'),
      ]),
      heading('h2', 'Best-value splurge: cook instead of another beach club'),
      paragraph([
        text('Beach clubs charge cover plus minimums that rival a family cooking class. For IDR 506,370 you get pickup (Ubud area), market tour, hands-on cooking, feast, and recipes. Compare full pricing on '),
        link('Ubud cooking class price 2026', '/blog/ubud-cooking-class-price'),
        text(' and decide if '),
        link('is a Bali cooking class worth it', '/blog/is-a-bali-cooking-class-worth-it'),
        text(' for your budget — most food travellers say yes.'),
      ]),
      ...commercialClose(
        'Smart Bali budgets save on rooms and spend on memories — a morning cooking class delivers both.',
      ),
    ]),
  },

  // 9 — How to pay in Bali
  {
    slug: 'how-to-pay-in-bali',
    title: 'How to Pay in Bali — Cash, Cards, Wise & Revolut',
    excerpt:
      'How to pay in Bali: when cash still wins, card acceptance, Wise and Revolut tips, and booking your cooking class online before you arrive.',
    image: 'blog/ubud-market.jpg',
    imageAlt: 'Paying cash at Ubud morning market before a cooking class',
    metaTitle: 'How to Pay in Bali — Cash, Cards & Travel Apps',
    metaDescription:
      'How to pay in Bali in 2026: rupiah cash for markets, card tips, Wise/Revolut ATMs, and booking Tumang Bali cooking class online with card before your trip.',
    articleSection: 'Money & Logistics',
    keywords: ['how to pay in Bali', 'Wise Bali', 'Revolut Bali', 'Bali cash or card', 'Indonesian rupiah'],
    faq: [
      {
        question: 'Should I use cash or card in Bali?',
        answer:
          'Carry rupiah cash for warungs, markets, small shops, and tips. Cards work at hotels, many restaurants, and online bookings. Markets before a cooking class are cash-first.',
      },
      {
        question: 'Does Wise or Revolut work in Bali?',
        answer:
          'Yes for ATM withdrawals and many card payments — check fees and daily limits. Always keep backup cash; rural Ubud stalls may not take contactless.',
      },
      {
        question: 'Can I book a cooking class with a foreign card?',
        answer:
          'Yes — book Tumang Bali online via GetYourGuide, Viator, or Airbnb with international cards before you land, or pay on our website booking flow. On-site market shopping during class is cash (small notes help).',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('How to pay in Bali', 1),
        text(' is a top logistics search because the island runs on Indonesian rupiah (IDR) while foreigners arrive with cards, Wise balances, and Revolut apps. Cash is still king at morning markets and village warungs — exactly where our cooking class begins. Here is how to handle money smoothly in 2026.'),
      ]),
      heading('h2', 'Cash vs card — practical rules'),
      list([
        'Markets & small warungs — cash; bring IDR 50K–100K notes',
        'Hotels, spas, upscale cafés — Visa/Mastercard widely accepted',
        'ATMs — use bank branches; watch skimmers; withdraw max less often to save fees',
        'Tipping — not mandatory; IDR 20K–50K appreciated for drivers and guides',
      ]),
      heading('h2', 'Wise, Revolut, and multi-currency cards'),
      paragraph([
        text('Travel cards reduce forex markup on card payments and ATM withdrawals. Enable notifications, set daily limits, and carry a second card. You will still want cash for the pasar segment of our '),
        link('market tour cooking class', '/cooking-class-with-market-tour-ubud'),
        text(' — buying spices and snacks with the chef.'),
      ]),
      heading('h2', 'Pre-pay experiences online'),
      paragraph([
        text('Lock in peak-season slots before you land. '),
        link('Book your cooking class', '/book-your-cooking-class'),
        text(' accepts online payment — one less ATM stop on arrival day. See '),
        link('Bali visa requirements', '/blog/bali-visa-requirements'),
        text(' and '),
        link('is Bali cheap or expensive', '/blog/is-bali-cheap-or-expensive'),
        text(' for full trip budgeting.'),
      ]),
      ...commercialClose(
        'Bring cash for the market — book the class online with your card before you fly.',
      ),
    ]),
  },

  // 10 — How to get around Bali
  {
    slug: 'how-to-get-around-bali',
    title: 'How to Get Around Bali — Drivers, Grab & Traffic Tips',
    excerpt:
      'How to get around Bali: private drivers, Grab/Gojek, scooters, and realistic drive times from coast to Ubud for your cooking class day.',
    image: 'blog/rice-field-class.webp',
    imageAlt: 'Driving through Ubud rice fields on the way to a Balinese cooking class',
    metaTitle: 'How to Get Around Bali — Transport Guide',
    metaDescription:
      'How to get around Bali: Grab, Gojek, private drivers, traffic reality, coast-to-Ubud times, and free pickup for Tumang Bali cooking class in the Ubud area.',
    articleSection: 'Money & Logistics',
    keywords: ['how to get around Bali', 'Bali private driver', 'Grab Bali', 'Gojek Bali', 'Ubud transport'],
    faq: [
      {
        question: 'What is the best way to get around Bali for tourists?',
        answer:
          'Private drivers for full-day trips, Grab/Gojek in south Bali, and hotel transfers for resorts. Traffic is heavy — plan buffer time for Ubud from the coast.',
      },
      {
        question: 'How long from Canggu or Seminyak to Ubud?',
        answer:
          'Often 60–90 minutes by car depending on traffic. Morning departures before 07:00 help for 08:30 cooking classes.',
      },
      {
        question: 'Does the cooking class include transport?',
        answer:
          'Free pickup and drop-off in the Ubud area. Coastal guests hire a driver or use our Canggu guide; private class bookings can discuss timing via WhatsApp.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('How to get around Bali', 1),
        text(' frustrates every first-time visitor — not because options are scarce, but because traffic turns Google Maps estimates into fiction. Grab and Gojek work in urban south Bali; rural Ubud needs planning. Here is how foreigners actually move, plus how our cooking class pickup fits your route.'),
      ]),
      heading('h2', 'Transport options compared'),
      list([
        'Grab / Gojek — cheap rides and food delivery; patchy in remote north Ubud',
        'Private driver — IDR 600K–800K full day; best for temple loops + cooking class',
        'Scooter — flexible but risky; read our scooter rental rules',
        'Hotel shuttle — resorts often overcharge for one-way Ubud transfers',
      ]),
      heading('h2', 'Ubud cooking class day — sample route'),
      paragraph([
        text('Staying in Ubud? We pick you up free for morning (08:30) or afternoon sessions. Staying in Canggu or Seminyak? Pair the class with a driver for the day — market, cook, eat, then Tegallalang on the return. Details: '),
        link('cooking class from Canggu', '/blog/cooking-class-ubud-from-canggu'),
        text('.'),
      ]),
      heading('h2', 'Traffic reality check'),
      paragraph([
        text('Allow 30–45 minutes extra for afternoon returns. Nyepi and ceremony days can block roads — see '),
        link('Bali Day of Silence guide', '/blog/bali-day-of-silence-nyepi'),
        text('. One focused Ubud day beats three stressed half-days.'),
      ]),
      ...commercialClose(
        'Ubud-area guests ride free — everyone else: one driver, one morning, market to feast. Book your slot first, then plan transport.',
      ),
    ]),
  },

  // 11 — How to avoid Bali Belly
  {
    slug: 'how-to-avoid-bali-belly',
    title: 'How to Avoid Bali Belly — Food Safety for Travellers',
    excerpt:
      'How to avoid Bali Belly: safe eating tips, ice and street food rules — and why a guided market-to-kitchen cooking class is one of the safest food experiences.',
    image: 'blog/dishes.jpg',
    imageAlt: 'Freshly cooked Balinese dishes — safe food after learning in cooking class',
    metaTitle: 'How to Avoid Bali Belly — Bali Food Safety',
    metaDescription:
      'How to avoid Bali Belly: water, ice, street food tips, meds to pack, and why Tumang Bali cooking class uses filtered water and fully cooked village meals.',
    articleSection: 'Health & Safety',
    keywords: ['how to avoid Bali Belly', 'Bali food safety', 'Bali stomach bug', 'safe food Bali', 'travelers diarrhea Bali'],
    faq: [
      {
        question: 'How do you avoid Bali Belly?',
        answer:
          'Drink bottled or filtered water, eat freshly cooked hot food, peel fruit yourself, and be cautious with raw salads and ice from unknown sources. Hand hygiene matters.',
      },
      {
        question: 'Is street food safe in Bali?',
        answer:
          'Busy warungs with high turnover are often fine. Learn what fresh ingredients look like on a market tour — guests say it helps them choose stalls for the rest of the trip.',
      },
      {
        question: 'Is a cooking class safe if I have a sensitive stomach?',
        answer:
          'Our kitchen uses filtered water, fully cooks proteins, and prepares food in a clean village setting. Tell us dietary needs when booking — vegetarian and allergy menus available.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('How to avoid Bali Belly', 1),
        text(' is one of the most searched health topics for foreigners — and anxiety can keep travellers eating only resort buffets, which means missing Balinese food entirely. Smart precautions go a long way. Here is what works, what is myth, and why a guided cooking class is oddly one of the safest ways to eat locally.'),
      ]),
      heading('h2', 'Core prevention tips'),
      list([
        'No tap water — bottled or filtered only; see our tap water guide',
        'Ice — fine at reputable restaurants; cautious at random street carts',
        'Eat hot, freshly cooked food; avoid lukewarm buffets',
        'Peel fruit yourself; wash hands before eating',
        'Pack ORS and ask a pharmacist about loperamide for emergencies',
      ]),
      heading('h2', 'Learn safe ingredients at the market'),
      paragraph([
        text('Our morning class starts at the pasar with Chef Wayan explaining what to buy and what to skip. Guests report fewer "mystery meal" mistakes afterward. Pair with '),
        link('Ubud food guide', '/blog/ubud-food-guide-what-to-eat'),
        text(' and '),
        link('can you drink tap water in Bali', '/blog/can-you-drink-tap-water-bali'),
        text('.'),
      ]),
      heading('h2', 'When to see a doctor'),
      paragraph([
        text('Fever, blood in stool, or dehydration beyond 24 hours needs a clinic — Bali has good medical tourism facilities in south Bali. Do not let fear stop all local food; let knowledge guide you.'),
      ]),
      ...commercialClose(
        'Eat Bali confidently — learn what goes into your plate in a village kitchen first. Morning class includes market food-safety walkthrough.',
      ),
    ]),
  },

  // 12 — Bali scooter rental rules
  {
    slug: 'bali-scooter-rental-rules',
    title: 'Bali Scooter Rental Rules — License, Safety & Alternatives',
    excerpt:
      'Bali scooter rental rules: international licence requirements, police checks, insurance reality — and safer ways to reach your Ubud cooking class.',
    image: 'img5.jpg',
    imageAlt: 'Ubud road traffic — alternatives to Bali scooter rental for tourists',
    metaTitle: 'Bali Scooter Rental Rules — Tourist Guide',
    metaDescription:
      'Bali scooter rental rules for foreigners: licence, helmet fines, accident risk, and booking a cooking class with included Ubud pickup instead of scootering in traffic.',
    articleSection: 'Health & Safety',
    keywords: ['Bali scooter rental rules', 'scooter license Bali', 'rent motorbike Bali', 'Bali traffic', 'international driving permit Bali'],
    faq: [
      {
        question: 'Do I need an international license to rent a scooter in Bali?',
        answer:
          'Indonesia requires a valid licence for your vehicle class — tourists should carry an International Driving Permit plus home licence. Police checkpoints are common; fines apply without proper documents.',
      },
      {
        question: 'Is it safe for tourists to ride scooters in Bali?',
        answer:
          'Traffic is chaotic; accidents involving tourists are frequent. Many visitors use Grab, private drivers, or class pickup instead of daily scootering, especially to unfamiliar Ubud village roads.',
      },
      {
        question: 'How do I get to a cooking class without a scooter?',
        answer:
          'Free pickup in the Ubud area for Tumang Bali classes. Coastal guests book a driver or hotel transfer — safer than first-day scooter rental.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali scooter rental rules', 1),
        text(' confuse foreigners because rentals are cheap, ubiquitous, and technically regulated — yet enforcement varies. Before you grab keys from a beachside shop, understand licence requirements, insurance gaps, and why many experienced travellers skip scooters for cultural day trips entirely.'),
      ]),
      heading('h2', 'Licence and legal basics'),
      list([
        'International Driving Permit (IDP) + home country licence for motorcycle class',
        'Helmets required — police fines for riders and passengers without',
        'Rental shop insurance often excludes medical costs — check travel insurance',
        'Drink-driving and phone use carry heavy penalties',
      ]),
      heading('h2', 'Safer alternatives for Ubud days'),
      paragraph([
        text('Village roads near Tumang are narrow and unfamiliar. Our guests use included '),
        link('Ubud pickup', '/balinese-cooking-class-ubud'),
        text(' instead of navigating after a long flight. Combine with '),
        link('how to get around Bali', '/blog/how-to-get-around-bali'),
        text(' for full-day driver rates.'),
      ]),
      heading('h2', 'If you still rent'),
      paragraph([
        text('Inspect brakes, insist on two helmets, ride defensively, and avoid night rain. One scooter incident can end a holiday — one cooking class rarely does.'),
      ]),
      ...commercialClose(
        'Skip the scooter stress for your best Ubud day — we pick you up (Ubud area) for market, rice fields, and cooking.',
      ),
    ]),
  },

  // 13 — Can you drink tap water in Bali
  {
    slug: 'can-you-drink-tap-water-bali',
    title: 'Can You Drink Tap Water in Bali? — No, and Here\'s What to Do',
    excerpt:
      'Can you drink tap water in Bali? No — use bottled or filtered water. How that affects ice, brushing teeth, and the safe water we use in our cooking class.',
    image: 'blog/bumbu-ingredients.webp',
    imageAlt: 'Filtered water and fresh ingredients for safe Balinese cooking',
    metaTitle: 'Can You Drink Tap Water in Bali? — Safe Water Guide',
    metaDescription:
      'Can you drink tap water in Bali? No — bottled or filtered only. Ice, teeth brushing, cooking water, and how Tumang Bali keeps class meals safe for foreigners.',
    articleSection: 'Health & Safety',
    keywords: ['can you drink tap water in Bali', 'Bali tap water safe', 'bottled water Bali', 'filtered water Bali', 'Bali belly water'],
    faq: [
      {
        question: 'Can you drink tap water in Bali as a tourist?',
        answer:
          'No. Tap water is not safe to drink. Use sealed bottled water, villa filtration if maintained, or boiled/filtered water for cooking.',
      },
      {
        question: 'Can I brush my teeth with tap water in Bali?',
        answer:
          'Many tourists use bottled water to brush. A small swallow is unlikely to ruin your trip, but consistent exposure increases Bali Belly risk.',
      },
      {
        question: 'What water is used in cooking classes?',
        answer:
          'Tumang Bali uses filtered water for cooking and washing produce. Morning market tour explains what locals buy — part of our how to avoid Bali Belly guidance.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Can you drink tap water in Bali?', 1),
        text(' — the answer foreigners find is always no. Municipal and well water is not treated to drinking standards for visitors. Stick to bottled or properly filtered water for drinking, ice from trusted sources, and cooking. Here is the full practical guide, including how we handle water in class so you can eat with confidence.'),
      ]),
      heading('h2', 'Safe water habits'),
      list([
        'Drink sealed bottled water — check the cap seal',
        'Villa filters — only if owner confirms regular cartridge changes',
        'Ice — reputable cafés and hotels use filtered ice; street unknowns are riskier',
        'Coffee and tea — boiled water is generally fine',
      ]),
      heading('h2', 'Link to Bali Belly prevention'),
      paragraph([
        text('Water is the main Bali Belly vector. Read '),
        link('how to avoid Bali Belly', '/blog/how-to-avoid-bali-belly'),
        text(' for food rules. Cooking with us means filtered prep water and fully cooked dishes — a gentle introduction to local cuisine.'),
      ]),
      heading('h2', 'Environmental note'),
      paragraph([
        text('Refill stations grow yearly in Ubud cafés. Bring a bottle for refills where available; still carry backup sealed bottles in remote areas.'),
      ]),
      ...commercialClose(
        'Taste Bali safely — cook with filtered water and a local chef who explains every ingredient.',
      ),
    ]),
  },

  // 14 — Dangerous animals in Bali
  {
    slug: 'dangerous-animals-bali',
    title: 'Are There Dangerous Animals in Bali? — Mosquitoes, Monkeys & More',
    excerpt:
      'Dangerous animals in Bali: dengue mosquitoes, monkeys, snakes, stray dogs — practical risks for tourists and outdoor cooking class rice-field walks.',
    image: 'blog/cooking-local-family.webp',
    imageAlt: 'Rice field walk during Balinese cooking class — safe guided outdoor time',
    metaTitle: 'Dangerous Animals in Bali — Tourist Safety Guide',
    metaDescription:
      'Are there dangerous animals in Bali? Mosquitoes, monkeys, snakes, dogs — risks explained, plus safe guided rice-field walks on Tumang Bali cooking class.',
    articleSection: 'Health & Safety',
    keywords: ['dangerous animals Bali', 'dengue fever Bali', 'Bali monkeys', 'snakes Bali', 'mosquito Bali'],
    faq: [
      {
        question: 'Are there dangerous animals in Bali for tourists?',
        answer:
          'Mosquitoes (dengue risk) are the main concern. Monkeys can bite if provoked; snakes exist but bites are rare; stray dogs should not be approached. Normal precautions suffice.',
      },
      {
        question: 'Do I need mosquito repellent in Bali?',
        answer:
          'Yes — DEET or picaridin, especially dawn and dusk. Ubud rice fields have mosquitoes; wear repellent on our short guided walk.',
      },
      {
        question: 'Is the rice-field walk on the cooking class safe?',
        answer:
          'Yes — short guided walk on established paths, daylight only, with local staff. Hold bags away from monkeys if you visit Monkey Forest separately later.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Are there dangerous animals in Bali?', 1),
        text(' Foreigners picture Komodo dragons and jungle predators — but day-to-day risks are mosquitoes, cheeky monkeys, and the occasional snake in rural areas. None should cancel your trip; they should shape repellent, behaviour, and realistic expectations for outdoor experiences like our rice-field walk.'),
      ]),
      heading('h2', 'What tourists actually encounter'),
      list([
        'Mosquitoes — dengue exists; use repellent and long sleeves at dusk',
        'Monkeys — Ubud Monkey Forest and temple sites; no food in open bags',
        'Stray dogs — avoid feeding or cornering; rabies vaccination exists locally',
        'Snakes — rare sightings; do not walk barefoot in tall grass at night',
      ]),
      heading('h2', 'Outdoor time on the cooking class'),
      paragraph([
        text('Morning sessions include a gentle rice-field walk on village paths — not jungle trekking. Wear closed shoes and repellent. The walk explains subak irrigation before you cook — see '),
        link('rice-field cooking class', '/blog/rice-field-cooking-class'),
        text('.'),
      ]),
      heading('h2', 'When to seek medical help'),
      paragraph([
        text('Monkey bites and dog scratches need clinic cleaning and possible rabies protocol. High fever after mosquito exposure — test for dengue early. Travel insurance with medical evacuation is wise.'),
      ]),
      ...commercialClose(
        'Guided village morning — culture, cooking, and countryside with local staff who know the land.',
      ),
    ]),
  },

  // 15 — Where is Bali located
  {
    slug: 'where-is-bali-located',
    title: 'Where Is Bali Located? — Indonesia Map & Travel Basics',
    excerpt:
      'Where is Bali located? A province of Indonesia between Java and Lombok — not its own country — plus why Ubud is the cultural heart foreigners fly inland to visit.',
    image: 'blog/tumang-vibe.webp',
    imageAlt: 'Bali Indonesia — Tumang village near Ubud on the map of foreign visitor plans',
    metaTitle: 'Where Is Bali Located? — Indonesia Guide',
    metaDescription:
      'Where is Bali located? Indonesia province, map context, Ngurah Rai airport, and why foreigners visit Ubud for Balinese cooking class and Hindu culture.',
    articleSection: 'Geography & Culture',
    keywords: ['where is Bali located', 'is Bali a country', 'Bali Indonesia map', 'Ubud Bali location', 'Bali geography'],
    faq: [
      {
        question: 'Where is Bali located?',
        answer:
          'Bali is an Indonesian province between Java to the west and Lombok to the east, south of the equator in the Lesser Sunda Islands.',
      },
      {
        question: 'Is Bali its own country?',
        answer:
          'No. Bali is part of Indonesia. Denpasar is the capital; Ngurah Rai (DPS) is the main international airport most foreigners use.',
      },
      {
        question: 'Where is Ubud in Bali?',
        answer:
          'Ubud sits in central Bali\'s uplands — inland from the coast, surrounded by rice terraces and villages like Tumang where our cooking class runs.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Where is Bali located?', 1),
        text(' sounds simple, but a huge share of searches come from travellers who think Bali is an independent country. It is a province of Indonesia — culturally distinct, Hindu-majority, and globally famous — yet governed from Jakarta for immigration and national law. Knowing the map helps you plan flights, visas, and why Ubud matters.'),
      ]),
      heading('h2', 'Bali on the map'),
      list([
        'Country: Indonesia — capital Jakarta (Bali capital: Denpasar)',
        'Airport: Ngurah Rai International (DPS) in south Bali',
        'Neighbours: Java (west), Lombok (east), Indian Ocean (south)',
        'Ubud: central uplands, ~1 hour north from airport depending on traffic',
      ]),
      heading('h2', 'Why foreigners go inland to Ubud'),
      paragraph([
        text('Beaches put Bali on posters; Ubud put Bali in cookbooks. Hindu temples, gamelan, and food traditions concentrate here. Tumang village sits minutes from central Ubud — our '),
        link('Balinese cooking class', '/balinese-cooking-class-ubud'),
        text(' is the hands-on introduction many wish they had on day one.'),
      ]),
      heading('h2', 'Connect the geography dots'),
      paragraph([
        text('Pair this with '),
        link('what religion is Bali', '/blog/what-religion-is-bali'),
        text(', '),
        link('Ubud vs Canggu vs Seminyak', '/blog/ubud-vs-canggu-vs-seminyak'),
        text(', and '),
        link('best time to visit Bali', '/blog/best-time-to-visit-bali'),
        text(' for a complete planning picture.'),
      ]),
      ...commercialClose(
        'You found Bali on the map — next, find its flavour in a village kitchen near Ubud.',
      ),
    ]),
  },

  // 16 — Best beaches in Bali
  {
    slug: 'best-beaches-in-bali',
    title: 'Best Beaches in Bali — Surf, Clubs & Quiet Shores',
    excerpt:
      'Best beaches in Bali for surf, sunsets, and families — plus why foreigners still day-trip to Ubud for rice fields and a cooking class between beach days.',
    image: 'img4.jpg',
    imageAlt: 'Balinese coastal and cultural mix — beaches plus Ubud cooking class',
    metaTitle: 'Best Beaches in Bali — Surf & Relaxation Guide',
    metaDescription:
      'Best beaches in Bali: Uluwatu, Canggu, Nusa Dua, Sanur compared — and balancing beach days with Ubud cooking class and culture inland.',
    articleSection: 'Geography & Culture',
    keywords: ['best beaches in Bali', 'Bali surf beaches', 'Seminyak beach', 'Nusa Dua beach', 'Bali beach guide'],
    faq: [
      {
        question: 'What are the best beaches in Bali for first-time visitors?',
        answer:
          'Seminyak and Canggu for vibe, Nusa Dua for calm water, Uluwatu for cliffs and surf. None replace a cultural Ubud day — most itineraries include both.',
      },
      {
        question: 'Can I combine beach holiday with Ubud culture?',
        answer:
          'Yes — classic split is south coast beaches plus 2–3 nights Ubud or one driver day for cooking class and rice terraces.',
      },
      {
        question: 'How far are best beaches from Ubud cooking class?',
        answer:
          '60–90 minutes to south coast beaches by car. Book morning class, beach afternoon, or reverse with afternoon session.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Best beaches in Bali', 1),
        text(' drive huge search volume — Uluwatu barrels, Canggu sunsets, Nusa Dua calm water. Foreigners often over-index on coast and under-book inland culture. Here are the beaches worth your days, and how to balance them with the experience reviewers rank alongside any beach club: a village cooking class.'),
      ]),
      heading('h2', 'Top beaches by vibe'),
      list([
        'Uluwatu & Bingin — surf, cliffs, temple sunsets',
        'Canggu — black sand, beach bars, beginner surf',
        'Seminyak & Petitenget — wide sand, clubs, dining',
        'Nusa Dua & Sanur — families, gentle waves, resorts',
        'Amed & Lovina — north/east quiet, diving or dolphins',
      ]),
      heading('h2', 'Beach week + one Ubud food day'),
      paragraph([
        text('Beach days melt together; cooking days stand out. Schedule '),
        link('morning cooking class Ubud', '/blog/morning-cooking-class-ubud-market-tour'),
        text(' between surf sessions — market, bumbu, feast by lunch. Transport: '),
        link('how to get around Bali', '/blog/how-to-get-around-bali'),
        text('.'),
      ]),
      heading('h2', 'Sun safety and respect'),
      paragraph([
        text('Reef shoes, sunscreen, and heed flags. Some beaches are ceremonial — read local signs. Temple dress rules apply when you leave the sand — see '),
        link('what to wear in Bali temples', '/blog/what-to-wear-in-bali-temples'),
        text('.'),
      ]),
      ...commercialClose(
        'Beach mornings are easy — book one Ubud morning for the cultural meal you will talk about longer than any sunset.',
      ),
    ]),
  },

  // 17 — What to wear in Bali temples
  {
    slug: 'what-to-wear-in-bali-temples',
    title: 'What to Wear in Bali Temples — Sarong Rules & Etiquette',
    excerpt:
      'What to wear in Bali temples: sarong and sash for men and women, shoulders covered — plus what we recommend for our market tour and cooking class nearby.',
    image: 'group-shrine.jpg',
    imageAlt: 'Temple shrine visit etiquette — sarong dress code in Bali',
    metaTitle: 'What to Wear in Bali Temples — Dress Code Guide',
    metaDescription:
      'What to wear in Bali temples: sarong, sash, covered shoulders for men and women. Temple etiquette plus practical dress for Ubud cooking class market tour.',
    articleSection: 'Geography & Culture',
    keywords: ['what to wear in Bali temples', 'Bali temple dress code', 'sarong Bali temple', 'temple etiquette Bali', 'Ubud temple clothing'],
    faq: [
      {
        question: 'What do you wear to a Bali temple?',
        answer:
          'Sarong and sash around waist, shoulders covered, no singlets or short shorts. Most temples rent or sell sarongs at the entrance.',
      },
      {
        question: 'Do men need sarongs at Bali temples?',
        answer:
          'Yes — both men and women wear sarong and sash. Modesty applies equally under Balinese Hindu custom.',
      },
      {
        question: 'What should I wear to a cooking class after temples?',
        answer:
          'Light clothes you do not mind getting turmeric on, closed shoes for market and rice fields. See our dedicated what-to-wear cooking class page for packing list.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('What to wear in Bali temples', 1),
        text(' is a strict etiquette search — sarong and sash required for both men and women, shoulders covered, respectful behaviour during prayer. Getting this wrong means refused entry or offended locals. Here is the dress code explained simply, plus how it connects to food offerings you will learn about in our cooking class.'),
      ]),
      heading('h2', 'Temple dress code checklist'),
      list([
        'Sarong (kamen) tied at waist — covers legs',
        'Sash (selendang) around waist over sarong',
        'Top covering shoulders — bring scarf if wearing tank top',
        'Remove shoes before entering inner courtyards where signed',
        'Menstruating women may be asked not to enter certain areas — honour requests',
      ]),
      heading('h2', 'Culture connects to cuisine'),
      paragraph([
        text('Balinese Hindu offerings (canang sari) share symbolism with ceremonial dishes like lawar. In class we explain how food and temple life intertwine — book '),
        link('authentic Balinese cooking class', '/authentic-balinese-cooking-class'),
        text('. Full packing list: '),
        link('what to wear Bali cooking class', '/what-to-wear-bali-cooking-class'),
        text('.'),
      ]),
      heading('h2', 'Temple day + cooking day itinerary'),
      paragraph([
        text('Morning temple visit (sarong), late morning market and cook (casual clothes) works well. Afternoon rains? Indoor kitchen time still counts as culture, not just lunch.'),
      ]),
      ...commercialClose(
        'Dress right at temples — then cook the offering food traditions behind them with a local family.',
      ),
    ]),
  },

  // 18 — Is Bali safe for tourists
  {
    slug: 'is-bali-safe-for-tourists',
    title: 'Is Bali Safe for Tourists? — Crime, Solo Travel & Risks',
    excerpt:
      'Is Bali safe for tourists? Overall yes — with normal precautions on scooters, drink spiking, and natural hazards. Why small-group cooking classes feel safe for solo travellers.',
    image: 'gallery-girls.jpg',
    imageAlt: 'Solo and group travellers safe at small-group Balinese cooking class',
    metaTitle: 'Is Bali Safe for Tourists? — 2026 Safety Guide',
    metaDescription:
      'Is Bali safe for tourists, solo women, and families? Crime, scams, volcanoes, and why max-8 cooking classes in Ubud village are a trusted social experience.',
    articleSection: 'Geography & Culture',
    keywords: ['is Bali safe for tourists', 'Bali solo female travel', 'Bali crime', 'safe travel Bali', 'Bali safety 2026'],
    faq: [
      {
        question: 'Is Bali safe for tourists in 2026?',
        answer:
          'Generally yes — millions visit yearly. Petty theft, scooter accidents, and drink-spiking in nightlife areas are the main issues. Use common sense as in any popular destination.',
      },
      {
        question: 'Is Bali safe for solo female travellers?',
        answer:
          'Many women travel solo successfully. Choose reputable operators, share itineraries, avoid isolated beaches at night, and prefer daytime group activities like small cooking classes.',
      },
      {
        question: 'Are cooking classes safe for solo travellers?',
        answer:
          'Shared classes (max 8 guests) are social and staff-supervised. Solo guests often meet travel buddies. Private class available if you prefer one-on-one with the chef.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Is Bali safe for tourists?', 1),
        text(' — the honest answer is yes for the vast majority of visitors, with caveats every guide should mention: scooter crashes, occasional petty theft, nightlife drink issues, and natural events (volcano, earthquake, rip currents). Solo women, families, and first-timers search this constantly. Here is a balanced 2026 view and activities that feel secure while still being adventurous.'),
      ]),
      heading('h2', 'Main safety topics foreigners search'),
      list([
        'Crime — snatch theft in crowded areas; use hotel safes',
        'Scooters — biggest injury source; see rental rules guide',
        'Nightlife — watch drinks; stick with licensed Grab at night',
        'Nature — heed lifeguard flags; monitor Agung activity officially',
        'Health — dengue, Bali Belly prevention; travel insurance',
      ]),
      heading('h2', 'Why guests book our class early in the trip'),
      paragraph([
        text('Small groups, fixed schedule, English-speaking staff, and village setting — solo travellers meet others over shared cooking. Read '),
        link('private cooking class', '/private-cooking-class-ubud'),
        text(' if you want one-on-one. Families: '),
        link('family cooking class Bali', '/family-cooking-class-bali'),
        text('.'),
      ]),
      heading('h2', 'Respect improves safety'),
      paragraph([
        text('Follow temple rules, new tourist conduct guidelines, and local advice during ceremonies. Respectful visitors receive warm hospitality — the core of Balinese culture.'),
      ]),
      ...commercialClose(
        'Safe, social, delicious — join a max-8 guest morning class and meet Bali through food, not nightlife noise.',
      ),
    ]),
  },

  // 19 — What religion is Bali
  {
    slug: 'what-religion-is-bali',
    title: 'What Religion Is Bali? — Balinese Hinduism Explained',
    excerpt:
      'What religion is Bali? Balinese Hinduism — unique in Muslim-majority Indonesia — shapes temples, festivals, and the food you cook in an authentic Ubud class.',
    image: 'group-shrine.jpg',
    imageAlt: 'Balinese Hindu shrine — what religion is Bali explained through village life',
    metaTitle: 'What Religion Is Bali? — Balinese Hinduism Guide',
    metaDescription:
      'What religion is Bali? Balinese Hinduism vs Indonesia\'s Muslim majority — temples, offerings, festival food, and learning culture through Tumang Bali cooking class.',
    articleSection: 'Geography & Culture',
    keywords: ['what religion is Bali', 'Balinese Hinduism', 'Bali religion', 'Hindu Bali Indonesia', 'Balinese culture'],
    faq: [
      {
        question: 'What religion is practiced in Bali?',
        answer:
          'Balinese Hinduism — a distinct form combining Hindu, Buddhist, and animist traditions. Over 80% of Balinese identify as Hindu, unlike most of Indonesia.',
      },
      {
        question: 'How does religion affect tourists in Bali?',
        answer:
          'Daily offerings, temple dress codes, Nyepi silence day, and festival traffic. Respectful participation (sarong, quiet on Nyepi) is expected.',
      },
      {
        question: 'Can I learn about Balinese religion through a cooking class?',
        answer:
          'Yes — dishes like lawar and offerings-linked ingredients are explained in context at village classes. Not a theology lecture — lived culture through food.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('What religion is Bali?', 1),
        text(' surprises many foreigners when they land in Muslim-majority Indonesia yet see Hindu temples, daily flower offerings, and gamelan processions. Balinese Hinduism (Agama Hindu Dharma) defines island identity — and its calendar shapes when you should visit, what you wear, and even what sits on your plate at ceremony feasts.'),
      ]),
      heading('h2', 'Balinese Hinduism in brief'),
      list([
        'Part of Indonesia politically; culturally Hindu for most Balinese',
        'Tri Hita Karana — harmony with gods, people, and environment',
        'Daily canang sari offerings at homes and shops',
        'Major festivals: Galungan, Kuningan, Nyepi (Day of Silence)',
      ]),
      heading('h2', 'Food as cultural practice'),
      paragraph([
        text('Ceremonial lawar, babi guling at festivals, and vegetarian temple days all tie to belief. Our class explains why ingredients matter — not just how to chop them. Start with '),
        link('Balinese vs Indonesian food', '/blog/balinese-vs-indonesian-food'),
        text(' and '),
        link('Nyepi guide', '/blog/bali-day-of-silence-nyepi'),
        text('.'),
      ]),
      heading('h2', 'Visit respectfully'),
      paragraph([
        text('Temple dress: '),
        link('what to wear in Bali temples', '/blog/what-to-wear-in-bali-temples'),
        text('. Geography context: '),
        link('where is Bali located', '/blog/where-is-bali-located'),
        text('.'),
      ]),
      ...commercialClose(
        'Understand Bali\'s faith through its food — book a village class where religion and recipes meet at the stove.',
      ),
    ]),
  },

  // 20 — Nyepi
  {
    slug: 'bali-day-of-silence-nyepi',
    title: 'Bali Day of Silence (Nyepi) — Airport Closed & Visitor Rules',
    excerpt:
      'Bali Day of Silence (Nyepi): 24 hours when the airport, roads, and lights shut down. Dates, rules for tourists, and how to plan cooking classes around Nyepi.',
    image: 'blog/best-time.jpg',
    imageAlt: 'Quiet Bali landscape — Nyepi Day of Silence when island shuts down',
    metaTitle: 'Bali Day of Silence Nyepi — Tourist Guide',
    metaDescription:
      'Bali Day of Silence (Nyepi): airport closed 24 hours, no lights or travel, dates for 2026/2027, and booking Ubud cooking class before or after Nyepi.',
    articleSection: 'Geography & Culture',
    keywords: ['Bali Day of Silence', 'Nyepi Bali', 'Nyepi 2026', 'Nyepi rules tourists', 'Silent Day Bali'],
    faq: [
      {
        question: 'What happens on Nyepi in Bali?',
        answer:
          'Balinese New Year — 24 hours of silence: no flights, no motorised travel, minimal lights, internet often limited. Everyone on island must observe restrictions.',
      },
      {
        question: 'Can tourists leave Bali on Nyepi?',
        answer:
          'Airport is closed. Plan arrivals and departures outside the Nyepi window. Hotels keep guests indoors with curtains drawn after dark.',
      },
      {
        question: 'Should I book a cooking class before or after Nyepi?',
        answer:
          'Book the day before Nyepi (stock up on snacks) or first open day after. Classes do not run on Nyepi itself — verify dates when booking.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali Day of Silence (Nyepi)', 1),
        text(' is unlike anything else in global tourism — a full 24-hour pause when the entire island, including Ngurah Rai airport and street traffic, goes quiet for Balinese New Year. Foreigners search it with equal parts curiosity and panic. Here is what to expect, how to respect it, and where a cooking class fits before or after the stillness.'),
      ]),
      heading('h2', 'Nyepi rules for visitors'),
      list([
        'No flights in or out — airport closed roughly 06:00 to 06:00 next day',
        'Stay on your hotel/villa property; no beach walks or scootering',
        'Lights low, noise minimal; staff enforce respectfully',
        'Ogoh-Ogoh parade eve (Nyepi Eve) is loud and spectacular — book accommodation early',
      ]),
      paragraph([
        text('Dates shift on the Balinese saka calendar — confirm each year. Pair planning with '),
        link('best time to visit Bali', '/blog/best-time-to-visit-bali'),
        text(' and '),
        link('what religion is Bali', '/blog/what-religion-is-bali'),
        text('.'),
      ]),
      heading('h2', 'Food before silence'),
      paragraph([
        text('Hotels serve limited room service; warungs close. The day before Nyepi is perfect for a big cultural meal you cook yourself — book '),
        link('morning cooking class', '/blog/morning-cooking-class-ubud-market-tour'),
        text(' early so you have leftovers and snacks. Learn preservation-friendly dishes like sambal and tempe.'),
      ]),
      heading('h2', 'After Nyepi — restart your trip'),
      paragraph([
        text('First open day sees pent-up demand for activities. Pre-book post-Nyepi class slots. New year energy makes the market tour especially lively.'),
      ]),
      ...commercialClose(
        'Plan Nyepi around a feast you cooked the day before — book your pre-Nyepi Tumang Bali class early.',
      ),
    ]),
  },

  // 21 — 7-day Bali itinerary (head-term planning)
  {
    slug: '7-day-bali-itinerary',
    title: '7-Day Bali Itinerary — Ubud Culture, Coast Days & a Cooking Class',
    excerpt:
      'A realistic 7-day Bali itinerary for first-timers: three nights in Ubud (with a morning cooking class), then the south coast — without packing every day with ticketed photo stops.',
    image: 'blog/itinerary.jpg',
    imageAlt: 'Seven-day Bali itinerary — travellers sharing a Balinese meal after a cooking class in Ubud',
    metaTitle: '7-Day Bali Itinerary 2026 — Ubud + Coast',
    metaDescription:
      '7-day Bali itinerary: 3 nights Ubud with a market-to-table cooking class, then Seminyak or Canggu. Airport transfer, crowds, and what to book ahead.',
    articleSection: 'Trip Planning',
    keywords: [
      '7 day Bali itinerary',
      'one week in Bali',
      '7 days in Bali first time',
      'Bali itinerary Ubud Seminyak',
      'week in Bali itinerary',
    ],
    faq: [
      {
        question: 'Is 7 days enough for Bali?',
        answer:
          'Yes for a first visit if you use two bases: about three nights in Ubud (culture, markets, cooking class) and three to four nights on the south coast (Seminyak, Canggu, or Uluwatu). Adding Nusa Penida or Gili usually needs a 10-day trip.',
      },
      {
        question: 'Where should I spend a week in Bali — Ubud or the beach?',
        answer:
          'Split it. A full week only in Canggu skips the island’s food culture; a full week only in Ubud skips the ocean. The classic first-timer split is Ubud first (recover from the flight with a village cooking class), then the coast before you fly out of DPS.',
      },
      {
        question: 'Which day should I book a cooking class on a 7-day Bali trip?',
        answer:
          'Day 2 or 3 in Ubud, morning session. You shop the pasar, cook 10+ dishes, then eat smarter at warungs for the rest of the week. Shared class IDR 506,370 with free Ubud hotel pickup. Book before you fly in July–August.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('A '),
        text('7-day Bali itinerary', 1),
        text(' works when you stop trying to see the whole island. Seven nights is two bases, one cooking morning, and enough unscheduled time that you actually enjoy the food. This is the split we recommend to guests who message us from the airport: Ubud first, coast second, cooking class booked before you land.'),
      ]),
      heading('h2', 'The 3 + 4 split (Ubud then coast)'),
      list([
        'Days 1–3: Ubud — recover, markets, temples, cooking class',
        'Days 4–7: Seminyak, Canggu, or Uluwatu — beach, sunset, fly out from DPS',
        'Skip a third hotel if you only have a week — packing eats half a day',
      ]),
      paragraph([
        text('Area comparison: '),
        link('Ubud vs Canggu vs Seminyak', '/blog/ubud-vs-canggu-vs-seminyak'),
        text('. Villa vs resort: '),
        link('Bali villas guide', '/blog/bali-villas-guide-where-to-stay'),
        text('. Season: '),
        link('best time to visit Bali', '/blog/best-time-to-visit-bali'),
        text('.'),
      ]),
      heading('h2', 'Day-by-day (food-first, not swing-first)'),
      list([
        'Day 1: Land DPS, transfer to Ubud (60–90 min). Early dinner at a warung. See our airport-to-Ubud guide.',
        'Day 2: Morning market-to-table cooking class (08:30–12:30) — the anchor of the week. Afternoon Campuhan Ridge or a slow café.',
        'Day 3: Tirta Empul or a quieter water temple, Tegallalang only if you still want the famous terraces (you already walked paddies in class).',
        'Day 4: Transfer south. Optional Tegenungan waterfall stop if you have a driver.',
        'Day 5–6: Beach time. One cultural evening (Uluwatu kecak) if you chose the Bukit.',
        'Day 7: Buffer morning, airport. Do not book a 08:30 class on departure day.',
      ]),
      paragraph([
        text('The cooking morning is '),
        link('market-to-table in Ubud', '/blog/market-to-table-cooking-class-ubud'),
        text(' — pasar, rice fields, 10+ dishes. Tight on time? '),
        link('Half-day cooking class Bali', '/half-day-cooking-class-bali'),
        text('. Two-day food zoom: '),
        link('Ubud food-lover itinerary', '/blog/ubud-food-lovers-itinerary'),
        text('.'),
      ]),
      heading('h2', 'What not to cram into seven days'),
      paragraph([
        text('Nusa Penida as a day trip from Ubud is a 12-hour ordeal. Mount Batur sunrise plus a cooking class on the same calendar day burns people out. Island-wide list: '),
        link('things to do in Bali', '/blog/things-to-do-in-bali'),
        text('. Ubud-only list: '),
        link('things to do in Ubud', '/blog/things-to-do-in-ubud'),
        text('.'),
      ]),
      ...commercialClose(
        'Lock the Ubud cooking morning before you lock the beach hotel — shared classes cap at 8 and fill in peak season.',
      ),
    ]),
  },

  // 22 — Things to do in Ubud (head term; island-wide page already exists)
  {
    slug: 'things-to-do-in-ubud',
    title: 'Things to Do in Ubud — Food, Temples, Rice Fields & a Cooking Class',
    excerpt:
      'The best things to do in Ubud, ranked by a village cooking school: morning market, a hands-on Balinese class, rice-field walks, temples, and warungs — without a packed ticket trail.',
    image: 'blog/best-things-to-do-in-ubud.webp',
    imageAlt: 'Things to do in Ubud — guests cooking Balinese food in a village kitchen near the rice fields',
    metaTitle: 'Things to Do in Ubud 2026 — Food-First List',
    metaDescription:
      'Things to do in Ubud: cooking class with market tour, rice paddies, Monkey Forest, temples, and warungs. A local kitchen’s shortlist — not another 40-item dump.',
    articleSection: 'Trip Planning',
    keywords: [
      'things to do in Ubud',
      'best things to do in Ubud',
      'Ubud activities',
      'what to do in Ubud Bali',
      'Ubud attractions',
    ],
    faq: [
      {
        question: 'What are the best things to do in Ubud?',
        answer:
          'If you care about food: a morning market tour and Balinese cooking class, a rice-field walk, one temple (Tirta Empul or a quieter pura), and warung meals. Monkey Forest and Tegallalang are optional — they are crowded and not how locals spend a morning.',
      },
      {
        question: 'How many days do you need in Ubud?',
        answer:
          'Two full days is the minimum for a cooking class plus one temple/walk day. Three nights is comfortable. One night is a day trip, not a stay.',
      },
      {
        question: 'Is a cooking class one of the best things to do in Ubud?',
        answer:
          'For most foreign travellers, yes — it is a half-day that explains every warung meal that follows. Tumang Bali shared class is IDR 506,370, max 8 guests, with Ubud hotel pickup.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Things to do in Ubud', 1),
        text(' should not be a 40-link dump of swings, ATVs, and the same three temples. This shortlist is how we tell guests to spend two or three days: cook once, walk paddies that are actually farmed, eat at warungs, and pick one sacred site. Island-wide ideas live on '),
        link('things to do in Bali', '/blog/things-to-do-in-bali'),
        text('.'),
      ]),
      heading('h2', 'What are the best things to do in Ubud?'),
      paragraph([
        text('If you care about food: a morning market tour and Balinese cooking class, a rice-field walk, one temple (Tirta Empul or a quieter pura), and warung meals. Monkey Forest and Tegallalang are optional — they are crowded and not how locals spend a morning. Two full days is the minimum; three nights is comfortable.'),
      ]),
      heading('h2', 'Do these first (food and culture)'),
      list([
        'Morning cooking class with pasar tour — shop, grind bumbu, cook 10+ dishes (IDR 506,370 shared)',
        'Village rice-field walk (included with morning class) instead of only Tegallalang tickets',
        'Ubud morning market if you are not already in a class — go early, before souvenir stalls dominate',
        'One water temple (Tirta Empul) or a quieter pura — sarong required',
        'Warung lunch/dinner: nasi campur, lawar, sate lilit now that you know the sambals',
      ]),
      paragraph([
        text('Book the class: '),
        link('cooking class Ubud', '/balinese-cooking-class-ubud'),
        text('. Market-to-table detail: '),
        link('market-to-table cooking class', '/blog/market-to-table-cooking-class-ubud'),
        text('. Two-day map: '),
        link('Ubud food-lover itinerary', '/blog/ubud-food-lovers-itinerary'),
        text('.'),
      ]),
      heading('h2', 'The classic 10 (if you have extra days)'),
      list([
        'Cooking class in Tumang village — market, paddies, 10+ dishes (do this first)',
        'Tegallalang rice terraces — go before 7am if you still want the famous viewpoint',
        'Sacred Monkey Forest — no food in bags; go early',
        'Sukawati Art Market — batik and crafts south of Ubud; bargain',
        'Pura Tirta Empul — sarong required; purification springs',
        'A Balinese dance performance in Ubud (kecak is usually a separate Uluwatu evening)',
        'Ubud traditional market at dawn — not the souvenir afternoon',
        'Yoga or a spa afternoon if you need a rest day',
        'Warung crawl: nasi campur, lawar, sate lilit after you know the sambals',
        'Mount Batur sunrise — only if you skip stacking it on the same day as a cooking class',
      ]),
      heading('h2', 'Optional (crowded, still fine once)'),
      list([
        'Sacred Monkey Forest — go early; do not carry food or wear dangling jewellery',
        'Tegallalang rice terraces — photo stop with fees; our class already includes working paddies',
        'Campuhan Ridge Walk — free, best at 07:00',
        'Yoga Barn or a spa afternoon if you need a rest day',
      ]),
      heading('h2', 'Skip or save for a longer stay'),
      paragraph([
        text('All-day ATV + swing combos eat the only morning you had for a cooking class. Nusa Penida is not an Ubud day trip. High-season crowds: '),
        link('is Ubud busy in high season', '/blog/ubud-high-season-crowds'),
        text('. Temple dress: '),
        link('what to wear in Bali temples', '/blog/what-to-wear-in-bali-temples'),
        text('.'),
      ]),
      ...commercialClose(
        'If you only book one paid activity in Ubud, make it the village cooking morning — you will taste the rest of the trip differently.',
      ),
    ]),
  },

  // 23 — Airport to Ubud
  {
    slug: 'bali-airport-to-ubud',
    title: 'Bali Airport to Ubud — Transfer Time, Grab vs Driver, Costs 2026',
    excerpt:
      'How to get from Ngurah Rai (DPS) airport to Ubud: 60–90 minutes, Grab vs official taxi vs private driver, typical IDR prices, and why you should not scooter it after a long-haul flight.',
    image: 'blog/tumang-vibe.webp',
    imageAlt: 'Arriving in Ubud from Bali airport — village road toward a cooking class kitchen',
    metaTitle: 'Bali Airport to Ubud Transfer 2026',
    metaDescription:
      'Bali airport to Ubud: 60–90 min from DPS. Grab, taxi, and private driver prices, pickup tips, and how to plan a cooking class the next morning.',
    articleSection: 'Trip Planning',
    keywords: [
      'Bali airport to Ubud',
      'DPS to Ubud',
      'Ngurah Rai to Ubud transfer',
      'airport transfer Ubud',
      'how long airport to Ubud',
    ],
    faq: [
      {
        question: 'How long from Bali airport to Ubud?',
        answer:
          'Typically 60–90 minutes from Ngurah Rai (DPS) to central Ubud, longer in late-afternoon rain or Galungan traffic. Plan two hours door-to-door including immigration if you land in peak hours.',
      },
      {
        question: 'How much is a taxi or Grab from DPS to Ubud?',
        answer:
          'Grab/Gojek often runs about IDR 300,000–400,000 depending on traffic and surge. Official airport taxis and pre-booked private cars are often IDR 350,000–500,000. Ignore kerbside touts quoting USD cash at a premium.',
      },
      {
        question: 'Should I book a cooking class the same day I land?',
        answer:
          'No. Immigration plus a 90-minute transfer makes a 08:30 morning class unrealistic. Book the class for the next morning, sleep in Ubud, and use free hotel pickup. See our packing and visa guides before you fly.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali airport to Ubud', 1),
        text(' is a 60–90 minute drive north from Ngurah Rai (DPS) — not a “quick hop.” Foreigners search this on the plane. Here is how we tell guests to do it so they still enjoy a cooking class the next morning.'),
      ]),
      heading('h2', 'Time and route'),
      paragraph([
        text('DPS sits in the south; Ubud is in the Gianyar uplands. Off-peak mornings can be close to an hour. 16:00–19:00 and wet-season storms stretch toward two hours. Geography: '),
        link('where is Bali located', '/blog/where-is-bali-located'),
        text('. Getting around the rest of the week: '),
        link('how to get around Bali', '/blog/how-to-get-around-bali'),
        text('.'),
      ]),
      heading('h2', 'Grab vs taxi vs private driver'),
      list([
        'Grab/Gojek: usually cheapest; follow official pickup signs (often Level 1) — do not negotiate with kerb touts',
        'Airport taxi counter: prepaid, clear, slightly higher than app prices',
        'Hotel or villa driver: convenient with a child seat or lots of luggage; confirm IDR price before you land',
        'Scooter after a long-haul: do not — jet lag plus traffic is how tourist accidents start',
      ]),
      paragraph([
        text('Have IDR cash or a working card/e-wallet. Payments: '),
        link('how to pay in Bali', '/blog/how-to-pay-in-bali'),
        text('. Visa/levy before you queue: '),
        link('Bali visa requirements', '/blog/bali-visa-requirements'),
        text(' and '),
        link('Bali new tourist rules 2026', '/blog/bali-new-tourist-rules-2026'),
        text('.'),
      ]),
      heading('h2', 'Land today, cook tomorrow'),
      paragraph([
        text('Free pickup for class is Ubud-area hotels, not the airport. Sleep, then take the '),
        link('morning cooking class with market tour', '/blog/morning-cooking-class-ubud-market-tour'),
        text('. If you stay south the first night, read '),
        link('cooking class Ubud from Canggu', '/blog/cooking-class-ubud-from-canggu'),
        text(' before you day-trip inland.'),
      ]),
      ...commercialClose(
        'Get the transfer right so Day 2 can be the cooking morning — not a stressed taxi argument at arrivals.',
      ),
    ]),
  },

  // 24 — Packing list
  {
    slug: 'bali-packing-list',
    title: 'Bali Packing List 2026 — What to Bring for Ubud, Temples & a Cooking Class',
    excerpt:
      'A practical Bali packing list for Ubud: temple sarong, rain layer, mosquito repellent, Type C adapter, and what you do not need for a village cooking class (aprons and ingredients are provided).',
    image: 'blog/what-to-expect.jpg',
    imageAlt: 'What to pack for Bali and an Ubud cooking class — light clothes and closed-toe shoes',
    metaTitle: 'Bali Packing List 2026 — Ubud & Class Day',
    metaDescription:
      'Bali packing list: sarong, DEET, reef-safe SPF, Type C plug, light rain jacket. What to wear to a cooking class — closed-toe shoes, no scooter required.',
    articleSection: 'Trip Planning',
    keywords: [
      'Bali packing list',
      'what to pack for Bali',
      'Bali packing list 2026',
      'Ubud packing list',
      'what to bring Bali cooking class',
    ],
    faq: [
      {
        question: 'What should I pack for Bali in 2026?',
        answer:
          'Light cotton or linen, a sarong for temples, DEET mosquito repellent, SPF 50, a compact rain jacket, sandals plus one pair of closed-toe shoes, and a Type C/F power adapter. Buy extra sarongs cheaply in Ubud if you forget.',
      },
      {
        question: 'What do I bring to a Balinese cooking class?',
        answer:
          'Closed-toe shoes for the rice-field walk, sun protection, and any dietary notes (vegetarian, gluten-free, pork-free). Tumang Bali provides ingredients, tools, and aprons. Hotel pickup in Ubud is included — you do not need a scooter.',
      },
      {
        question: 'Do I need a rain jacket in dry season?',
        answer:
          'A packable layer still helps. Dry season (April–October) is sunnier, but tropical showers happen. Wet season (November–March) makes the jacket non-negotiable for scooter-free travellers walking between cars and warungs.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('A '),
        text('Bali packing list', 1),
        text(' for Ubud is shorter than influencer checklists imply. You need heat-proof clothes, temple coverage, mosquito protection, and one pair of shoes that can walk a paddy path. You do not need a chef kit — the class provides that.'),
      ]),
      heading('h2', 'Clothes and temple kit'),
      list([
        'Breathable shirts and shorts/trousers — modest-casual for villages',
        'Sarong (kamen) + sash for temples; rentals exist but a personal one is nicer',
        'Swimwear if you add a coast stay later in the week',
        'Light rain jacket even in “dry” months',
      ]),
      paragraph([
        text('Temple rules: '),
        link('what to wear in Bali temples', '/blog/what-to-wear-in-bali-temples'),
        text('. Class-day clothes: '),
        link('what to wear to a Bali cooking class', '/what-to-wear-bali-cooking-class'),
        text('.'),
      ]),
      heading('h2', 'Health, plugs, and money'),
      list([
        'DEET or picaridin — dengue risk is real at dawn/dusk',
        'Reef-safe SPF 50; local sunscreen is often expensive',
        'Oral rehydration sachets; tap water is not for drinking',
        'Type C/F adapter; power cuts happen — a small power bank helps',
        'Some IDR cash for warungs; cards for hotels and online class booking',
      ]),
      paragraph([
        text('Water: '),
        link('can you drink tap water in Bali', '/blog/can-you-drink-tap-water-bali'),
        text('. Stomach: '),
        link('how to avoid Bali Belly', '/blog/how-to-avoid-bali-belly'),
        text('. Cash vs card: '),
        link('how to pay in Bali', '/blog/how-to-pay-in-bali'),
        text('. Mosquitoes: '),
        link('dangerous animals in Bali', '/blog/dangerous-animals-bali'),
        text('.'),
      ]),
      heading('h2', 'What you can leave at the hotel on class day'),
      paragraph([
        text('Laptop, jewellery, and a huge backpack. Bring a small day bag, closed-toe shoes, and sunscreen. We provide aprons and a recipe booklet. Solo travellers: '),
        link('cooking class Ubud for solo travelers', '/blog/cooking-class-ubud-for-solo-travelers'),
        text('. Then '),
        link('book the cooking class', '/balinese-cooking-class-ubud'),
        text('.'),
      ]),
      ...commercialClose(
        'Pack light, pack a sarong, and leave one morning free — the cooking class does not need extra gear from home.',
      ),
    ]),
  },

  // --- Sep 2026 competitor / GEO expansion ---
  {
    slug: 'tegallalang-rice-terrace-guide',
    title: 'Tegallalang Rice Terrace Guide — Crowds, Tickets & Better Village Walk',
    excerpt:
      'Visiting Tegallalang rice terrace near Ubud? What to expect on tickets and crowds — and why a village cooking-class paddy walk can feel more local than the Instagram swing zone.',
    image: 'blog/rice-field-class.webp',
    imageAlt: 'Working rice paddies near Ubud — quieter alternative to crowded Tegallalang swings',
    metaTitle: 'Tegallalang Rice Terrace Guide 2026',
    metaDescription:
      'Tegallalang rice terrace guide: tickets, crowds, swings, best time. Prefer a quiet village paddy walk? Pair with Tumang Bali cooking class from IDR 506,370.',
    articleSection: 'Trip Planning',
    keywords: [
      'tegallalang rice terrace',
      'tegallalang rice terrace ubud',
      'tegallalang tickets',
      'ubud rice terrace',
      'tegallalang swings',
      'best rice terrace ubud',
    ],
    faq: [
      {
        question: 'Is Tegallalang rice terrace worth visiting?',
        answer:
          'Yes for the classic postcard view — go early. Expect entrance fees, selfie swings, and crowds by mid-morning. For a quieter working-paddy walk, Tumang Bali’s morning cooking class includes rice fields without the swing park scene.',
      },
      {
        question: 'How much is Tegallalang entrance?',
        answer:
          'Fees change; budget roughly IDR 15,000–100,000+ depending on parking, photo spots, and optional swing add-ons. Confirm on-site. The cooking class paddy walk is included in the class price (shared IDR 506,370).',
      },
      {
        question: 'What is a quieter alternative to Tegallalang?',
        answer:
          'Jatiluwih is larger and farther. Near Ubud, a village cooking class with a rice-field walk (Tumang Bali) shows working subak paddies with a chef, then lunch you cook — fewer drones and swings.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('A '),
        text('Tegallalang rice terrace', 1),
        text(' day is Bali’s most searched Ubud photo stop. Beautiful — and busy. This guide covers timing and expectations, then the quieter village paddy alternative that sits inside a '),
        link('rice terrace cooking class', '/blog/rice-terrace-cooking-class-ubud'),
        text('.'),
      ]),
      heading('h2', 'Tegallalang: what to expect'),
      list([
        'Arrive before 08:00 for softer light and fewer coaches',
        'Entrance + parking fees stack; swings are usually extra',
        'Paths can be steep and slippery after rain',
        'Midday heat and selfie traffic peak hard',
      ]),
      paragraph([
        text('Combine with temples only if you leave buffer time. One-day plan: '),
        link('one day in Ubud itinerary', '/blog/one-day-ubud-itinerary'),
        text('.'),
      ]),
      heading('h2', 'Quieter alternative — cook among working paddies'),
      paragraph([
        text('Tumang Bali’s morning class walks working subak fields to the kitchen after the pasar — scenery without the swing queue. Shared IDR 506,370 · max 8 · free Ubud pickup. '),
        link('Book cooking class Ubud', '/balinese-cooking-class-ubud'),
        text(' · '),
        link('market-to-table class', '/blog/market-to-table-cooking-class-ubud'),
        text('.'),
      ]),
      heading('h2', 'Tegallalang vs cooking-class paddies'),
      list([
        'Tegallalang — iconic viewpoint, tickets, swings, crowds',
        'Class paddy walk — working fields, chef commentary, ends in lunch you cook',
        'Jatiluwih — UNESCO-scale terraces, longer drive from Ubud',
      ]),
      paragraph([
        text('More Ubud shortlist: '),
        link('things to do in Ubud', '/blog/things-to-do-in-ubud'),
        text('. High-season crowd tips: '),
        link('Ubud high season', '/blog/ubud-high-season-crowds'),
        text('.'),
      ]),
      ...commercialClose(
        'See Tegallalang once if you want the postcard — cook in the paddies if you want the memory.',
      ),
    ]),
  },

  {
    slug: 'one-day-ubud-itinerary',
    title: 'One Day in Ubud Itinerary — Market, Cooking Class & Slow Afternoon',
    excerpt:
      'A realistic one-day Ubud itinerary for first-timers: morning market-to-table cooking class, light temple or rice-field time, warung dinner — without packing Tegallalang and Monkey Forest into the same morning.',
    image: 'blog/best-things-to-do-in-ubud.webp',
    imageAlt: 'One day in Ubud itinerary — cooking class morning and village views',
    metaTitle: 'One Day in Ubud Itinerary 2026',
    metaDescription:
      'One day in Ubud itinerary: morning cooking class with market tour, optional temple, warung dinner. Skip the overcrowded checklist. Shared class IDR 506,370.',
    articleSection: 'Trip Planning',
    keywords: [
      'one day in ubud',
      'ubud day itinerary',
      'ubud in one day',
      'day trip to ubud itinerary',
      'best way to spend a day in ubud',
      'ubud day plan cooking class',
    ],
    faq: [
      {
        question: 'What is the best one-day itinerary in Ubud?',
        answer:
          'Morning: market-to-table cooking class (pasar + cook + lunch). Afternoon: one temple or a slow café, not five attractions. Evening: warung near your hotel. Tumang Bali shared class IDR 506,370 with free Ubud pickup.',
      },
      {
        question: 'Can I do Monkey Forest and a cooking class on the same day?',
        answer:
          'Possible but rushed. The morning class runs about 08:30–12:30. Save Monkey Forest or Tegallalang for another morning — or skip them if food is your priority.',
      },
      {
        question: 'Is one day in Ubud enough?',
        answer:
          'Enough for a cooking class and a taste of village pace. Not enough for every Instagram pin. Stay two nights if you can — see our 2-day food itinerary and 7-day Bali plan.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('A '),
        text('one day in Ubud itinerary', 1),
        text(' works when you pick one deep experience instead of five shallow stops. For food travellers that deep experience is a morning '),
        link('cooking class with market tour', '/cooking-class-with-market-tour-ubud'),
        text(' — then a slow afternoon.'),
      ]),
      heading('h2', 'Morning — market to table'),
      list([
        'Pickup from your Ubud hotel (included with Tumang)',
        'Traditional pasar with a chef',
        'Rice-field walk to the village kitchen',
        'Cook 10+ dishes and eat lunch you made',
      ]),
      paragraph([
        text('Class overview: '),
        link('cooking class Ubud', '/balinese-cooking-class-ubud'),
        text('. Price: '),
        link('Ubud cooking class price', '/blog/ubud-cooking-class-price'),
        text('.'),
      ]),
      heading('h2', 'Afternoon — pick one, not five'),
      list([
        'One temple (Saraswati or a quieter village pura) with a sarong',
        'Café + journal time in central Ubud',
        'Spa or pool if you flew in yesterday',
        'Skip stacking Monkey Forest + Tegallalang + waterfalls after a 4-hour class',
      ]),
      paragraph([
        text('Wider shortlist: '),
        link('things to do in Ubud', '/blog/things-to-do-in-ubud'),
        text('. Two-day food focus: '),
        link('Ubud food lovers itinerary', '/blog/ubud-food-lovers-itinerary'),
        text('.'),
      ]),
      heading('h2', 'Evening'),
      paragraph([
        text('Warung nasi campur near your hotel. You will taste spices you ground that morning. Coming from Canggu for the day? '),
        link('Cooking class from Canggu', '/blog/cooking-class-ubud-from-canggu'),
        text('. Week-long plan: '),
        link('7-day Bali itinerary', '/blog/7-day-bali-itinerary'),
        text('.'),
      ]),
      ...commercialClose(
        'One Ubud day: cook in the morning, wander lightly after — that beats a exhausted selfie trail.',
      ),
    ]),
  },

  {
    slug: 'bali-rainy-season-what-to-do',
    title: 'Bali Rainy Season — What to Do (Cooking Class Still Works)',
    excerpt:
      'Bali rainy season (roughly November–March) is humid and green, not cancelled. Best indoor-friendly plans: village cooking class, temples, cafés, and flexible morning slots.',
    image: 'blog/best-time.jpg',
    imageAlt: 'Green Bali rice fields in rainy season — cooking class still runs in Ubud',
    metaTitle: 'Bali Rainy Season What to Do 2026',
    metaDescription:
      'Bali rainy season what to do: cooking class Ubud, temples, cafés. Showers are usually short. Shared class IDR 506,370 with covered kitchen and hotel pickup.',
    articleSection: 'Trip Planning',
    keywords: [
      'bali rainy season',
      'bali wet season what to do',
      'visit bali in rainy season',
      'ubud rainy season',
      'bali november to march',
      'indoor activities ubud',
    ],
    faq: [
      {
        question: 'Is Bali rainy season a bad time to visit?',
        answer:
          'No — it is greener, often quieter, and showers are frequently short. Pack a rain jacket and plan one flexible indoor-friendly highlight per day. A village cooking class still runs year-round in Ubud.',
      },
      {
        question: 'Can I take a cooking class in Bali rainy season?',
        answer:
          'Yes. Tumang Bali’s kitchen is covered; the rice-field walk may be muddy — wear closed-toe shoes. Morning and afternoon sessions operate through wet season. Shared IDR 506,370.',
      },
      {
        question: 'When is Bali rainy season?',
        answer:
          'Roughly November to March (WITA), with regional variation. Dry season is roughly April–October. See our best-time guide for month-by-month nuance.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('Bali rainy season', 1),
        text(' (about November–March) scares first-timers who imagine all-day storms. Reality: humid mornings, green paddies, and short tropical showers. Plan flexible, covered activities — a '),
        link('hands-on cooking class in Ubud', '/blog/hands-on-cooking-class-ubud'),
        text(' is one of the best.'),
      ]),
      heading('h2', 'What rainy season is actually like'),
      list([
        'Afternoons more likely to shower than mornings — good reason to book a morning class',
        'Rice terraces look lush; paths get muddy',
        'Fewer crowds than July–August peak',
        'Bring a packable jacket (see packing list)',
      ]),
      paragraph([
        text('Season overview: '),
        link('best time to visit Bali', '/blog/best-time-to-visit-bali'),
        text('. Pack: '),
        link('Bali packing list', '/blog/bali-packing-list'),
        text('.'),
      ]),
      heading('h2', 'Best rainy-season activities near Ubud'),
      list([
        'Morning cooking class (covered kitchen, pickup included)',
        'Temples with a sarong — showers pass',
        'Cafés and spa time between cells of rain',
        'Museum or art space if you want zero outdoor risk',
      ]),
      paragraph([
        text('Book: '),
        link('cooking class Ubud', '/balinese-cooking-class-ubud'),
        text('. Pickup details: '),
        link('cooking class with hotel pickup', '/blog/cooking-class-ubud-hotel-pickup'),
        text('.'),
      ]),
      heading('h2', 'What to skip insisting on'),
      paragraph([
        text('All-day outdoor waterfall circuits with no buffer, scooter rides in lightning, and packing five outdoor pins into one wet afternoon. High-season crowds guide (dry months): '),
        link('Ubud high season crowds', '/blog/ubud-high-season-crowds'),
        text('.'),
      ]),
      ...commercialClose(
        'Rainy season is for cooking, temples, and green views — not for cancelling Bali.',
      ),
    ]),
  },

  {
    slug: '5-tours-to-anticipate-before-bali',
    title: '5 Tours to Anticipate Before You Come to Bali',
    excerpt:
      'Before you land in Bali, lock five experiences worth planning ahead: a village cooking class, temple circuit, rice terraces, an island day trip, and a sunrise hike — plus what each one really requires.',
    image: 'blog/best-time.jpg',
    imageAlt: 'Travellers planning Bali tours before arrival — cooking class, temples, rice fields',
    metaTitle: '5 Tours to Anticipate Before Bali',
    metaDescription:
      '5 tours to anticipate before Bali: cooking class Ubud, temples, rice terraces, island day, sunrise hike. What to book, wear, and expect — plus Tumang Bali from IDR 506,370.',
    articleSection: 'Trip Planning',
    keywords: [
      'tours to book before bali',
      'what to anticipate before bali',
      'best tours bali before arrival',
      'bali tours to plan ahead',
      'things to book before bali trip',
      'bali itinerary tours',
    ],
    faq: [
      {
        question: 'Which Bali tours should I book before I arrive?',
        answer:
          'Book capacity-limited experiences first: a small-group cooking class in Ubud, a Mount Batur sunrise seat, and popular Nusa Penida boat days. Temple visits and Tegallalang can often be arranged on island, but planning dress code and traffic buffers in advance saves the trip.',
      },
      {
        question: 'Do I need to book a cooking class before flying to Bali?',
        answer:
          'Strongly recommended in July–August and holiday weeks. Tumang Bali caps shared classes at 8 guests. Message WhatsApp or book online with your hotel name for free Ubud pickup. Shared class IDR 506,370 (2+).',
      },
      {
        question: 'What should first-timers anticipate about Bali tours?',
        answer:
          'Traffic eats half-days, temple dress codes are enforced, island boats cancel in rough seas, sunrise hikes start before 2 a.m., and “rice terrace” can mean crowded selfie paths or a quiet village walk — pick on purpose.',
      },
    ],
    ...TEAM,
    content: root([
      paragraph([
        text('5 tours to anticipate before you come to Bali', 1),
        text(
          ' — not a dump of every activity on the island, but the five experiences most foreigners wish they had locked (or at least researched) before the flight. Book the scarce ones early; understand dress, timing, and cancellation rules for the rest. One of the highest-satisfaction half-days is a village ',
        ),
        link('cooking class in Ubud', '/balinese-cooking-class-ubud'),
        text(' with market tour and rice-field walk.'),
      ]),
      heading('h2', '1. Balinese cooking class (Ubud) — book seats early'),
      paragraph([
        text(
          'Anticipate: small kitchens sell out in high season; dietary notes need 24 hours; morning sessions start with a pasar visit. Tumang Bali caps shared groups at ',
        ),
        text('8 guests', 1),
        text(', teaches in English, and includes free central Ubud hotel pickup. Shared rate '),
        text('IDR 506,370', 1),
        text(' (2+). Compare sessions: '),
        link('morning vs afternoon cooking class', '/blog/morning-vs-afternoon-tours-bali'),
        text('. Price guide: '),
        link('Ubud cooking class price', '/blog/ubud-cooking-class-price'),
        text('.'),
      ]),
      list([
        'Morning ~08:30–12:30 = market + paddies + 10+ dishes',
        'Afternoon ~14:30–17:30 = cook-and-dine (no market)',
        'Tell allergies / vegetarian / halal preferences at booking',
      ]),
      paragraph([
        text('Book online: '),
        link('book your cooking class', '/book-your-cooking-class'),
        text('. Full page: '),
        link('Balinese cooking class Ubud', '/balinese-cooking-class-ubud'),
        text('. Pickup notes: '),
        link('cooking class Ubud hotel pickup', '/blog/cooking-class-ubud-hotel-pickup'),
        text('.'),
      ]),
      heading('h2', '2. Temple circuit — sarong, offerings, respectful timing'),
      paragraph([
        text(
          'Anticipate: Uluwatu, Tirta Empul, and Besakih are not “casual shorts” stops. Bring or rent a sarong and sash; cover shoulders; expect queues at peak sunset. Monkeys at Uluwatu steal glasses and phones. Read ',
        ),
        link('what to wear in Bali temples', '/blog/what-to-wear-in-bali-temples'),
        text(' before you pack. Pair a calm Ubud morning class with a temple afternoon — see '),
        link('one day in Ubud itinerary', '/blog/one-day-ubud-itinerary'),
        text('.'),
      ]),
      heading('h2', '3. Rice terrace visit — crowds vs quiet village walk'),
      paragraph([
        text(
          'Anticipate: Tegallalang is beautiful and busy — ticket booths, swing upsells, midday heat. If you want paddies without the selfie rail, a village cooking-class walk near Tumang is often the calmer alternative. Guide: ',
        ),
        link('Tegallalang rice terrace guide', '/blog/tegallalang-rice-terrace-guide'),
        text('. Related: '),
        link('rice terrace cooking class Ubud', '/blog/rice-terrace-cooking-class-ubud'),
        text('.'),
      ]),
      heading('h2', '4. Island day trip (Nusa Penida / Lembongan) — seas and early starts'),
      paragraph([
        text(
          'Anticipate: boat days leave early from Sanur, seas cancel tours without much notice, and the drive from Ubud to the harbour can take 1.5–2+ hours in traffic. Book refundable tickets when possible; keep a buffer day. Do not stack a 4 a.m. volcano hike and a Penida boat on consecutive nights if you value the cooking class (or sleep). Island overview sits inside broader ',
        ),
        link('things to do in Bali', '/blog/things-to-do-in-bali'),
        text('.'),
      ]),
      heading('h2', '5. Sunrise hike (Mount Batur) — fitness, altitude, 2 a.m. pickup'),
      paragraph([
        text(
          'Anticipate: most packages collect you between 1:30–2:30 a.m., climbing in the dark with a guide. Bring layers, a headlamp if provided poorly, and realistic fitness. Skip it if you have altitude or knee issues — swap for a sunrise coffee and a morning ',
        ),
        link('market-tour cooking class', '/cooking-class-with-market-tour-ubud'),
        text(' instead. Week-long sample plan: '),
        link('7-day Bali itinerary', '/blog/7-day-bali-itinerary'),
        text('.'),
      ]),
      heading('h2', 'What else to anticipate before landing'),
      list([
        'Visa / VoA and tourist rules — check current entry pages',
        'Airport → Ubud transfer time (often 1.5–2.5 hours)',
        'Rainy-season showers Nov–Mar (classes still run)',
        'Packing: sarong-friendly clothes, closed shoes for markets',
      ]),
      paragraph([
        text('Transfers: '),
        link('Bali airport to Ubud', '/blog/bali-airport-to-ubud'),
        text('. Pack: '),
        link('Bali packing list', '/blog/bali-packing-list'),
        text('. Wet months: '),
        link('Bali rainy season what to do', '/blog/bali-rainy-season-what-to-do'),
        text('. Rules snapshot: '),
        link('Bali new tourist rules 2026', '/blog/bali-new-tourist-rules-2026'),
        text('.'),
      ]),
      heading('h2', 'Quick booking order (before you fly)'),
      list([
        'Reserve cooking class date + hotel pin (especially Jul–Aug)',
        'Hold refundable island boat / Batur seats if those are must-dos',
        'Leave temple + terrace timing flexible once you see traffic',
        'Keep one empty half-day for rain or recovery',
      ]),
      ...commercialClose(
        'Of the five tours above, the cooking class is the one you can book with confidence from home — and the one that teaches you Bali through food, not only photos.',
      ),
    ]),
  },
]
