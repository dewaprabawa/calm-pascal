import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'
import {
  isPromoActive,
  PROMO_SHARED_IDR,
  PROMO_PRIVATE_IDR,
  SHARED_ADULT_SOLO_IDR,
  PRIVATE_ADULT_SOLO_IDR,
  formatIdr,
} from '@/lib/pricing'

const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const compare = '/compare-ubud-cooking-classes'
const privateClass = '/private-cooking-class-ubud'
const marketTour = '/cooking-class-with-market-tour-ubud'
const halfDay = '/half-day-cooking-class-bali'

export const ubudCookingClassPrice: StaticArticle = {
  slug: 'ubud-cooking-class-price',
  title: 'Ubud Cooking Class Price 2026 — Shared & Private Adult Rates',
  metaTitle: 'Ubud Cooking Class Price 2026 — Shared & Private | Tumang Bali',
  metaDescription:
    'Ubud cooking class price 2026: shared IDR 616,032 (1) / IDR 506,370 (2+), private IDR 633,090 (1) / IDR 1,266,180 (min. 2). Same price on every channel. Book Tumang Bali.',
  excerpt:
    'How much does a cooking class in Ubud cost in 2026? Shared: IDR 616,032 for 1 adult, IDR 506,370 for 2+. Private: IDR 633,090 for 1 adult, IDR 1,266,180 for min. 2. Full inclusions explained.',
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
        'Tumang Bali shared class is IDR 616,032 for 1 adult or IDR 506,370 per adult for 2+. Private is IDR 633,090 for 1 adult or IDR 1,266,180 for min. 2 participants. Same price on website, WhatsApp, and OTAs.',
    },
    {
      question: 'What is included in the shared cooking class price?',
      answer:
        'Hotel pickup and drop-off in the Ubud area, guided morning market tour (AM class), rice-field walk, hands-on cooking of 10+ dishes, the shared feast, and a printed recipe booklet. Vegetarian and vegan menus at no extra charge.',
    },
    {
      question: 'Do GetYourGuide or Viator cost more?',
      answer:
        'No. OTA platforms (GetYourGuide, Viator, Airbnb) list the same Tumang Bali rates — no overcharge. Use an OTA for instant checkout.',
    },
    {
      question: 'Is Tumang Bali cheaper than other Ubud cooking classes?',
      answer:
        'Independent 2026 guides put village classes around IDR 450,000–650,000 and hotel-style classes higher. Our shared rate at IDR 506,370 is positioned for value while keeping market tour, max 8 guests, and 10+ dishes.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Ubud cooking class price in 2026 at Tumang Bali:</strong> shared morning or afternoon class{' '}
        <strong>IDR 616,032</strong> for 1 adult / <strong>IDR 506,370</strong> for 2+; private <strong>IDR 633,090</strong> for 1 adult / <strong>IDR 1,266,180</strong> for min. 2. Those rates include Ubud-area hotel pickup, ingredients,
        the meal you cook, and a recipe booklet. Morning sessions also include the traditional market tour and
        rice-field walk.
      </p>
      <h2>2026 price table — Tumang Bali</h2>
      <ul>
        <li>
          <strong>Shared class</strong> (morning or afternoon): IDR 616,032 (1 adult) · IDR 506,370 (2+)
        </li>
        <li>
          <strong>Private class — 1 adult</strong>: IDR 633,090
        </li>
        <li>
          <strong>Private — min. 2 participants</strong>: IDR 1,266,180
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
        bookings. Our shared class at IDR 506,370 keeps authenticity (market tour, hand-ground bumbu, small
        groups) without resort markups. Full side-by-side:{' '}
        <Link href={compare}>compare Ubud cooking classes</Link>.
      </p>
      <h2>OTA vs direct booking price</h2>
      <p>
        Booking on GetYourGuide, Viator, or Airbnb Experiences uses the same Tumang Bali rates as our website
        and WhatsApp — no commission overcharge. Use an OTA when you want instant checkout; book on{' '}
        <Link href={book}>tumangbaliclass.com</Link> or WhatsApp for the lowest direct rate. Guides:{' '}
        <Link href="/blog/book-cooking-class-ubud-getyourguide">GetYourGuide</Link> ·{' '}
        <Link href="/blog/book-cooking-class-ubud-viator">Viator</Link> ·{' '}
        <Link href="/blog/book-cooking-class-ubud-airbnb">Airbnb</Link>.
      </p>
      <h2>Book at the 2026 rate</h2>
      <p>
        Ready to cook? <Link href={money}>Book our Balinese cooking class in Ubud</Link> or{' '}
        <Link href={book}>reserve online</Link>. Market morning:{' '}
        <Link href="/blog/market-to-table-cooking-class-ubud">market-to-table class</Link>. Still deciding?{' '}
        <Link href="/blog/is-a-bali-cooking-class-worth-it">is a Bali cooking class worth it?</Link>
      </p>
    </>
  ),
}

