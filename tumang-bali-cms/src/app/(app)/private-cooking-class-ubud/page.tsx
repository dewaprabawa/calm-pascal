import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { privateClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Private Cooking Class in Ubud',
  description:
    'Private Balinese cooking class in Ubud. 1 person IDR 650K, kids IDR 550K. Your own chef, tailored menu, market tour & hotel pickup.',
  path: '/private-cooking-class-ubud',
  ogTitle: 'Private Cooking Class in Ubud',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Private Balinese cooking class for a group in Ubud',
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
