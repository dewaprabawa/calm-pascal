import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { SITE_CONTACT } from '@/lib/siteContact'
import LegalPageShell, { LegalSection } from '../components/LegalPageShell'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Editorial Policy',
  description:
    'How Tumang Bali creates and updates blog guides, recipes, and travel tips — expertise, sourcing, corrections, and commercial disclosure.',
  path: '/editorial-policy',
  ogTitle: 'Editorial Policy | Tumang Bali',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Tumang Bali village kitchen editorial standards',
})

export default function EditorialPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Trust & Content"
      title="Editorial Policy"
      intro="This policy explains how Tumang Bali researches, reviews, and updates the guides, recipes, and planning articles we publish for travelers."
      updatedLabel="Last updated: October 2026"
    >
      <LegalSection title="Who writes our content">
        <p>
          Articles are produced by the Tumang Bali team with review from our kitchen instructors,
          including Chef Wayan Suryana (Ubud-born head chef with 15+ years teaching Balinese cuisine to
          international guests). Practical details — prices, pickup, menu inclusions — are checked against
          our live booking operations.
        </p>
      </LegalSection>

      <LegalSection title="Sources & firsthand experience">
        <p>
          We prioritize firsthand kitchen and village experience: market sourcing, spice-paste methods,
          and guest feedback. When we mention third-party schools, OTAs, or destinations, we label
          comparison content clearly and update figures when we re-verify them.
        </p>
      </LegalSection>

      <LegalSection title="Updates & corrections">
        <p>
          Pricing, schedules, and travel rules can change. We date-stamp material where practical (see
          freshness notes on key guides) and correct factual errors when reported. Email{' '}
          <a
            href={`mailto:${SITE_CONTACT.emailPrimary}`}
            className="text-orange-600 font-semibold hover:underline"
          >
            {SITE_CONTACT.emailPrimary}
          </a>{' '}
          with correction requests.
        </p>
      </LegalSection>

      <LegalSection title="Commercial disclosure">
        <p>
          Tumang Bali operates a cooking school. Educational articles may include links to our booking
          pages. When we recommend partner booking channels (GetYourGuide, Viator, Airbnb), we note
          that listed rates match our direct prices — we do not add a commission markup for those
          checkouts. We do not accept payment for undisclosed positive reviews.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Editorial questions: {SITE_CONTACT.emailPrimary} · Learn more on our{' '}
          <a href="/about" className="text-orange-600 font-semibold hover:underline">
            About page
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
