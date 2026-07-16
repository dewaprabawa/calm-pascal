import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { whatIsTumangBali } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'What is Tumang Bali? — The Village Behind Our Cooking Class | Tumang Bali',
  description: 'Tumang Bali refers to the village of Tumang in Central Bali — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the Tumang Bali Cooking Class experience.',
  alternates: { canonical: 'https://tumangbaliclass.com/blog/what-is-tumang-bali' },
  openGraph: {
    title: 'What is Tumang Bali? — The Village Behind Our Cooking Class',
    description: 'Tumang Bali refers to the village of Tumang in Central Bali — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the Tumang Bali Cooking Class experience.',
    url: 'https://tumangbaliclass.com/blog/what-is-tumang-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-girls.jpg', width: 1200, height: 630, alt: 'Tumang Bali village — traditional Balinese village life and rice paddies' }],
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
  return <ClassLanding content={whatIsTumangBali} activities={bookingActivities} />
}
