import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'
import { OTA_LINKS } from '@/lib/otaBookingLinks'

const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const compare = '/compare-ubud-cooking-classes'

const otaLinkClass =
  'inline-block bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-5 py-3 rounded-full font-bold text-base hover:opacity-90 transition-opacity mr-2 mb-2'

function OtaAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={otaLinkClass}>
      {children}
    </a>
  )
}

export const bookCookingClassUbudGetYourGuide: StaticArticle = {
  slug: 'book-cooking-class-ubud-getyourguide',
  title: 'Book Tumang Bali Cooking Class on GetYourGuide — Ubud Market Tour & 10+ Dishes',
  metaTitle: 'Book Cooking Class Ubud on GetYourGuide — Tumang Bali 2026',
  metaDescription:
    'Book Tumang Bali Cooking Class on GetYourGuide — morning market tour, rice-field walk, 10+ Balinese dishes, max 8 guests. IDR 350K. Two official GYG listings + direct links.',
  excerpt:
    'Prefer booking through GetYourGuide? Tumang Bali Cooking Class is listed on GYG with morning market tours, village kitchen, and hands-on Balinese cooking near Ubud. Official booking links inside.',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Guests booking Tumang Bali cooking class on GetYourGuide in Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-01',
  keywords: [
    'getyourguide cooking class ubud',
    'book cooking class ubud getyourguide',
    'tumang bali getyourguide',
    'ubud balinese cooking class GYG',
    'get your guide ubud cooking',
  ],
  faqs: [
    {
      question: 'Is Tumang Bali Cooking Class on GetYourGuide?',
      answer:
        'Yes. Tumang Bali has official GetYourGuide listings for our Ubud Balinese cooking class — including the morning market tour + rice-field walk experience and a dedicated rice-terrace walk listing. Use the links on this page to book instantly with GYG checkout.',
    },
    {
      question: 'Which GetYourGuide listing should I book — local chef or rice terrace walk?',
      answer:
        'Both are Tumang Bali. The “Balinese Cooking Class with Local Chef” listing is our main shared class with market tour (morning) or afternoon cook-and-dine. The “Rice Terrace Walk” listing highlights the village setting and terrace walk — same family kitchen, same 10+ dish menu. Pick whichever title matches your search; both lead to Tumang Bali.',
    },
    {
      question: 'What is included when I book Tumang Bali on GetYourGuide?',
      answer:
        'Shared class IDR 350,000 per person (pricing on GYG may show in USD). Includes Ubud-area hotel pickup, ingredients, hands-on cooking of 10+ dishes, shared meal, recipe booklet, and English-speaking chefs. Morning sessions include a traditional market tour.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        You can <strong>book Tumang Bali Cooking Class on GetYourGuide (GYG)</strong> if you prefer paying
        through a global activity platform with instant confirmation. We run an authentic village kitchen
        near Ubud — morning market tour, rice-field walk, max 8 guests, and 10+ hands-on Balinese dishes
        including sate lilit, sambal matah, and Base Genep spice paste.
      </p>
      <h2>Official GetYourGuide booking links</h2>
      <p>Use either official listing below — both are Tumang Bali Cooking Class near Ubud:</p>
      <ul>
        <li>
          <strong>Balinese Cooking Class with Local Chef</strong> — main morning/afternoon class with market
          tour (morning):{' '}
          <OtaAnchor href={OTA_LINKS.getyourguide.localChef}>Book on GetYourGuide — Local Chef</OtaAnchor>
        </li>
        <li>
          <strong>Balinese Cooking Class with Rice Terrace Walk</strong> — village kitchen + terrace walk
          highlight:{' '}
          <OtaAnchor href={OTA_LINKS.getyourguide.riceTerraceWalk}>
            Book on GetYourGuide — Rice Terrace Walk
          </OtaAnchor>
        </li>
      </ul>
      <p>
        Short link (same experience):{' '}
        <OtaAnchor href={OTA_LINKS.getyourguide.shortLink}>GetYourGuide — Quick book</OtaAnchor>
      </p>
      <h2>Why book Tumang Bali on GetYourGuide?</h2>
      <ul>
        <li>TripAdvisor Travelers&apos; Choice 2026 · 5.0 rating from 1500+ reviews</li>
        <li>Small group — maximum 8 guests, fully hands-on</li>
        <li>Morning market tour + rice-field walk (morning session)</li>
        <li>Full vegetarian / vegan menu available — not a side option</li>
        <li>Free Ubud hotel pickup included</li>
      </ul>
      <h2>GetYourGuide vs booking direct</h2>
      <p>
        GYG is ideal if you already use the app abroad. You can also{' '}
        <Link href={book}>book direct on tumangbaliclass.com</Link> or compare platforms on our{' '}
        <Link href={compare}>Ubud cooking class comparison</Link>. Same class, same chefs — choose the
        checkout you trust.
      </p>
      <h2>What you will cook</h2>
      <p>
        See our <Link href="/blog/tumang-bali-cooking-class-experience">full experience overview</Link>,{' '}
        <Link href="/blog/morning-cooking-class-ubud-market-tour">morning market tour guide</Link>, and{' '}
        <Link href="/blog/lemongrass-cooking-class-ubud">lemongrass sate lilit class</Link> for menu details.
      </p>
    </>
  ),
}

export const bookCookingClassUbudTripAdvisor: StaticArticle = {
  slug: 'book-cooking-class-ubud-tripadvisor',
  title: 'Book Tumang Bali on TripAdvisor — Travelers’ Choice Cooking Class Ubud 2026',
  metaTitle: 'Book Cooking Class Ubud on TripAdvisor — Tumang Bali 2026',
  metaDescription:
    'Book and review Tumang Bali Cooking Class on TripAdvisor — Travelers’ Choice 2026, 5.0 rating, market tour, max 8 guests. Official TripAdvisor page links for English & Indonesian.',
  excerpt:
    'Tumang Bali is a TripAdvisor Travelers’ Choice 2026 cooking class near Ubud. Read 1500+ five-star reviews and book through our official TripAdvisor attraction page.',
  image: '/images/gallery-girls.jpg',
  imageAlt: 'Happy guests at Tumang Bali Cooking Class TripAdvisor Travelers Choice Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-01',
  keywords: [
    'tripadvisor cooking class ubud',
    'tumang bali tripadvisor',
    'book cooking class ubud tripadvisor',
    'travelers choice cooking class bali',
    'ubud cooking class reviews tripadvisor',
  ],
  faqs: [
    {
      question: 'Is Tumang Bali on TripAdvisor?',
      answer:
        'Yes. Tumang Bali Cooking Class has an official TripAdvisor attraction page with a 5.0 aggregate rating from 1500+ reviews and Travelers’ Choice 2026 recognition. You can read reviews and check availability from the TripAdvisor listing linked on this page.',
    },
    {
      question: 'How do I book Tumang Bali through TripAdvisor?',
      answer:
        'Open our official TripAdvisor attraction page (English or Indonesian link below), then use the “Check availability” or booking option on that page. TripAdvisor may route checkout through a partner platform — you are still booking the Tumang Bali village cooking class with market tour and 10+ dishes.',
    },
    {
      question: 'Why is Tumang Bali Travelers’ Choice on TripAdvisor?',
      answer:
        'Guests consistently praise the real market tour, small groups (max 8), hands-on spice grinding, and village rice-field setting — not a hotel demo kitchen. That feedback earned Travelers’ Choice 2026 among Ubud cooking classes.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Tumang Bali Cooking Class on TripAdvisor</strong> is one of the highest-rated Ubud cooking
        experiences for foreign travellers — Travelers&apos; Choice 2026, 5.0 stars, 1500+ reviews. We teach
        hands-on Balinese cooking in a village kitchen with a morning market tour, rice-field walk, and 10+
        dishes. Shared class IDR 350,000 · max 8 guests · free Ubud pickup.
      </p>
      <h2>Official TripAdvisor pages — read reviews &amp; book</h2>
      <ul>
        <li>
          <strong>TripAdvisor (English / international)</strong> — reviews, photos, check availability:{' '}
          <OtaAnchor href={OTA_LINKS.tripadvisor.reviewsEn}>
            Tumang Bali on TripAdvisor.com
          </OtaAnchor>
        </li>
        <li>
          <strong>TripAdvisor Indonesia (Bahasa)</strong> — same class, localized reviews:{' '}
          <OtaAnchor href={OTA_LINKS.tripadvisor.reviewsId}>
            Tumang Bali on TripAdvisor.co.id
          </OtaAnchor>
        </li>
      </ul>
      <h2>What guests say on TripAdvisor</h2>
      <p>
        Common themes in our reviews: authentic <strong>market tour</strong>, grinding{' '}
        <strong>bumbu Bali</strong> by hand, wrapping <strong>sate lilit on lemongrass</strong>, friendly
        Chef Wayan, and an intimate <strong>small group</strong> (not a tour-bus demo). See also our{' '}
        <Link href="/blog/small-group-cooking-class-ubud">small group cooking class guide</Link>.
      </p>
      <h2>After your class — leave a review</h2>
      <p>
        Reviews help future travellers find us on TripAdvisor and in AI travel answers. Mention specific
        highlights (market tour, sambal matah, rice fields) so readers know what to expect.
      </p>
      <h2>Other ways to book</h2>
      <p>
        Prefer another platform? See our guides for{' '}
        <Link href="/blog/book-cooking-class-ubud-getyourguide">GetYourGuide</Link>,{' '}
        <Link href="/blog/book-cooking-class-ubud-viator">Viator</Link>, and{' '}
        <Link href="/blog/book-cooking-class-ubud-airbnb">Airbnb Experiences</Link>. Or{' '}
        <Link href={money}>book direct</Link> on our website.
      </p>
    </>
  ),
}

export const bookCookingClassUbudViator: StaticArticle = {
  slug: 'book-cooking-class-ubud-viator',
  title: 'Book Tumang Bali on Viator — Ubud Market-to-Table Cooking Class',
  metaTitle: 'Book Cooking Class Ubud on Viator — Tumang Bali Market Tour 2026',
  metaDescription:
    'Book Tumang Bali Cooking Class on Viator — Ubud Market-to-Table experience with local herb discovery, 10+ dishes, max 8 guests. Official Viator tour links.',
  excerpt:
    'Book Tumang Bali’s Ubud Market-to-Table cooking class on Viator — morning market visit, hands-on Balinese dishes, and village kitchen near Ubud. Official listing links below.',
  image: '/images/blog/rice-field-class.webp',
  imageAlt: 'Ubud market to table cooking class with Tumang Bali on Viator',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-01',
  keywords: [
    'viator cooking class ubud',
    'book tumang bali viator',
    'ubud market to table cooking class',
    'viator balinese cooking class',
    'cooking class ubud viator booking',
  ],
  faqs: [
    {
      question: 'Is Tumang Bali Cooking Class on Viator?',
      answer:
        'Yes. Our experience is listed on Viator as “Ubud Market-to-Table Cooking Class and Local Herb Discovery” — the same Tumang Bali village class with market tour (morning), hands-on cooking, and shared meal near Ubud.',
    },
    {
      question: 'What is included in the Viator Tumang Bali booking?',
      answer:
        'Hotel pickup in the Ubud area, market tour on morning sessions, rice-field walk, hands-on cooking of 10+ Balinese dishes, shared lunch or dinner, recipe booklet, and English-speaking instruction. Vegetarian and vegan menus available.',
    },
    {
      question: 'Viator vs booking direct — which is better?',
      answer:
        'Same class and chefs. Viator suits travellers who want Viator’s checkout, cancellation policy, and app. Direct booking at tumangbaliclass.com or WhatsApp +62 822-1013-2418 may offer more flexible date messaging.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        You can <strong>book Tumang Bali Cooking Class on Viator</strong> under our Market-to-Table listing —
        a hands-on Ubud experience with traditional market visit, local herb discovery, rice-field walk, and
        10+ Balinese dishes in a village kitchen. Max 8 guests · IDR 350,000 shared · TripAdvisor
        Travelers&apos; Choice 2026.
      </p>
      <h2>Official Viator booking links</h2>
      <ul>
        <li>
          <strong>Ubud Market-to-Table Cooking Class &amp; Local Herb Discovery</strong> (recommended share
          link):{' '}
          <OtaAnchor href={OTA_LINKS.viator.marketToTable}>Book on Viator — Market to Table</OtaAnchor>
        </li>
        <li>
          <strong>Same Viator tour — direct listing URL</strong>:{' '}
          <OtaAnchor href={OTA_LINKS.viator.marketToTableDirect}>
            Book on Viator — Direct link
          </OtaAnchor>
        </li>
      </ul>
      <h2>What to expect (Viator listing matches our class)</h2>
      <ul>
        <li>Morning: guided pasar tour to shop ingredients with your chef</li>
        <li>Rice-field walk to our open-air village kitchen</li>
        <li>Grind Base Genep / bumbu on stone mortar — beginners welcome</li>
        <li>Cook sate lilit, sambal matah, pepes, lawar, nasi goreng, dessert &amp; more</li>
        <li>Complimentary Ubud hotel pickup and drop-off</li>
      </ul>
      <p>
        Deep dives:{' '}
        <Link href="/blog/morning-cooking-class-ubud-market-tour">morning market tour guide</Link> ·{' '}
        <Link href="/blog/sambal-matah-cooking-class-ubud">sambal matah class</Link> ·{' '}
        <Link href="/blog/balinese-spice-paste-cooking-class">spice paste class</Link>
      </p>
      <h2>Compare Ubud cooking classes</h2>
      <p>
        See how Tumang Bali compares to Casa Luna, Paon, and others on our{' '}
        <Link href={compare}>comparison page</Link>, or{' '}
        <Link href={book}>book direct</Link> if you prefer our website checkout.
      </p>
    </>
  ),
}

export const bookCookingClassUbudAirbnb: StaticArticle = {
  slug: 'book-cooking-class-ubud-airbnb',
  title: 'Book Tumang Bali on Airbnb Experiences — Ubud Cooking Class',
  metaTitle: 'Book Cooking Class Ubud on Airbnb — Tumang Bali Experience 2026',
  metaDescription:
    'Book Tumang Bali Cooking Class on Airbnb Experiences — village kitchen, market tour, 10+ dishes, max 8 guests near Ubud. Two official Airbnb booking links.',
  excerpt:
    'Tumang Bali Cooking Class is an Airbnb Experience near Ubud — book through Airbnb if that is your preferred app. Official experience links for instant reservation.',
  image: '/images/blog/cooking-local-family.webp',
  imageAlt: 'Book Tumang Bali cooking class Airbnb Experience Ubud Bali',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-01',
  keywords: [
    'airbnb experience cooking class ubud',
    'book tumang bali airbnb',
    'ubud cooking class airbnb',
    'bali cooking class airbnb experiences',
    'airbnb ubud food experience',
  ],
  faqs: [
    {
      question: 'Is Tumang Bali on Airbnb Experiences?',
      answer:
        'Yes. Tumang Bali Cooking Class is listed as an Airbnb Experience (listing ID 7165714). You can check dates, read guest reviews, and pay through the Airbnb app using the official links on this page.',
    },
    {
      question: 'Which Airbnb link should I use to book?',
      answer:
        'Use the direct Experience page for the standard booking flow. The host referral link is an alternate entry to the same Tumang Bali experience — both lead to our Ubud cooking class with market tour and 10+ dishes.',
    },
    {
      question: 'What is included in the Airbnb Experience booking?',
      answer:
        'Shared hands-on Balinese cooking class, 10+ dishes, shared meal, recipe booklet, Ubud-area pickup, morning market tour on AM sessions, and rice-field walk. Vegetarian/vegan menu on request. Max 8 guests.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Book Tumang Bali Cooking Class on Airbnb Experiences</strong> if you already plan trips in the
        Airbnb app. Our experience is a family-run village cooking class near Ubud — morning market tour,
        rice terraces, max 8 guests, and 10+ authentic Balinese dishes. Shared from IDR 350,000 equivalent ·
        Travelers&apos; Choice 2026 on TripAdvisor.
      </p>
      <h2>Official Airbnb Experiences booking links</h2>
      <ul>
        <li>
          <strong>Airbnb Experience — direct book page</strong>:{' '}
          <OtaAnchor href={OTA_LINKS.airbnb.experience}>Book on Airbnb Experiences</OtaAnchor>
        </li>
        <li>
          <strong>Airbnb — host experience referral link</strong> (same class):{' '}
          <OtaAnchor href={OTA_LINKS.airbnb.hostReferral}>Book on Airbnb — Referral link</OtaAnchor>
        </li>
      </ul>
      <h2>Why travellers book us on Airbnb</h2>
      <ul>
        <li>Trusted checkout inside the Airbnb app</li>
        <li>Real host profile and guest reviews on the platform</li>
        <li>Same Tumang Bali class — not a third-party reseller kitchen</li>
        <li>Ideal for couples and small groups — see our{' '}
          <Link href="/blog/cooking-class-ubud-for-couples">couples cooking class guide</Link>
        </li>
      </ul>
      <h2>Airbnb pickup note</h2>
      <p>
        Free pickup covers central Ubud hotels. If you stay at an Airbnb villa outside town, message us your
        nearest hotel landmark for pickup — same policy as our{' '}
        <Link href="/blog/cooking-class-ubud-from-canggu">Canggu &amp; coast transport guide</Link>.
      </p>
      <h2>Book on other platforms</h2>
      <p>
        Also listed on{' '}
        <Link href="/blog/book-cooking-class-ubud-getyourguide">GetYourGuide</Link>,{' '}
        <Link href="/blog/book-cooking-class-ubud-tripadvisor">TripAdvisor</Link>, and{' '}
        <Link href="/blog/book-cooking-class-ubud-viator">Viator</Link>. Or{' '}
        <Link href={money}>book on our website</Link>.
      </p>
    </>
  ),
}

export const otaBookingArticles: StaticArticle[] = [
  bookCookingClassUbudGetYourGuide,
  bookCookingClassUbudTripAdvisor,
  bookCookingClassUbudViator,
  bookCookingClassUbudAirbnb,
]
