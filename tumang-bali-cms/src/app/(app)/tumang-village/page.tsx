import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { tumangVillage } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Tumang Village, Bali — Home of Authentic Balinese Cooking Class | Tumang Bali',
  description: 'Tumang village is a traditional Balinese village 30 minutes from Ubud, where our cooking class takes place. Experience real village life, rice paddies, and authentic cooking.',
  alternates: { canonical: 'https://tumangbaliclass.com/tumang-village' },
  openGraph: {
    title: 'Tumang Village, Bali — Home of Authentic Balinese Cooking Class',
    description: 'Tumang village is a traditional Balinese village 30 minutes from Ubud, where our cooking class takes place. Experience real village life, rice paddies, and authentic cooking.',
    url: 'https://tumangbaliclass.com/tumang-village',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img4.jpg', width: 1200, height: 630, alt: 'Tumang Village Bali — traditional Balinese village kitchen and rice paddies' }],
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
  return <ClassLanding content={tumangVillage} activities={bookingActivities} />
}
