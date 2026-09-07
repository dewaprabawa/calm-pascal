import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { buildPageMetadata, SITE, SITE_CONTENT_UPDATED } from '@/lib/seoMetadata'
import { OTA_LINKS } from '@/lib/otaBookingLinks'
import TripAdvisorWidget from '../components/TripAdvisorWidget'
import TripAdvisorWriteReviewWidget from '../components/TripAdvisorWriteReviewWidget'
import ViatorBookButtons from '../components/ViatorBookButtons'
import OtaPricingNotice from '../components/OtaPricingNotice'
import OtaBookingLink from '../components/OtaBookingLink'
import WhatsAppFloat from '../components/WhatsAppFloat'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Tumang Bali on TripAdvisor — Travelers’ Choice Cooking Class Ubud 2026',
  description:
    'TripAdvisor Travelers’ Choice 2026 cooking class in Ubud — 5.0 rating, 1500+ reviews. Book Tumang Bali via Viator or read reviews on TripAdvisor. Market tour, max 8 guests, IDR 506,370.',
  path: '/tripadvisor-cooking-class-ubud',
  ogTitle: 'TripAdvisor Cooking Class Ubud — Tumang Bali | Book on Viator',
  image: '/images/gallery-girls.jpg',
  imageAlt: 'Tumang Bali Cooking Class TripAdvisor Travelers Choice Ubud Bali',
})

