import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { halfDayClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Half-Day Cooking Class in Bali',
  description:
    'Half-day Balinese cooking class in Ubud, Bali. Market tour, rice-field walk & 10+ dishes in 4-5 hours. Morning or afternoon sessions. Hotel pickup included.',
  path: '/half-day-cooking-class-bali',
  ogTitle: 'Half-Day Cooking Class in Bali',
  image: '/images/gallery-satay.jpg',
  imageAlt: 'Half-day Balinese cooking class in Bali',
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
