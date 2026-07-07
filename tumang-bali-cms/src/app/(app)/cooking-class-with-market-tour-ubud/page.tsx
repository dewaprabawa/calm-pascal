import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { marketTourClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Cooking Class with Market Tour in Ubud',
  description:
    'Balinese cooking class with a guided Ubud morning market tour. Pick fresh ingredients, walk the rice fields, then cook 10+ dishes. Hotel pickup.',
  alternates: { canonical: 'https://tumangbaliclass.com/cooking-class-with-market-tour-ubud' },
  openGraph: {
    title: 'Cooking Class with Market Tour in Ubud',
    description:
      'Balinese cooking class with a guided Ubud morning market tour. Pick fresh ingredients, walk the rice fields, then cook 10+ dishes. Hotel pickup.',
    url: 'https://tumangbaliclass.com/cooking-class-with-market-tour-ubud',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img2.jpg', width: 1200, height: 630, alt: 'Ubud morning market tour during a Balinese cooking class' }],
  },
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const { docs: activities } = await payload.find({ collection: 'activities' })
  const bookingActivities = activities.map((a) => ({
    id: a.id as string,
    title: a.title as string,
    price: a.price as number,
  }))
  return <ClassLanding content={marketTourClass} activities={bookingActivities} />
}
