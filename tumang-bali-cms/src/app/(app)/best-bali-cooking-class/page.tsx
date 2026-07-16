import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { bestCookingClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Best Bali Cooking Classes 2026 — Review & Book | Tumang Bali',
  description:
    'An honest review and guide to the best Bali cooking classes in 2026. What to look for, what to avoid, and how to choose the right class for your trip.',
  alternates: { canonical: 'https://tumangbaliclass.com/best-bali-cooking-class' },
  openGraph: {
    title: 'Best Bali Cooking Classes 2026 — Review & Book | Tumang Bali',
    description:
      'An honest review and guide to the best Bali cooking classes in 2026. What to look for, what to avoid, and how to choose the right class for your trip.',
    url: 'https://tumangbaliclass.com/best-bali-cooking-class',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img1.jpg', width: 1200, height: 630, alt: 'Best Bali cooking class review 2026' }],
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
  return <ClassLanding content={bestCookingClass} activities={bookingActivities} />
}
