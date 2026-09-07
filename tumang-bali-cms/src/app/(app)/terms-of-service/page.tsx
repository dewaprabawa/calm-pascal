import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { SITE_CONTACT } from '@/lib/siteContact'
import LegalPageShell, { LegalSection } from '../components/LegalPageShell'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description:
    'Terms for booking and attending Tumang Bali Cooking Class near Ubud — payments, cancellations, guest responsibilities, and liability.',
  path: '/terms-of-service',
  ogTitle: 'Terms of Service | Tumang Bali',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Tumang Bali cooking class guests in a village kitchen',
})

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      eyebrow="Policies"
      title="Terms of Service"
      intro="These Terms of Service govern bookings, payments, attendance, and use of tumangbaliclass.com for Tumang Bali Cooking Class."
      updatedLabel="Last updated: October 2026"
    >
      <LegalSection title="Agreement">
        <p>
          By booking a class, contacting us, or using {SITE_CONTACT.website}, you agree to these Terms
          and our{' '}
          <a href="/privacy-policy" className="text-orange-600 font-semibold hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/refund-policy" className="text-orange-600 font-semibold hover:underline">
            Refund Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Bookings & payment">
        <p>
          Class spots are confirmed after we accept your booking request and receive any required deposit
          or full payment (direct WhatsApp booking, our online book page, or an OTA partner such as
          GetYourGuide, Viator, or Airbnb). Partner platform checkout rules may apply in addition
          to these Terms.
        </p>
        <p>
          Published shared and private rates are in Indonesian Rupiah and are{' '}
          <strong>all-inclusive</strong> for the core class experience (instruction, ingredients,
          meal, recipe booklet, and Ubud-area hotel pickup where advertised). We do not add
          required on-site fees to participate. Optional extras (for example discretionary tips or
          souvenirs) are never required to complete the class.
        </p>
        <p>
          Rates are the same on tumangbaliclass.com, WhatsApp, GetYourGuide, Viator, and Airbnb
          Experiences — we do not overcharge for partner checkout. Currency display or platform
          formatting may differ; the experience and inclusions are the same.
        </p>
      </LegalSection>

      <LegalSection title="GetYourGuide bookings">
        <p>
          When you book through GetYourGuide, you purchase the class directly from Tumang Bali.
          GetYourGuide acts as our commercial agent for checkout, payment collection, and customer
          service on that booking. Cancel, modify, or request refunds for GetYourGuide bookings
          through GetYourGuide (see our{' '}
          <a href="/refund-policy" className="text-orange-600 font-semibold hover:underline">
            Refund Policy
          </a>
          ). We do not accept GetYourGuide cancellations directly via WhatsApp or email.
        </p>
      </LegalSection>

      <LegalSection title="Guest responsibilities">
        <p>
          Arrive ready for pickup at the agreed time, wear closed or secure shoes suitable for a market
          walk and kitchen work, and tell us about allergies or dietary needs when booking. Children must
          be supervised by a parent or guardian.
        </p>
      </LegalSection>

      <LegalSection title="Changes, weather & force majeure">
        <p>
          Outdoor market and rice-field segments may be shortened during heavy rain or local ceremonies.
          We will still deliver the hands-on kitchen experience whenever safely possible. See the Refund
          Policy for cancellation timing.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          Cooking involves knives, heat, and open kitchens. You participate at your own risk and agree we
          are not liable for loss, injury, or damage beyond what applicable Indonesian law requires,
          except where caused by our proven gross negligence.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms: {SITE_CONTACT.emailPrimary} or WhatsApp {SITE_CONTACT.whatsappDisplay}.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
