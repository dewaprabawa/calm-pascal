import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { bestCookingClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Best Bali Cooking Class 2026 — Market Tour & 10 Dishes',
  description:
    'Honest guide to the best Bali cooking class in 2026. Compare market tours, hands-on cooking, and authentic dishes — then book Tumang Bali in Ubud village.',
  path: '/best-bali-cooking-class',
  ogTitle: 'Best Bali Cooking Class 2026 — Review & Book in Ubud',
  image: '/images/img1.jpg',
  imageAlt: 'Best Bali cooking class review 2026',
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
    console.error('best bali class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={bestCookingClass} activities={bookingActivities} />
}
