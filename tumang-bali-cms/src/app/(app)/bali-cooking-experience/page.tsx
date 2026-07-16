import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { baliCookingExperience } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Bali Cooking Experience — Complete Day of Authentic Balinese Cooking | Tumang Bali',
  description: 'A Bali cooking experience is more than a cooking class — it is a full day of cultural immersion. Visit a local market, walk through rice paddies, cook with a local family, and share a feast.',
  alternates: { canonical: 'https://tumangbaliclass.com/bali-cooking-experience' },
  openGraph: {
    title: 'Bali Cooking Experience — Complete Day of Authentic Balinese Cooking',
    description: 'A Bali cooking experience is more than a cooking class — it is a full day of cultural immersion. Visit a local market, walk through rice paddies, cook with a local family, and share a feast.',
    url: 'https://tumangbaliclass.com/bali-cooking-experience',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-chopping.jpg', width: 1200, height: 630, alt: 'Bali cooking experience — complete day of authentic Balinese cooking' }],
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
  return <ClassLanding content={baliCookingExperience} activities={bookingActivities} />
}
