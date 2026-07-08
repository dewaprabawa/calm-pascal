import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { whatToWearClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'What to Wear to a Balinese Cooking Class — Complete Packing Guide',
  description:
    'What to wear to a Bali cooking class? A complete packing guide: comfortable clothes, closed-toe shoes, sun protection and what to avoid.',
  alternates: { canonical: 'https://tumangbaliclass.com/what-to-wear-bali-cooking-class' },
  openGraph: {
    title: 'What to Wear to a Balinese Cooking Class — Complete Packing Guide',
    description:
      'What to wear to a Bali cooking class? A complete packing guide: comfortable clothes, closed-toe shoes, sun protection and what to avoid.',
    url: 'https://tumangbaliclass.com/what-to-wear-bali-cooking-class',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-thumbs.jpg', width: 1200, height: 630, alt: 'What to wear to a Bali cooking class' }],
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
  return <ClassLanding content={whatToWearClass} activities={bookingActivities} />
}
