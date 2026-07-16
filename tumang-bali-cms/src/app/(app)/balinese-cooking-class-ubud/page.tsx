import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { balineseCookingClassUbud } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Balinese Cooking Class in Ubud — Traditional Cooking with Local Chefs | Tumang Bali',
  description: 'A traditional Balinese cooking class in Ubud with local chefs. Learn 10+ authentic dishes, grind your own spice paste, tour a morning market, and eat in a village kitchen.',
  alternates: { canonical: 'https://tumangbaliclass.com/balinese-cooking-class-ubud' },
  openGraph: {
    title: 'Balinese Cooking Class in Ubud — Traditional Cooking with Local Chefs',
    description: 'A traditional Balinese cooking class in Ubud with local chefs. Learn 10+ authentic dishes, grind your own spice paste, tour a morning market, and eat in a village kitchen.',
    url: 'https://tumangbaliclass.com/balinese-cooking-class-ubud',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-group.jpg', width: 1200, height: 630, alt: 'Balinese cooking class in Ubud with local chefs' }],
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
  return <ClassLanding content={balineseCookingClassUbud} activities={bookingActivities} />
}
