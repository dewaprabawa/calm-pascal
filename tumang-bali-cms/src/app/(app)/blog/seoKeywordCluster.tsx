import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'

/**
 * September 2026 keyword cluster — distinct commercial intents not already
 * covered by cooking-class variants (couples, family, vegetarian, rice terrace).
 * Targets competitor SERP language (market-to-table / farm-to-table) plus
 * dietary and audience queries that convert (halal, gluten-free, solo).
 */
const money = '/balinese-cooking-class-ubud'
const book = '/book-your-cooking-class'
const marketTour = '/cooking-class-with-market-tour-ubud'
const veg = '/blog/vegetarian-cooking-class-ubud-guide'
const price = '/blog/ubud-cooking-class-price'
const privateClass = '/private-cooking-class-ubud'

export const marketToTableCookingClassUbud: StaticArticle = {
  slug: 'market-to-table-cooking-class-ubud',
  title: 'Market-to-Table Cooking Class in Ubud — Farm-Fresh Village Kitchen 2026',
  metaTitle: 'Market-to-Table Cooking Class Ubud 2026',
  metaDescription:
    'Market-to-table cooking class in Ubud: shop a traditional pasar, walk rice paddies, cook 10+ Balinese dishes. IDR 506,370, max 8. Book Tumang Bali.',
  excerpt:
    'A market-to-table cooking class in Ubud at Tumang Bali starts at the traditional pasar, walks working paddies, then cooks 10+ dishes in a village kitchen — not a staged farm harvest. Shared from IDR 506,370.',
  image: '/images/blog/tumang-market.webp',
  imageAlt: 'Market-to-table cooking class in Ubud — shopping spices at a traditional Bali pasar before cooking',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-21',
  keywords: [
    'market to table cooking class ubud',
    'farm to table cooking class ubud',
    'farm to table cooking class bali',
    'organic farm cooking class ubud',
    'pasar cooking class ubud',
    'ubud market to table class',
  ],
  faqs: [
    {
      question: 'What is a market-to-table cooking class in Ubud?',
      answer:
        'You shop a traditional morning market (pasar) for spices, vegetables, and proteins, then cook those ingredients the same day in a village kitchen. Tumang Bali’s morning class follows this arc: pasar tour, rice-field walk, then 10+ dishes. Shared class IDR 506,370.',
    },
    {
      question: 'Is a farm-to-table cooking class in Ubud the same as market-to-table?',
      answer:
        'Not exactly. Farm-to-table packages (often in Taro) emphasise harvesting from an organic plot. Market-to-table starts at a working pasar used by local cooks — the same ingredients Balinese families actually buy. Tumang is market-to-table plus a walk through working subak paddies, not a ticketed farm tour.',
    },
    {
      question: 'How much is a market-to-table cooking class near Ubud?',
      answer:
        'Tumang Bali shared class is IDR 506,370 per adult (2+ participants; IDR 616,032 for 1). Morning sessions include the pasar tour. Private kitchen from IDR 633,090. Free hotel pickup in central Ubud. Max 8 guests.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>market-to-table cooking class in Ubud</strong> at Tumang Bali means you shop a working
        traditional pasar, walk rice paddies, then cook 10+ Balinese dishes from those ingredients — the
        same flow listed on our Viator “Market-to-Table” tour. Shared class <strong>IDR 506,370</strong> ·
        max 8 guests · free Ubud hotel pickup. Morning session only for the market.
      </p>

      <h2>Market-to-table vs farm-to-table in Ubud</h2>
      <p>
        Travellers searching <em>farm to table cooking class Ubud</em> or <em>organic farm cooking class
        Bali</em> usually want ingredients they can see, smell, and cook the same morning. Competitors in
        Taro sell a harvest walk on a private farm. Tumang is different on purpose: we start at a{' '}
        <Link href={marketTour}>traditional market cooking class</Link> because that is how Balinese home
        cooks actually source food — turmeric root, kencur, salam leaves, fresh coconut, and lemongrass
        sold by the bunch, not a supermarket tray.
      </p>
      <p>
        After the pasar we walk working subak paddies to the village kitchen — scenery without a Tegallalang
        ticket booth. Rice-terrace angle:{' '}
        <Link href="/blog/rice-terrace-cooking-class-ubud">rice terrace cooking class Ubud</Link>. Home-kitchen
        angle: <Link href="/blog/balinese-home-cooking-class-ubud">Balinese home cooking class</Link>.
      </p>

      <h2>What you buy at the pasar (and then cook)</h2>
      <ul>
        <li>Fresh turmeric, galangal, ginger, and chilies for Base Genep / bumbu</li>
        <li>Shallots, lemongrass, and kaffir lime for sambal matah</li>
        <li>Banana leaves for pepes; coconut for lawar and dadar gulung</li>
        <li>Fish, chicken, or tempeh/tofu if you booked a plant-based menu</li>
      </ul>
      <p>
        You grind the paste on stone, wrap sate lilit on lemongrass, and eat the feast you cooked. Dish
        deep-dives:{' '}
        <Link href="/blog/balinese-spice-paste-cooking-class">spice paste class</Link> ·{' '}
        <Link href="/blog/sambal-matah-cooking-class-ubud">sambal matah</Link> ·{' '}
        <Link href="/blog/lemongrass-cooking-class-ubud">lemongrass sate lilit</Link>.
      </p>

      <h2>Morning only — why the pasar matters</h2>
      <p>
        The market tour is a morning-class inclusion (about 08:30–12:30). Afternoon class skips the pasar and
        starts in the kitchen with pre-sourced ingredients. If “market to table” is why you searched, book
        morning. Timing guide:{' '}
        <Link href="/blog/morning-vs-afternoon-tours-bali">morning vs afternoon cooking class</Link>.
      </p>

      <h2>Book a market-to-table class near Ubud</h2>
      <p>
        Shared from IDR 506,370 · private IDR 633,090. Compare village vs farm schools on{' '}
        <Link href="/compare-ubud-cooking-classes">compare Ubud cooking classes</Link> and{' '}
        <Link href="/blog/taman-dukuh-vs-tresna-vs-lemongrass-cooking-class">
          Taman Dukuh vs Tresna vs Lemongrass
        </Link>
        . Then <Link href={money}>book cooking class Ubud</Link> or{' '}
        <Link href={book}>check morning dates</Link>.
      </p>
    </>
  ),
}

export const glutenFreeCookingClassUbud: StaticArticle = {
  slug: 'gluten-free-cooking-class-ubud',
  title: 'Gluten-Free Cooking Class in Ubud — What We Can (and Cannot) Adapt',
  metaTitle: 'Gluten-Free Cooking Class Ubud — Honest Menu',
  metaDescription:
    'Gluten-free cooking class in Ubud: rice-based Balinese menu, skip mie & wheat kecap. Not a certified GF kitchen. IDR 506,370. Book Tumang Bali with 24h notice.',
  excerpt:
    'Need a gluten-free cooking class in Ubud? Traditional Balinese cooking is mostly rice, coconut, and spices. We skip wheat noodles and kecap on request — with honest notes on cross-contact. Shared from IDR 506,370.',
  image: '/images/blog/vegetarian-ubud.jpg',
  imageAlt: 'Gluten-free Balinese cooking class in Ubud — rice, sambal, and banana-leaf pepes',
  author: 'Made Ayu',
  authorRole: 'Vegetarian Cuisine Specialist',
  publishedDate: '2026-09-21',
  keywords: [
    'gluten free cooking class ubud',
    'gluten free cooking class bali',
    'celiac cooking class bali',
    'gluten free balinese food class',
    'wheat free cooking class ubud',
    'gluten free ubud activities',
  ],
  faqs: [
    {
      question: 'Is there a gluten-free cooking class in Ubud?',
      answer:
        'Tumang Bali can run a gluten-conscious Balinese menu: rice, sambal matah, pepes, lawar, sate lilit, and dadar gulung. We skip mie goreng and wheat-based kecap manis when you tell us at least 24 hours ahead. The kitchen is not a certified gluten-free facility.',
    },
    {
      question: 'Is Balinese food naturally gluten-free?',
      answer:
        'Most home-style dishes are rice-based and use fresh spices, coconut, and banana leaf. Hidden gluten often sits in kecap manis, soy sauce, fried noodles, and some factory spice mixes. We cook pastes from whole spices on a stone mortar so we can keep your pan separate.',
    },
    {
      question: 'Can guests with celiac disease join?',
      answer:
        'Guests with medical celiac should know this is a shared village kitchen (max 8), not a dedicated GF kitchen. We take 24-hour notice seriously and avoid wheat in your dishes, but we cannot guarantee zero cross-contact. A private class gives more control over pans and oil.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>gluten-free cooking class in Ubud</strong> at Tumang Bali is a rice-and-spice Balinese
        menu — sambal matah, pepes, lawar, sate lilit, Base Genep — with mie goreng and wheat kecap removed
        when you give <strong>24 hours’ notice</strong>. Shared <strong>IDR 506,370</strong> · max 8 · we
        are not a certified gluten-free kitchen.
      </p>

      <h2>What is naturally gluten-free on the Tumang menu</h2>
      <ul>
        <li>Base Genep / bumbu ground from whole spices on cobek (stone mortar)</li>
        <li>Sambal matah — shallot, chili, lemongrass, lime, coconut oil</li>
        <li>Pepes (fish or tempeh) steamed in banana leaf</li>
        <li>Lawar (coconut vegetable salad) and sate lilit on lemongrass</li>
        <li>Nasi (steamed rice) and dadar gulung if the batter is rice/pandan-based</li>
      </ul>
      <p>
        Plant-based guests often combine this with our{' '}
        <Link href={veg}>vegetarian cooking class Ubud guide</Link> — tempeh and tofu replace fish or
        chicken without adding wheat.
      </p>

      <h2>Where gluten hides in Balinese cooking classes</h2>
      <p>
        Related searches — <em>celiac cooking class Bali</em>, <em>wheat free cooking class Ubud</em> —
        fail when a school uses bottled kecap manis (often wheat), soy sauce, or mie goreng as a default
        “guest favourite.” We skip those on a gluten-conscious booking and keep a separate pan when the
        group is mixed. Tell us when you{' '}
        <Link href={book}>book your cooking class</Link>, not on the morning of.
      </p>

      <h2>Shared vs private for gluten-free guests</h2>
      <p>
        Shared class (max 8) is social and still adaptable. If you need tighter control of oil and utensils,{' '}
        <Link href={privateClass}>private cooking class Ubud</Link> from IDR 633,090 lets the chef run only
        your menu. Price table: <Link href={price}>Ubud cooking class price</Link>.
      </p>

      <h2>Book a gluten-conscious class in Ubud</h2>
      <p>
        Write “gluten-free / no wheat kecap / no mie” in the booking notes. Morning market tour still works
        — we will point out rice, coconut, and fresh spices rather than packaged sauces.{' '}
        <Link href={money}>Book cooking class Ubud</Link> · <Link href={book}>online booking</Link>.
      </p>
    </>
  ),
}

export const halalCookingClassUbud: StaticArticle = {
  slug: 'halal-cooking-class-ubud',
  title: 'Halal Cooking Class in Ubud — Pork-Free Menu, Honest Kitchen Notes',
  metaTitle: 'Halal Cooking Class Ubud — Pork-Free Menu',
  metaDescription:
    'Halal cooking class in Ubud: pork-free Balinese menu, no alcohol, terasi omitted on request. Not MUI-certified. 24h notice. IDR 506,370. Book Tumang Bali.',
  excerpt:
    'Looking for a halal cooking class in Ubud? Tumang Bali runs a pork-free, no-alcohol Balinese menu on 24-hour notice — chicken, fish, or fully vegetarian. We are not an MUI-certified kitchen. Shared from IDR 506,370.',
  image: '/images/blog/dishes.jpg',
  imageAlt: 'Halal-friendly Balinese cooking class in Ubud — pork-free sate, sambal, and rice dishes',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-21',
  keywords: [
    'halal cooking class ubud',
    'halal cooking class bali',
    'pork free cooking class ubud',
    'muslim friendly cooking class bali',
    'halal food class ubud',
    'halal cooking class for tourists bali',
  ],
  faqs: [
    {
      question: 'Is there a halal cooking class in Ubud?',
      answer:
        'Tumang Bali is not an MUI-certified halal kitchen. With 24 hours’ notice we cook a pork-free menu (chicken, fish, or vegetarian), omit alcohol, and skip terasi (shrimp paste) on request. Shared class IDR 506,370. This is the honest version of “halal-friendly,” not a certification claim.',
    },
    {
      question: 'Does Balinese food contain pork and alcohol?',
      answer:
        'Classic ceremonial dishes can include pork (babi guling, some lawar). Tourist cooking classes often default to chicken, fish, and vegetables. Our standard shared menu is not pork-based; tell us “no pork / no terasi” when booking so every pan on your station stays that way.',
    },
    {
      question: 'Is shrimp paste (terasi) halal?',
      answer:
        'Many Muslim travellers accept seafood; some prefer to avoid fermented shrimp paste. We omit terasi and fish sauce from your sambal and bumbu when you ask. Vegetarian sambal matah (shallot, chili, lemongrass, lime, coconut oil) is a clean pork-free relish.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>halal cooking class in Ubud</strong> at Tumang Bali means a <strong>pork-free,
        no-alcohol</strong> Balinese menu with 24 hours’ notice — chicken, fish, or a full vegetarian
        spread. We <strong>are not MUI-certified</strong>. Shared class <strong>IDR 506,370</strong> · max
        8 guests · free Ubud pickup.
      </p>

      <h2>What “halal-friendly” means here (and what it does not)</h2>
      <p>
        Searches like <em>muslim friendly cooking class Bali</em> and <em>pork free cooking class Ubud</em>{' '}
        often hit schools that slap “halal” on a listing without saying whether pork shares a fryer. We
        would rather be specific: no pork on your menu, no cooking wine or beer in the recipes, terasi
        optional, separate pans when the shared group is mixed. We do not claim a certified halal facility.
      </p>

      <h2>A pork-free Tumang menu you actually cook</h2>
      <ul>
        <li>Base Genep spice paste — whole spices, coconut oil; terasi omitted on request</li>
        <li>Sate lilit (fish or chicken) on lemongrass, or tempeh satay</li>
        <li>Pepes ikan or tofu pepes in banana leaf</li>
        <li>Sambal matah without shrimp paste</li>
        <li>Vegetable lawar, nasi, dadar gulung</li>
      </ul>
      <p>
        Vegetarian / vegan is often the simplest path for mixed-observance groups — see the{' '}
        <Link href={veg}>vegetarian cooking class Ubud guide</Link>. Gluten-conscious notes live on the{' '}
        <Link href="/blog/gluten-free-cooking-class-ubud">gluten-free cooking class Ubud</Link> page.
      </p>

      <h2>Prayer times, dress, and pickup</h2>
      <p>
        Classes run about 08:30–12:30 (morning) or 14:30–17:30 (afternoon). The kitchen is a family compound,
        not a mosque — there is no dedicated prayer room; guests typically use hotel facilities before
        pickup. Dress is modest-casual (shoulders covered is polite in the village). Pickup is included in
        central Ubud so you do not need a scooter.{' '}
        <Link href="/blog/cooking-class-ubud-from-canggu">From Canggu or Seminyak</Link>, plan extra
        transport time.
      </p>

      <h2>Book a pork-free cooking class in Ubud</h2>
      <p>
        Write “halal / no pork / no terasi” in the notes. Singapore, Malaysia, and Middle East guests do
        this every week. <Link href={money}>Book cooking class Ubud</Link> ·{' '}
        <Link href={book}>online booking</Link> · WhatsApp +62 822-1013-2418.
      </p>
    </>
  ),
}

export const cookingClassUbudForSoloTravelers: StaticArticle = {
  slug: 'cooking-class-ubud-for-solo-travelers',
  title: 'Cooking Class in Ubud for Solo Travelers — Small Group or Private',
  metaTitle: 'Cooking Class Ubud for Solo Travelers 2026',
  metaDescription:
    'Solo traveler cooking class in Ubud: join a max-8 shared class (IDR 616,032 for 1) or private kitchen IDR 633,090. Hotel pickup, no scooter needed. Book Tumang Bali.',
  excerpt:
    'A cooking class in Ubud is one of the best solo-traveler days in Bali — small group (max 8), hotel pickup, and a feast you helped cook. Shared solo rate IDR 616,032, or a private kitchen from IDR 633,090.',
  image: '/images/gallery-girls.jpg',
  imageAlt: 'Solo traveler joining a small-group Balinese cooking class near Ubud',
  author: 'Tumang Bali Team',
  authorRole: 'Local Food Guide',
  publishedDate: '2026-09-21',
  keywords: [
    'cooking class ubud solo traveler',
    'solo travel cooking class bali',
    'cooking class ubud for one',
    'solo cooking class ubud',
    'best ubud activity for solo travellers',
    'join cooking class ubud alone',
  ],
  faqs: [
    {
      question: 'Can I join a cooking class in Ubud as a solo traveler?',
      answer:
        'Yes. Tumang Bali welcomes solo guests in the shared class (max 8). The 1-adult shared rate is IDR 616,032; 2+ adults pay IDR 506,370 each. You get Ubud hotel pickup, so you do not need a scooter or a travel partner.',
    },
    {
      question: 'Is a shared or private class better for one person?',
      answer:
        'Shared is the social default — you cook alongside other travellers and eat together. Private (IDR 633,090 for 1) is better if you want one-to-one chef time, a custom pace, or a quieter kitchen for photos.',
    },
    {
      question: 'Is a cooking class safe and worthwhile for solo women in Ubud?',
      answer:
        'The class is a daytime, small-group village kitchen with English-speaking chefs and hotel pickup/drop-off in Ubud. Many solo women book the morning session for the market tour plus rice-field walk. See our Bali safety overview for island-wide context.',
    },
  ],
  body: (
    <>
      <p data-speakable>
        A <strong>cooking class in Ubud for solo travelers</strong> at Tumang Bali is a max-8 shared kitchen
        — you are not the awkward extra at a couples table. One-adult shared rate{' '}
        <strong>IDR 616,032</strong> · private kitchen <strong>IDR 633,090</strong> · free Ubud hotel pickup
        · no scooter required.
      </p>

      <h2>Why solo travellers book a cooking class instead of another temple</h2>
      <p>
        Searches like <em>best Ubud activity for solo travellers</em> and <em>join cooking class Ubud
        alone</em> point to the same gap: many “experiences” are built for pairs. A village class is
        structured for individuals — everyone has a station, everyone eats. You leave with recipes and
        usually a few WhatsApp contacts. Small-group explainer:{' '}
        <Link href="/blog/small-group-cooking-class-ubud">small group cooking class Ubud</Link>.
      </p>

      <h2>Shared vs private when you are booking for one</h2>
      <ul>
        <li>
          <strong>Shared (IDR 616,032 for 1):</strong> social, max 8, morning market tour available. Best
          default.
        </li>
        <li>
          <strong>Private (IDR 633,090 for 1):</strong> exclusive kitchen — see{' '}
          <Link href={privateClass}>private cooking class Ubud</Link> and{' '}
          <Link href="/blog/private-cooking-class-ubud-price">private class price</Link>.
        </li>
      </ul>
      <p>
        Couples and honeymooners have a separate page:{' '}
        <Link href="/blog/cooking-class-ubud-for-couples">cooking class Ubud for couples</Link>. Families:{' '}
        <Link href="/blog/ubud-cooking-class-for-families">Ubud cooking class for families</Link>.
      </p>

      <h2>Logistics that make solo travel easier</h2>
      <ul>
        <li>Free pickup/drop-off in central Ubud — skip scooter rental rules entirely</li>
        <li>Morning class 08:30–12:30 (pasar + paddies + lunch) or afternoon 14:30–17:30</li>
        <li>English instruction; beginners welcome</li>
        <li>Tell us dietary needs (vegetarian, gluten-conscious, pork-free) when you book</li>
      </ul>
      <p>
        Island safety context: <Link href="/blog/is-bali-safe-for-tourists">is Bali safe for tourists</Link>.
        Beginners page: <Link href="/bali-cooking-class-for-beginners">cooking class for beginners</Link>.
      </p>

      <h2>Book a solo cooking class in Ubud</h2>
      <p>
        Worth-it math: <Link href="/blog/is-a-bali-cooking-class-worth-it">is a Bali cooking class worth it</Link>
        . Then <Link href={money}>book cooking class Ubud</Link> or <Link href={book}>reserve a date</Link>{' '}
        as a party of one.
      </p>
    </>
  ),
}

export const seoKeywordClusterArticles: StaticArticle[] = [
  marketToTableCookingClassUbud,
  glutenFreeCookingClassUbud,
  halalCookingClassUbud,
  cookingClassUbudForSoloTravelers,
]
