import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'
import { formatIdr, SHARED_ADULT_GROUP_IDR, SHARED_ADULT_SOLO_IDR, PRIVATE_ADULT_SOLO_IDR } from '@/lib/pricing'

/**
 * Competitor SERP cluster (Sep 2026) — Paon, Casa Luna, hands-on vs demo,
 * and hotel-pickup intents that dominate “cooking class Ubud” comparison queries.
 * Distinct from Taman Dukuh / Tresna / Lemongrass post and the compare landing page.
 */
const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const compare = '/compare-ubud-cooking-classes'
const marketTour = '/cooking-class-with-market-tour-ubud'
const privateClass = '/private-cooking-class-ubud'
const priceGuide = '/blog/ubud-cooking-class-price'
const canggu = '/blog/cooking-class-ubud-from-canggu'
const shared = formatIdr(SHARED_ADULT_GROUP_IDR)
const solo = formatIdr(SHARED_ADULT_SOLO_IDR)
const privateSolo = formatIdr(PRIVATE_ADULT_SOLO_IDR)

export const paonBaliVsTumangCookingClass: StaticArticle = {
  slug: 'paon-bali-vs-tumang-cooking-class',
  title: 'Paon Bali vs Tumang Cooking Class — Which Ubud Village Class Fits You?',
  metaTitle: 'Paon Bali vs Tumang Cooking Class 2026',
  metaDescription:
    'Paon Bali vs Tumang cooking class: market tour, group size, rice-field walk, pickup, price. Tumang max 8 + paddies from IDR 506,370. Honest Ubud comparison.',
  excerpt:
    'Comparing Paon Bali vs Tumang cooking class? Both are village kitchens near Ubud with a morning market tour. Tumang adds a rice-field walk, caps at 8 guests, and publishes the same IDR rate on every channel.',
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Hands-on village cooking class near Ubud — comparing Paon Bali and Tumang Bali',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-22',
  keywords: [
    'paon bali vs tumang',
    'paon bali cooking class',
    'paon bali cooking class review',
    'tumang vs paon cooking class',
    'best village cooking class ubud',
    'paon bali ubud',
  ],
  faqs: [
    {
      question: 'Is Paon Bali or Tumang better for a cooking class near Ubud?',
      answer: `Both are village kitchens with a morning market tour. Choose Tumang if you want a rice-field walk to the kitchen, a hard max of 8 guests, and a published shared rate of ${shared} (2+). Choose Paon if you specifically want their Laplapan home-kitchen brand and host style — verify today’s price and group size on their site.`,
    },
    {
      question: 'Does Paon Bali include a market tour?',
      answer:
        'Yes — Paon’s classic morning package is known for an Ubud-area market visit before cooking in a village home kitchen. Tumang’s morning class also starts at a traditional pasar, then continues with a rice-field walk and 10+ dishes.',
    },
    {
      question: 'How much is Tumang compared with Paon Bali?',
      answer: `Tumang shared class is ${shared} per adult for 2+ guests (${solo} for 1 adult). Private kitchen from ${privateSolo}. Paon typically publishes USD mid-range rates that move with season — always check their live price. Same Tumang rate on website, WhatsApp, and OTAs.`,
    },
  ],
  body: (
    <>
      <p data-speakable>
        Searching <strong>Paon Bali vs Tumang cooking class</strong>? Both sit in the village-kitchen
        cluster near Ubud: morning pasar, English teaching, feast at the end. Tumang Bali adds a working{' '}
        <strong>rice-field walk</strong>, caps shared groups at <strong>8 guests</strong>, and cooks{' '}
        <strong>10+ dishes</strong> from scratch for <strong>{shared}</strong> per adult (2+). Paon is the
        long-running Laplapan home-kitchen name many TripAdvisor lists still rank high — verify their live
        group size and price before you decide. Full matrix:{' '}
        <Link href={compare}>compare Ubud cooking classes</Link>.
      </p>

      <h2>Paon Bali vs Tumang at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Tumang Bali</th>
            <th>Paon Bali (typical)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Setting</td>
            <td>Tumang village kitchen + rice paddies</td>
            <td>Laplapan village home kitchen</td>
          </tr>
          <tr>
            <td>Market tour</td>
            <td>Morning class yes</td>
            <td>Morning class yes</td>
          </tr>
          <tr>
            <td>Rice-field walk</td>
            <td>Yes — to the kitchen</td>
            <td>Usually limited / not the same paddy walk</td>
          </tr>
          <tr>
            <td>Max group</td>
            <td>8 shared</td>
            <td>Often ~10–12 (confirm live)</td>
          </tr>
          <tr>
            <td>Dishes</td>
            <td>10+ from scratch</td>
            <td>~8–10 (confirm live)</td>
          </tr>
          <tr>
            <td>Hotel pickup</td>
            <td>Free central Ubud</td>
            <td>Ubud area; outside Ubud usually extra</td>
          </tr>
          <tr>
            <td>Shared price</td>
            <td>{shared} (2+)</td>
            <td>USD mid-range — check live listing</td>
          </tr>
        </tbody>
      </table>

      <h2>When Paon is the better fit</h2>
      <p>
        Pick Paon if you already trust their host brand, want that specific Laplapan compound, or a friend
        booked there and you want the same kitchen. It is a real competitor — not a straw man. Read recent
        reviews for group size on your date; popular days fill and feel larger.
      </p>

      <h2>When Tumang is the better fit</h2>
      <ul>
        <li>You want paddies in the itinerary without a Tegallalang ticket</li>
        <li>You care about a hard max of 8 (hands-on, not a demo rail)</li>
        <li>You want one published IDR price across website, WhatsApp, GYG, Viator, Airbnb</li>
        <li>You need vegetarian / vegan depth — see{' '}
          <Link href="/blog/vegetarian-cooking-class-ubud-guide">vegetarian cooking class Ubud</Link>
        </li>
      </ul>
      <p>
        Also compare farm-style schools:{' '}
        <Link href="/blog/taman-dukuh-vs-tresna-vs-lemongrass-cooking-class">
          Taman Dukuh vs Tresna vs Lemongrass
        </Link>
        . Market morning detail:{' '}
        <Link href="/blog/market-to-table-cooking-class-ubud">market-to-table cooking class</Link>.
      </p>

      <h2>Book after you compare</h2>
      <p>
        Morning market class:{' '}
        <Link href={marketTour}>cooking class with market tour Ubud</Link>. Price breakdown:{' '}
        <Link href={priceGuide}>Ubud cooking class price</Link>. Then{' '}
        <Link href={money}>book cooking class Ubud</Link> or <Link href={book}>check dates</Link>.
      </p>
    </>
  ),
}

