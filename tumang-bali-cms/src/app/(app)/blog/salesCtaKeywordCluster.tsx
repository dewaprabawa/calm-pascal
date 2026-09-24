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
 * Sales / CTA keyword cluster (Sep 2026) — booking-stage intents that convert
 * travelers who already want a class: last-minute, how to book, schedule,
 * allergies, birthday, team-building. Distinct from “best of”, competitor,
 * dietary (GF/halal/veg), and OTA channel guides.
 */
const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const privateClass = '/private-cooking-class-ubud'
const marketTour = '/cooking-class-with-market-tour-ubud'
const refund = '/refund-policy'
const priceGuide = '/blog/ubud-cooking-class-price'
const morningVsAfternoon = '/blog/morning-vs-afternoon-tours-bali'
const pickup = '/blog/cooking-class-ubud-hotel-pickup'
const couples = '/blog/cooking-class-ubud-for-couples'
const families = '/blog/ubud-cooking-class-for-families'
const solo = '/blog/cooking-class-ubud-for-solo-travelers'
const gf = '/blog/gluten-free-cooking-class-ubud'
const veg = '/blog/vegetarian-cooking-class-ubud-guide'
const shared = formatIdr(SHARED_ADULT_GROUP_IDR)
const soloPrice = formatIdr(SHARED_ADULT_SOLO_IDR)
const privateSolo = formatIdr(PRIVATE_ADULT_SOLO_IDR)
const privateMin2 = formatIdr(PRIVATE_ADULT_MIN2_IDR)
const whatsapp = 'https://wa.me/6282210132418'

