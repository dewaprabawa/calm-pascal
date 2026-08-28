import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { marketTourClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Cooking Class with Market Tour & Rice Field Walk',
  description:
    'Start your Ubud cooking class with a guided morning market tour. Pick fresh ingredients, walk the rice fields, then cook 10+ traditional dishes. Hotel pickup included.',
  path: '/cooking-class-with-market-tour-ubud',
  ogTitle: 'Cooking Class with Market Tour & Rice Field Walk',
  image: '/images/img2.jpg',
  imageAlt: 'Ubud morning market tour during a Balinese cooking class',
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
    console.error('market tour page: could not load activities from CMS', err)
  }
  return <ClassLanding content={marketTourClass} activities={bookingActivities} />
}