export const casaLunaVsTumangCookingClass: StaticArticle = {
  slug: 'casa-luna-vs-tumang-cooking-class',
  title: 'Casa Luna vs Tumang Cooking Class — Town School or Village Kitchen?',
  metaTitle: 'Casa Luna vs Tumang Cooking Class Ubud',
  metaDescription:
    'Casa Luna vs Tumang cooking class: central Ubud themed school vs village market tour, rice fields, max 8, IDR 506,370. Which fits your Bali day?',
  excerpt:
    'Casa Luna vs Tumang: Casa Luna is the long-running central Ubud school with themed menus; Tumang is a village kitchen with daily market tour (morning), rice-field walk, and max 8 guests from IDR 506,370.',
  image: '/images/blog/tumang-vibe.webp',
  imageAlt: 'Village kitchen near Ubud — Tumang Bali cooking class compared with Casa Luna',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-22',
  keywords: [
    'casa luna vs tumang',
    'casa luna cooking class',
    'casa luna cooking school ubud',
    'janet deneefe cooking class',
    'casa luna ubud cooking class review',
    'best cooking school ubud',
  ],
  faqs: [
    {
      question: 'Is Casa Luna or Tumang better for a cooking class in Ubud?',
      answer: `Casa Luna suits travellers who want a central Ubud, long-established school with themed class days (market tour on select days). Tumang suits travellers who want a village kitchen, morning pasar most mornings, a rice-field walk, max 8 guests, and a published shared rate of ${shared}.`,
    },
    {
      question: 'Does Casa Luna include a market tour every day?',
      answer:
        'No — Casa Luna’s market visit is typically on select themed days (often mid-week). Tumang includes the traditional pasar on the morning session every day it runs. Book Tumang morning if “market tour” is non-negotiable.',
    },
    {
      question: 'Where is Casa Luna cooking school located?',
      answer:
        'Casa Luna Cooking School is associated with the Honeymoon Guesthouse gardens area in central Ubud (near Jalan Bisma / town). Tumang is in Tumang village near Petulu — about 30 minutes from central Ubud with complimentary hotel pickup in the Ubud area.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Casa Luna vs Tumang cooking class</strong> is the classic town-school vs village-kitchen
        choice. Casa Luna (since 1992, linked with Janet DeNeefe’s Ubud food world) runs themed classes in
        central Ubud gardens — strong on culture and menu variety, market tour on <em>select</em> days.
        Tumang Bali is a family village kitchen: morning <strong>pasar</strong>,{' '}
        <strong>rice-field walk</strong>, <strong>10+ dishes</strong>, max <strong>8</strong>, shared{' '}
        <strong>{shared}</strong>. Neither is “fake” — they answer different searches. Matrix:{' '}
        <Link href={compare}>compare Ubud cooking classes</Link>.
      </p>

      <h2>Casa Luna vs Tumang comparison table</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Tumang Bali</th>
            <th>Casa Luna (typical)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Location vibe</td>
            <td>Village + paddies outside town</td>
            <td>Central Ubud gardens / town school</td>
          </tr>
          <tr>
            <td>Market tour</td>
            <td>Every morning session</td>
            <td>Select themed days</td>
          </tr>
          <tr>
            <td>Group size</td>
            <td>Max 8</td>
            <td>Often ~12–15</td>
          </tr>
          <tr>
            <td>Hands-on depth</td>
            <td>Full hands-on, grind paste</td>
            <td>Demo + practice mix by theme</td>
          </tr>
          <tr>
            <td>Shared price</td>
            <td>{shared} (2+)</td>
            <td>Often IDR 450–650K+ themed</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>Market + paddies + small group</td>
            <td>Town convenience + brand heritage</td>
          </tr>
        </tbody>
      </table>

      <h2>Choose Casa Luna if…</h2>
      <p>
        You are staying on Jalan Raya / Bisma and want to walk or short-taxi to class, you care about the
        Ubud Food Festival / Casa Luna cultural brand, or you want a specific themed menu day. Confirm which
        weekday includes the market — do not assume every Casa Luna class starts at the pasar.
      </p>

      <h2>Choose Tumang if…</h2>
      <p>
        You searched “cooking class with market tour,” “village kitchen,” or “rice terrace cooking class”
        and want those in one morning. Free Ubud hotel pickup means you do not need to navigate to Bisma
        yourself. See{' '}
        <Link href="/blog/rice-terrace-cooking-class-ubud">rice terrace cooking class Ubud</Link> and{' '}
        <Link href="/blog/balinese-home-cooking-class-ubud">Balinese home cooking class</Link>.
      </p>

      <h2>Price and booking</h2>
      <p>
        Tumang rates:{' '}
        <Link href={priceGuide}>Ubud cooking class price</Link>. Private kitchen:{' '}
        <Link href={privateClass}>private cooking class Ubud</Link>. Book:{' '}
        <Link href={money}>cooking class Ubud</Link> or <Link href={book}>online booking</Link>.
      </p>
    </>
  ),
}

export const handsOnCookingClassUbud: StaticArticle = {
  slug: 'hands-on-cooking-class-ubud',
  title: 'Hands-On Cooking Class in Ubud — Not a Chef Demo',
  metaTitle: 'Hands-On Cooking Class Ubud — Max 8 Guests',
  metaDescription:
    'Hands-on cooking class in Ubud: you chop, grind Base Genep, wrap sate — not a demo. Tumang Bali max 8, 10+ dishes, IDR 506,370. Book a real village kitchen.',
  excerpt:
    'Want a hands-on cooking class in Ubud? At Tumang Bali you grind spice paste, wrap sate lilit, and cook 10+ dishes yourself — max 8 guests, not a hotel demo rail. Shared from IDR 506,370.',
  image: '/images/blog/bumbu-action-shot.webp',
  imageAlt: 'Hands-on cooking class in Ubud — guest grinding Balinese spice paste on a stone mortar',
  author: 'Chef Wayan Suryana',
  authorRole: 'Head Chef',
  publishedDate: '2026-09-22',
  keywords: [
    'hands on cooking class ubud',
    'hands-on cooking class bali',
    'interactive cooking class ubud',
    'not a cooking demonstration bali',
    'small group hands on cooking ubud',
    'participate cooking class ubud',
  ],
  faqs: [
    {
      question: 'What is a hands-on cooking class in Ubud?',
      answer: `A hands-on class means you cook — chopping, grinding Base Genep on stone, wrapping sate, wrapping pepes — not watching a chef demonstrate on a stage. Tumang Bali caps shared groups at 8 so every guest stays on the board. Shared class ${shared}.`,
    },
    {
      question: 'How is hands-on different from a hotel cooking demo?',
      answer:
        'Hotel demos often seat 12–20 people while a chef cooks and you taste. Hands-on village classes put a knife and mortar in your hands. Look for max group size and “from scratch” spice paste in the inclusions — not only “includes lunch.”',
    },
    {
      question: 'Is a hands-on class OK for beginners?',
      answer:
        'Yes. Tumang is designed for first-timers: English steps, patient pacing, and a recipe booklet. See also our beginners landing page and small-group guide.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>hands-on cooking class in Ubud</strong> means you are the cook. At Tumang Bali you grind{' '}
        <strong>Base Genep</strong> on a stone mortar, wrap <strong>sate lilit</strong>, fold banana-leaf{' '}
        <strong>pepes</strong>, and eat the feast you made — shared groups capped at <strong>8</strong>, not
        a hotel demo for twenty. Shared <strong>{shared}</strong> · morning market optional · free Ubud
        pickup. If a listing only says “watch the chef,” keep scrolling.
      </p>

      <h2>How to spot a real hands-on class (competitor checklist)</h2>
      <ul>
        <li>Published max group size (we use 8) — not “small group” with no number</li>
        <li>Spice paste from whole ingredients, not jarred bumbu</li>
        <li>You handle knives and the ulekan (mortar) — not only garnish plating</li>
        <li>Recipe booklet to recreate dishes at home</li>
      </ul>
      <p>
        Competitors like Ketut’s advertise individual stations; Paon and Lobong emphasise family compounds;
        farm schools emphasise harvest walks. Tumang’s differentiator is hands-on village cooking plus pasar
        + paddies in one morning. Compare:{' '}
        <Link href={compare}>Ubud cooking class comparison</Link>.
      </p>

      <h2>What you will actually do with your hands</h2>
      <p>
        Chop aromatics, pound Base Genep, season lawar, skewer sate, wrap pepes, fry tempeh or fish, finish
        sambal matah. Beginners welcome —{' '}
        <Link href="/bali-cooking-class-for-beginners">Bali cooking class for beginners</Link>. Small-group
        rationale: <Link href="/blog/small-group-cooking-class-ubud">small group cooking class Ubud</Link>.
      </p>

      <h2>Book a hands-on morning or afternoon</h2>
      <p>
        Morning = pasar + paddies + cook. Afternoon = cook-and-dine. Guide:{' '}
        <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon</Link>. Then{' '}
        <Link href={money}>book cooking class Ubud</Link> or <Link href={book}>reserve online</Link>.
      </p>
    </>
  ),
}

export const cookingClassUbudHotelPickup: StaticArticle = {
  slug: 'cooking-class-ubud-hotel-pickup',
  title: 'Cooking Class Ubud with Hotel Pickup — Free Central Ubud Transfers',
  metaTitle: 'Cooking Class Ubud Hotel Pickup — Free Transfer',
  metaDescription:
    'Cooking class Ubud with hotel pickup: Tumang Bali includes free central Ubud villa & hotel transfer. Shared IDR 506,370, max 8. Coast stays: see Canggu guide.',
  excerpt:
    'Looking for a cooking class in Ubud with hotel pickup? Tumang Bali includes complimentary pickup and drop-off in the central Ubud area — shared class IDR 506,370, max 8 guests.',
  image: '/images/blog/what-to-expect.webp',
  imageAlt: 'Guests arriving for a Tumang Bali cooking class with free Ubud hotel pickup',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-22',
  keywords: [
    'cooking class ubud hotel pickup',
    'cooking class ubud free transfer',
    'ubud cooking class hotel transfer',
    'cooking class with pickup bali',
    'villa pickup cooking class ubud',
    'free hotel pickup ubud cooking class',
  ],
  faqs: [
    {
      question: 'Does the Tumang cooking class include hotel pickup in Ubud?',
      answer: `Yes. Complimentary pickup and return in the central Ubud area is included in the shared class price (${shared} for 2+ adults). Tell us your hotel or villa name when you book. Airbnb stays: use the nearest hotel pin if your host has no lobby.`,
    },
    {
      question: 'Is hotel pickup free from Canggu or Seminyak?',
      answer:
        'Free pickup is for the central Ubud area. From Canggu, Seminyak, Sanur, or the Bukit, arrange your own driver or see our coast day-trip guide — many guests still book the morning class as an Ubud day.',
    },
    {
      question: 'What time is pickup for the morning class?',
      answer:
        'Morning class runs about 08:30–12:30 including the market. Pickup windows are confirmed on WhatsApp the day before based on your location in Ubud. Afternoon class pickup is later for the 14:30 start.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>cooking class Ubud with hotel pickup</strong> should not add a surprise transfer fee.
        Tumang Bali includes <strong>free pickup and drop-off in central Ubud</strong> (hotels and villas)
        in the shared class price — <strong>{shared}</strong> per adult for 2+, max 8, morning market
        option. Competitors often charge extra outside a small radius; we publish the Ubud zone clearly.
        Coast guests: read <Link href={canggu}>cooking class from Canggu</Link>.
      </p>

      <h2>What “free Ubud pickup” covers</h2>
      <ul>
        <li>Central Ubud hotels and most villas in the Ubud / Petulu / Penestanan belt</li>
        <li>Return drop-off after class</li>
        <li>WhatsApp pin confirmation the day before</li>
      </ul>
      <p>
        Outside that belt (Canggu, Seminyak, Nusa Dua, Uluwatu), plan a private driver or Grab for the
        day. Paon, Lobong, and others usually price non-Ubud pickup as an add-on — same industry pattern.
      </p>

      <h2>Why pickup matters for first-timers</h2>
      <p>
        Scooter rental + Google Maps to a village kitchen is stressful on day one. Pickup means you show
        up for the pasar and paddies, not for parking. Pair with{' '}
        <Link href="/blog/bali-airport-to-ubud">Bali airport to Ubud</Link> if you land the night before.
        Solo travellers: <Link href="/blog/cooking-class-ubud-for-solo-travelers">solo cooking class</Link>.
      </p>

      <h2>Book with your hotel name ready</h2>
      <p>
        Include hotel/villa name and Google pin on WhatsApp or the booking form. Morning market class:{' '}
        <Link href={marketTour}>market tour cooking class</Link>. Main page:{' '}
        <Link href={money}>book cooking class Ubud</Link> · <Link href={book}>dates</Link>.
      </p>
    </>
  ),
}

export const competitorKeywordClusterArticles: StaticArticle[] = [
  paonBaliVsTumangCookingClass,
  casaLunaVsTumangCookingClass,
  handsOnCookingClassUbud,
  cookingClassUbudHotelPickup,
]
