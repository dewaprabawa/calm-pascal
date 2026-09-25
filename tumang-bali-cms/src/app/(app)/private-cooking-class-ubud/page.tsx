import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { privateClass } from '../components/landingContent'
import {
  formatIdr,
  isPromoActive,
  PRIVATE_ADULT_MIN2_IDR,
  PRIVATE_ADULT_SOLO_IDR,
  PROMO_LABEL,
  PROMO_PRIVATE_IDR,
} from '@/lib/pricing'

export const revalidate = 60

const privateSolo = isPromoActive()
  ? `${formatIdr(PROMO_PRIVATE_IDR)} ${PROMO_LABEL}`
  : formatIdr(PRIVATE_ADULT_SOLO_IDR)
const privateMin2 = isPromoActive()
  ? formatIdr(PROMO_PRIVATE_IDR)
  : formatIdr(PRIVATE_ADULT_MIN2_IDR)

export const metadata: Metadata = buildPageMetadata({
  // ≤46 chars before brand suffix — avoid SERP “…”
  title: isPromoActive()
    ? `Private Cooking Class Ubud — ${formatIdr(PROMO_PRIVATE_IDR)}`
    : 'Private Cooking Class Ubud — Own Chef',
  description: `Private cooking class in Ubud: your own chef, tailored menu, market tour. From ${privateSolo}${isPromoActive() ? '' : `, min. 2 ${privateMin2}`}. Free hotel pickup. Ideal for couples and solo travelers.`,
  path: '/private-cooking-class-ubud',
  ogTitle: `Private Cooking Class Ubud — From ${privateSolo}`,
  image: '/images/gallery-group.jpg',
  imageAlt: 'Private Balinese cooking class for a group in Ubud',
  keywords: [
    'private cooking class ubud',
    'private balinese cooking class',
    'solo cooking class ubud',
    'private chef cooking class bali',
    'honeymoon private cooking class ubud',
  ],
})

export default async function Page() {
  let bookingActivities: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs: activities } = await payload.find({ collection: 'activities' })
    bookingActivities = activities.map((a) => ({
      id: a.id as string,
      title: a.title as string,
      price: a.price as number,
      kidsPrice: (a as { kidsPrice?: number }).kidsPrice,
    }))
  } catch (err) {
    console.error('private class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={privateClass} activities={bookingActivities} />
}
