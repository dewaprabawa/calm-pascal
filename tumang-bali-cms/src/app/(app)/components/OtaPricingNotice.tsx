import React from 'react'
import Link from 'next/link'
import { DIRECT_SHARED_CLASS_IDR, OTA_INSTANT_CHECKOUT_NOTE } from '@/lib/otaBookingLinks'
import { OTA_SAME_PRICE_NOTE, formatIdr } from '@/lib/pricing'

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
        <strong>secure your spot with instant checkout</strong> — same price as direct (
        {formatIdr(DIRECT_SHARED_CLASS_IDR)} shared for 2+ adults). No commission overcharge.{' '}
        <Link href="/book-your-cooking-class" className="text-orange-600 font-semibold underline">
          Book any channel
        </Link>{' '}
        at the same rate (WhatsApp is a consultation, not instant checkout).
      </p>
    )
  }

  return (
    <aside
      className={`${boxClass} p-5 md:p-6 my-6 ${className}`}
      aria-label="OTA pricing transparency note"
    >
      <p className="font-bold text-stone-900 dark:text-stone-100 mb-2">Transparent pricing — same on every channel</p>
      <p className="text-base mb-3">
        <strong>{OTA_INSTANT_CHECKOUT_NOTE}</strong>
      </p>
      <p className="text-base mb-3">
        Our shared class from{' '}
        <strong>{formatIdr(DIRECT_SHARED_CLASS_IDR)}</strong> per adult (2+ participants) applies on{' '}
        <Link href="/book-your-cooking-class" className="text-orange-600 font-semibold underline">
          tumangbaliclass.com
        </Link>
        , WhatsApp, GetYourGuide, Viator, and Airbnb Experiences.
      </p>
      <p className="text-base">{OTA_SAME_PRICE_NOTE}</p>
    </aside>
  )
}
