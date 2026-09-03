import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'

const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const compare = '/compare-ubud-cooking-classes'
const privateClass = '/private-cooking-class-ubud'
const marketTour = '/cooking-class-with-market-tour-ubud'
const halfDay = '/half-day-cooking-class-bali'

export const ubudCookingClassPrice: StaticArticle = {
  slug: 'ubud-cooking-class-price',
  title: 'Ubud Cooking Class Price 2026 — Shared IDR 350K, Private Rates Explained',
  metaTitle: 'Ubud Cooking Class Price 2026 — IDR 350K Shared | Tumang Bali',
  metaDescription:
    'Ubud cooking class price 2026: shared IDR 350,000, private 1 person IDR 650,000, kids IDR 550,000. Includes pickup, market tour, 10+ dishes. Book Tumang Bali.',
  excerpt:
    'How much does a cooking class in Ubud cost in 2026? Shared classes start at IDR 350K. A private class for 1 person is IDR 650K; kids are IDR 550K. Full inclusions explained.',
  image: '/images/blog/rice-field-class.webp',
  imageAlt: 'Guests dining after a Balinese cooking class near Ubud — 2026 price guide',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-02',
  keywords: [
    'ubud cooking class price',
    'cooking class ubud cost',
    'how much cooking class ubud',
    'bali cooking class price 2026',
    'tumang bali price',
  ],
  faqs: [
    {
      question: 'How much is a cooking class in Ubud in 2026?',
      answer:
        'Tumang Bali shared morning or afternoon class is IDR 350,000 per person. Private class for 1 adult is IDR 650,000; kids on a private class are IDR 550,000. Prices include Ubud hotel pickup, ingredients, the meal, and a recipe booklet.',
    },
    {
      question: 'What is included in the IDR 350,000 cooking class price?',
      answer:
        'Hotel pickup and drop-off in the Ubud area, guided morning market tour (AM class), rice-field walk, hands-on cooking of 10+ dishes, the shared feast, and a printed recipe booklet. Vegetarian and vegan menus at no extra charge.',
    },
    {
      question: 'Why are GetYourGuide or Viator prices sometimes higher?',
      answer:
        'OTA platforms (Bokun, GetYourGuide, Viator, Airbnb) charge a booking commission, so their listed price may sit slightly above our direct IDR 350,000 rate. Same class — the difference is the platform fee. Book direct for the lowest price, or use an OTA for instant checkout.',
    },
    {
      question: 'Is Tumang Bali cheaper than other Ubud cooking classes?',
      answer:
        'Independent 2026 guides put village classes around IDR 450,000–650,000 and hotel-style classes higher. Our shared rate at IDR 350K is positioned for value while keeping market tour, max 8 guests, and 10+ dishes.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Ubud cooking class price in 2026 at Tumang Bali:</strong> shared morning or afternoon class{' '}
        <strong>IDR 350,000</strong> per person; private class for 1 adult <strong>IDR 650,000</strong>; kids on
        a private class <strong>IDR 550,000</strong>. Those rates include Ubud-area hotel pickup, ingredients,
        the meal you cook, and a recipe booklet. Morning sessions also include the traditional market tour and
        rice-field walk.
      </p>
      <h2>2026 price table — Tumang Bali</h2>
      <ul>
        <li>
          <strong>Shared class</strong> (morning or afternoon): IDR 350,000 per person
        </li>
        <li>
          <strong>Private class — 1 adult</strong>: IDR 650,000
        </li>
        <li>
          <strong>Kids on a private class</strong>: IDR 550,000
        </li>
      </ul>
      <p>
        See the dedicated{' '}
        <Link href="/blog/private-cooking-class-ubud-price">private cooking class price guide</Link> and{' '}
        <Link href={privateClass}>private kitchen landing page</Link> if you want the kitchen to yourselves.
      </p>
      <h2>What the price includes</h2>
      <ul>
        <li>Complimentary pickup and drop-off in the Ubud hotel area</li>
        <li>Morning: guided pasar tour + rice-field walk to the village kitchen</li>
        <li>Hands-on cooking of 10+ Balinese dishes (sate lilit, sambal matah, lawar, pepes, and more)</li>
        <li>Shared feast of everything you made</li>
        <li>Printed recipe booklet to recreate dishes at home</li>
        <li>English-speaking local chefs · max 8 guests in shared class</li>
      </ul>
      <h2>How Tumang Bali compares on price</h2>
      <p>
        Village and family-run Ubud classes often sit around IDR 450,000–650,000. Mid-range school kitchens run
        IDR 600,000–800,000. Hotel or villa chef sessions can exceed IDR 1,200,000 for private 1–2 person
        bookings. Our shared class at IDR 350K keeps authenticity (market tour, hand-ground bumbu, small
        groups) without resort markups. Full side-by-side:{' '}
        <Link href={compare}>compare Ubud cooking classes</Link>.
      </p>
      <h2>OTA vs direct booking price</h2>
      <p>
        Booking on GetYourGuide, Viator, Airbnb Experiences, or Bokun may show a slightly higher price because
        those platforms take a commission. Use an OTA when you want instant checkout; book on{' '}
        <Link href={book}>tumangbaliclass.com</Link> or WhatsApp for the lowest direct rate. Guides:{' '}
        <Link href="/blog/book-cooking-class-ubud-getyourguide">GetYourGuide</Link> ·{' '}
        <Link href="/blog/book-cooking-class-ubud-viator">Viator</Link> ·{' '}
        <Link href="/blog/book-cooking-class-ubud-airbnb">Airbnb</Link>.
      </p>
      <h2>Book at the 2026 rate</h2>
      <p>
        Ready to cook? <Link href={money}>Book our Balinese cooking class in Ubud</Link> or{' '}
        <Link href={book}>reserve online</Link>. Still deciding? Read{' '}
        <Link href="/blog/is-a-bali-cooking-class-worth-it">is a Bali cooking class worth it?</Link>
      </p>
    </>
  ),
}

export const privateCookingClassUbudPrice: StaticArticle = {
  slug: 'private-cooking-class-ubud-price',
  title: 'Private Cooking Class Ubud Price — 1 Person IDR 650K, Kids IDR 550K',
  metaTitle: 'Private Cooking Class Ubud Price | 1 Person 650K, Kids 550K',
  metaDescription:
    'Private cooking class in Ubud: IDR 650,000 for 1 person, IDR 550,000 for kids. Exclusive kitchen, local chef, market tour and hotel pickup. Book Tumang Bali.',
  excerpt:
    'Want a private Balinese cooking class in Ubud for one person or a family? Adult / solo rate is IDR 650K. Kids are IDR 550K. Your own chef, your menu, no other guests.',
  image: '/images/blog/private-group-class.webp',
  imageAlt: 'Private Balinese cooking class for one guest in a village kitchen near Ubud',
  author: 'Chef Wayan',
  authorRole: 'Head Chef',
  publishedDate: '2026-09-02',
  keywords: [
    'private cooking class ubud price',
    'private cooking class ubud',
    'solo cooking class bali',
    'private chef cooking class ubud',
    'kids private cooking class bali',
  ],
  faqs: [
    {
      question: 'How much is a private cooking class in Ubud?',
      answer:
        'At Tumang Bali, a private cooking class for 1 adult is IDR 650,000. Kids on a private class are IDR 550,000. Shared (non-private) class is IDR 350,000 per person if you prefer a small group.',
    },
    {
      question: 'What do I get in a private class that shared does not?',
      answer:
        'The kitchen is yours — no other guests. Pace, photos, and dietary focus are tailored. Morning private sessions still include market tour and rice-field walk when booked for AM.',
    },
    {
      question: 'Is a private class good for solo travellers?',
      answer:
        'Yes. Solo guests often skip shared tables. A private 1-person class means the chef, market walk, and stove are dedicated to you — ideal for food writers, honeymooners booking alone first day, or anyone who wants to go deeper on spice paste.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Looking for a <strong>private cooking class in Ubud</strong>? Tumang Bali rates in 2026:{' '}
        <strong>IDR 650,000</strong> for 1 adult and <strong>IDR 550,000</strong> for kids. The kitchen is
        exclusive — your chef, your menu pace, no other guests. Shared class remains IDR 350,000 if you prefer
        a friendly max-8 group.
      </p>
      <h2>Private cooking class price list</h2>
      <ul>
        <li>1 person / adult: IDR 650,000</li>
        <li>Kids (private class): IDR 550,000</li>
        <li>Shared class alternative: IDR 350,000 per person</li>
      </ul>
      <h2>Why book private</h2>
      <p>
        Solo travellers often skip cooking classes because they do not want a big table. A private session
        means you grind <Link href="/blog/balinese-spice-paste-cooking-class">Base Genep</Link> at your own
        pace, ask every question, and film without crowding. Couples booking anniversaries or proposals choose
        private for intimacy — see our{' '}
        <Link href="/blog/cooking-class-ubud-for-couples">couples cooking class guide</Link>.
      </p>
      <h2>Kids on a private class</h2>
      <p>
        Children in a private class pay IDR 550,000. They grind spices, wrap sate lilit, and mix sambal —
        adults handle hot pans. Kids under 4 can usually sit in without a cooking station; ask when you book.
        Family overview: <Link href="/blog/ubud-cooking-class-for-families">Ubud cooking class for families</Link>.
      </p>
      <h2>What is included</h2>
      <ul>
        <li>Exclusive village kitchen — no other guests</li>
        <li>Complimentary pickup in the Ubud area</li>
        <li>Morning market tour + rice-field walk (AM bookings)</li>
        <li>10+ dishes · recipe booklet · English instruction</li>
        <li>Full vegetarian / vegan menu on request</li>
      </ul>
      <h2>Book a private date</h2>
      <p>
        Full details on our <Link href={privateClass}>private cooking class Ubud</Link> page. Compare all
        rates in the <Link href="/blog/ubud-cooking-class-price">Ubud cooking class price guide</Link>, then{' '}
        <Link href={book}>book online</Link> or WhatsApp +62 822-1013-2418.
      </p>
    </>
  ),
}

export const bestCookingClassInUbud: StaticArticle = {
  slug: 'best-cooking-class-in-ubud',
  title: 'Best Cooking Class in Ubud (2026) — How to Choose the Right One',
  metaTitle: 'Best Cooking Class in Ubud 2026 — How to Choose | Tumang Bali',
  metaDescription:
    'Looking for the best cooking class in Ubud? Compare market tours, group sizes, authenticity and price so you can book the right Balinese cooking experience in 2026.',
  excerpt:
    'Searching for the best cooking class in Ubud? Compare what matters — market tours, group size, authenticity, and price — and see why village-based classes rank highest for food travelers.',
  image: '/images/blog/tumang-vibe.webp',
  imageAlt: 'Guests cooking in an authentic Balinese kitchen near Ubud during a morning class',
  author: 'Chef Wayan',
  authorRole: 'Head Chef',
  publishedDate: '2026-09-02',
  keywords: [
    'best cooking class in ubud',
    'best cooking class ubud',
    'ubud cooking class',
    'authentic cooking class ubud',
    'balinese cooking class ubud',
  ],
  faqs: [
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
  body: (
    <>
      <p data-speakable>
        If you are searching for the <strong>best cooking class in Ubud</strong>, look for a real morning
        market tour, spice paste ground on a cobek, 10+ dishes from scratch, and a local Balinese chef — not a
        hotel demo. Tumang Bali matches that profile: max 8 guests, village kitchen, IDR 350,000 shared,
        TripAdvisor Travelers&apos; Choice 2026.
      </p>
      <h2>What makes the best cooking class in Ubud</h2>
      <ul>
        <li>A real morning market tour at a local pasar — not souvenir stalls only</li>
        <li>Spice paste ground on a stone mortar, not scooped from a jar</li>
        <li>10 or more dishes including sate lilit, lawar, and sambal matah</li>
        <li>A local chef who lives in the village, not a hotel instructor on a script</li>
        <li>Small groups (max 8) so everyone cooks hands-on</li>
      </ul>
      <h2>Quick comparison of Ubud cooking class types</h2>
      <ul>
        <li>
          <strong>Village-based</strong> (Tumang, Paon): market tour, rice-field walk, 10+ dishes, IDR
          350K–650K — best for authenticity
        </li>
        <li>
          <strong>Central Ubud schools</strong>: indoor kitchen, fewer dishes, IDR 600K–800K — best for
          convenience
        </li>
        <li>
          <strong>Resort / hotel classes</strong>: polished setting, adapted menu, IDR 900K+ — best for luxury
          ease over depth
        </li>
      </ul>
      <p>
        Full matrix: <Link href={compare}>compare Ubud cooking classes</Link>. Island-wide view:{' '}
        <Link href="/blog/best-cooking-class-in-bali">best cooking class in Bali</Link>.
      </p>
      <h2>Why village classes rank highest</h2>
      <p>
        Classes in working villages a short drive from central Ubud win on authenticity. You shop where locals
        shop, walk active rice paddies, and cook open-air with terrace views — the experience food travelers
        came for. Tumang morning class: hotel pickup → pasar → rice-field walk → grind{' '}
        <Link href="/blog/how-to-make-bumbu-bali">bumbu Bali</Link> → feast. Afternoon keeps the full menu
        without the market — see{' '}
        <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon</Link>.
      </p>
      <h2>Red flags — classes that are not worth booking</h2>
      <ul>
        <li>No market tour on morning sessions</li>
        <li>Groups of 20+ (you watch more than you cook)</li>
        <li>Premade spice paste</li>
        <li>Only 3–4 dishes</li>
        <li>No recent reviews naming the chef</li>
      </ul>
      <h2>Best cooking class in Ubud for different travellers</h2>
      <p>
        Solo travellers and anniversary couples often prefer a{' '}
        <Link href={privateClass}>private cooking class</Link> (IDR 650K for one). Families love the shared
        morning class — kids grind spices. Vegetarians need every dish adapted:{' '}
        <Link href="/blog/vegetarian-cooking-class-ubud-guide">vegetarian cooking class guide</Link>. Couples:{' '}
        <Link href="/blog/cooking-class-ubud-for-couples">couples guide</Link>.
      </p>
      <h2>Book the best cooking class in Ubud</h2>
      <p>
        Shared from IDR 350,000 · private 1-person IDR 650,000 · free Ubud pickup.{' '}
        <Link href={money}>Book Tumang Bali</Link> · <Link href={book}>online booking</Link> · read{' '}
        <Link href="/blog/is-a-bali-cooking-class-worth-it">is a Bali cooking class worth it?</Link>
      </p>
    </>
  ),
}

export const bestCookingClassInBali: StaticArticle = {
  slug: 'best-cooking-class-in-bali',
  title: 'Best Cooking Class in Bali (2026) — Where to Book & Why Ubud Wins',
  metaTitle: 'Best Cooking Class in Bali 2026 — Where to Book | Tumang Bali',
  metaDescription:
    'Find the best cooking class in Bali for 2026. Compare Ubud, Seminyak and village options, see what is included, and book an authentic Balinese cooking experience.',
  excerpt:
    'Looking for the best cooking class in Bali? Most top-rated experiences are in Ubud. Here is how Bali classes compare by location, what to expect, and how to book an authentic one.',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Group enjoying the best cooking class in Bali — hands-on Balinese dishes',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-02',
  keywords: [
    'best cooking class in bali',
    'best cooking class bali',
    'bali cooking class',
    'balinese cooking experience',
    'ubud cooking class bali',
  ],
  faqs: [
    {
      question: 'Where is the best cooking class in Bali?',
      answer:
        'The best cooking class in Bali is in the Ubud area — close to traditional markets, rice terraces, and village kitchens. Seminyak and Nusa Dua offer hotel-style classes, but they lack the market tour and village atmosphere that define authentic Balinese cooking.',
    },
    {
      question: 'How do I find the best cooking class in Bali on TripAdvisor?',
      answer:
        'Filter by cooking class in Ubud, read reviews from the last 12 months, and look for mentions of market tours, spice grinding, and the chef’s name. Classes with 500+ reviews and consistent 5-star ratings for “authentic” are usually safe bets.',
    },
    {
      question: 'Can I do the best Bali cooking class from Seminyak or Canggu?',
      answer:
        'Yes. Most top classes offer free pickup in the Ubud area; from Canggu or Seminyak arrange extra transport or drive yourself. Morning classes need an early start — about 1–1.5 hours from the coast.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        The <strong>best cooking class in Bali</strong> is rarely in a hotel lobby. Travellers who want an
        authentic half-day — market, spices, rice fields, and a meal they cooked — usually book in or near{' '}
        <strong>Ubud</strong>. Tumang Bali is a village kitchen with market tour, max 8 guests, 10+ dishes,
        and IDR 350,000 shared — a top pick for foreign food travellers in 2026.
      </p>
      <h2>Why the best cooking class in Bali is near Ubud</h2>
      <p>
        Ubud has traditional morning markets, subak rice terraces, and family kitchens cooking the same recipes
        for generations. Seminyak and Canggu have great restaurants, but their cooking classes tend to be
        shorter, indoor, and adapted for resort guests. Reviewed landing page:{' '}
        <Link href="/best-cooking-classes-bali">best cooking classes in Bali</Link>.
      </p>
      <h2>What the best Bali cooking class includes</h2>
      <ul>
        <li>Hotel pickup and drop-off in the Ubud area</li>
        <li>Guided morning market tour (turmeric, galangal, kencur, salam leaf)</li>
        <li>Rice-field walk through working paddies</li>
        <li>Hands-on cooking of 10+ Balinese dishes</li>
        <li>Shared feast + printed recipe booklet</li>
      </ul>
      <h2>Best cooking class in Bali by traveller type</h2>
      <ul>
        <li>
          First-timers: morning class with market tour —{' '}
          <Link href={marketTour}>market tour landing</Link>
        </li>
        <li>
          Tight schedule: afternoon cook-and-dine — <Link href={halfDay}>half-day guide</Link>
        </li>
        <li>
          Solo: <Link href={privateClass}>private 1-person class</Link>
        </li>
        <li>
          Families: <Link href="/family-cooking-class-bali">family cooking class Bali</Link>
        </li>
        <li>
          Vegetarians: <Link href="/vegetarian-cooking-class-ubud">vegetarian cooking class Ubud</Link>
        </li>
      </ul>
      <h2>Price guide (2026)</h2>
      <p>
        Expect IDR 350,000–450,000 for a quality shared village class, IDR 600,000–800,000 for central Ubud
        schools, and IDR 650,000+ for private. Full breakdown:{' '}
        <Link href="/blog/ubud-cooking-class-price">Ubud cooking class price 2026</Link>. Anything much cheaper
        usually cuts the market tour or uses premade ingredients.
      </p>
      <h2>Book the best cooking class in Bali</h2>
      <p>
        Start with our <Link href="/authentic-balinese-cooking-class">authentic Balinese cooking class</Link>{' '}
        overview, then <Link href={book}>book online</Link>. Coming from the coast?{' '}
        <Link href="/blog/cooking-class-ubud-from-canggu">Cooking class from Canggu / Seminyak</Link>. Ubud
        shortlist: <Link href="/blog/best-cooking-class-in-ubud">best cooking class in Ubud</Link>.
      </p>
    </>
  ),
}

export const cookingClassUbudFromCanggu: StaticArticle = {
  slug: 'cooking-class-ubud-from-canggu',
  title: 'Cooking Class in Ubud from Canggu or Seminyak — Pickup Guide 2026',
  metaTitle: 'Ubud Cooking Class from Canggu or Seminyak | Pickup Guide',
  metaDescription:
    'Doing an Ubud cooking class from Canggu or Seminyak: travel time, pickup fees, morning vs afternoon, and how to book with Tumang Bali. Shared IDR 350K.',
  excerpt:
    'Can you do a cooking class in Ubud if you stay in Canggu or Seminyak? Yes. Free pickup is for the Ubud area; we arrange extra transport from the coast. Timing and what to expect.',
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Day trip cooking class in Ubud from Canggu Seminyak — village kitchen guests',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-02',
  keywords: [
    'cooking class ubud from canggu',
    'cooking class from seminyak',
    'canggu to ubud cooking class',
    'day trip cooking class bali',
    'ubud cooking class pickup',
    'cooking class ubud hotel transfer',
    'cooking class from sanur',
  ],
  faqs: [
    {
      question: 'Can I do a cooking class in Ubud from Canggu?',
      answer:
        'Yes. Canggu or Seminyak to Ubud is typically 1–1.5 hours depending on traffic. Free pickup covers the Ubud hotel area; from the coast we can arrange a driver for a small extra fee, or you use your own driver.',
    },
    {
      question: 'Is morning or afternoon better from Canggu?',
      answer:
        'Afternoon class (~14:30) is easier if you do not want a dawn start. Morning market-tour class (~08:30) needs an early coast departure but includes the pasar and rice-field walk.',
    },
    {
      question: 'Is pickup free from Seminyak or Sanur?',
      answer:
        'Complimentary pickup is for guests staying in the Ubud area. From Seminyak, Canggu, Sanur, or the airport belt we arrange transport for a small extra fee — tell us your hotel when you book.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Staying in <strong>Canggu or Seminyak</strong> and want a <strong>cooking class in Ubud</strong>? Yes —
        it is a popular half-day trip. Drive time is about <strong>1–1.5 hours</strong>. Free pickup is for the
        Ubud area; from the coast we arrange a driver for a small extra fee (or use your own). Shared class{' '}
        <strong>IDR 350,000</strong>.
      </p>
      <h2>Travel time from the coast</h2>
      <p>
        Canggu or Seminyak to Tumang village (near Ubud) is typically 1–1.5 hours depending on traffic. Morning
        market-tour classes start around 08:30, so a coast pickup is early. Afternoon class (~14:30) suits
        travellers who want a slow morning by the pool.
      </p>
      <h2>Is pickup free from Canggu?</h2>
      <p>
        Complimentary pickup and drop-off is for guests staying in the Ubud area. From Canggu, Seminyak, Sanur,
        or the airport belt we can arrange a driver for a small extra fee — tell us your hotel when you book.
        Many guests also use their villa driver for the round trip.
      </p>
      <h2>Morning vs afternoon from the coast</h2>
      <ul>
        <li>
          <strong>Morning</strong>: market tour + rice fields + full cook — best cultural day; leave Canggu
          early
        </li>
        <li>
          <strong>Afternoon</strong>: cook-and-dine feast without the market — easier timing from Seminyak
        </li>
      </ul>
      <p>
        Detailed session comparison:{' '}
        <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon cooking class</Link>. Market
        tour deep dive: <Link href="/blog/morning-cooking-class-ubud-market-tour">morning market tour guide</Link>.
      </p>
      <h2>What you get after the drive</h2>
      <p>
        Same Tumang Bali class as Ubud guests: max 8 people, 10+ dishes, English chefs, recipe booklet. Private
        option IDR 650K / kids IDR 550K —{' '}
        <Link href="/blog/private-cooking-class-ubud-price">private price guide</Link>.
      </p>
      <h2>Book from Canggu or Seminyak</h2>
      <p>
        Message your hotel name on WhatsApp +62 822-1013-2418 or{' '}
        <Link href={book}>book online</Link>. Main page:{' '}
        <Link href={money}>Balinese cooking class Ubud</Link>. Pricing:{' '}
        <Link href="/blog/ubud-cooking-class-price">Ubud cooking class price</Link>.
      </p>
    </>
  ),
}

export const isABaliCookingClassWorthIt: StaticArticle = {
  slug: 'is-a-bali-cooking-class-worth-it',
  title: 'Is a Bali Cooking Class Worth It? An Honest Look (2026)',
  metaTitle: 'Is a Bali Cooking Class Worth It? Honest Guide | Tumang Bali',
  metaDescription:
    'Is a Bali cooking class worth it? Honest look at cost, what you get, who enjoys it most, and how to choose an authentic Ubud cooking class in 2026.',
  excerpt:
    'Thinking about a Bali cooking class but not sure it is worth the money? An honest look at what you get, who it suits, and how to choose a good one near Ubud.',
  image: '/images/blog/worth-it.jpg.webp',
  imageAlt: 'Happy guests at the end of a Balinese cooking class in Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-02',
  keywords: [
    'is a bali cooking class worth it',
    'bali cooking class worth it',
    'should i do a cooking class in ubud',
    'ubud cooking class review',
    'cooking class bali value',
  ],
  faqs: [
    {
      question: 'Is a Bali cooking class worth the money?',
      answer:
        'Yes for most travellers — a good class is a half-day cultural experience plus a meal plus skills to take home. At IDR 350,000 for a shared village class with market tour and 10+ dishes, value usually beats a tourist restaurant lunch alone.',
    },
    {
      question: 'Who should skip a Bali cooking class?',
      answer:
        'If you dislike cooking, have a very tight schedule, or only want to eat rather than learn, a great restaurant meal may suit better. Being honest about that avoids disappointment.',
    },
    {
      question: 'How do I choose a cooking class that is worth it?',
      answer:
        'Look for small groups (max 8–10), a real market tour, local instructors, hand-ground spice paste, and a menu you can adapt for dietary needs. Read recent reviews that name the chef.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Is a Bali cooking class worth it?</strong> For most foreign travellers in Ubud — yes. A good
        class is not just a meal: it is a half-day of market culture, spice grinding, hands-on cooking, a feast
        you made, and recipes to take home. At Tumang Bali, shared class is <strong>IDR 350,000</strong> with
        market tour (morning), max 8 guests, and 10+ dishes.
      </p>
      <h2>What you actually get</h2>
      <p>
        Viewed as culture + meal + skill, the value adds up quickly: guided pasar tour, rice-field walk, two
        hours of hands-on cooking, lunch or dinner of everything you made, and a recipe booklet. Timeline:{' '}
        <Link href="/blog/what-to-expect-bali-cooking-class">what to expect on the day</Link>.
      </p>
      <h2>Who enjoys it most</h2>
      <ul>
        <li>Curious eaters who want to understand the food they have been enjoying</li>
        <li>Couples and families looking for a shared hands-on activity</li>
        <li>Travellers who like meeting locals — not only temple photos</li>
        <li>Anyone wanting to recreate Balinese dishes back home</li>
      </ul>
      <h2>Who might skip it</h2>
      <p>
        If you dislike cooking, have a packed schedule with no half-day free, or only want to eat rather than
        learn, a restaurant booking may be better. Prefer intimacy? A{' '}
        <Link href={privateClass}>private cooking class</Link> still teaches without a group.
      </p>
      <h2>How to choose a class that is worth the fee</h2>
      <ul>
        <li>Small groups — Tumang caps shared at 8</li>
        <li>Real market tour on morning sessions</li>
        <li>Local instructors grinding bumbu by hand</li>
        <li>Dietary adaptations (vegetarian / vegan / allergies)</li>
        <li>Transparent price — see <Link href="/blog/ubud-cooking-class-price">2026 price guide</Link></li>
      </ul>
      <p>
        Side-by-side options: <Link href={compare}>compare Ubud cooking classes</Link>. Choosing between
        sessions: <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon</Link>.
      </p>
      <h2>Verdict — book if you want more than a meal</h2>
      <p>
        If you want one cultural highlight that feeds you and teaches you, a village cooking class near Ubud is
        worth it for most visitors. <Link href={money}>Book Tumang Bali</Link> ·{' '}
        <Link href={book}>online booking</Link> ·{' '}
        <Link href="/blog/best-cooking-class-in-ubud">best cooking class in Ubud</Link>.
      </p>
    </>
  ),
}

export const morningVsAfternoonToursBali: StaticArticle = {
  slug: 'morning-vs-afternoon-tours-bali',
  title: 'Morning vs Afternoon Cooking Class in Ubud — Which Should You Book?',
  metaTitle: 'Morning vs Afternoon Cooking Class Ubud 2026 | Tumang Bali',
  metaDescription:
    'Morning vs afternoon cooking class in Ubud: market tour vs cook-and-dine. Pros, timing, and who should book which Tumang Bali session in 2026.',
  excerpt:
    'Choosing morning or afternoon for your Ubud cooking class? Morning adds the market tour and rice-field walk; afternoon is a relaxed cook-and-dine feast. Same chefs, same 10+ dishes.',
  image: '/images/blog/best-time.jpg.webp',
  imageAlt: 'Morning and afternoon Balinese cooking class sessions near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-02',
  keywords: [
    'morning vs afternoon cooking class ubud',
    'afternoon cooking class ubud',
    'morning cooking class bali',
    'best time cooking class ubud',
    'ubud cooking class schedule',
  ],
  faqs: [
    {
      question: 'Should I book a morning or afternoon cooking class in Ubud?',
      answer:
        'Book morning if you want the traditional market tour and rice-field walk (full cultural day). Book afternoon if you prefer a slow start and a cook-and-dine dinner-style feast without the early market.',
    },
    {
      question: 'What time does the morning cooking class start?',
      answer:
        'Morning class runs approximately 08:30–12:30 (3–4 hours): hotel pickup, market tour, rice-field walk, hands-on cooking, and lunch. Afternoon is about 14:30–17:30.',
    },
    {
      question: 'Is the menu the same in morning and afternoon?',
      answer:
        'Yes — both sessions cook 10+ Balinese dishes with the same chefs. Morning adds the pasar tour and rice-field walk before cooking; afternoon focuses on the kitchen and shared feast.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Morning vs afternoon cooking class in Ubud:</strong> morning (~08:30–12:30) includes hotel
        pickup, traditional <strong>market tour</strong>, rice-field walk, then hands-on cooking and lunch.
        Afternoon (~14:30–17:30) is a relaxed cook-and-dine session without the market. Both are{' '}
        <strong>IDR 350,000</strong> shared at Tumang Bali — same 10+ dishes, max 8 guests.
      </p>
      <h2>The case for morning</h2>
      <ul>
        <li>Cooler temperatures for the market and rice-field walk</li>
        <li>See local life at the pasar — turmeric, galangal, lemongrass, chili</li>
        <li>Full half-day cultural arc before lunch</li>
        <li>Best for first-timers and food travellers</li>
      </ul>
      <p>
        Deep dive: <Link href="/blog/morning-cooking-class-ubud-market-tour">morning cooking class + market tour guide</Link>{' '}
        · landing: <Link href={marketTour}>cooking class with market tour Ubud</Link>.
      </p>
      <h2>The case for afternoon</h2>
      <ul>
        <li>Sleep in — spa or pool morning still possible</li>
        <li>Easier if you are driving from Canggu or Seminyak</li>
        <li>Golden-hour light for photos in the village kitchen</li>
        <li>Ends with a dinner-style feast you cooked</li>
      </ul>
      <p>
        Coast travellers: <Link href="/blog/cooking-class-ubud-from-canggu">from Canggu / Seminyak guide</Link>.
      </p>
      <h2>Which should you choose?</h2>
      <ul>
        <li>
          <strong>First visit to Bali / Ubud</strong> → morning (market + fields)
        </li>
        <li>
          <strong>Couples wanting a slow day</strong> → afternoon or private —{' '}
          <Link href="/blog/cooking-class-ubud-for-couples">couples guide</Link>
        </li>
        <li>
          <strong>Families with kids</strong> → morning often wins for energy —{' '}
          <Link href="/blog/ubud-cooking-class-for-families">families guide</Link>
        </li>
        <li>
          <strong>Packed itinerary</strong> → either works; see <Link href={halfDay}>half-day class</Link>
        </li>
      </ul>
      <h2>Book your preferred session</h2>
      <p>
        Same price either way. <Link href={book}>Check dates and book</Link> ·{' '}
        <Link href={money}>main cooking class page</Link> ·{' '}
        <Link href="/blog/ubud-cooking-class-price">price table</Link>.
      </p>
    </>
  ),
}

export const salesGeoCommercialArticles: StaticArticle[] = [
  ubudCookingClassPrice,
  privateCookingClassUbudPrice,
  bestCookingClassInUbud,
  bestCookingClassInBali,
  cookingClassUbudFromCanggu,
  isABaliCookingClassWorthIt,
  morningVsAfternoonToursBali,
]
