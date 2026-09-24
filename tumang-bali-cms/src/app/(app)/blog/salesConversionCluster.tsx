import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'
import {
  formatIdr,
  SHARED_ADULT_GROUP_IDR,
  SHARED_ADULT_SOLO_IDR,
  PRIVATE_ADULT_SOLO_IDR,
  PRIVATE_ADULT_MIN2_IDR,
} from '@/lib/pricing'

/**
 * Sales conversion SEO cluster (Sep 2026) — articles that remove booking friction
 * and push direct CTA. Distinct from competitor compare, dietary, OTA channel
 * guides, and the booking-stage PR (#78 last-minute / how-to-book / birthday).
 */
const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const privateClass = '/private-cooking-class-ubud'
const marketTour = '/cooking-class-with-market-tour-ubud'
const priceGuide = '/blog/ubud-cooking-class-price'
const worthIt = '/blog/is-a-bali-cooking-class-worth-it'
const couples = '/blog/cooking-class-ubud-for-couples'
const families = '/blog/ubud-cooking-class-for-families'
const pickup = '/blog/cooking-class-ubud-hotel-pickup'
const refund = '/refund-policy'
const gyg = '/blog/book-cooking-class-ubud-getyourguide'
const tripadvisor = '/blog/book-cooking-class-ubud-tripadvisor'
const viator = '/blog/book-cooking-class-ubud-viator'
const airbnb = '/blog/book-cooking-class-ubud-airbnb'
const shared = formatIdr(SHARED_ADULT_GROUP_IDR)
const solo = formatIdr(SHARED_ADULT_SOLO_IDR)
const privateSolo = formatIdr(PRIVATE_ADULT_SOLO_IDR)
const privateMin2 = formatIdr(PRIVATE_ADULT_MIN2_IDR)
const whatsapp = 'https://wa.me/6282210132418'

