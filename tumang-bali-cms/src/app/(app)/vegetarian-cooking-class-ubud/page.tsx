import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { vegetarianClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Vegetarian Cooking Class in Ubud',
  description:
    'Plant-based Balinese cooking class in Ubud. Cook tempe, tofu, sayur urap Cook tempe, tofu, sayur urap & sambal matah from scratch with local chefs. Vegan on request. Market tour & hotel pickup. sambal matah from scratch with local chefs. Vegan on request. Hotel pickup included.',
  path: '/vegetarian-cooking-class-ubud',
  ogTitle: 'Vegetarian Cooking Class in Ubud',
  image: '/images/gallery-chopping.jpg',
  imageAlt: 'Vegetarian Balinese cooking class in Ubud',
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
    console.error('vegetarian class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={vegetarianClass} activities={bookingActivities} />
}
