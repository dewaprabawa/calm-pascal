import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { cookingClassBali } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Cooking Class in Bali — Hands-On Balinese Cooking in Ubud | Tumang Bali',
  description: 'A cooking class in Bali is one of the best ways to experience the island. Our hands-on Balinese cooking class in Ubud includes a market tour, rice-field walk, and cooking 10+ dishes with a local chef.',
  alternates: { canonical: 'https://tumangbaliclass.com/cooking-class-bali' },
  openGraph: {
    title: 'Cooking Class in Bali — Hands-On Balinese Cooking in Ubud',
    description: 'A cooking class in Bali is one of the best ways to experience the island. Our hands-on Balinese cooking class in Ubud includes a market tour, rice-field walk, and cooking 10+ dishes with a local chef.',
    url: 'https://tumangbaliclass.com/cooking-class-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img1.jpg', width: 1200, height: 630, alt: 'Hands-on Balinese cooking class in Ubud' }],
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
  return <ClassLanding content={cookingClassBali} activities={bookingActivities} />
}
