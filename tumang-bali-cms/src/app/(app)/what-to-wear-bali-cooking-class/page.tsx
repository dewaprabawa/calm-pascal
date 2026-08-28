import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { whatToWearClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'What to Wear to a Bali Cooking Class',
  description:
    'What to wear to a Bali cooking class? A complete packing guide: comfortable clothes, closed-toe shoes, sun protection and what to avoid.',
  path: '/what-to-wear-bali-cooking-class',
  ogTitle: 'What to Wear to a Bali Cooking Class',
  image: '/images/gallery-thumbs.jpg',
  imageAlt: 'What to wear to a Bali cooking class',
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
    console.error('what to wear page: could not load activities from CMS', err)
  }
  return <ClassLanding content={whatToWearClass} activities={bookingActivities} />
}
