import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'

const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const marketTour = '/cooking-class-with-market-tour-ubud'
const halfDay = '/half-day-cooking-class-bali'

export const riceTerraceCookingClassUbud: StaticArticle = {
  slug: 'rice-terrace-cooking-class-ubud',
  title: 'Rice Terrace Cooking Class in Ubud — Village Kitchen & Paddy Walk 2026',
  metaTitle: 'Rice Terrace Cooking Class Ubud — Village Kitchen 2026',
  metaDescription:
    'Rice terrace cooking class near Ubud — walk working paddies, cook 10+ Balinese dishes in a village kitchen. Market tour (morning), max 8 guests, IDR 350K. Book Tumang Bali.',
  excerpt:
    'Looking for a rice terrace cooking class in Ubud? Tumang Bali pairs a gentle paddy walk with hands-on Balinese cooking in a village kitchen — market tour on morning sessions, max 8 guests, from IDR 350,000.',
  image: '/images/blog/rice-field-class.webp',
  imageAlt: 'Rice terrace cooking class near Ubud — guests walking paddies to village kitchen',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-03',
  keywords: [
    'rice terrace cooking class ubud',
    'rice field cooking class bali',
    'cooking class rice paddies ubud',
    'ubud rice terrace cooking experience',
    'village cooking class rice fields bali',
    'subak cooking class ubud',
  ],
  faqs: [
    {
      question: 'Does the Tumang Bali cooking class include a rice terrace walk?',
      answer:
        'Yes. Morning and most shared sessions include a gentle walk through working rice paddies (subak irrigation) on the way to our village kitchen near Ubud — not a ticketed tourist terrace with swings.',
    },
    {
      question: 'Is a rice terrace cooking class the same as a Tegallalang photo stop?',
      answer:
        'No. Our walk is through active village paddies near Tumang — quieter, local, and tied to the cooking class. Tegallalang is a separate sightseeing stop with entry fees and crowds.',
    },
    {
      question: 'How much is a rice terrace cooking class in Ubud?',
      answer:
        'Tumang Bali shared class is IDR 350,000 per person and includes the paddy walk, cooking of 10+ dishes, the meal, recipe booklet, and Ubud hotel pickup. Morning sessions also include the market tour.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>rice terrace cooking class in Ubud</strong> at Tumang Bali means you walk working paddies,
        then cook 10+ Balinese dishes in a village kitchen — not a hotel demo overlooking a parking lot.
        Morning sessions add a traditional market tour. Shared class <strong>IDR 350,000</strong> · max 8
        guests · free Ubud hotel pickup.
      </p>
      <h2>Why travellers search for rice terrace cooking classes</h2>
      <p>
        Related searches — <em>rice field cooking class Bali</em>, <em>cooking class with rice paddies
        Ubud</em>, <em>village kitchen near Tegallalang</em> — all point to the same desire: scenery plus
        real cooking. Competitors often sell farm or Jatiluwih packages; Tumang focuses on an intimate village
        kitchen with a subak walk and full hands-on menu.
      </p>
      <h2>What your rice-terrace day includes</h2>
      <ul>
        <li>Gentle walk through working rice paddies to the open-air kitchen</li>
        <li>Morning option: guided pasar tour before the fields</li>
        <li>Hand-ground Base Genep / bumbu on stone mortar</li>
        <li>10+ dishes — sate lilit, sambal matah, lawar, pepes, and more</li>
        <li>Shared feast overlooking green terraces</li>
        <li>Printed recipe booklet · English-speaking local chefs</li>
      </ul>
      <h2>Morning market + rice fields (best combo)</h2>
      <p>
        Book the morning session for the full cultural arc:{' '}
        <Link href={marketTour}>cooking class with market tour Ubud</Link> → paddy walk → kitchen. Session
        timing: <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon guide</Link>. Half-day
        overview: <Link href={halfDay}>half-day cooking class Bali</Link>.
      </p>
      <h2>Rice terrace class vs central Ubud schools</h2>
      <p>
        Central Ubud studios are convenient but often miss the paddy walk. Village kitchens win on atmosphere
        — see <Link href="/blog/best-cooking-class-in-ubud">best cooking class in Ubud</Link> and{' '}
        <Link href="/compare-ubud-cooking-classes">compare Ubud cooking classes</Link>.
      </p>
      <h2>Book your rice terrace cooking class</h2>
      <p>
        Shared from IDR 350,000 · private IDR 650,000.{' '}
        <Link href={money}>Book cooking class Ubud</Link> · <Link href={book}>online booking</Link> · GetYourGuide
        rice-terrace listing guide:{' '}
        <Link href="/blog/book-cooking-class-ubud-getyourguide">book on GetYourGuide</Link>.
      </p>
    </>
  ),
}

export const balineseHomeCookingClassUbud: StaticArticle = {
  slug: 'balinese-home-cooking-class-ubud',
  title: 'Balinese Home Cooking Class in Ubud — Cook with a Local Family 2026',
  metaTitle: 'Balinese Home Cooking Class Ubud — Local Family Kitchen',
  metaDescription:
    'Balinese home cooking class in Ubud — cook with a local family in Tumang village. Market tour, rice-field walk, 10+ dishes, max 8 guests, IDR 350K. Book Tumang Bali.',
  excerpt:
    'Want a Balinese home cooking class in Ubud — not a hotel workshop? Tumang Bali is a family-run village kitchen: market tour, rice-field walk, hand-ground spices, and a feast you cook together from IDR 350,000.',
  image: '/images/blog/cooking-local-family.webp',
  imageAlt: 'Balinese home cooking class with a local family near Ubud',
  author: 'Chef Wayan',
  authorRole: 'Head Chef',
  publishedDate: '2026-09-03',
  keywords: [
    'balinese home cooking class ubud',
    'cook with local family bali',
    'family kitchen cooking class ubud',
    'home cooking class bali',
    'authentic home cooked balinese class',
    'village family cooking class ubud',
  ],
  faqs: [
    {
      question: 'Is Tumang Bali a real home / family cooking class?',
      answer:
        'Yes. Tumang Bali is a family-run village kitchen near Ubud led by Chef Wayan Sudiana — not a hotel demo or resort classroom. You cook in an open-air family compound setting with a small group (max 8).',
    },
    {
      question: 'What is included in a Balinese home cooking class in Ubud?',
      answer:
        'Ubud hotel pickup, morning market tour (AM class), rice-field walk, hands-on cooking of 10+ dishes, the shared meal, and a recipe booklet. Vegetarian and vegan menus available. Shared IDR 350,000; private kitchen from IDR 650,000.',
    },
    {
      question: 'Is a home cooking class good for beginners and honeymooners?',
      answer:
        'Yes. Chefs guide every step — beginners welcome. Couples and honeymooners often book shared or private sessions; see our couples cooking class guide for romantic options.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>Balinese home cooking class in Ubud</strong> at Tumang Bali means cooking with a local
        family kitchen in Tumang village — grind spices by hand, wrap sate lilit, and eat what you made
        overlooking rice fields. Shared class <strong>IDR 350,000</strong> · max 8 guests · morning market
        tour available · free Ubud pickup.
      </p>
      <h2>Home cooking class vs hotel cooking demo</h2>
      <p>
        Travellers searching <em>cook with local family Bali</em>, <em>family kitchen cooking class Ubud</em>,
        or <em>authentic home cooked Balinese class</em> usually want a compound kitchen and a host chef — not
        a polished resort workshop. Tumang is family-run: small groups, English instruction, and recipes you
        can recreate at home.
      </p>
      <h2>What you cook in a local family kitchen</h2>
      <ul>
        <li>Base Genep / bumbu Bali on cobek (stone mortar)</li>
        <li>Sate lilit on lemongrass</li>
        <li>Sambal matah, lawar, pepes, nasi goreng, dadar gulung, and more</li>
        <li>Full vegetarian / vegan menu on request</li>
      </ul>
      <p>
        Dish deep-dives:{' '}
        <Link href="/blog/balinese-spice-paste-cooking-class">spice paste class</Link> ·{' '}
        <Link href="/blog/sambal-matah-cooking-class-ubud">sambal matah</Link> ·{' '}
        <Link href="/blog/lemongrass-cooking-class-ubud">lemongrass sate lilit</Link>.
      </p>
      <h2>Who this home cooking class suits</h2>
      <ul>
        <li>
          <strong>Beginners</strong> —{' '}
          <Link href="/bali-cooking-class-for-beginners">cooking class for beginners</Link>
        </li>
        <li>
          <strong>Couples / honeymoon</strong> —{' '}
          <Link href="/blog/cooking-class-ubud-for-couples">couples cooking class Ubud</Link>
        </li>
        <li>
          <strong>Families</strong> — <Link href="/family-cooking-class-bali">family cooking class Bali</Link>
        </li>
        <li>
          <strong>Solo / private</strong> —{' '}
          <Link href="/private-cooking-class-ubud">private cooking class Ubud</Link>
        </li>
      </ul>
      <h2>Book a Balinese home cooking class</h2>
      <p>
        Experience overview:{' '}
        <Link href="/blog/tumang-bali-cooking-class-experience">Tumang Bali cooking class experience</Link>.
        Price table: <Link href="/blog/ubud-cooking-class-price">Ubud cooking class price</Link>.{' '}
        <Link href={money}>Book now</Link> · <Link href={book}>check availability</Link>.
      </p>
    </>
  ),
}

export const relatedKeywordArticles: StaticArticle[] = [
  riceTerraceCookingClassUbud,
  balineseHomeCookingClassUbud,
]