export const whatsIncludedCookingClassUbud: StaticArticle = {
  slug: 'whats-included-cooking-class-ubud',
  title: "What's Included in a Cooking Class in Ubud — Full Checklist",
  metaTitle: "What's Included Cooking Class Ubud",
  metaDescription: `What's included in a cooking class in Ubud: market tour, 10+ dishes, meal, recipes, free pickup. Tumang shared ${shared}. Clear checklist before you book.`,
  excerpt: `What's included in a cooking class in Ubud? Tumang Bali: guided market tour (morning), rice-field walk, 10+ dishes you cook, shared feast, recipe booklet, free Ubud hotel pickup — all in the published ${shared} rate.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Whats included in a Balinese cooking class near Ubud — market, cook, feast',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'whats included cooking class ubud',
    'cooking class ubud inclusions',
    'cooking class ubud what you get',
    'ubud cooking class includes',
    'bali cooking class whats included',
  ],
  faqs: [
    {
      question: "What's included in Tumang Bali's cooking class?",
      answer: `Hotel pickup & drop-off in central Ubud, guided morning market tour (morning class), rice-field walk, hands-on cooking of 10+ dishes, the meal you cooked, recipe booklet, English instruction. Shared ${shared} (2+) / ${solo} (1).`,
    },
    {
      question: 'Is the market tour included for afternoon classes?',
      answer:
        'Market tour is morning-class only. Afternoon is cook-and-dine with the full hands-on menu and feast. Same shared price.',
    },
    {
      question: 'Are tips or transport extra?',
      answer:
        'Central Ubud pickup is included. Tips are optional. Outside Ubud (Canggu/Seminyak) you arrange your own driver. Alcohol is not included.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Searching <strong>what&apos;s included in a cooking class in Ubud</strong>? At Tumang Bali the
        published shared rate (<strong>{shared}</strong> for 2+) covers pickup, market tour (morning),
        rice-field walk, <strong>10+ dishes</strong> you cook yourself, the feast, and a recipe booklet —
        max <strong>8 guests</strong>, English instruction. No bait-and-switch add-ons for the core
        experience.
      </p>

      <h2>Inclusion checklist (shared class)</h2>
      <table>
        <thead>
          <tr>
            <th>Included</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ubud hotel / villa pickup &amp; drop-off</td>
            <td>Central Ubud belt — confirm pin on WhatsApp</td>
          </tr>
          <tr>
            <td>Morning market tour</td>
            <td>Morning session only</td>
          </tr>
          <tr>
            <td>Rice-field walk</td>
            <td>To the village kitchen</td>
          </tr>
          <tr>
            <td>Hands-on cooking 10+ dishes</td>
            <td>Spice paste, sate, sambal, mains, dessert</td>
          </tr>
          <tr>
            <td>Lunch or dinner feast</td>
            <td>You eat what you cooked</td>
          </tr>
          <tr>
            <td>Recipe booklet</td>
            <td>Take home</td>
          </tr>
          <tr>
            <td>Vegetarian / vegan menu</td>
            <td>Request at booking</td>
          </tr>
        </tbody>
      </table>
      <p>
        Price breakdown: <Link href={priceGuide}>Ubud cooking class price</Link>. Pickup detail:{' '}
        <Link href={pickup}>hotel pickup guide</Link>.
      </p>

      <h2>Not included</h2>
      <ul>
        <li>Alcoholic drinks</li>
        <li>Transport from Canggu / Seminyak / Nusa Dua (bring a driver)</li>
        <li>Optional tips for chefs</li>
      </ul>

      <h2>Book with the checklist done</h2>
      <p>
        Ready? <Link href={money}>Cooking class Ubud</Link> · <Link href={book}>Choose a date</Link> ·
        Morning market: <Link href={marketTour}>market tour class</Link>.
      </p>
    </>
  ),
}

export const bookDirectVsOtaCookingClassUbud: StaticArticle = {
  slug: 'book-direct-vs-ota-cooking-class-ubud',
  title: 'Book Direct vs TripAdvisor / GYG / Viator — Cooking Class Ubud',
  metaTitle: 'Book Direct vs OTA Cooking Class Ubud',
  metaDescription: `Book direct vs OTA for a cooking class in Ubud: same Tumang kitchen, same ${shared} rate. Direct = easier dietary notes & pickup pins. When TripAdvisor/GYG still make sense.`,
  excerpt: `Book direct or via TripAdvisor / GetYourGuide / Viator / Airbnb? Tumang Bali is the same class either way. Direct booking is usually fastest for allergies, hotel pins, and WhatsApp changes — published rate ${shared}.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Booking a cooking class in Ubud direct vs online travel agencies',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'book direct cooking class ubud',
    'tripadvisor vs direct cooking class',
    'getyourguide vs website cooking class',
    'book cooking class ubud without ota',
    'viator vs direct booking bali',
  ],
  faqs: [
    {
      question: 'Is Tumang cheaper on the website than on TripAdvisor?',
      answer: `We publish the same shared rate (${shared} for 2+) across channels. Direct booking is simpler for dietary notes and pickup pins — not a hidden discount war.`,
    },
    {
      question: 'When should I book via an OTA?',
      answer:
        'If you want app wallets, points, or a platform cancellation workflow you already trust. Cancel GYG bookings only inside GetYourGuide — see our refund policy.',
    },
    {
      question: 'Is it the same kitchen and chefs?',
      answer: 'Yes. OTAs list Tumang Bali Cooking Class — same village kitchen, max 8 shared, English instruction.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Deciding to <strong>book direct vs OTA</strong> for a cooking class in Ubud? Tumang Bali runs the{' '}
        <strong>same class</strong> on our website, WhatsApp, TripAdvisor, GetYourGuide, Viator, and Airbnb
        Experiences — published shared rate <strong>{shared}</strong> (2+). Choose the channel that fits
        how you like to pay and cancel; pick direct when you need fast dietary or pickup changes.
      </p>

      <h2>Direct vs OTA at a glance</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Direct (site / WhatsApp)</th>
            <th>OTA (TA / GYG / Viator / Airbnb)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Class &amp; chefs</td>
            <td>Same</td>
            <td>Same</td>
          </tr>
          <tr>
            <td>Published rate</td>
            <td>{shared} shared (2+)</td>
            <td>Same operator rate on listing</td>
          </tr>
          <tr>
            <td>Dietary + hotel pin</td>
            <td>Easiest via form / WhatsApp</td>
            <td>Possible; extra message steps</td>
          </tr>
          <tr>
            <td>Cancellation</td>
            <td>≥24h = 100% refund direct</td>
            <td>Platform rules (GYG: cancel in-app)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Channel guides: <Link href={tripadvisor}>TripAdvisor</Link>, <Link href={gyg}>GetYourGuide</Link>,{' '}
        <Link href={viator}>Viator</Link>, <Link href={airbnb}>Airbnb</Link>. Refund rules:{' '}
        <Link href={refund}>refund policy</Link>.
      </p>

      <h2>Our recommendation for sales clarity</h2>
      <p>
        First-timers with allergies, kids, or villa pins → <strong>book direct</strong>. Travelers living
        inside one OTA app → use that listing, then still WhatsApp your hotel pin the day before.
      </p>

      <h2>Book the class (direct CTA)</h2>
      <p>
        <Link href={book}>Book your cooking class</Link> · <Link href={money}>Class overview</Link> ·{' '}
        <a href={whatsapp}>WhatsApp +62 822-1013-2418</a>. Worth-it framing:{' '}
        <Link href={worthIt}>Is a Bali cooking class worth it?</Link>
      </p>
    </>
  ),
}

