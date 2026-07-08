import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { authenticClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Authentic Balinese Cooking Class in Ubud | Tumang Bali',
  description:
    'Immerse yourself in traditional Balinese flavors with our authentic cooking class in Ubud. Hand-ground spice paste, market tour, 10+ dishes, and cultural immersion.',
  alternates: { canonical: 'https://tumangbaliclass.com/authentic-balinese-cooking-class' },
  openGraph: {
    title: 'Authentic Balinese Cooking Class in Ubud | Tumang Bali',
    description:
      'Immerse yourself in traditional Balinese flavors with our authentic cooking class in Ubud. Hand-ground spice paste, market tour, 10+ dishes, and cultural immersion.',
    url: 'https://tumangbaliclass.com/authentic-balinese-cooking-class',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img4.jpg', width: 1200, height: 630, alt: 'Authentic Balinese cooking class in Ubud' }],
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
  return <ClassLanding content={authenticClass} activities={bookingActivities} />
}
