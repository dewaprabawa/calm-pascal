import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../../components/ClassLanding'
import { whatIsTumangBali } from '../../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'What is Tumang Bali? — The Village Behind Our Cooking Class',
  description:
    'Tumang Bali refers to the village of Tumang in Central Bali — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the Tumang Bali Cooking Class experience.',
  path: '/blog/what-is-tumang-bali',
  ogTitle: 'What is Tumang Bali? — The Village Behind Our Cooking Class',
  image: '/images/gallery-girls.jpg',
  imageAlt: 'Tumang Bali village — traditional Balinese village life and rice paddies',
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
    console.error('what is tumang page: could not load activities from CMS', err)
  }
  return <ClassLanding content={whatIsTumangBali} activities={bookingActivities} />
}
