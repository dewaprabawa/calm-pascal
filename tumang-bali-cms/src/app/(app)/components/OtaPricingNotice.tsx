import React from 'react'
import Link from 'next/link'
import { DIRECT_SHARED_CLASS_IDR, OTA_INSTANT_CHECKOUT_NOTE } from '@/lib/otaBookingLinks'

type Props = {
  compact?: boolean
  className?: string
}

export default function OtaPricingNotice({ compact = false, className = '' }: Props) {
  const boxClass =
    'rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/80 dark:bg-amber-950/20 text-stone-700 dark:text-stone-300 leading-relaxed'

  if (compact) {
    return (
      <p className={`text-sm text-stone-600 dark:text-stone-400 ${className}`}>
        <strong>Use an OTA</strong> (GetYourGuide, Viator, Airbnb) to{' '}
        <strong>secure your spot with instant checkout</strong> — prices may be slightly above our direct IDR{' '}
        {DIRECT_SHARED_CLASS_IDR.toLocaleString('id-ID')} rate due to platform commission. Same class —{' '}
        <Link href="/book-your-cooking-class" className="text-orange-600 font-semibold underline">
          book direct
        </Link>{' '}
        for the lowest price (WhatsApp is a consultation, not instant checkout).
      </p>
    )
  }

  return (
    <aside
      className={`${boxClass} p-5 md:p-6 my-6 ${className}`}
      aria-label="OTA pricing transparency note"
    >
      <p className="font-bold text-stone-900 dark:text-stone-100 mb-2">Transparent pricing — please read</p>
      <p className="text-base mb-3">
        <strong>{OTA_INSTANT_CHECKOUT_NOTE}</strong> OTA checkout is best when you are travelling soon and
        want immediate confirmation.
      </p>
      <p className="text-base mb-3">
        Our <strong>direct rate</strong> is{' '}
        <strong>IDR {DIRECT_SHARED_CLASS_IDR.toLocaleString('id-ID')}</strong> per person for a shared class
        when you book on{' '}
        <Link href="/book-your-cooking-class" className="text-orange-600 font-semibold underline">
          tumangbaliclass.com
        </Link>{' '}
        or WhatsApp — usually the lowest price, but WhatsApp is a consultation to secure your spot, not
        instant payment checkout.
      </p>
      <p className="text-base">
        If you book through <strong>GetYourGuide</strong>, <strong>Viator</strong>, or{' '}
        <strong>Airbnb Experiences</strong>, the price shown may be <strong>slightly higher</strong> because
        those platforms charge a booking commission. You get the same experience, chefs, and inclusions — we
        are not trying to charge you more; the difference is the platform fee.
      </p>
    </aside>
  )
}