export const lastMinuteCookingClassUbud: StaticArticle = {
  slug: 'last-minute-cooking-class-ubud',
  title: 'Last-Minute Cooking Class Ubud — Same-Day & Next-Day Seats',
  metaTitle: 'Last-Minute Cooking Class Ubud — Same Day',
  metaDescription: `Same-day cooking class Ubud? Message WhatsApp for open seats. Shared from ${shared}, free pickup, max 8. Morning market or afternoon — book when a slot opens.`,
  excerpt: `Need a last-minute cooking class in Ubud? Tumang Bali often has same-day or next-day seats when the kitchen is under 8 guests. WhatsApp first — then confirm morning market or afternoon.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Last-minute hands-on cooking class near Ubud with open seats',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'last minute cooking class ubud',
    'same day cooking class ubud',
    'book cooking class ubud today',
    'cooking class ubud availability',
    'walk in cooking class ubud',
  ],
  faqs: [
    {
      question: 'Can I book a cooking class in Ubud on the same day?',
      answer: `Often yes if shared seats remain under the max of 8. Message WhatsApp +62 822-1013-2418 with your hotel name, guest count, and preferred morning (market tour) or afternoon session. Same published rate: ${shared} shared (2+) / ${soloPrice} for 1.`,
    },
    {
      question: 'What is the cutoff for last-minute Tumang bookings?',
      answer:
        'Morning market class usually needs confirmation the evening before or very early morning so pickup can be arranged. Afternoon cook-and-dine is more flexible for same-day requests. We never guarantee walk-ins without a WhatsApp confirmation.',
    },
    {
      question: 'Is last-minute more expensive?',
      answer: `No. Same rate as advance booking — ${shared} shared (2+), free central Ubud hotel pickup included. Private kitchen from ${privateSolo}.`,
    },
  ],
  body: (
    <>
      <p data-speakable>
        Looking for a <strong>last-minute cooking class in Ubud</strong>? Tumang Bali can often take{' '}
        <strong>same-day or next-day</strong> guests when the shared kitchen still has seats (max{' '}
        <strong>8</strong>). Price stays the published rate — <strong>{shared}</strong> per adult for
        2+ — with free central Ubud hotel pickup. Message WhatsApp first; do not assume a walk-in without
        confirmation.
      </p>

      <h2>How same-day booking works</h2>
      <ol>
        <li>
          WhatsApp <a href={whatsapp}>+62 822-1013-2418</a> with date, morning or afternoon, guest count,
          hotel/villa name.
        </li>
        <li>We confirm an open seat and pickup time (or tell you if sold out).</li>
        <li>
          Pay on site or lock the seat via <Link href={book}>online booking</Link> if we send a link.
        </li>
      </ol>
      <p>
        Prefer the calmest kitchen? Aim for afternoon if morning market is full. Compare sessions:{' '}
        <Link href={morningVsAfternoon}>morning vs afternoon cooking class</Link>.
      </p>

      <h2>Morning vs afternoon for last-minute</h2>
      <table>
        <thead>
          <tr>
            <th>Session</th>
            <th>Typical window</th>
            <th>Last-minute tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Morning + market</td>
            <td>~08:30–12:30</td>
            <td>Confirm night before when possible — pickup + pasar timing</td>
          </tr>
          <tr>
            <td>Afternoon cook &amp; dine</td>
            <td>~14:30–17:30</td>
            <td>Best same-day option if you wake up late</td>
          </tr>
        </tbody>
      </table>

      <h2>When we say no</h2>
      <p>
        Full shared class (8 guests), private kitchen already booked, or hotel outside the free pickup
        belt without your own driver. Outside Ubud (Canggu / Seminyak): plan a private car — see{' '}
        <Link href={pickup}>hotel pickup guide</Link>.
      </p>

      <h2>Book now — seats go first</h2>
      <p>
        High season (Jul–Aug) sells out earlier. Ready when you get a yes:{' '}
        <Link href={money}>cooking class Ubud</Link> · <Link href={book}>choose a date</Link> ·{' '}
        <a href={whatsapp}>WhatsApp availability</a>.
      </p>
    </>
  ),
}

export const howToBookCookingClassUbud: StaticArticle = {
  slug: 'how-to-book-cooking-class-ubud',
  title: 'How to Book a Cooking Class in Ubud — Website, WhatsApp & OTAs',
  metaTitle: 'How to Book a Cooking Class in Ubud',
  metaDescription: `How to book a cooking class in Ubud: website, WhatsApp, or TripAdvisor/GYG/Viator. Same Tumang rate from ${shared}, free pickup, 24h refund on direct bookings.`,
  excerpt: `How to book a cooking class in Ubud without getting lost in OTA fees. Tumang Bali: website or WhatsApp at the published ${shared} shared rate — or book via TripAdvisor, GetYourGuide, Viator, Airbnb if you prefer those apps.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Booking a Balinese cooking class near Ubud online or on WhatsApp',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'how to book cooking class ubud',
    'book cooking class ubud online',
    'cooking class ubud reservation',
    'book balinese cooking class',
    'ubud cooking class booking',
  ],
  faqs: [
    {
      question: 'What is the easiest way to book Tumang Bali?',
      answer: `Use the website booking form or WhatsApp +62 822-1013-2418 with date, session (morning/afternoon), guest count, and hotel name. Shared class ${shared} (2+) / ${soloPrice} (1). Free central Ubud pickup.`,
    },
    {
      question: 'Is OTA booking the same class?',
      answer:
        'Yes — same kitchen, chefs, and menu. TripAdvisor, GetYourGuide, Viator, and Airbnb Experiences list Tumang. Direct booking is usually simplest for dietary notes and pickup pins.',
    },
    {
      question: 'Can I cancel after booking?',
      answer:
        'Direct bookings: cancel ≥24 hours before class start for a 100% refund. GetYourGuide: cancel only in the GYG app/site under their 24-hour rule. Full details on the refund policy page.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>How to book a cooking class in Ubud:</strong> pick a date, choose morning market or
        afternoon cook-and-dine, tell us dietary needs, and share your hotel pin. At Tumang Bali the
        published shared rate is <strong>{shared}</strong> (2+) — same class whether you book on our
        site, WhatsApp, or a major OTA.
      </p>

      <h2>Three booking paths (pick one)</h2>
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Best for</th>
            <th>CTA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website</td>
            <td>Card checkout + calendar</td>
            <td>
              <Link href={book}>Book your cooking class</Link>
            </td>
          </tr>
          <tr>
            <td>WhatsApp</td>
            <td>Last-minute, allergies, private groups</td>
            <td>
              <a href={whatsapp}>+62 822-1013-2418</a>
            </td>
          </tr>
          <tr>
            <td>OTAs</td>
            <td>App wallets / points</td>
            <td>
              Guides:{' '}
              <Link href="/blog/book-cooking-class-ubud-tripadvisor">TripAdvisor</Link>,{' '}
              <Link href="/blog/book-cooking-class-ubud-getyourguide">GYG</Link>,{' '}
              <Link href="/blog/book-cooking-class-ubud-viator">Viator</Link>,{' '}
              <Link href="/blog/book-cooking-class-ubud-airbnb">Airbnb</Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>What to send so we can confirm fast</h2>
      <ul>
        <li>Preferred date + morning or afternoon</li>
        <li>Number of adults / kids (8+)</li>
        <li>Vegetarian, vegan, gluten-conscious, or allergy notes</li>
        <li>Hotel or villa name + Google Maps pin (for free Ubud pickup)</li>
      </ul>
      <p>
        Price detail: <Link href={priceGuide}>Ubud cooking class price</Link>. Need today?{' '}
        <Link href="/blog/last-minute-cooking-class-ubud">Last-minute cooking class Ubud</Link>.
      </p>

      <h2>Cancellation (trust before you pay)</h2>
      <p>
        Direct bookings: <strong>100% refund</strong> if you cancel at least 24 hours before start.
        Within 24 hours we may offer one reschedule when the kitchen allows. Full rules:{' '}
        <Link href={refund}>refund policy</Link>.
      </p>

      <h2>Ready to cook — book the money page</h2>
      <p>
        Primary class page with inclusions and TripAdvisor proof:{' '}
        <Link href={money}>Balinese cooking class Ubud</Link>. Private kitchen:{' '}
        <Link href={privateClass}>private cooking class</Link>. Market morning:{' '}
        <Link href={marketTour}>market tour class</Link>.
      </p>
    </>
  ),
}