export const rainyDayCookingClassUbud: StaticArticle = {
  slug: 'rainy-day-cooking-class-ubud',
  title: 'Rainy Day Cooking Class Ubud — Best Indoor Plan When It Pours',
  metaTitle: 'Rainy Day Cooking Class Ubud',
  metaDescription: `Rainy day in Ubud? Book a covered cooking class — market optional, kitchen stays dry. Tumang shared ${shared}, free pickup. Perfect wet-season or surprise shower plan.`,
  excerpt: `Caught in a rainy day in Ubud? A village cooking class is the best indoor-friendly half-day — covered kitchen, feast you cook, free hotel pickup. Tumang shared ${shared}.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Rainy day indoor Balinese cooking class near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'rainy day cooking class ubud',
    'indoor activities ubud rainy day',
    'ubud rainy day what to do',
    'cooking class bali rain',
    'wet weather ubud activities',
  ],
  faqs: [
    {
      question: 'Does the cooking class run when it rains?',
      answer: `Yes. The kitchen is covered. Rice-field paths may be muddy — wear closed shoes. Shared rate still ${shared} (2+).`,
    },
    {
      question: 'Should I book morning or afternoon on a rainy forecast?',
      answer:
        'Mornings are often clearer; afternoon showers are common in wet season. Either session works — the cook happens under cover.',
    },
    {
      question: 'Is this only for rainy season visitors?',
      answer:
        'No — dry-season showers happen too. Keep the class as your flexible “rain plan” on any itinerary.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Need a <strong>rainy day cooking class in Ubud</strong>? Tumang Bali&apos;s village kitchen is{' '}
        <strong>covered</strong> — you still grind bumbu, cook <strong>10+ dishes</strong>, and eat together
        while the shower passes. Shared <strong>{shared}</strong> (2+), free central Ubud pickup, max 8
        guests.
      </p>

      <h2>Why a cooking class beats outdoor pins in the rain</h2>
      <ul>
        <li>No waterfall scramble on wet rocks</li>
        <li>No scooter in lightning</li>
        <li>Cultural activity that still feels like “Bali,” not a mall</li>
      </ul>
      <p>
        Broader wet-season guide: <Link href="/blog/bali-rainy-season-what-to-do">Bali rainy season what to do</Link>.
        Season overview: <Link href="/blog/best-time-to-visit-bali">best time to visit Bali</Link>.
      </p>

      <h2>What to wear on a wet day</h2>
      <p>
        Closed-toe shoes, light rain jacket, change of shirt. Packing list:{' '}
        <Link href="/blog/bali-packing-list">Bali packing list</Link>. Pickup still runs —{' '}
        <Link href={pickup}>hotel pickup guide</Link>.
      </p>

      <h2>Book your rain plan now</h2>
      <p>
        <Link href={money}>Cooking class Ubud</Link> · <Link href={book}>Reserve a date</Link> · Afternoon
        if the morning washed out: <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon</Link>.
      </p>
    </>
  ),
}

export const anniversaryCookingClassUbud: StaticArticle = {
  slug: 'anniversary-cooking-class-ubud',
  title: 'Anniversary Cooking Class Ubud — Cook Together, Celebrate Quietly',
  metaTitle: 'Anniversary Cooking Class Ubud',
  metaDescription: `Anniversary cooking class Ubud: private kitchen from ${privateSolo} or shared from ${shared}. Hands-on date with market tour & feast — free pickup, max 8 shared.`,
  excerpt: `Anniversary in Ubud? Skip another candlelit restaurant — cook Balinese dishes together in a village kitchen. Tumang Bali private from ${privateSolo}, or shared from ${shared}.`,
  image: '/images/blog/couples-cooking-class.webp',
  imageAlt: 'Couple celebrating an anniversary at a cooking class near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'anniversary cooking class ubud',
    'anniversary date ubud',
    'romantic cooking class bali anniversary',
    'private anniversary cooking class ubud',
    'celebrate anniversary ubud cooking',
  ],
  faqs: [
    {
      question: 'Is a cooking class good for an anniversary in Ubud?',
      answer: `Yes — couples cook side by side, then share a feast. Private kitchen from ${privateSolo} for exclusivity; shared ${shared} (2+) if you enjoy a small group (max 8).`,
    },
    {
      question: 'How is this different from the couples page?',
      answer:
        'The couples guide covers romance generally (honeymoon / dates). This page focuses on anniversary planning — private vs shared, mentioning the occasion when you book, optional dessert spotlight.',
    },
    {
      question: 'Can we request a quiet private session?',
      answer: `Yes — book private and note “anniversary” on WhatsApp. We can arrange a simple dessert highlight with 24h notice.`,
    },
  ],
  body: (
    <>
      <p data-speakable>
        Planning an <strong>anniversary cooking class in Ubud</strong>? Tumang Bali gives you a hands-on
        date — market morning (or afternoon feast), spices ground together, then a meal you cooked.
        Shared from <strong>{shared}</strong>; private kitchen from <strong>{privateSolo}</strong>. Free
        central Ubud pickup.
      </p>

      <h2>Private vs shared for anniversaries</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Shared</th>
            <th>Private</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vibe</td>
            <td>Social, still intimate (max 8)</td>
            <td>Just the two of you + chef</td>
          </tr>
          <tr>
            <td>From</td>
            <td>{shared} / adult (2+)</td>
            <td>
              {privateSolo} (1) / {privateMin2} (min. 2)
            </td>
          </tr>
          <tr>
            <td>Best when</td>
            <td>You like meeting travelers</td>
            <td>Proposal energy / quiet toast</td>
          </tr>
        </tbody>
      </table>
      <p>
        Broader romance guide: <Link href={couples}>cooking class for couples</Link>. Families visiting
        with you: <Link href={families}>family cooking class</Link>.
      </p>

      <h2>How to mention the anniversary</h2>
      <p>
        WhatsApp <a href={whatsapp}>+62 822-1013-2418</a> with date, morning/afternoon, and “anniversary.”
        Optional dessert spotlight with 24h notice.
      </p>

      <h2>Book the celebration</h2>
      <p>
        <Link href={privateClass}>Private cooking class</Link> · <Link href={money}>Shared class</Link> ·{' '}
        <Link href={book}>Pick a date</Link>.
      </p>
    </>
  ),
}

export const englishSpeakingCookingClassUbud: StaticArticle = {
  slug: 'english-speaking-cooking-class-ubud',
  title: 'English-Speaking Cooking Class Ubud — Clear Teaching for Visitors',
  metaTitle: 'English-Speaking Cooking Class Ubud',
  metaDescription: `English-speaking cooking class in Ubud: step-by-step chefs, max 8 guests, 10+ dishes. Tumang shared ${shared}, free pickup. Built for foreign travellers.`,
  excerpt: `Looking for an English-speaking cooking class in Ubud? Tumang Bali teaches in English — spice names explained, steps demonstrated, max 8 guests so you can ask questions. Shared ${shared}.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'English-speaking chef teaching Balinese cooking class near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'english speaking cooking class ubud',
    'cooking class ubud in english',
    'english cooking class bali',
    'cooking class for foreigners ubud',
    'balinese cooking class english',
  ],
  faqs: [
    {
      question: 'Is the Tumang Bali class taught in English?',
      answer: `Yes. Chefs teach in English with clear demos — ideal for foreign travellers. Shared ${shared} (2+), max 8 guests so questions get answered.`,
    },
    {
      question: 'Do I need cooking experience?',
      answer:
        'No. Beginners are welcome — see also our beginners landing page. Recipe booklet helps you cook again at home.',
    },
    {
      question: 'Are other languages available?',
      answer:
        'English is the class language. Guests often translate quietly for family members; message us if you need a private session for another language mix.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Need an <strong>English-speaking cooking class in Ubud</strong>? Tumang Bali is built for foreign
        travellers — chefs explain ingredients and steps in <strong>English</strong>, keep shared groups
        at <strong>max 8</strong>, and hand you a recipe booklet. Shared <strong>{shared}</strong> (2+)
        with free Ubud hotel pickup.
      </p>

      <h2>Why language clarity matters for sales</h2>
      <p>
        Demo-only stages and huge groups leave visitors guessing. Small English-led classes convert
        better because you understand the bumbu, the heat, and the timing — then book with confidence.
      </p>
      <ul>
        <li>Step-by-step demos before you cook</li>
        <li>Spice names in English + Balinese</li>
        <li>Time to ask questions (max 8)</li>
      </ul>
      <p>
        Beginners landing: <Link href="/bali-cooking-class-for-beginners">cooking class for beginners</Link>.
        Hands-on vs demo: <Link href="/blog/hands-on-cooking-class-ubud">hands-on cooking class Ubud</Link>.
      </p>

      <h2>Book the English-led kitchen</h2>
      <p>
        <Link href={money}>Cooking class Ubud</Link> · <Link href={book}>Book a date</Link> · Solo
        travellers: <Link href="/blog/cooking-class-ubud-for-solo-travelers">solo guide</Link>.
      </p>
    </>
  ),
}

