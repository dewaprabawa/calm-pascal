import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { balineseCookingClassUbud } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Cooking Class Ubud — Balinese Cooking with Local Chefs',
  description:
    'Book the best cooking class in Ubud — morning market tour, rice-field walk, 10+ traditional dishes, and hands-on cooking with local chefs. From IDR 350K. Free hotel pickup.',
  path: '/balinese-cooking-class-ubud',
  ogTitle: 'Cooking Class Ubud — Authentic Balinese Class | TripAdvisor 2026',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Cooking class in Ubud Bali with local chefs',
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
    console.error('balinese class ubud page: could not load activities from CMS', err)
  }
  return <ClassLanding content={balineseCookingClassUbud} activities={bookingActivities} />
}
