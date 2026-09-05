import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { authenticClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Authentic Balinese Cooking Class — Base Genep in a Village Kitchen',
  description:
    'Authentic Balinese cooking: hand-ground base genep, market tour, rice-field walk, 10+ dishes in a Tumang village kitchen near Ubud. From IDR 350K, free pickup.',
  path: '/authentic-balinese-cooking-class',
  ogTitle: 'Authentic Balinese Cooking Class — Village Kitchen near Ubud',
  image: '/images/img4.jpg',
  imageAlt: 'Authentic Balinese cooking class in Ubud',
  keywords: [
    'authentic balinese cooking class',
    'authentic cooking class ubud',
    'traditional balinese cooking class',
    'base genep cooking class',
    'village cooking class ubud',
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
    console.error('authentic class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={authenticClass} activities={bookingActivities} />
}