export const giftCookingClassUbud: StaticArticle = {
  slug: 'gift-cooking-class-ubud',
  title: 'Gift a Cooking Class in Ubud — Surprise Experience for Travellers',
  metaTitle: 'Gift a Cooking Class in Ubud',
  metaDescription: `Gift a cooking class in Ubud: shared from ${shared} or private from ${privateSolo}. Surprise partners, parents, or friends — WhatsApp to arrange date & pickup.`,
  excerpt: `Gift a cooking class in Ubud — a better present than another scarf. Tumang Bali shared from ${shared}, private from ${privateSolo}. We help you lock a date around their trip.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Gifting a Balinese cooking class experience near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'gift cooking class ubud',
    'cooking class gift bali',
    'surprise cooking class ubud',
    'buy cooking class voucher ubud',
    'experience gift ubud',
  ],
  faqs: [
    {
      question: 'Can I gift a Tumang Bali cooking class?',
      answer: `Yes. Pay for a shared (${shared} per adult 2+) or private session and send us the recipient’s name, trip dates, and hotel. We confirm the seat on WhatsApp.`,
    },
    {
      question: 'Do you issue a printable voucher?',
      answer:
        'We confirm by WhatsApp/email with date options and inclusions. Ask for a simple gift note PDF when you book — happy to include the recipient’s name.',
    },
    {
      question: 'What if their dates change?',
      answer:
        'Reschedule with ≥24 hours notice when kitchen space allows — see refund/reschedule policy. Flexibility is easier on direct bookings than some OTA vouchers.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Want to <strong>gift a cooking class in Ubud</strong>? Tumang Bali is an experience present —
        market morning, rice fields, <strong>10+ dishes</strong>, and a feast they cooked. Shared from{' '}
        <strong>{shared}</strong>; private from <strong>{privateSolo}</strong>. Free central Ubud pickup.
      </p>

      <h2>How gifting works</h2>
      <ol>
        <li>
          WhatsApp <a href={whatsapp}>+62 822-1013-2418</a> or use <Link href={book}>online booking</Link>{' '}
          with the recipient’s name.
        </li>
        <li>Share their Bali dates + hotel/villa for pickup.</li>
        <li>We hold the seat and send a confirmation you can forward as the gift.</li>
      </ol>
      <p>
        Inclusions checklist: <Link href="/blog/whats-included-cooking-class-ubud">what&apos;s included</Link>.
        Occasion ideas: <Link href={couples}>couples</Link>,{' '}
        <Link href="/blog/anniversary-cooking-class-ubud">anniversary</Link>.
      </p>

      <h2>Why experiences outsell stuff in Bali</h2>
      <p>
        Luggage is full; memories are not. A half-day class beats another market trinket — and they leave
        with recipes. Value framing: <Link href={worthIt}>is a Bali cooking class worth it?</Link>
      </p>

      <h2>Send the gift CTA</h2>
      <p>
        <Link href={money}>Cooking class Ubud</Link> · <Link href={privateClass}>Private gift kitchen</Link> ·{' '}
        <a href={whatsapp}>WhatsApp to arrange</a>.
      </p>
    </>
  ),
}

export const salesConversionClusterArticles: StaticArticle[] = [
  whatsIncludedCookingClassUbud,
  bookDirectVsOtaCookingClassUbud,
  rainyDayCookingClassUbud,
  anniversaryCookingClassUbud,
  englishSpeakingCookingClassUbud,
  giftCookingClassUbud,
]