export const cookingClassUbudDurationSchedule: StaticArticle = {
  slug: 'cooking-class-ubud-duration-schedule',
  title: 'Cooking Class Ubud Duration & Schedule — Morning & Afternoon Times',
  metaTitle: 'Cooking Class Ubud Duration & Schedule',
  metaDescription: `Cooking class Ubud duration: ~3–4 hours. Morning ~08:30–12:30 with market tour; afternoon ~14:30–17:30. From ${shared}, free pickup. Exact clock times before you book.`,
  excerpt: `How long is a cooking class in Ubud? Tumang Bali runs about 3–4 hours: morning market + paddies + 10+ dishes, or afternoon cook-and-dine. Clock times and what fits a short stay.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Morning and afternoon cooking class schedule near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'cooking class ubud duration',
    'cooking class ubud schedule',
    'how long cooking class ubud',
    'cooking class ubud what time',
    'half day cooking class bali schedule',
  ],
  faqs: [
    {
      question: 'How long is the Tumang Bali cooking class?',
      answer:
        'About 3–4 hours door to door including hotel pickup in central Ubud. Morning: roughly 08:30–12:30 with market tour and rice-field walk. Afternoon: roughly 14:30–17:30 cook-and-dine (no market).',
    },
    {
      question: 'Which session should I book on a short Ubud stay?',
      answer:
        'Morning if you want the pasar + paddies photo set. Afternoon if you arrive late or want a temple morning. Same shared price and 10+ dishes.',
    },
    {
      question: 'Is it a half-day activity?',
      answer: `Yes — it fits as a half-day cooking class in Bali. Shared rate ${shared} (2+). Landing: /half-day-cooking-class-bali.`,
    },
  ],
  body: (
    <>
      <p data-speakable>
        <strong>Cooking class Ubud duration</strong> at Tumang Bali is about <strong>3–4 hours</strong>,
        including free central Ubud hotel pickup. Morning runs roughly <strong>08:30–12:30</strong>{' '}
        (market tour + rice-field walk + 10+ dishes + lunch). Afternoon runs roughly{' '}
        <strong>14:30–17:30</strong> (cook-and-dine). Shared rate <strong>{shared}</strong> (2+).
      </p>

      <h2>Schedule at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Morning</th>
            <th>Afternoon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pickup</td>
            <td>~08:00–08:30</td>
            <td>~14:00–14:30</td>
          </tr>
          <tr>
            <td>Market tour</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Rice-field walk</td>
            <td>Yes</td>
            <td>Short village approach</td>
          </tr>
          <tr>
            <td>Cook + feast</td>
            <td>10+ dishes + lunch</td>
            <td>10+ dishes + early dinner</td>
          </tr>
          <tr>
            <td>Drop-off</td>
            <td>~12:30</td>
            <td>~17:30</td>
          </tr>
        </tbody>
      </table>
      <p>
        Choosing AM vs PM mindset: <Link href={morningVsAfternoon}>morning vs afternoon guide</Link>.
        Market-first landing: <Link href={marketTour}>cooking class with market tour</Link>.
      </p>

      <h2>What to wear &amp; bring</h2>
      <p>
        Closed shoes for the market, light clothes, phone for recipes photos. Pickup details:{' '}
        <Link href={pickup}>hotel pickup cooking class Ubud</Link>.
      </p>

      <h2>Book the session that fits your clock</h2>
      <p>
        See live dates on <Link href={book}>book your cooking class</Link> or the full class page{' '}
        <Link href={money}>cooking class Ubud</Link>. Half-day landing:{' '}
        <Link href="/half-day-cooking-class-bali">half day cooking class Bali</Link>.
      </p>
    </>
  ),
}

export const allergyFriendlyCookingClassUbud: StaticArticle = {
  slug: 'allergy-friendly-cooking-class-ubud',
  title: 'Allergy-Friendly Cooking Class Ubud — Dairy, Nuts, Shellfish Notes',
  metaTitle: 'Allergy-Friendly Cooking Class Ubud',
  metaDescription: `Allergy-friendly cooking class Ubud: tell us dairy, nut, shellfish, egg, or soy needs 24h ahead. Shared from ${shared}. Honest kitchen limits — not a certified allergen-free facility.`,
  excerpt: `Need an allergy-friendly cooking class in Ubud? Tumang Bali adapts menus for dairy, nuts, shellfish, egg, and more when you tell us 24 hours ahead. Honest limits: shared kitchen, not a certified allergen-free facility.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Allergy-aware Balinese cooking class menu planning near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'allergy friendly cooking class ubud',
    'dairy free cooking class bali',
    'nut free cooking class ubud',
    'shellfish allergy cooking class bali',
    'cooking class ubud allergies',
  ],
  faqs: [
    {
      question: 'Can Tumang Bali handle food allergies?',
      answer:
        'Yes for common requests (dairy-free, no shellfish/shrimp paste, no peanuts, egg-free, soy-aware) when you message us at least 24 hours before class. We are not a certified allergen-free kitchen — cross-contact is possible in a shared village kitchen.',
    },
    {
      question: 'Is the class gluten-free or celiac-safe?',
      answer:
        'Menus are naturally rice-based and often easy to keep wheat-light, but we are not a certified GF facility. Read the gluten-free cooking class guide for honest limits.',
    },
    {
      question: 'Does an allergy menu cost extra?',
      answer: `No extra charge for standard substitutions on the shared class (${shared} for 2+). Severe multi-allergy groups may prefer a private kitchen so we control every station.`,
    },
  ],
  body: (
    <>
      <p data-speakable>
        Searching an <strong>allergy-friendly cooking class in Ubud</strong>? Tumang Bali can adapt
        the menu for <strong>dairy-free, nut-free, shellfish-free, egg-free</strong>, and similar needs
        when you tell us <strong>at least 24 hours</strong> before class. Shared rate{' '}
        <strong>{shared}</strong> (2+). We are a village kitchen — not a certified allergen-free
        facility — so we are honest about cross-contact risk.
      </p>

      <h2>What we can usually adapt</h2>
      <ul>
        <li>No shrimp paste / shellfish → plant sambals and protein swaps</li>
        <li>Dairy-free → coconut-forward desserts and sauces</li>
        <li>Peanut / tree-nut aware → alternate satay sauces when stocked</li>
        <li>Egg-free / vegetarian / vegan → already routine (see veg guide)</li>
      </ul>
      <p>
        Related guides: <Link href={gf}>gluten-free cooking class</Link>,{' '}
        <Link href={veg}>vegetarian cooking class</Link>,{' '}
        <Link href="/blog/halal-cooking-class-ubud">halal (pork-free) cooking class</Link>.
      </p>

      <h2>How to book safely</h2>
      <ol>
        <li>
          WhatsApp <a href={whatsapp}>+62 822-1013-2418</a> or the booking form with your allergy list.
        </li>
        <li>Confirm morning or afternoon and guest count.</li>
        <li>Severe allergies → consider <Link href={privateClass}>private cooking class</Link>.</li>
      </ol>

      <h2>What we will not promise</h2>
      <p>
        Zero cross-contact in a shared stone-mortar kitchen, medical “safe for celiac / anaphylaxis”
        certification, or last-minute complex swaps after ingredients are purchased at the pasar.
      </p>

      <h2>Book with your allergy note in the CTA</h2>
      <p>
        Start on <Link href={money}>cooking class Ubud</Link>, add notes on{' '}
        <Link href={book}>book your class</Link>, or message WhatsApp before you pay. Pickup:{' '}
        <Link href={pickup}>free hotel transfer</Link>.
      </p>
    </>
  ),
}

