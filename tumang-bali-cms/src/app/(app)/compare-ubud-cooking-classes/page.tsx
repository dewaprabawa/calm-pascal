import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import BookButton from '../components/BookButton'
import BookingModal, { ActivityOption } from '../components/BookingModal'
import WhatsAppFloat from '../components/WhatsAppFloat'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Best Cooking Classes in Ubud 2026 — Tumang Bali vs Casa Luna vs Paon vs Ketut\'s',
  description:
    'Honest comparison of the best cooking classes in Ubud: Tumang Bali, Casa Luna, Paon Bali & Ketut\'s. Feature matrix, pricing (as of Aug 2026), group sizes, and who each class is best for.',
  alternates: { canonical: 'https://tumangbaliclass.com/compare-ubud-cooking-classes' },
  openGraph: {
    title: 'Best Cooking Classes in Ubud 2026 — Compared & Ranked',
    description:
      'Side-by-side comparison of the top Ubud cooking classes. See features, pricing, group sizes, and unique inclusions to find the best class for you.',
    url: 'https://tumangbaliclass.com/compare-ubud-cooking-classes',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Best cooking classes in Ubud Bali — compared and ranked 2026',
      },
    ],
  },
}

const SITE = 'https://tumangbaliclass.com'

const competitors = [
  {
    name: 'Tumang Bali',
    tagline: 'Most Inclusions · Best Value',
    price: 'IDR 350K (~$21)',
    groupSize: 'Max 8',
    marketTour: true,
    ricefield: true,
    flowerOffering: true,
    vegetarian: 'Full menu',
    hotelPickup: true,
    dishCount: '10+',
    sessions: 'Morning & Afternoon',
    highlight: true,
    url: 'https://tumangbaliclass.com',
    badge: '⭐ Our Pick',
  },
  {
    name: 'Casa Luna',
    tagline: 'Established 1992 · Cultural Depth',
    price: 'IDR 450–650K (~$28–$40)',
    groupSize: '~12–15',
    marketTour: 'Select days',
    ricefield: false,
    flowerOffering: false,
    vegetarian: 'Plant-based class',
    hotelPickup: false,
    dishCount: '6–8',
    sessions: 'Multiple themes',
    highlight: false,
    url: 'https://casalunabali.com',
    badge: null,
  },
  {
    name: 'Paon Bali',
    tagline: 'Village Home Setting · Authentic',
    price: '$30–50 USD',
    groupSize: '~10–12',
    marketTour: true,
    ricefield: false,
    flowerOffering: false,
    vegetarian: 'Available',
    hotelPickup: true,
    dishCount: '8–10',
    sessions: 'Morning',
    highlight: false,
    url: 'https://paon-bali.com',
    badge: null,
  },
  {
    name: "Ketut's Class",
    tagline: '4.9/5 Rating · Individual Stations',
    price: 'IDR 350K (~$21)',
    groupSize: 'Max 10',
    marketTour: true,
    ricefield: false,
    flowerOffering: false,
    vegetarian: 'On request',
    hotelPickup: true,
    dishCount: '6–8',
    sessions: 'Morning & Afternoon',
    highlight: false,
    url: 'https://ketutsbalicookingclass.com',
    badge: null,
  },
]

const faqs = [
  {
    question: 'Which is the best cooking class in Ubud for vegetarians?',
    answer:
      'Tumang Bali is the top pick — the entire menu is vegetarian by design (not just an option), with vegan adaptations on request. Casa Luna also offers a dedicated plant-based class on select days.',
  },
  {
    question: 'Which Ubud cooking class has the smallest groups?',
    answer:
      'Tumang Bali caps at 8 guests per session, making it the most intimate option among the leading cooking classes in Ubud.',
  },
  {
    question: 'Do all Ubud cooking classes include a market tour?',
    answer:
      'Most morning classes include a market tour — Tumang Bali, Paon Bali, and Ketut\'s all do. Casa Luna includes it on select days (typically Tuesdays and Thursdays).',
  },
  {
    question: 'Which cooking class is unique to Ubud — not found elsewhere?',
    answer:
      'Tumang Bali is the only class that combines a rice field walk AND a Canang Sari (flower offering) activity alongside the cooking session, giving it the most cultural depth per class.',
  },
  {
    question: 'How much does a cooking class in Ubud cost in 2026?',
    answer:
      'Prices range from IDR 350,000 (~$21 USD) at Tumang Bali and Ketut\'s, up to IDR 450,000–650,000 (~$28–$40) at Casa Luna. All prices are as of August 2026 — verify via official websites.',
  },
]

function Check({ yes }: { yes: boolean | string }) {
  if (yes === true) return <span className="text-green-600 font-bold text-lg">✓</span>
  if (yes === false) return <span className="text-stone-300 dark:text-zinc-600 text-lg">–</span>
  return <span className="text-xs text-stone-500">{yes}</span>
}

