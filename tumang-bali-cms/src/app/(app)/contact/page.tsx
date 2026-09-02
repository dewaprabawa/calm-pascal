import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { SITE_CONTACT, siteAddressLines } from '@/lib/siteContact'
import LegalPageShell, { LegalSection } from '../components/LegalPageShell'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact & Customer Service — Tumang Bali Cooking Class',
  description:
    'Contact Tumang Bali Cooking Class: WhatsApp +62 822-1013-2418, email tumangbalicookingclass@gmail.com, or visit Warung Tumang Bali in Petulu, Ubud.',
  path: '/contact',
  ogTitle: 'Contact | Tumang Bali',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Tumang Bali cooking class location near Ubud',
})

export default function ContactPage() {
  const addressLines = siteAddressLines()

  return (
    <LegalPageShell
      eyebrow="Customer service"
      title="Contact Us"
      intro="Reach Tumang Bali Cooking Class by WhatsApp, email, or at our village kitchen near Ubud. We usually reply within a few hours during the day."
    >
      <LegalSection title="WhatsApp">
        <p>
          Fastest way to check availability, secure a spot, arrange payment, or ask about pickup:
        </p>
        <p>
          <a
            href={`${SITE_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hi Tumang Bali — I would like to book / ask about a cooking class')}`}
            className="inline-flex items-center gap-2 text-orange-600 font-bold text-lg hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {SITE_CONTACT.whatsappDisplay}
          </a>
        </p>
        <p className="text-sm">
          Please include your preferred date, morning or afternoon session, number of guests, and
          hotel name in Ubud.
        </p>
      </LegalSection>

      <LegalSection title="Email">
        <ul className="list-none space-y-2 pl-0">
          <li>
            Primary:{' '}
            <a
              href={`mailto:${SITE_CONTACT.emailPrimary}`}
              className="text-orange-600 font-semibold hover:underline"
            >
              {SITE_CONTACT.emailPrimary}
            </a>
          </li>
          <li>
            Alternative:{' '}
            <a
              href={`mailto:${SITE_CONTACT.emailSecondary}`}
              className="text-orange-600 font-semibold hover:underline"
            >
              {SITE_CONTACT.emailSecondary}
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Cooking class address">
        <address className="not-italic space-y-1">
          {addressLines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </address>
        <p className="mt-3">
          <a
            href={SITE_CONTACT.mapsUrl}
            className="text-orange-600 font-semibold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </p>
        <p className="text-sm">
          Most guests use complimentary hotel pickup from the Ubud area. After you book, we confirm
          your exact pickup time on WhatsApp.
        </p>
      </LegalSection>

      <LegalSection title="Policies">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link href="/refund-policy" className="text-orange-600 font-semibold hover:underline">
              Refund Policy
            </Link>{' '}
            — cancel at least 24 hours before class for a 100% refund
          </li>
          <li>
            <Link href="/privacy-policy" className="text-orange-600 font-semibold hover:underline">
              Privacy Policy
            </Link>{' '}
            — how we protect personal and payment data
          </li>
        </ul>
      </LegalSection>
    </LegalPageShell>
  )
}
