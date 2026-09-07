import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { privateClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Private Cooking Class Ubud — 1 Person IDR 633,090, Free Pickup',
  description:
    'Private cooking class in Ubud: your own chef, tailored menu, market tour. 1 person IDR 633,090, min. 2 IDR 1,266,180, free hotel pickup. Ideal for couples and solo travelers.',
  path: '/private-cooking-class-ubud',
  ogTitle: 'Private Cooking Class Ubud — From IDR 633,090 with Pickup',
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
