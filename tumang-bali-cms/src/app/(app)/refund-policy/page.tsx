import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { SITE_CONTACT } from '@/lib/siteContact'
import LegalPageShell, { LegalSection } from '../components/LegalPageShell'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Refund Policy — Tumang Bali Cooking Class',
  description:
    'Tumang Bali Cooking Class refund policy: cancel at least 24 hours before your class starts for a 100% refund. Learn how to request a refund or reschedule.',
  path: '/refund-policy',
  ogTitle: 'Refund Policy | Tumang Bali',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Tumang Bali cooking class guests in Ubud village kitchen',
})

export default function RefundPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Policies"
      title="Refund Policy"
      intro="Cancellations made at least 24 hours before the class starts will receive a 100% refund. This page explains our cancellation, refund, and reschedule rules for Tumang Bali Cooking Class."
    >
      <LegalSection title="100% refund with 24 hours’ notice">
        <p>
          If you cancel your booking <strong>at least 24 hours before the scheduled class start
          time</strong>, you will receive a <strong>100% refund</strong> of the amount you paid
          directly to Tumang Bali.
        </p>
        <p>
          Example: for a morning class starting at 08:30, cancel by 08:30 the day before to qualify
          for a full refund.
        </p>
      </LegalSection>

      <LegalSection title="Cancellations within 24 hours">
        <p>
          Cancellations made less than 24 hours before the class start time are not eligible for a
          cash refund. Where possible, we may offer a one-time reschedule to another available date
          within 30 days, subject to kitchen availability.
        </p>
      </LegalSection>

      <LegalSection title="No-shows">
        <p>
          Guests who do not attend and do not cancel in advance are not entitled to a refund or
          free reschedule.
        </p>
      </LegalSection>

      <LegalSection title="How to request a refund or change your date">
        <p>Message us as soon as your plans change. Include your booking name, class date, session (morning or afternoon), and number of guests.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            WhatsApp:{' '}
            <a
              href={`${SITE_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hi Tumang Bali — I need to cancel / reschedule my cooking class')}`}
              className="text-orange-600 font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {SITE_CONTACT.whatsappDisplay}
            </a>
          </li>
          <li>
            Email:{' '}
            <a
              href={`mailto:${SITE_CONTACT.emailPrimary}?subject=${encodeURIComponent('Refund / cancellation request')}`}
              className="text-orange-600 font-semibold hover:underline"
            >
              {SITE_CONTACT.emailPrimary}
            </a>
          </li>
        </ul>
        <p>
          We aim to confirm refund or reschedule requests within 1–2 business days. Approved refunds
          are returned to the original payment method when possible.
        </p>
      </LegalSection>

      <LegalSection title="Bookings made on partner platforms">
        <p>
          If you booked through GetYourGuide, Viator, Airbnb Experiences, TripAdvisor, or
          another partner, that platform’s cancellation and refund rules apply. Please request
          changes or refunds through the platform where you paid. We are happy to help via WhatsApp
          if you need our booking reference.
        </p>
      </LegalSection>

      <LegalSection title="Classes we must cancel">
        <p>
          If we cancel a class due to weather, safety, illness, or other circumstances beyond our
          control, you may choose a full refund or a free transfer to another available date.
        </p>
      </LegalSection>

      <LegalSection title="Partial attendance & dietary notes">
        <p>
          Refunds are not issued for arriving late, leaving early, or unused inclusions (for
          example skipping the market tour). Dietary preferences should be shared at booking or at
          least 24 hours before class so we can prepare the right menu.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
