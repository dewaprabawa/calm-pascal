import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { authenticClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'What Makes Our Balinese Class Authentic',
  description:
    'Discover the Base Genep spice paste that defines true Balinese cuisine. Learn how hand-ground traditional ingredients make our Ubud cooking class authentic, not a tourist shortcut.',
  path: '/authentic-balinese-cooking-class',
  ogTitle: 'What Makes Our Balinese Class Authentic',
  image: '/images/img4.jpg',
  imageAlt: 'Authentic Balinese cooking class in Ubud',
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
    console.error('authentic class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={authenticClass} activities={bookingActivities} />
}
