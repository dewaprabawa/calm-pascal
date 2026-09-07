import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Press & Media Kit — Tumang Bali Cooking Class',
  description:
    'Press kit for Tumang Bali Cooking Class in Ubud: fact sheet, photos, TripAdvisor badge, booking URL, and media contact for journalists and creators.',
  path: '/press',
  ogTitle: 'Press & Media Kit | Tumang Bali',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Tumang Bali cooking class guests in Ubud village kitchen',
})

const FACTS = [
  { label: 'Business name', value: 'Tumang Bali Cooking Class' },
  { label: 'Location', value: 'Tumang village, ~30 minutes from central Ubud, Bali, Indonesia' },
  { label: 'Founded experience', value: 'Hands-on Balinese cooking with local family chefs' },
  { label: 'Shared class price (2026)', value: 'IDR 616,032 (1 adult) / IDR 506,370 (2+)' },
  { label: 'Private class', value: 'IDR 633,090 (1 adult); IDR 1,266,180 (min. 2)' },
  { label: 'Group size', value: 'Maximum 8 guests per shared session' },
  { label: 'Sessions', value: 'Morning (market tour) & afternoon (cook & dine)' },
  { label: 'Inclusions', value: 'Market tour (morning), rice-field walk, 10+ dishes, meal, recipe booklet, Ubud hotel pickup' },
  { label: 'Dietary', value: 'Full vegetarian menu; vegan adaptations on request' },
  { label: 'Recognition', value: "TripAdvisor Travelers' Choice 2026" },
  { label: 'Website', value: 'https://tumangbaliclass.com' },
  { label: 'Booking', value: 'https://tumangbaliclass.com/book-your-cooking-class' },
  { label: 'WhatsApp', value: '+62 822-1013-2418' },
  { label: 'Primary SEO / booking page', value: 'https://tumangbaliclass.com/balinese-cooking-class-ubud' },
]

const STORY_ANGLES = [
  'Village cooking class vs hotel demo kitchens in Ubud',
  'How Base Genep (Balinese spice paste) is ground by hand',
  'Morning market tour as cultural immersion for food travelers',
  'Vegetarian and vegan Balinese menus done as a full feast',
  'Couples and family activities beyond rice terraces and temples',
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500">
              TUMANG BALI
            </span>
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Blog
          </Link>
        </div>
      </nav>

      <header className="pt-16 pb-10 px-6 max-w-3xl mx-auto text-center">
        <p className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-3">Press & Media</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Media Kit — Tumang Bali Cooking Class
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
          Facts, story angles, and assets for journalists, bloggers, and creators covering Ubud food
          experiences. For interviews or press visits, email or WhatsApp us using the contacts below.
        </p>
      </header>

      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-black mb-6">Fact sheet</h2>
        <dl className="divide-y divide-stone-200 dark:divide-zinc-800 border border-stone-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900">
          {FACTS.map((row) => (
            <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-5 py-4">
              <dt className="text-sm font-semibold text-stone-500">{row.label}</dt>
              <dd className="sm:col-span-2 text-sm text-stone-800 dark:text-stone-200">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-black mb-4">Suggested story angles</h2>
        <ul className="list-disc pl-6 space-y-2 text-stone-600 dark:text-stone-400">
          {STORY_ANGLES.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-black mb-4">Photos & links</h2>
        <p className="text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
          High-resolution photos of our kitchen, market tour, and guest feasts are available on
          request. For quick reference, use:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/images/gallery-group.jpg" className="text-orange-600 font-semibold hover:underline">
              Group class photo
            </Link>
          </li>
          <li>
            <Link href="/compare-ubud-cooking-classes" className="text-orange-600 font-semibold hover:underline">
              Ubud cooking class comparison (2026)
            </Link>
          </li>
          <li>
            <Link href="/blog/best-cooking-class-in-ubud" className="text-orange-600 font-semibold hover:underline">
              Best cooking class in Ubud guide
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="text-orange-600 font-semibold hover:underline">
              Free Balinese recipe hub
            </Link>
          </li>
        </ul>
      </section>

      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-black mb-4">Media contact</h2>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          WhatsApp:{' '}
          <a
            href="https://wa.me/6282210132418?text=Hi%20Tumang%20Bali%20—%20press%20/%20media%20inquiry"
            className="text-orange-600 font-semibold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            +62 822-1013-2418
          </a>
        </p>
        <p className="text-stone-600 dark:text-stone-400 text-sm">
          Please include your outlet, deadline, and whether you need a press visit, interview, or
          high-res images.
        </p>
      </section>

      <footer className="py-8 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali ·{' '}
        <Link href="/" className="text-orange-600 hover:underline">
          Home
        </Link>
      </footer>
    </div>
  )
}
