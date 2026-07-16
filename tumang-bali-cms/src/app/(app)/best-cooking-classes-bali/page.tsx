import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { bestCookingClassesBali } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Best Cooking Classes in Bali 2026 — Reviewed & Compared | Tumang Bali',
  description: 'We compared the best cooking classes in Bali so you don\'t have to. An honest review of what to expect, what to avoid, and why Tumang Bali ranks among the best for authentic hands-on Balinese cuisine.',
  alternates: { canonical: 'https://tumangbaliclass.com/best-cooking-classes-bali' },
  openGraph: {
    title: 'Best Cooking Classes in Bali 2026 — Reviewed & Compared',
    description: 'We compared the best cooking classes in Bali so you don\'t have to. An honest review of what to expect, what to avoid, and why Tumang Bali ranks among the best.',
    url: 'https://tumangbaliclass.com/best-cooking-classes-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img1.jpg', width: 1200, height: 630, alt: 'Best cooking classes in Bali 2026 — reviewed and compared' }],
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
  return <ClassLanding content={bestCookingClassesBali} activities={bookingActivities} />
}