export const privateCookingClassUbudPrice: StaticArticle = {
  slug: 'private-cooking-class-ubud-price',
  title: 'Private Cooking Class Ubud Price — 1 Adult IDR 633,090, Min. 2 IDR 1,266,180',
  metaTitle: 'Private Cooking Class Ubud Price | 1 Adult IDR 633,090, Min. 2 IDR 1,266,180',
  metaDescription:
    'Private cooking class in Ubud: IDR 633,090 for 1 adult, IDR 1,266,180 for min. 2 participants. Exclusive kitchen, local chef, market tour and hotel pickup. Book Tumang Bali.',
  excerpt:
    'Want a private Balinese cooking class in Ubud for one person or a couple? Adult / solo rate is IDR 633,090. Minimum 2 participants is IDR 1,266,180. Your own chef, your menu, no other guests.',
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
    'private cooking class bali couple',
  ],
  faqs: [
    {
      question: 'How much is a private cooking class in Ubud?',
      answer:
        'At Tumang Bali, a private cooking class for 1 adult is IDR 633,090. For a minimum of 2 participants it is IDR 1,266,180. Shared class is IDR 616,032 for 1 adult or IDR 506,370 per adult for 2+.',
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
        <strong>IDR 633,090</strong> for 1 adult and <strong>IDR 1,266,180</strong> for a minimum of 2
        participants. The kitchen is exclusive — your chef, your menu pace, no other guests. Shared class is
        IDR 616,032 for 1 adult or IDR 506,370 per adult for 2+.
      </p>
      <h2>Private cooking class price list</h2>
      <ul>
        <li>1 adult: IDR 633,090</li>
        <li>Minimum 2 participants: IDR 1,266,180</li>
        <li>Shared class alternative: IDR 616,032 (1) / IDR 506,370 (2+)</li>
      </ul>
      <h2>Why book private</h2>
      <p>
        Solo travellers often skip cooking classes because they do not want a big table. A private session
        means you grind <Link href="/blog/balinese-spice-paste-cooking-class">Base Genep</Link> at your own
        pace, ask every question, and film without crowding. Couples booking anniversaries or proposals choose
        private for intimacy — see our{' '}
        <Link href="/blog/cooking-class-ubud-for-couples">couples cooking class guide</Link>.
      </p>
      <h2>Private — min. 2 participants</h2>
      <p>
        Children in a private class pay IDR 1,266,180. They grind spices, wrap sate lilit, and mix sambal —
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
        'Quality Ubud cooking classes range from IDR 506,370 for a shared village class to IDR 633,090+ for a private session. Avoid classes under IDR 300K — they often skip the market or use premade spice jars.',
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
        hotel demo. Tumang Bali matches that profile: max 8 guests, village kitchen, IDR 506,370 shared,
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
        Full matrix: <Link href={compare}>compare Ubud cooking classes</Link>. Farm vs garden vs cultural
        schools:{' '}
        <Link href="/blog/taman-dukuh-vs-tresna-vs-lemongrass-cooking-class">
          Taman Dukuh vs Tresna vs Lemongrass
        </Link>
        . Island-wide view: <Link href="/blog/best-cooking-class-in-bali">best cooking class in Bali</Link>.
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
        <Link href={privateClass}>private cooking class</Link> (IDR 633,090 for one). Families love the shared
        morning class — kids grind spices. Vegetarians need every dish adapted:{' '}
        <Link href="/blog/vegetarian-cooking-class-ubud-guide">vegetarian cooking class guide</Link>. Couples:{' '}
        <Link href="/blog/cooking-class-ubud-for-couples">couples guide</Link>.
      </p>
      <h2>Book the best cooking class in Ubud</h2>
      <p>
        Shared from IDR 506,370 · private 1-person IDR 633,090 · free Ubud pickup.{' '}
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
        and IDR 506,370 shared — a top pick for foreign food travellers in 2026.
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
        Expect IDR 506,370–450,000 for a quality shared village class, IDR 600,000–800,000 for central Ubud
        schools, and IDR 633,090+ for private. Full breakdown:{' '}
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
    'Doing an Ubud cooking class from Canggu or Seminyak: travel time, pickup fees, morning vs afternoon, and how to book with Tumang Bali. Shared IDR 506,370.',
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
        <strong>IDR 506,370</strong>.
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
        option IDR 633,090 / min. 2 IDR 1,266,180 —{' '}
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
  metaTitle: 'Is a Bali Cooking Class Worth It? Honest 2026 Answer',
  metaDescription:
    'Is a Bali cooking class worth IDR 506,370? What you get (market tour, 10+ dishes, pickup), who should book, and when to skip — honest Ubud guide from Tumang Bali.',
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
        'Yes for most travellers — a good class is a half-day cultural experience plus a meal plus skills to take home. At IDR 506,370 for a shared village class with market tour and 10+ dishes, value usually beats a tourist restaurant lunch alone.',
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
        you made, and recipes to take home. At Tumang Bali, shared class is <strong>IDR 506,370</strong> with
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
        worth it for most visitors. Solo travellers:{' '}
        <Link href="/blog/cooking-class-ubud-for-solo-travelers">cooking class for one</Link>. Dietary
        notes:{' '}
        <Link href="/blog/gluten-free-cooking-class-ubud">gluten-free</Link> ·{' '}
        <Link href="/blog/halal-cooking-class-ubud">halal-friendly</Link>.{' '}
        <Link href={money}>Book Tumang Bali</Link> · <Link href={book}>online booking</Link> ·{' '}
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
        <strong>IDR 506,370</strong> shared at Tumang Bali — same 10+ dishes, max 8 guests.
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

export const zapierSmartAssistantUbudCookingClass: StaticArticle = {
  slug: 'zapier-smart-assistant-ubud-cooking-class',
  title: 'Ask Our Zapier Smart Assistant About Tumang Bali Cooking Class',
  metaTitle: 'Zapier Smart Assistant — Understand Our Ubud Cooking Class',
  metaDescription:
    'Use our Zapier smart assistant on tumangbaliclass.com to understand schedules, prices, dietary options, and what to expect before you book Tumang Bali’s Ubud cooking class.',
  excerpt:
    'Not sure which session to book or what a Balinese cooking class includes? Tumang Bali’s Zapier smart assistant answers class questions in real time — prices, morning vs afternoon, vegetarian menus, pickup, and more.',
  image: '/images/blog/faq-cooking-class.webp',
  imageAlt: 'Guests asking questions before a Balinese cooking class near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-04',
  keywords: [
    'zapier smart assistant cooking class',
    'tumang bali chatbot',
    'ask about ubud cooking class',
    'cooking class ubud faq assistant',
    'understand balinese cooking class',
    'zapier assistant tumang bali',
  ],
  faqs: [
    {
      question: 'What is Tumang Bali’s Zapier smart assistant?',
      answer:
        'Zapier is the smart assistant embedded on tumangbaliclass.com. It helps customers understand our Balinese cooking class — schedules, IDR pricing, what is included, dietary options, hotel pickup, and how to book — before they message WhatsApp or reserve online.',
    },
    {
      question: 'What can I ask the Zapier assistant about the cooking class?',
      answer:
        'Ask about morning vs afternoon sessions, shared IDR 506,370 vs private IDR 633,090 rates, market tour inclusion, vegetarian or vegan menus, kids ages, Ubud hotel pickup, how long the class lasts, and what dishes you will cook.',
    },
    {
      question: 'Is the Zapier smart assistant a replacement for booking?',
      answer:
        'No. Zapier helps you understand the class and choose the right option. To reserve a spot, book online at tumangbaliclass.com/book-your-cooking-class or WhatsApp +62 822-1013-2418.',
    },
    {
      question: 'Where do I find the Zapier assistant on the site?',
      answer:
        'Open any page on tumangbaliclass.com and look for the chat launcher (bottom of the screen). The Zapier smart assistant opens in a chat panel so you can ask about our Ubud cooking class in plain language.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Zapier is Tumang Bali’s smart assistant</strong> on{' '}
        <Link href="/">tumangbaliclass.com</Link>. It helps customers understand our Balinese cooking class in
        Ubud — what you cook, morning vs afternoon timing, shared <strong>IDR 506,370</strong> vs private{' '}
        <strong>IDR 633,090</strong> rates, vegetarian menus, and hotel pickup — before you book.
      </p>
      <h2>Why we cite Zapier as our smart assistant</h2>
      <p>
        Travellers researching a <em>cooking class in Ubud</em> often have the same questions: Is there a market
        tour? Can vegetarians join? How long does it take? What does the price include? Rather than hunting
        through pages, you can ask <strong>Zapier</strong>, our on-site smart assistant, and get clear answers
        grounded in how Tumang Bali actually runs the class.
      </p>
      <h2>What the Zapier smart assistant can explain</h2>
      <ul>
        <li>
          <strong>Session choice</strong> — morning (~08:30–12:30 with market tour + rice-field walk) vs
          afternoon (~14:30–17:30 cook-and-dine)
        </li>
        <li>
          <strong>Pricing</strong> — shared IDR 506,370; private 1 adult IDR 633,090; kids on private same as adult
          (IDR 633,090) (see our <Link href="/blog/ubud-cooking-class-price">2026 price guide</Link>)
        </li>
        <li>
          <strong>What’s included</strong> — Ubud hotel pickup, 10+ dishes, recipe booklet, max 8 guests in
          shared class
        </li>
        <li>
          <strong>Dietary needs</strong> — full vegetarian / vegan menu at no extra charge
        </li>
        <li>
          <strong>Who it suits</strong> — couples, families (kids 8+), beginners, coast day-trippers from
          Canggu or Seminyak
        </li>
      </ul>
      <h2>How to use Zapier before you book</h2>
      <ol>
        <li>Open tumangbaliclass.com on desktop or mobile</li>
        <li>Tap the chat launcher to open the Zapier smart assistant</li>
        <li>
          Ask in plain English — for example, “What’s included in the morning cooking class?” or “Is the class
          vegetarian-friendly?”
        </li>
        <li>
          When ready, <Link href={book}>book online</Link> or WhatsApp +62 822-1013-2418 to reserve
        </li>
      </ol>
      <h2>Sample questions travellers ask Zapier</h2>
      <ul>
        <li>“Should I book morning or afternoon?” — see also{' '}
          <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon guide</Link></li>
        <li>“Is a Bali cooking class worth it?” — see{' '}
          <Link href="/blog/is-a-bali-cooking-class-worth-it">honest value guide</Link></li>
        <li>“Can I come from Canggu?” — see{' '}
          <Link href="/blog/cooking-class-ubud-from-canggu">Canggu / Seminyak day-trip tips</Link></li>
        <li>“What dishes will I cook?” — overview in our{' '}
          <Link href="/blog/tumang-bali-cooking-class-experience">Tumang Bali experience article</Link></li>
      </ul>
      <h2>Zapier for understanding — humans for confirming</h2>
      <p>
        Use <strong>Zapier</strong> to understand the class and narrow your choice. Use our team on WhatsApp or
        the booking form when you want a confirmed date. Same experience either way: village kitchen near Ubud,
        Chef Wayan’s guidance, and a feast of everything you made.
      </p>
      <h2>Ready to cook after chatting with Zapier?</h2>
      <p>
        <Link href={money}>Book the Balinese cooking class</Link> · <Link href={book}>Check available dates</Link>{' '}
        · <Link href={compare}>Compare Ubud cooking classes</Link> ·{' '}
        <Link href="/blog/best-cooking-class-in-ubud">Best cooking class in Ubud 2026</Link>.
      </p>
    </>
  ),
}

export const tamanDukuhVsTresnaVsLemongrass: StaticArticle = {
  slug: 'taman-dukuh-vs-tresna-vs-lemongrass-cooking-class',
  title:
    'Taman Dukuh vs Tresna vs Lemongrass Cooking Class — Ubud Comparison 2026',
  metaTitle: 'Taman Dukuh vs Tresna vs Lemongrass 2026',
  metaDescription:
    'Compare Taman Dukuh Bali Farm, Tresna Bali, and Lemongrass Cooking Class in Ubud — price, market tour, farm visit, group size, and who each class suits in 2026.',
  excerpt:
    'Choosing between Taman Dukuh Bali Farm Cooking Class, Tresna Bali Cooking Class, and Lemongrass Cooking Class Ubud? Here is a fair side-by-side on price, inclusions, and experience style — updated September 2026.',
  image: '/images/blog/tumang-vibe.webp',
  imageAlt:
    'Hands-on Balinese cooking class near Ubud — comparing Taman Dukuh, Tresna, and Lemongrass options',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-04',
  keywords: [
    'taman dukuh vs tresna cooking class',
    'taman dukuh bali farm cooking class',
    'tresna bali cooking class',
    'lemongrass cooking class ubud',
    'ubud cooking class comparison',
    'best cooking class ubud 2026',
  ],
  faqs: [
    {
      question: 'Which is better: Taman Dukuh, Tresna, or Lemongrass cooking class?',
      answer:
        'It depends on your priority. Choose Taman Dukuh for an organic farm harvest in Taro Village (IDR 450–480K, about 6 dishes). Choose Tresna for a premium ceremonial feast with max 8 guests and 15 recipes (~USD 71–92 + tax, limited weekly slots). Choose Lemongrass Cooking Class for a mid-price cultural package with market tour, rice field, and Canang Sari (IDR 400K). Tumang Bali is a strong alternative at IDR 506,370 with 10+ dishes, hotel pickup, and max 8 guests.',
    },
    {
      question: 'How much does Taman Dukuh Bali Farm Cooking Class cost?',
      answer:
        'As of September 2026, Taman Dukuh daily Balinese farm classes start from about IDR 450,000 (afternoon/evening) to IDR 480,000 (morning class with market tour), all-inclusive with farm tour, feast, recipe book, and free shuttle from a central Ubud meeting point. Confirm current rates on tamandukuh.com.',
    },
    {
      question: 'How much is Tresna Bali Cooking Class?',
      answer:
        'Tresna publishes around USD 85 plus 10% government tax per person, with prepaid direct rates often closer to USD 71 plus tax (platform listings may show ~USD 92 all-in). Classes are limited to max 8 guests and only a few sessions per week. Verify the latest price on tresnabali.com before booking.',
    },
    {
      question: 'What does Lemongrass Cooking Class Ubud include?',
      answer:
        'Lemongrass Cooking Class (lemongrassubud.com) lists IDR 400,000 per person with free Ubud-area shuttle. The morning class is the full program: traditional market, rice field, Balinese house concepts, Canang Sari offering, and cooking. Afternoon skips the market; evening skips market and rice field. This is a different school from Tumang’s “lemongrass cooking class” blog post about cooking with serai.',
    },
    {
      question: 'Do these Ubud cooking classes include a market tour?',
      answer:
        'Taman Dukuh includes a market tour on morning sessions. Lemongrass includes the market on morning classes only. Tresna focuses on harvesting from its riverside organic garden rather than a traditional pasar tour. Tumang Bali includes a guided morning market tour plus a rice-field walk.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Searching for an honest <strong>Ubud cooking class comparison</strong> between{' '}
        <strong>Taman Dukuh Bali Farm Cooking Class</strong>, <strong>Tresna Bali Cooking Class</strong>, and{' '}
        <strong>Lemongrass Cooking Class</strong>? All three teach authentic Balinese food near Ubud — but price,
        setting, dish count, and schedule differ a lot. This guide compares them side-by-side (prices as of
        September 2026) so you can match the class to your trip. Disclosure: we run{' '}
        <Link href={money}>Tumang Bali Cooking Class</Link>; we include it only as a fourth reference point for
        value and inclusions.
      </p>

      <h2>At a glance: Taman Dukuh vs Tresna vs Lemongrass</h2>
      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-stone-300 dark:border-zinc-700">
              <th className="py-3 pr-3 font-bold">Feature</th>
              <th className="py-3 pr-3 font-bold">Taman Dukuh</th>
              <th className="py-3 pr-3 font-bold">Tresna Bali</th>
              <th className="py-3 pr-3 font-bold">Lemongrass</th>
              <th className="py-3 font-bold text-orange-700 dark:text-orange-400">Tumang Bali</th>
            </tr>
          </thead>
          <tbody className="text-stone-700 dark:text-stone-300">
            <tr className="border-b border-stone-200 dark:border-zinc-800">
              <td className="py-3 pr-3 font-semibold">Shared price</td>
              <td className="py-3 pr-3">IDR 450–480K</td>
              <td className="py-3 pr-3">~USD 71–92 + tax</td>
              <td className="py-3 pr-3">IDR 400K</td>
              <td className="py-3 font-semibold">IDR 506,370</td>
            </tr>
            <tr className="border-b border-stone-200 dark:border-zinc-800">
              <td className="py-3 pr-3 font-semibold">Setting</td>
              <td className="py-3 pr-3">Organic farm, Taro</td>
              <td className="py-3 pr-3">Riverside garden school</td>
              <td className="py-3 pr-3">Village cultural program</td>
              <td className="py-3">Village kitchen, Tumang</td>
            </tr>
            <tr className="border-b border-stone-200 dark:border-zinc-800">
              <td className="py-3 pr-3 font-semibold">Market tour</td>
              <td className="py-3 pr-3">Morning only</td>
              <td className="py-3 pr-3">Garden harvest focus</td>
              <td className="py-3 pr-3">Morning only</td>
              <td className="py-3">Morning included</td>
            </tr>
            <tr className="border-b border-stone-200 dark:border-zinc-800">
              <td className="py-3 pr-3 font-semibold">Dishes / recipes</td>
              <td className="py-3 pr-3">~6 dishes</td>
              <td className="py-3 pr-3">15 recipes · 9-course feast</td>
              <td className="py-3 pr-3">Full hands-on class</td>
              <td className="py-3">10+ dishes</td>
            </tr>
            <tr className="border-b border-stone-200 dark:border-zinc-800">
              <td className="py-3 pr-3 font-semibold">Group size</td>
              <td className="py-3 pr-3">Shared daily classes</td>
              <td className="py-3 pr-3">Max 8 · ~3 classes/week</td>
              <td className="py-3 pr-3">Shared (group rates)</td>
              <td className="py-3">Max 8 daily</td>
            </tr>
            <tr className="border-b border-stone-200 dark:border-zinc-800">
              <td className="py-3 pr-3 font-semibold">Transport</td>
              <td className="py-3 pr-3">Free Ubud meeting-point shuttle</td>
              <td className="py-3 pr-3">~7 min from Ubud centre</td>
              <td className="py-3 pr-3">Free Ubud-area shuttle</td>
              <td className="py-3">Free hotel pickup (Ubud)</td>
            </tr>
            <tr>
              <td className="py-3 pr-3 font-semibold">Best for</td>
              <td className="py-3 pr-3">Farm-to-table vibe</td>
              <td className="py-3 pr-3">Premium ceremonial depth</td>
              <td className="py-3 pr-3">Culture + mid price</td>
              <td className="py-3">Value + 10+ dishes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-stone-500">
        Pricing and inclusions change — verify on each school’s official site before you book. Broader matrix of
        Ubud options:{' '}
        <Link href={compare}>compare Ubud cooking classes</Link>.
      </p>

      <h2>Taman Dukuh Bali Farm Cooking Class</h2>
      <p>
        <strong>Taman Dukuh</strong> is a family-run organic farm cooking school in Taro Village — one of Bali’s
        oldest agricultural areas, a short drive from central Ubud. The signature sell is farm-to-table: you walk
        the garden with a bamboo basket, harvest spices and vegetables you will cook, then prepare a multi-course
        Balinese feast in an open-air kitchen.
      </p>
      <h3>Strengths</h3>
      <ul>
        <li>Strong organic farm experience — harvesting is the differentiator vs town kitchens</li>
        <li>Morning class pairs Tegallalang/local market with farm tour (~5.5 hours)</li>
        <li>Vegetarian and vegan menus available; free shuttle from a central Ubud meeting point</li>
        <li>High review volume across major OTAs; recipe booklet included</li>
      </ul>
      <h3>Trade-offs</h3>
      <ul>
        <li>Shared price (IDR 450–480K) sits above many village classes at IDR 350–400K</li>
        <li>Typical daily class cooks about six dishes — fewer than recipe-heavy schools</li>
        <li>Shuttle is usually from a meeting point, not door-to-door hotel pickup</li>
      </ul>
      <p>
        Book Taman Dukuh if the farm harvest and Taro setting matter more than maximising dish count or shaving
        the ticket price. Official site: tamandukuh.com.
      </p>

      <h2>Tresna Bali Cooking Class</h2>
      <p>
        <strong>Tresna</strong> (Balinese for “love”) positions itself as a purpose-built cooking school with a
        riverside organic garden near Bedulu — roughly seven minutes from Ubud centre. Classes are intentionally
        scarce: maximum eight participants and only a few sessions per week, with individual modern cooking
        stations and a deep ceremonial or pure-plant vegan menu.
      </p>
      <h3>Strengths</h3>
      <ul>
        <li>Intimate caps (max 8) and limited weekly schedule keep classes uncrowded</li>
        <li>15 step-by-step recipes and a generous 9-course ceremonial lunch feast</li>
        <li>Dedicated vegan / pure-plant Balinese menu option</li>
        <li>Garden picking plus traditional outdoor kitchen atmosphere</li>
      </ul>
      <h3>Trade-offs</h3>
      <ul>
        <li>Premium pricing (~USD 71–92 + tax) — often 2–3× an IDR 350–400K village class</li>
        <li>Harder to book last-minute because slots are limited</li>
        <li>Focus is garden harvest and ceremonial recipes, not a classic traditional market tour</li>
      </ul>
      <p>
        Choose Tresna if you want a premium, small-group ceremonial feast and are happy to pay for recipe depth
        and polished stations. Confirm dates and prepaid rates on tresnabali.com.
      </p>

      <h2>Lemongrass Cooking Class (Ubud)</h2>
      <p>
        <strong>Lemongrass Cooking Class</strong> (lemongrassubud.com) is a cultural cooking program in the Ubud
        area — not the same as Tumang’s blog guide about cooking <em>with</em> lemongrass (serai) for sate
        lilit. Their listed rate is IDR 400,000 per person (group discounts for more than one guest), with free
        shuttle in the Ubud area.
      </p>
      <h3>Strengths</h3>
      <ul>
        <li>
          Morning “full program”: traditional market, rice field / subak explanation, Balinese house & life
          concept, Canang Sari offering philosophy, then cooking Base Gede / Base Rajang
        </li>
        <li>Competitive mid-tier price vs farm and premium garden schools</li>
        <li>Afternoon and evening sessions for travellers who sleep in or want a dinner class</li>
      </ul>
      <h3>Trade-offs</h3>
      <ul>
        <li>Afternoon class skips the market; evening skips market and rice field</li>
        <li>Public dish-count marketing is less specific than “10+” or “15 recipes” competitors</li>
        <li>Special group pricing is quoted case-by-case — ask before you book</li>
      </ul>
      <p>
        Book Lemongrass if you want culture (offering + house concepts) bundled with cooking at a mid price.
        Details: lemongrassubud.com/rate-and-time/.
      </p>

      <h2>Who should book which class?</h2>
      <ul>
        <li>
          <strong>Farm lovers & Instagram garden vibes</strong> → Taman Dukuh Bali Farm Cooking Class
        </li>
        <li>
          <strong>Food nerds wanting ceremonial depth & small groups</strong> → Tresna Bali (if budget allows)
        </li>
        <li>
          <strong>Culture + cooking at a mid price</strong> → Lemongrass Cooking Class morning program
        </li>
        <li>
          <strong>Best value: hotel pickup, 10+ dishes, max 8, IDR 506,370</strong> →{' '}
          <Link href={money}>Tumang Bali</Link>
        </li>
      </ul>

      <h2>How Tumang Bali compares (for context)</h2>
      <p>
        Tumang Bali runs a family village kitchen near Ubud with Chef Wayan: guided morning{' '}
        <Link href={marketTour}>market tour</Link>, rice-field walk, Canang Sari activity, hands-on cooking of{' '}
        <strong>10+ dishes</strong> (including{' '}
        <Link href="/blog/lemongrass-cooking-class-ubud">lemongrass sate lilit</Link> and sambal matah), full
        vegetarian menu, recipe booklet, and complimentary Ubud hotel pickup. Shared class{' '}
        <Link href="/blog/ubud-cooking-class-price">IDR 506,370</Link>; private kitchen from IDR 633,090 for one
        person. See also{' '}
        <Link href="/blog/best-cooking-class-in-ubud">best cooking class in Ubud</Link> and{' '}
        <Link href="/blog/is-a-bali-cooking-class-worth-it">is a Bali cooking class worth it?</Link>
      </p>

      <h2>Verdict: which Ubud cooking class should you book?</h2>
      <p data-speakable>
        There is no single “best” among Taman Dukuh, Tresna, and Lemongrass — only the best fit. Pick{' '}
        <strong>Taman Dukuh</strong> for organic farm harvesting in Taro. Pick <strong>Tresna</strong> for a
        premium, max-8 ceremonial feast with many recipes. Pick <strong>Lemongrass Cooking Class</strong> for a
        cultural morning program at IDR 400K. If you want the strongest inclusions-to-price ratio — market tour,
        rice fields, Canang Sari, 10+ dishes, max 8 guests, hotel pickup at IDR 506,370 — book{' '}
        <Link href={money}>Tumang Bali</Link> or check dates on the{' '}
        <Link href={book}>online booking page</Link>.
      </p>
    </>
  ),
}

const soloPromoLine = isPromoActive() ? (
  <>
    only <strong>{formatIdr(PROMO_SHARED_IDR)}</strong> for the regular class during our September promo
    (normal rate {formatIdr(SHARED_ADULT_SOLO_IDR)}; private kitchen {formatIdr(PROMO_PRIVATE_IDR)}, normally{' '}
    {formatIdr(PRIVATE_ADULT_SOLO_IDR)})
  </>
) : (
  <>{formatIdr(SHARED_ADULT_SOLO_IDR)} for 1 person</>
)

export const isUbudBusyInHighSeason: StaticArticle = {
  slug: 'ubud-high-season-crowds',
  title: 'Is Ubud Busy in High Season? What to Expect (+ Free Hotel & Villa Pickup)',
  metaTitle: 'Is Ubud Busy in High Season? 2026 Crowd Guide | Tumang Bali',
  metaDescription:
    'Is Ubud busy during high season (Jul–Aug, Dec–Jan)? What actually gets crowded, when it eases, and how our free hotel & villa pickup skips the traffic. Book Tumang Bali.',
  excerpt:
    'Wondering if Ubud is busy in high season? Yes — July–August and the Christmas–New Year week bring heavy Jalan Raya Ubud traffic and packed sights. Here is what actually gets crowded, when it eases, and how free hotel & villa pickup makes it a non-issue for your cooking class.',
  image: '/images/blog/best-things-to-do-in-ubud.webp',
  imageAlt: 'A quiet temple gateway tucked away from Ubud\'s busy high-season streets',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-09',
  keywords: [
    'is ubud busy',
    'ubud high season',
    'ubud peak season',
    'is ubud crowded',
    'ubud traffic high season',
    'when is ubud busy',
    'avoid crowds ubud',
    'free hotel pickup ubud',
  ],
  faqs: [
    {
      question: 'Is Ubud busy in high season?',
      answer:
        'Yes. Ubud\'s high season — July, August, and the Christmas–New Year week (roughly Dec 20–Jan 5) — brings heavy traffic on Jalan Raya Ubud and Monkey Forest Road, packed rice-terrace viewpoints, and restaurants that need reservations. Shoulder months (April–June, September–October) have the same dry, sunny weather with noticeably fewer crowds.',
    },
    {
      question: 'When is Ubud\'s high season?',
      answer:
        'Ubud\'s two busiest windows are July–August (European and Australian school holidays, plus the Bali Arts Festival) and the Christmas–New Year week. June ramps up toward peak, while April–May and September–October are quieter shoulder months with equally good weather.',
    },
    {
      question: 'What times of day are worst for Ubud traffic?',
      answer:
        'Jalan Raya Ubud and Monkey Forest Road typically gridlock around 08:00–10:00, 13:00–15:00, and 18:00–20:00 during high season. Early morning (before 8am) and the mid-afternoon lull are the easiest windows to move around town.',
    },
    {
      question: 'How does Tumang Bali help during high season crowds?',
      answer:
        'We cap every shared class at 8 guests regardless of season, and we include free pickup and drop-off from any hotel or villa in the main Ubud area — so our driver deals with the traffic timing, not you. Booking ahead during July–August and Dec–Jan is recommended since dates fill faster.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Is Ubud busy in high season?</strong> Yes — July, August, and the Christmas–New Year
        week are Ubud&apos;s busiest stretches. Jalan Raya Ubud and Monkey Forest Road see heavy traffic,
        the Tegallalang rice-terrace swings and Monkey Forest queue up by mid-morning, and popular
        restaurants need reservations. It is still absolutely worth visiting — you just plan around it.
        And whichever week you land, Tumang Bali includes free pickup and drop-off from any hotel or
        villa in the main Ubud area, so the traffic is our driver&apos;s problem, not yours.
      </p>

      <h2>When exactly is Ubud&apos;s high season?</h2>
      <ul>
        <li>
          <strong>July–August</strong> — the biggest peak. European and Australian school holidays
          collide with the Bali Arts Festival, so rooms, restaurants, and activities book out weeks
          ahead.
        </li>
        <li>
          <strong>Christmas–New Year (~Dec 20–Jan 5)</strong> — Ubud&apos;s second-highest demand
          period, with prices and crowds spiking sharply for about two weeks.
        </li>
        <li>
          <strong>June</strong> — the ramp-up month. Prices creep toward peak but crowds are still
          manageable.
        </li>
        <li>
          <strong>Shoulder season (April–May, September–October)</strong> — the same dry, sunny
          weather as peak season with noticeably fewer visitors and lower rates. Many repeat travellers
          consider this the real sweet spot.
        </li>
      </ul>
      <p>
        For a full month-by-month weather breakdown, see our{' '}
        <Link href="/blog/best-time-to-visit-bali">best time to visit Bali guide</Link>.
      </p>

      <h2>What actually gets crowded (and what doesn&apos;t)</h2>
      <p>
        The crowding in Ubud is real but shallow — it pools in a handful of well-known spots rather
        than swallowing the whole town.
      </p>
      <ul>
        <li>
          <strong>Jalan Raya Ubud &amp; Monkey Forest Road</strong> — the main traffic bottleneck,
          worst around 08:00–10:00, 13:00–15:00, and 18:00–20:00.
        </li>
        <li>
          <strong>Tegallalang rice terraces</strong> — the famous swings and viewpoints are packed by
          9–10am in high season; they are near-empty before 7am.
        </li>
        <li>
          <strong>Sacred Monkey Forest Sanctuary</strong> — a midday crush; mornings and late afternoon
          are far calmer.
        </li>
        <li>
          <strong>Popular cafés and restaurants</strong> — expect a wait or book ahead in the
          11am–2pm and evening rush.
        </li>
        <li>
          <strong>A few streets over</strong> — Penestanan, Nyuh Kuning, and the village lanes around
          Tumang stay quiet even at the height of high season.
        </li>
      </ul>

      <h2>The midday retreat window works in your favour</h2>
      <p>
        Even seasoned Ubud travellers plan their day the same way: move early (6–10am) while it is
        cool and quiet, then retreat from 11am–2pm when heat, humidity, and traffic all peak at once.
        A hands-on <Link href={money}>cooking class in Ubud</Link> fits that midday window perfectly —
        you are indoors in an open-air village kitchen, not stuck in a Jalan Raya jam or queuing under
        the sun at a viewpoint. It is one of the few high-season activities that gets <em>better</em>{' '}
        while the streets outside get busier.
      </p>
      <p>
        Prefer to start early and beat the crowds elsewhere first? Our{' '}
        <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon class guide</Link>{' '}
        breaks down both sessions so you can build the rest of your day around whichever traffic
        window suits you.
      </p>

      <h2>Skip the traffic stress: free hotel &amp; villa pickup, every season</h2>
      <p>
        High season is exactly when you do not want to be the one navigating a scooter through gridlock
        or hunting for parking near Monkey Forest Road. That is why every Tumang Bali class includes{' '}
        <strong>free pickup and drop-off from any hotel or villa in the main Ubud area</strong> — no
        surcharge, no season-based fee, and no need to book a driver yourself. We confirm your exact
        pickup time on WhatsApp after booking and plan around the same traffic windows described above,
        so you spend the ride relaxing instead of watching the clock.
      </p>
      <p>
        Staying outside the main Ubud area (Canggu, Seminyak, Sanur)? See our{' '}
        <Link href="/blog/cooking-class-ubud-from-canggu">cooking class from Canggu guide</Link> for
        transport options, or message us on <Link href="/contact">the contact page</Link> and we will
        quote a small transfer fee.
      </p>

      <h2>Small groups stay small — even in July and August</h2>
      <p>
        We cap the shared class at 8 guests year-round, so high season never turns your cooking class
        into a crowd. It does mean dates fill faster in July–August and over Christmas–New Year — book
        a few weeks ahead if your trip lands in those windows. Shared class is {soloPromoLine} (per
        adult IDR 506,370 for 2+ guests); private class keeps the kitchen exclusive at IDR 633,090 for
        1 person. See the full breakdown on our{' '}
        <Link href="/blog/ubud-cooking-class-price">Ubud cooking class price guide</Link>.
      </p>

      <h2>Book your high-season cooking class in Ubud</h2>
      <p>
        Same small groups, same free hotel and villa pickup, whatever month you visit.{' '}
        <Link href={book}>Check dates and book</Link> or head to the{' '}
        <Link href={money}>main cooking class page</Link> for full details. Curious how the village
        setting compares to a class in central Ubud town? Read{' '}
        <Link href="/blog/tumang-vs-ubud-cooking-class">why we chose the village over the town</Link>.
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
  zapierSmartAssistantUbudCookingClass,
  tamanDukuhVsTresnaVsLemongrass,
  isUbudBusyInHighSeason,
]
