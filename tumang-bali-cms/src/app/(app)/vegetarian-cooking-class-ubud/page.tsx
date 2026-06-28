import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { vegetarianClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Vegetarian Cooking Class in Ubud | Tumang Bali',
  description:
    'Plant-based Balinese cooking class in Ubud. Cook tempe, tofu, sayur urap Cook tempe, tofu, sayur urap & sambal matah from scratch with local chefs. Vegan on request. Market tour & hotel pickup. sambal matah from scratch with local chefs. Vegan on request. Hotel pickup included.',
  alternates: { canonical: 'https://tumangbaliclass.com/vegetarian-cooking-class-ubud' },
  openGraph: {
    title: 'Vegetarian Cooking Class in Ubud | Tumang Bali',
    description:
      'Plant-based Balinese cooking class in Ubud. Cook tempe, tofu, sayur urap Cook tempe, tofu, sayur urap & sambal matah from scratch with local chefs. Vegan on request. Market tour & hotel pickup. sambal matah from scratch with local chefs. Vegan on request. Hotel pickup included.',
    url: 'https://tumangbaliclass.com/vegetarian-cooking-class-ubud',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-chopping.jpg', width: 1200, height: 630, alt: 'Vegetarian Balinese cooking class in Ubud' }],
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
  return <ClassLanding content={vegetarianClass} activities={bookingActivities} />
}