const faqs = [
  {
    question: 'Is Tumang Bali a top-rated cooking class on TripAdvisor?',
    answer:
      'Yes. Tumang Bali Cooking Class holds a 5.0 aggregate rating from 1500+ reviews and earned TripAdvisor Travelers’ Choice 2026 — among the highest-rated hands-on cooking experiences near Ubud.',
  },
  {
    question: 'How do I book Tumang Bali after reading TripAdvisor reviews?',
    answer:
      'Use the Viator booking buttons on this page for instant checkout (TripAdvisor and Viator are part of the same travel group). You can also read full reviews on our official TripAdvisor attraction page, then book on Viator.',
  },
  {
    question: 'What do TripAdvisor guests love about Tumang Bali?',
    answer:
      'Reviewers consistently mention the authentic morning market tour, rice-field walk, grinding bumbu by hand, small groups (max 8), Chef Wayan, and 10+ dishes — a village kitchen, not a hotel demo.',
  },
  {
    question: 'Is the Viator listing the same class as on TripAdvisor?',
    answer:
      'Yes. Our Viator tour “Ubud Market-to-Table Cooking Class and Local Herb Discovery” is the same Tumang Bali village experience listed on TripAdvisor — same kitchen, chefs, menu, and Ubud hotel pickup.',
  },
  {
    question: 'Is the Viator or GetYourGuide price higher than booking direct?',
    answer:
      'No. Viator, GetYourGuide, and Airbnb list the same Tumang Bali rates as our website and WhatsApp — no overcharge. Shared class from IDR 506,370 per adult (2+). Same experience and inclusions on every channel.',
  },
]

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE}/tripadvisor-cooking-class-ubud#webpage`,
  url: `${SITE}/tripadvisor-cooking-class-ubud`,
  name: 'Tumang Bali Cooking Class on TripAdvisor — Book via Viator',
  description:
    'TripAdvisor Travelers’ Choice 2026 Ubud cooking class. Book Tumang Bali on Viator or read 1500+ five-star TripAdvisor reviews.',
  dateModified: SITE_CONTENT_UPDATED,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function TripAdvisorCookingClassPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600">TUMANG BALI</span>
          </Link>
          <Link href="/blog/book-cooking-class-ubud-tripadvisor" className="text-sm font-semibold hover:text-orange-500">
            Full guide
          </Link>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto px-6 pt-14 pb-10 text-center">
        <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">
          TripAdvisor · Travelers&apos; Choice 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
          Tumang Bali Cooking Class on TripAdvisor
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed mb-8" data-speakable>
          One of Ubud&apos;s highest-rated cooking classes on TripAdvisor — 5.0 stars, 1500+ reviews,
          morning market tour, rice-field walk, and 10+ hands-on Balinese dishes. Max 8 guests · IDR
          350,000 shared · free Ubud pickup.
        </p>
        <div className="flex justify-center mb-8">
          <TripAdvisorWidget />
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-900/40 rounded-3xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Book on Viator</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-6 max-w-xl mx-auto">
            TripAdvisor travellers often book through <strong>Viator</strong> — instant confirmation, secure
            checkout, and the same Tumang Bali Market-to-Table class. Use an OTA when you want to secure your
            spot with instant checkout.
          </p>
          <ViatorBookButtons context="TripAdvisor landing page" layout="row" showPricingNote={false} />
          <OtaPricingNotice className="mt-6 text-left max-w-2xl mx-auto" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-black mb-4">Read TripAdvisor reviews</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-5 leading-relaxed">
            See why guests rate us 5.0 — market tour, sate lilit on lemongrass, sambal matah, and small-group
            village cooking near Ubud.
          </p>
          <ul className="space-y-3">
            <li>
              <OtaBookingLink channel="tripadvisor" href={OTA_LINKS.tripadvisor.reviewsEn}>
                TripAdvisor.com — reviews &amp; photos
              </OtaBookingLink>
            </li>
            <li>
              <OtaBookingLink channel="tripadvisor" href={OTA_LINKS.tripadvisor.reviewsId}>
                TripAdvisor.co.id — ulasan Bahasa Indonesia
              </OtaBookingLink>
            </li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-stone-200 dark:border-zinc-800 shadow-lg">
          <Image
            src="/images/gallery-group.jpg"
            alt="Tumang Bali cooking class guests — TripAdvisor rated Ubud experience"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-black mb-4">What&apos;s included</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-stone-700 dark:text-stone-300">
          <li className="flex gap-2"><span className="text-orange-500">✓</span> Morning traditional market tour (AM class)</li>
          <li className="flex gap-2"><span className="text-orange-500">✓</span> Rice-field walk to village kitchen</li>
          <li className="flex gap-2"><span className="text-orange-500">✓</span> 10+ dishes — grind bumbu, sate lilit, sambal matah</li>
          <li className="flex gap-2"><span className="text-orange-500">✓</span> Max 8 guests — fully hands-on</li>
          <li className="flex gap-2"><span className="text-orange-500">✓</span> Full vegetarian / vegan menu on request</li>
          <li className="flex gap-2"><span className="text-orange-500">✓</span> Ubud hotel pickup &amp; drop-off</li>
        </ul>
        <p className="mt-6 text-stone-600 dark:text-stone-400">
          More detail:{' '}
          <Link href="/blog/tumang-bali-cooking-class-experience" className="text-orange-600 font-semibold underline">
            Tumang Bali experience guide
          </Link>
          {' · '}
          <Link href="/compare-ubud-cooking-classes" className="text-orange-600 font-semibold underline">
            Compare Ubud cooking classes
          </Link>
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-black mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div
              key={f.question}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800"
            >
              <h3 className="font-bold text-lg mb-2">{f.question}</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12 text-center">
        <TripAdvisorWriteReviewWidget />
        <p className="text-sm text-stone-500 mt-4">Already joined a class? Your review helps future travellers.</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200/60 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">Ready to cook in Ubud?</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-6">
            Book instantly on Viator or explore our{' '}
            <Link href="/blog/book-cooking-class-ubud-tripadvisor" className="text-orange-600 underline">
              TripAdvisor booking guide
            </Link>
            .
          </p>
          <ViatorBookButtons context="TripAdvisor landing footer" />
          <p className="mt-6 text-sm text-stone-500">
            Prefer direct booking?{' '}
            <Link href="/balinese-cooking-class-ubud" className="text-orange-600 underline font-semibold">
              tumangbaliclass.com
            </Link>
          </p>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
