import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { familyCookingClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Family Cooking Class in Bali — Kids Welcome, Ages 4+ | Tumang Bali',
  description:
    'Bali cooking class for families with children aged 4+. Hands-on, kid-friendly Balinese cooking in Ubud with market tour, rice field walk & 10+ dishes. Private options available.',
  alternates: { canonical: 'https://tumangbaliclass.com/family-cooking-class-bali' },
  openGraph: {
    title: 'Family Cooking Class in Bali — Kids Welcome, Ages 4+',
    description:
      'Bali cooking class for families with children aged 4+. Hands-on, kid-friendly Balinese cooking in Ubud with market tour, rice field walk & 10+ dishes. Private options available.',
    url: 'https://tumangbaliclass.com/family-cooking-class-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-group.jpg', width: 1200, height: 630, alt: 'Family cooking class in Bali — kids and parents cooking together in Ubud' }],
  },
}

export default async function Page() {
  let bookingActivities: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs: activities } = await payload.find({ collection: 'activities' })
    bookingActivities = activities.map((a) => ({
      id: a.id as string,
      title: a.title as string,
      price: a.price as number,
    }))
  } catch (err) {
    console.error('family cooking class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={familyCookingClass} activities={bookingActivities} />
}
