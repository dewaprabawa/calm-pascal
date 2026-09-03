import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONTACT } from '@/lib/siteContact'

type LegalPageShellProps = {
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
  updatedLabel?: string
}

export default function LegalPageShell({
  eyebrow,
  title,
  intro,
  children,
  updatedLabel = 'Last updated: September 2026',
}: LegalPageShellProps) {
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
        <p className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-3">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{title}</h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">{intro}</p>
        <p className="mt-4 text-xs text-stone-500">{updatedLabel}</p>
      </header>

      <main className="px-6 pb-16 max-w-3xl mx-auto prose-legal space-y-10">{children}</main>

      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8">
          <h2 className="text-xl font-black mb-3">Customer service</h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
            Questions about bookings, refunds, or your personal data? Reach us any time:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              WhatsApp:{' '}
              <a
                href={`${SITE_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hi Tumang Bali — I have a question')}`}
                className="text-orange-600 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              Email:{' '}
              <a
                href={`mailto:${SITE_CONTACT.emailPrimary}`}
                className="text-orange-600 font-semibold hover:underline"
              >
                {SITE_CONTACT.emailPrimary}
              </a>
            </li>
            <li>
              Class location:{' '}
              <a
                href={SITE_CONTACT.mapsUrl}
                className="text-orange-600 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_CONTACT.venueName}, {SITE_CONTACT.streetAddress}, {SITE_CONTACT.locality},{' '}
                {SITE_CONTACT.region}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/about" className="text-orange-600 font-semibold hover:underline">
              About
            </Link>
            <Link href="/terms-of-service" className="text-orange-600 font-semibold hover:underline">
              Terms of Service
            </Link>
            <Link href="/editorial-policy" className="text-orange-600 font-semibold hover:underline">
              Editorial Policy
            </Link>
            <Link href="/refund-policy" className="text-orange-600 font-semibold hover:underline">
              Refund Policy
            </Link>
            <Link href="/privacy-policy" className="text-orange-600 font-semibold hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-orange-600 font-semibold hover:underline">
              Contact
            </Link>
          </div>
        </div>
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

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-2xl font-black mb-4">{title}</h2>
      <div className="text-stone-600 dark:text-stone-400 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
