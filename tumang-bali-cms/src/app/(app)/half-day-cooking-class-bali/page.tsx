import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { halfDayClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Half-Day Cooking Class Ubud — ~4 Hours, Pickup Included',
  description:
    'Half-day cooking class near Ubud (~4 hours): market tour, rice-field walk, 10+ dishes. Morning or afternoon. Free hotel pickup from IDR 506,370. Max 8 guests.',
  path: '/half-day-cooking-class-bali',
  ogTitle: 'Half-Day Cooking Class Ubud — Morning or Afternoon',
  image: '/images/gallery-satay.jpg',
  imageAlt: 'Half-day Balinese cooking class in Bali',
  keywords: [
    'half day cooking class bali',
    'half day cooking class ubud',
    'short cooking class ubud',
    'morning cooking class ubud',
    'afternoon cooking class ubud',
    'cooking class with hotel transfer ubud',
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
    console.error('half day page: could not load activities from CMS', err)
  }
  return <ClassLanding content={halfDayClass} activities={bookingActivities} />
}
