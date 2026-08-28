import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { beginnersClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Bali Cooking Class for Beginners — No Experience Needed',
  description:
    'Never cooked before? Our Bali cooking class for beginners requires zero experience. Our patient local chefs take you from zero to a full traditional Balinese feast, step by step.',
  path: '/bali-cooking-class-for-beginners',
  ogTitle: 'Bali Cooking Class for Beginners — No Experience Needed',
  image: '/images/img3.jpg',
  imageAlt: 'Bali cooking class for beginners',
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
    console.error('beginners class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={beginnersClass} activities={bookingActivities} />
}
