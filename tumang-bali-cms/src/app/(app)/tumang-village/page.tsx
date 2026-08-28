import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { tumangVillage } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Tumang Village Ubud — Authentic Balinese Cooking Class',
  description:
    'Visit Tumang village near Ubud for an authentic Balinese cooking class — rice paddies, morning market tour, and hands-on cooking with a local family.',
  path: '/tumang-village',
  ogTitle: 'Tumang Village, Bali — Home of Authentic Balinese Cooking Class',
  image: '/images/img4.jpg',
  imageAlt: 'Tumang Village Bali — traditional Balinese village kitchen and rice paddies',
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
    console.error('tumang village page: could not load activities from CMS', err)
  }
  return <ClassLanding content={tumangVillage} activities={bookingActivities} />
}
