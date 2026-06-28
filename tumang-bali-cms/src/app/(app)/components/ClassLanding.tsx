import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BookButton from './BookButton'
import BookingModal, { ActivityOption } from './BookingModal'
import WhatsAppFloat from './WhatsAppFloat'

export type FaqItem = { question: string; answer: string }
export type SellingPoint = { title: string; description: string }

export type ClassLandingContent = {
  /** Canonical path, e.g. "/vegetarian-cooking-class-ubud" */
  path: string
  eyebrow: string
  h1: React.ReactNode
  /** Plain-text version of the H1 for schema/breadcrumbs */
  h1Plain: string
  intro: string
  heroImage: string
  heroImageAlt: string
  /** 2–4 paragraphs of genuine body copy */
  body: { heading: string; paragraphs: string[] }[]
  sellingPoints: SellingPoint[]
  faqs: FaqItem[]
  ctaHeading: string
  ctaSubtext: string
}

const SITE = 'https://tumangbaliclass.com'

export default function ClassLanding({
  content,
  activities,
}: {
  content: ClassLandingContent
  activities: ActivityOption[]
}) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: content.h1Plain, item: `${SITE}${content.path}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500">
              TUMANG BALI
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <Link href="/#classes" className="hover:text-orange-500 transition-colors">
              Classes
            </Link>
            <Link href="/#menu" className="hover:text-orange-500 transition-colors">
              Menu
            </Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-stone-50 to-orange-50/30 dark:from-orange-950/20 dark:via-zinc-950 dark:to-orange-900/10 -z-10" />
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-semibold tracking-wide border border-orange-200 dark:border-orange-900/30 mb-5">
              {content.eyebrow}
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-5">
              {content.h1}
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-7">
              {content.intro}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95">
                Book Now
              </BookButton>
              <a
                href="https://wa.me/6282210132418"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/60 hover:bg-white border border-stone-200 px-7 py-3.5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-stone-200 dark:border-zinc-800">
            <Image
              src={content.heroImage}
              alt={content.heroImageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Selling points */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.sellingPoints.map((sp, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-7 border border-stone-200 dark:border-zinc-800"
            >
              <h3 className="text-lg font-bold mb-2 text-orange-600 dark:text-orange-500">{sp.title}</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{sp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Body content */}
      <section className="py-8 px-6 max-w-3xl mx-auto space-y-12">
        {content.body.map((block, i) => (
          <div key={i}>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">{block.heading}</h2>
            <div className="space-y-4">
              {block.paragraphs.map((p, j) => (
                <p key={j} className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black tracking-tight text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {content.faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800"
            >
              <h3 className="font-bold text-lg mb-2">{f.question}</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{content.ctaHeading}</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">{content.ctaSubtext}</p>
          <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95">
            Book Your Cooking Class
          </BookButton>
          <p className="mt-8 text-sm text-stone-500">
            Explore more:{' '}
            <Link href="/" className="text-orange-600 font-semibold underline">
              full experience &amp; reviews
            </Link>{' '}
            ·{' '}
            <Link href="/blog" className="text-orange-600 font-semibold underline">
              Balinese food blog
            </Link>
          </p>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali Cooking Class · Ubud, Bali
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BookingModal activities={activities} />
      <WhatsAppFloat />
    </div>
  )
}
