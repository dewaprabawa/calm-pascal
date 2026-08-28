import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { cookingClassBali } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Cooking Class Bali — Hands-On Ubud Class with Market Tour',
  description:
    'Book a cooking class in Bali with a real market tour and 10+ traditional dishes. Our Ubud village class includes hotel pickup, rice-field walk, and local chefs.',
  path: '/cooking-class-bali',
  ogTitle: 'Cooking Class in Bali — Hands-On Balinese Cooking in Ubud',
  image: '/images/img1.jpg',
  imageAlt: 'Hands-on Balinese cooking class in Ubud',
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
    console.error('cooking class bali page: could not load activities from CMS', err)
  }
  return <ClassLanding content={cookingClassBali} activities={bookingActivities} />
}