export default async function Page() {
  let bookingActivities: ActivityOption[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs: activities } = await payload.find({ collection: 'activities' })
    bookingActivities = activities.map((a) => ({
      id: a.id as string,
      title: a.title as string,
      price: a.price as number,
    }))
  } catch (err) {
    console.error('compare page: could not load activities from CMS', err)
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Cooking Classes in Ubud, Bali 2026',
    description: 'A curated comparison of the top-rated cooking classes in Ubud, Bali, ranked by inclusions, value, and experience.',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: competitors.length,
    itemListElement: competitors.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: c.url,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Compare Ubud Cooking Classes', item: `${SITE}/compare-ubud-cooking-classes` },
    ],
  }

  // FAQPage schema removed — Google restricted FAQPage rich results to
  // government and healthcare authority sites only (August 2023).
  // The FAQ content remains as visible HTML below.

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Structured Data — ItemList + BreadcrumbList only (FAQPage removed per Google Aug 2023 policy) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Nav */}
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500">TUMANG BALI</span>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <Link href="/#classes" className="hover:text-orange-500 transition-colors">Classes</Link>
            <Link href="/#menu" className="hover:text-orange-500 transition-colors">Menu</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-16 pb-10 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-stone-50 to-orange-50/30 dark:from-orange-950/20 dark:via-zinc-950 dark:to-orange-900/10 -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-semibold tracking-wide border border-orange-200 dark:border-orange-900/30 mb-5">
            Ubud Cooking Class Comparison · August 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-5">
            Best Cooking Classes in Ubud, Bali (2026)
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto mb-8">
            We compared the top-rated cooking classes in Ubud side-by-side — features, pricing, group size, and what makes each one unique — so you can book with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95">
              Book Tumang Bali
            </BookButton>
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 bg-white/60 hover:bg-white border border-stone-200 px-7 py-3.5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
            >
              See Comparison ↓
            </a>
          </div>
        </div>
      </header>

      {/* Quick stats */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Classes Compared', value: '4' },
            { label: 'Tumang Group Size', value: '≤ 8' },
            { label: 'Tumang Dishes', value: '10+' },
            { label: 'Tumang Price', value: 'IDR 350K' },
          ].map((s) => (
            <div key={s.label} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 text-center">
              <p className="text-3xl font-black text-orange-600 dark:text-orange-500 mb-1">{s.value}</p>
              <p className="text-sm text-stone-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black tracking-tight text-center mb-3">Feature Comparison</h2>
        <p className="text-center text-stone-500 text-sm mb-8">All pricing as of August 2026. Verify via official websites before booking.</p>
        <div className="overflow-x-auto rounded-3xl border border-stone-200 dark:border-zinc-800 shadow-sm">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-stone-100 dark:bg-zinc-900">
                <th className="text-left py-4 px-5 font-bold text-stone-700 dark:text-stone-300 w-44">Feature</th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`py-4 px-4 text-center font-bold ${
                      c.highlight
                        ? 'bg-orange-600 text-white'
                        : 'text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <div>{c.name}</div>
                    {c.badge && (
                      <span className="inline-block mt-1 text-xs bg-white/20 rounded-full px-2 py-0.5">{c.badge}</span>
                    )}
                    <div className={`text-xs font-normal mt-0.5 ${c.highlight ? 'text-orange-100' : 'text-stone-400'}`}>
                      {c.tagline}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Price per person', key: 'price' },
                { label: 'Max group size', key: 'groupSize' },
                { label: 'Market tour', key: 'marketTour' },
                { label: 'Rice field walk', key: 'ricefield' },
                { label: 'Flower offering', key: 'flowerOffering' },
                { label: 'Vegetarian/Vegan', key: 'vegetarian' },
                { label: 'Hotel pickup', key: 'hotelPickup' },
                { label: 'Dishes cooked', key: 'dishCount' },
                { label: 'Session times', key: 'sessions' },
              ].map((row, ri) => (
                <tr
                  key={row.key}
                  className={`border-t border-stone-100 dark:border-zinc-800 ${
                    ri % 2 === 0 ? 'bg-white dark:bg-zinc-950' : 'bg-stone-50/50 dark:bg-zinc-900/50'
                  }`}
                >
                  <td className="py-3 px-5 font-medium text-stone-600 dark:text-stone-400">{row.label}</td>
                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`py-3 px-4 text-center ${
                        c.highlight ? 'bg-orange-50/60 dark:bg-orange-950/10 font-semibold text-orange-800 dark:text-orange-300' : ''
                      }`}
                    >
                      <Check yes={(c as Record<string, unknown>)[row.key] as boolean | string} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-xs text-stone-400 mt-3">
          ✓ = Yes &nbsp;·&nbsp; – = No &nbsp;·&nbsp; Text = Partial/Varies &nbsp;·&nbsp; Source: official websites & Viator listings (Aug 2026)
        </p>
      </section>

      {/* Tumang unique advantages */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black tracking-tight text-center mb-3">Why Tumang Bali Stands Out</h2>
        <p className="text-center text-stone-500 mb-10">The only class in Ubud combining all of these in one experience.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '🌾',
              title: 'Rice Field Walk',
              desc: 'A scenic walk through Ubud\'s green rice paddies — included as standard, not available at other major classes.',
            },
            {
              icon: '🌸',
              title: 'Canang Sari Offering',
              desc: 'Learn to make a traditional Balinese flower offering, adding genuine spiritual and cultural depth to the experience.',
            },
            {
              icon: '👥',
              title: 'Smallest Groups',
              desc: 'Maximum 8 guests per session means more time with the chef and a truly personal, never-crowded experience.',
            },
            {
              icon: '🌱',
              title: 'Full Vegetarian Menu',
              desc: 'Not just an option — the entire class is designed around a complete vegetarian Balinese menu, vegan on request.',
            },
            {
              icon: '🍽️',
              title: '10+ Dishes',
              desc: 'Cook the most dishes per session of any leading Ubud class, so you leave with a real repertoire, not just one recipe.',
            },
            {
              icon: '💰',
              title: 'Best Value',
              desc: 'IDR 350,000 with the most inclusions — hotel pickup, market tour, rice field walk, flower offering, and a recipe booklet.',
            },
          ].map((sp) => (
            <div
              key={sp.title}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-7 border border-stone-200 dark:border-zinc-800"
            >
              <div className="text-4xl mb-3">{sp.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-orange-600 dark:text-orange-500">{sp.title}</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{sp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who is each class for */}
      <section className="py-14 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black tracking-tight text-center mb-10">Who Should Choose Each Class</h2>
        <div className="space-y-5">
          {[
            {
              name: 'Choose Tumang Bali if…',
              color: 'border-orange-400',
              bg: 'bg-orange-50 dark:bg-orange-950/20',
              points: [
                'You want the most inclusions (market + rice field + flower offering)',
                'You are vegetarian or vegan',
                'You prefer a small, intimate group (max 8)',
                'You want the best value at IDR 350K',
                'You are visiting Ubud and want a full cultural half-day',
              ],
            },
            {
              name: 'Choose Casa Luna if…',
              color: 'border-stone-300',
              bg: 'bg-white dark:bg-zinc-900',
              points: [
                'You want a prestigious, long-established school (founded 1992)',
                'You prefer themed menus (Ceremonial, Twilight Duck, Plant-based)',
                'You are staying at the Honeymoon Guesthouse (10% discount)',
              ],
            },
            {
              name: 'Choose Paon Bali if…',
              color: 'border-stone-300',
              bg: 'bg-white dark:bg-zinc-900',
              points: [
                'You want an authentic village home setting in Laplapan',
                'You are interested in the Balinese Subak irrigation system',
                'You prefer a locally-famous, community-rooted experience',
              ],
            },
            {
              name: "Choose Ketut's if…",
              color: 'border-stone-300',
              bg: 'bg-white dark:bg-zinc-900',
              points: [
                'You want individual cooking stations (everyone cooks their own dish)',
                'You value the highest consistent online rating (4.9/5)',
                'You prefer a friendly family-style teaching environment',
              ],
            },
          ].map((section) => (
            <div
              key={section.name}
              className={`rounded-2xl p-6 border-l-4 ${section.color} ${section.bg} border border-stone-200 dark:border-zinc-800`}
            >
              <h3 className="font-bold text-lg mb-3">{section.name}</h3>
              <ul className="space-y-1.5">
                {section.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-stone-600 dark:text-stone-400 text-sm">
                    <span className="text-orange-500 mt-0.5">→</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black tracking-tight text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.question} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800">
              <h3 className="font-bold text-lg mb-2">{f.question}</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Book in Ubud?</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
            Tumang Bali offers 2 daily sessions — morning (8 AM, with market tour) and afternoon (2 PM). Small groups, IDR 350K, hotel pickup included.
          </p>
          <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95">
            Book Tumang Bali Now
          </BookButton>
          <p className="mt-8 text-sm text-stone-500">
            <span className="italic">This comparison was written by the Tumang Bali team. We have done our best to present accurate, fair information — always check competitors\' websites for current pricing.</span>
          </p>
          <p className="mt-4 text-sm text-stone-500">
            Explore more:{' '}
            <Link href="/" className="text-orange-600 font-semibold underline">full experience & reviews</Link>
            {' '}·{' '}
            <Link href="/blog/is-a-bali-cooking-class-worth-it" className="text-orange-600 font-semibold underline">Is a Bali cooking class worth it?</Link>
            {' '}·{' '}
            <Link href="/blog" className="text-orange-600 font-semibold underline">Bali food blog</Link>
          </p>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali Cooking Class · Ubud, Bali
      </footer>

      <BookingModal activities={bookingActivities} />
      <WhatsAppFloat />
    </div>
  )
}
