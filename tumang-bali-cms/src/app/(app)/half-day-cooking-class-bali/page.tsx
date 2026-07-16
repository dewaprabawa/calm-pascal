import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { halfDayClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Half-Day Cooking Class in Bali | Tumang Bali',
  description:
    'Half-day Balinese cooking class in Ubud, Bali. Market tour, rice-field walk & 10+ dishes in 4-5 hours. Morning or afternoon sessions. Hotel pickup included.',
  alternates: { canonical: 'https://tumangbaliclass.com/half-day-cooking-class-bali' },
  openGraph: {
    title: 'Half-Day Cooking Class in Bali | Tumang Bali',
    description:
      'Half-day Balinese cooking class in Ubud, Bali. Market tour, rice-field walk & 10+ dishes in 4-5 hours. Morning or afternoon sessions. Hotel pickup included.',
    url: 'https://tumangbaliclass.com/half-day-cooking-class-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-satay.jpg', width: 1200, height: 630, alt: 'Half-day Balinese cooking class in Bali' }],
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
  return <ClassLanding content={halfDayClass} activities={bookingActivities} />
}
