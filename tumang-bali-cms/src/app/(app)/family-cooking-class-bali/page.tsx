import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { familyCookingClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Family Cooking Class in Bali — Kids Welcome, Ages 4+',
  description:
    'Bali cooking class for families with children aged 4+. Hands-on, kid-friendly Balinese cooking in Ubud with market tour, rice field walk & 10+ dishes. Private options available.',
  path: '/family-cooking-class-bali',
  ogTitle: 'Family Cooking Class in Bali — Kids Welcome, Ages 4+',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Family cooking class in Bali — kids and parents cooking together in Ubud',
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
    console.error('family cooking class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={familyCookingClass} activities={bookingActivities} />
}
