import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { SITE_CONTACT } from '@/lib/siteContact'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'About Tumang Bali',
  description:
    'Meet the Tumang Bali family and Chef Wayan Suryana — Ubud-born instructors sharing Balinese spice pastes, market sourcing, and village kitchen traditions.',
  path: '/about',
  ogTitle: 'About Tumang Bali | Family Cooking School',
  image: '/images/chef-wayan-suryana.jpg',
  imageAlt: 'Chef Wayan Suryana with Balinese dishes at Tumang Bali Cooking Class',
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" width={36} height={36} className="object-cover w-full h-full" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500">
              TUMANG BALI
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/contact" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
            <Link href="/book-your-cooking-class" className="hover:text-orange-500 transition-colors">
              Book
            </Link>
          </div>
        </div>
      </nav>

      <header className="pt-16 pb-10 px-6 max-w-3xl mx-auto text-center">
        <p className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-3">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">About Tumang Bali</h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
          A family-run village kitchen near Ubud teaching travelers how Balinese food is really made —
          from the morning pasar to hand-ground Base Genep.
        </p>
      </header>

      <main id="main-content" className="px-6 pb-16 max-w-3xl mx-auto space-y-12">
        {/* Legacy hash from older pages linking #wayan-sudiana */}
        <span id="wayan-sudiana" className="sr-only" aria-hidden="true" />
        <section id="wayan-suryana" className="overflow-hidden rounded-3xl border border-orange-100 bg-[#fff8f1] dark:border-orange-950/40 dark:bg-zinc-900">
          <div className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[2/1]">
            <Image
              src="/images/chef-wayan-suryana.jpg"
              alt="Chef Wayan Suryana with Balinese dishes at Tumang Bali Cooking Class"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-[center_25%]"
              priority
            />
          </div>
          <div className="space-y-4 p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-400">
              Head chef
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Wayan Suryana</h2>
            <p className="text-sm font-semibold text-stone-500">Cooking Instructor · Ubud, Bali</p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Wayan was born and raised in the Ubud area and has more than 15 years of experience teaching
              Balinese culinary heritage to international guests. He specializes in Base Genep spice paste,
              market ingredient selection, banana-leaf wrapping techniques, and adapting traditional recipes
              for vegetarian and vegan diners — all taught in clear English.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Credentials guests care about: hands-on instruction (not a demo), small groups (max 8), and
              TripAdvisor Travelers&apos; Choice recognition for consistent hospitality and food quality.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black">Why we teach in Tumang village</h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            Tumang is a traditional Balinese village in Gianyar Regency, roughly 30 minutes from central
            Ubud. We host classes at Warung Tumang Bali ({SITE_CONTACT.streetAddress}) so guests can taste
            village hospitality — rice paddies outside the kitchen, market aromas in the morning, and a
            shared feast at the end of the session.
          </p>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            Shared sessions start at IDR 506,370 per adult (2+ participants; IDR 616,032 for 1). Private one-person sessions are IDR 633,090
            (min. 2 participants IDR 1,266,180). Hotel pickup in the Ubud area is complimentary.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 space-y-3">
          <h2 className="text-xl font-black">Talk with our team</h2>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            WhatsApp{' '}
            <a
              href={SITE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-semibold hover:underline"
            >
              {SITE_CONTACT.whatsappDisplay}
            </a>{' '}
            · Email{' '}
            <a href={`mailto:${SITE_CONTACT.emailPrimary}`} className="text-orange-600 font-semibold hover:underline">
              {SITE_CONTACT.emailPrimary}
            </a>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm pt-2">
            <Link href="/editorial-policy" className="text-orange-600 font-semibold hover:underline">
              Editorial Policy
            </Link>
            <Link href="/press" className="text-orange-600 font-semibold hover:underline">
              Press Kit
            </Link>
            <Link href="/contact" className="text-orange-600 font-semibold hover:underline">
              Contact
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali ·{' '}
        <Link href="/" className="text-orange-600 hover:underline">
          Home
        </Link>
      </footer>
    </div>
  )
}