export const birthdayCookingClassUbud: StaticArticle = {
  slug: 'birthday-cooking-class-ubud',
  title: 'Birthday Cooking Class Ubud — Celebrate With a Village Kitchen',
  metaTitle: 'Birthday Cooking Class Ubud — Celebrate',
  metaDescription: `Birthday cooking class Ubud: private kitchen from ${privateSolo} or shared from ${shared}. Cake photo moment, max 8 shared, free pickup. Book for couples, friends, or family.`,
  excerpt: `A birthday cooking class in Ubud beats another restaurant table — market morning, rice fields, and a feast you cooked. Tumang Bali: shared max 8 or private kitchen for your party.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Birthday celebration at a Balinese cooking class near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'birthday cooking class ubud',
    'birthday cooking class bali',
    'celebration cooking class ubud',
    'private birthday cooking class bali',
    'cooking class for birthday party ubud',
  ],
  faqs: [
    {
      question: 'Can we celebrate a birthday at Tumang Bali?',
      answer: `Yes. Shared class works for small friend groups under 8 (${shared} per adult 2+). Private kitchen from ${privateSolo} for exclusive birthdays, proposals, or multi-family parties.`,
    },
    {
      question: 'Do you provide a birthday cake?',
      answer:
        'We can arrange a simple cake or dessert spotlight with advance WhatsApp notice (subject to availability). Bring your own cake if you prefer a specific bakery — we will set a photo moment before dessert.',
    },
    {
      question: 'Is it better than a couples-only class?',
      answer:
        'Couples honeymoon pages focus on two guests; birthdays often need space for friends or kids. Use private if your party wants the whole kitchen.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Planning a <strong>birthday cooking class in Ubud</strong>? Tumang Bali turns the celebration
        into a market morning (or afternoon feast) you cook yourselves — max <strong>8</strong> on
        shared, or a <strong>private kitchen</strong> for your party. Shared from{' '}
        <strong>{shared}</strong>; private from <strong>{privateSolo}</strong>. Free central Ubud
        hotel pickup.
      </p>

      <h2>Shared vs private for birthdays</h2>
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
            <td>Best for</td>
            <td>2–6 friends, low-key birthday</td>
            <td>Exclusive party, speeches, custom menu</td>
          </tr>
          <tr>
            <td>Capacity</td>
            <td>Up to 8 total in kitchen</td>
            <td>Your group only</td>
          </tr>
          <tr>
            <td>From</td>
            <td>{shared} / adult (2+)</td>
            <td>
              {privateSolo} (1) / {privateMin2} (min. 2)
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Romance-only? <Link href={couples}>couples cooking class</Link>. Kids along?{' '}
        <Link href={families}>families cooking class</Link>.
      </p>

      <h2>How to request a birthday touch</h2>
      <ul>
        <li>Mention “birthday” + name on WhatsApp when you book</li>
        <li>Optional cake / dessert spotlight (24h notice)</li>
        <li>Photo-friendly rice-field walk on morning sessions</li>
      </ul>

      <h2>Book the celebration</h2>
      <p>
        <Link href={privateClass}>Private cooking class Ubud</Link> for exclusive birthdays ·{' '}
        <Link href={money}>shared cooking class</Link> for smaller groups ·{' '}
        <Link href={book}>pick a date</Link> · <a href={whatsapp}>WhatsApp the party size</a>.
      </p>
    </>
  ),
}

export const teamBuildingCookingClassBali: StaticArticle = {
  slug: 'team-building-cooking-class-bali',
  title: 'Team-Building Cooking Class Bali — Corporate & Retreat Groups in Ubud',
  metaTitle: 'Team-Building Cooking Class Bali — Ubud',
  metaDescription: `Team-building cooking class Bali near Ubud: private kitchen for retreats & corporate groups. From ${privateSolo}. Collaborative cook + feast, free Ubud pickup. Not a hotel demo.`,
  excerpt: `Need a team-building cooking class in Bali? Tumang Bali’s private kitchen near Ubud is built for retreats and small corporate groups — everyone cooks, then eats together. English instruction, custom dietary notes.`,
  image: '/images/blog/walkthrough-class.webp',
  imageAlt: 'Corporate team-building Balinese cooking class near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-24',
  keywords: [
    'team building cooking class bali',
    'corporate cooking class ubud',
    'company cooking class bali',
    'retreat cooking class ubud',
    'group cooking class bali team',
  ],
  faqs: [
    {
      question: 'Do you host corporate or retreat cooking classes?',
      answer: `Yes — book the private kitchen so your team has the space exclusively. From ${privateSolo} depending on headcount. Shared max 8 is fine for tiny startups; larger parties should go private.`,
    },
    {
      question: 'How many people can we bring?',
      answer:
        'Shared classes cap at 8. Private sessions scale with advance notice — message WhatsApp with headcount, dietary mix, and preferred date so we can confirm kitchen capacity.',
    },
    {
      question: 'Is it suitable for offsites from Canggu or Seminyak?',
      answer:
        'Yes with a private driver for the day. Free pickup covers central Ubud hotels/villas; south-coast teams usually arrange their own transport.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        Looking for a <strong>team-building cooking class in Bali</strong>? Tumang Bali near Ubud runs
        a hands-on private kitchen for corporate offsites and wellness retreats — your group grinds{' '}
        <strong>bumbu</strong>, cooks <strong>10+ dishes</strong>, and shares the feast. From{' '}
        <strong>{privateSolo}</strong>. English instruction. Not a hotel demo line.
      </p>

      <h2>Why cooking works for teams</h2>
      <ul>
        <li>Shared tasks (spice paste, sate, sambal) force real collaboration</li>
        <li>Natural ice-breaker without trust-fall clichés</li>
        <li>Dietary mix handled when you send the list 24h ahead</li>
      </ul>
      <p>
        Distinct from our <Link href="/blog/small-group-cooking-class-ubud">small-group (max 8)</Link>{' '}
        product page and the CMS private-group guide — this page is for <strong>work / retreat</strong>{' '}
        planners comparing Bali activities.
      </p>

      <h2>What to send for a quote</h2>
      <ol>
        <li>Date window + morning or afternoon</li>
        <li>Headcount and dietary breakdown</li>
        <li>Invoice / company name if needed</li>
        <li>Stay location (Ubud vs south coast)</li>
      </ol>
      <p>
        WhatsApp <a href={whatsapp}>+62 822-1013-2418</a> or start on{' '}
        <Link href={privateClass}>private cooking class Ubud</Link>.
      </p>

      <h2>Book the offsite kitchen</h2>
      <p>
        Primary sales page: <Link href={money}>cooking class Ubud</Link>. Calendar:{' '}
        <Link href={book}>book your cooking class</Link>. Solo founders joining a shared class:{' '}
        <Link href={solo}>solo traveler guide</Link>.
      </p>
    </>
  ),
}

export const salesCtaKeywordClusterArticles: StaticArticle[] = [
  lastMinuteCookingClassUbud,
  howToBookCookingClassUbud,
  cookingClassUbudDurationSchedule,
  allergyFriendlyCookingClassUbud,
  birthdayCookingClassUbud,
  teamBuildingCookingClassBali,
]
