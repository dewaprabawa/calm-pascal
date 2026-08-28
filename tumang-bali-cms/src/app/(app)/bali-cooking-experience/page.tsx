import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { baliCookingExperience } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Bali Cooking Experience — Complete Day of Authentic Balinese Cooking',
  description:
    'A Bali cooking experience is more than a cooking class — it is a full day of cultural immersion. Visit a local market, walk through rice paddies, cook with a local family, and share a feast.',
  path: '/bali-cooking-experience',
  ogTitle: 'Bali Cooking Experience — Complete Day of Authentic Balinese Cooking',
  image: '/images/gallery-chopping.jpg',
  imageAlt: 'Bali cooking experience — complete day of authentic Balinese cooking',
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
    console.error('experience page: could not load activities from CMS', err)
  }
  return <ClassLanding content={baliCookingExperience} activities={bookingActivities} />
}
