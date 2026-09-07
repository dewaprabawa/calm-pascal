import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { SITE_CONTACT } from '@/lib/siteContact'
import LegalPageShell, { LegalSection } from '../components/LegalPageShell'

export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy — Tumang Bali Cooking Class',
  description:
    'How Tumang Bali Cooking Class protects your personal information and payment data when you book a class, contact us, or use tumangbaliclass.com.',
  path: '/privacy-policy',
  ogTitle: 'Privacy Policy | Tumang Bali',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Tumang Bali cooking class guests in Ubud village kitchen',
})

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Policies"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Tumang Bali Cooking Class collects, uses, and protects your personal information and payment-related data when you visit our website, book a class, or contact us."
    >
      <LegalSection title="Who we are">
        <p>
          Tumang Bali Cooking Class ({SITE_CONTACT.website}) is a family-run cooking school in{' '}
          {SITE_CONTACT.locality}, {SITE_CONTACT.region}, {SITE_CONTACT.country}. For privacy
          questions, contact{' '}
          <a
            href={`mailto:${SITE_CONTACT.emailPrimary}`}
            className="text-orange-600 font-semibold hover:underline"
          >
            {SITE_CONTACT.emailPrimary}
          </a>{' '}
          or WhatsApp{' '}
          <a
            href={SITE_CONTACT.whatsappUrl}
            className="text-orange-600 font-semibold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {SITE_CONTACT.whatsappDisplay}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>Depending on how you interact with us, we may collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name, email address, and phone / WhatsApp number</li>
          <li>Preferred class date, session, guest count, and hotel or pickup location</li>
          <li>Dietary needs, allergies, and other notes you choose to share</li>
          <li>Messages you send via our website forms, email, or WhatsApp</li>
          <li>Basic technical data such as browser type, device, and pages visited (via hosting and analytics cookies where enabled)</li>
        </ul>
      </LegalSection>

      <LegalSection title="How credit card and payment data is protected">
        <p>
          <strong>We do not store full credit card numbers on our website or servers.</strong>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Online / OTA bookings</strong> (GetYourGuide, Viator, Airbnb, and similar):
            card payments are processed by those platforms or their payment providers under their
            own security and PCI-compliant systems. Tumang Bali receives booking details needed to
            run your class — not your full card number.
          </li>
          <li>
            <strong>WhatsApp or direct bookings</strong>: payment is typically arranged by bank
            transfer, cash on the day, or another method confirmed with our team. We never ask you
            to send full card details over WhatsApp or email.
          </li>
          <li>
            Payment confirmations we keep (for example transfer receipts or booking references) are
            used only to verify your reservation and handle refunds when required.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use your personal data">
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Confirm availability, process bookings, and arrange hotel pickup</li>
          <li>Prepare menus for dietary requirements and allergies</li>
          <li>Respond to inquiries and provide customer service</li>
          <li>Process refunds or reschedules under our Refund Policy</li>
          <li>Improve our website and guest experience</li>
          <li>Comply with legal or accounting obligations</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </LegalSection>

      <LegalSection title="Who we share data with">
        <p>We only share information when needed to deliver the experience or as required by law:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Booking and payment partners when you choose to book through them</li>
          <li>Transport providers arranging pickup (hotel name / area only as needed)</li>
          <li>Website hosting, email, and form providers that process data on our behalf</li>
          <li>Authorities if legally required</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data security">
        <p>
          We take reasonable technical and organizational steps to protect personal data, including
          HTTPS on our website, limited staff access to guest booking details, and avoiding
          collection of sensitive payment card data. No method of transmission over the internet is
          100% secure; please use official booking channels and our published contact details only.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep data">
        <p>
          We keep booking and contact records for as long as needed to fulfill your class, handle
          follow-up questions or refunds, and meet basic record-keeping needs. You may ask us to
          update or delete information that is no longer required for these purposes.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and analytics">
        <p>
          Our site uses essential cookies for security and basic functionality. We also use Google
          Analytics 4 to understand how visitors find and use the site — for example which pages are
          read and which searches bring people here. Google Analytics sets cookies and processes
          data such as your approximate location, device, and browser on our behalf. We do not use
          it to identify you personally, and we do not sell this data.
        </p>
        <p>
          You can control cookies through your browser settings, and you can opt out of Google
          Analytics entirely using{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Google&apos;s opt-out browser add-on
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>You may request access to, correction of, or deletion of personal data we hold about you, subject to legal retention needs. Contact us at:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Email:{' '}
            <a
              href={`mailto:${SITE_CONTACT.emailPrimary}?subject=${encodeURIComponent('Privacy request')}`}
              className="text-orange-600 font-semibold hover:underline"
            >
              {SITE_CONTACT.emailPrimary}
            </a>
          </li>
          <li>
            WhatsApp:{' '}
            <a
              href={SITE_CONTACT.whatsappUrl}
              className="text-orange-600 font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {SITE_CONTACT.whatsappDisplay}
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Our classes welcome guests aged 8+ when booked by a responsible adult. We do not knowingly
          collect personal data from children for marketing. Booking details for minors should be
          provided by a parent or guardian.
        </p>
      </LegalSection>

      <LegalSection title="Updates to this policy">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top of
          this page will change when we do. Continued use of our website or booking services after
          an update means you accept the revised policy.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
