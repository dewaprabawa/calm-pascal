import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { privateClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Private Cooking Class in Ubud | Tumang Bali',
  description:
    'Private Balinese cooking class in Ubud for couples, families & groups. Your own chef, tailored menu, market tour & hotel pickup. Perfect for special occasions.',
  alternates: { canonical: 'https://tumangbaliclass.com/private-cooking-class-ubud' },
  openGraph: {
    title: 'Private Cooking Class in Ubud | Tumang Bali',
    description:
      'Private Balinese cooking class in Ubud for couples, families & groups. Your own chef, tailored menu, market tour & hotel pickup. Perfect for special occasions.',
    url: 'https://tumangbaliclass.com/private-cooking-class-ubud',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-group.jpg', width: 1200, height: 630, alt: 'Private Balinese cooking class for a group in Ubud' }],
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
  return <ClassLanding content={privateClass} activities={bookingActivities} />
}
