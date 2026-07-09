import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { beginnersClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Bali Cooking Class for Beginners — No Experience Needed | Tumang Bali',
  description:
    'Never cooked before? Our Bali cooking class for beginners requires zero experience. Our patient local chefs take you from zero to a full traditional Balinese feast, step by step.',
  alternates: { canonical: 'https://tumangbaliclass.com/bali-cooking-class-for-beginners' },
  openGraph: {
    title: 'Bali Cooking Class for Beginners — No Experience Needed | Tumang Bali',
    description:
      'Never cooked before? Our Bali cooking class for beginners requires zero experience. Our patient local chefs take you from zero to a full traditional Balinese feast, step by step.',
    url: 'https://tumangbaliclass.com/bali-cooking-class-for-beginners',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img3.jpg', width: 1200, height: 630, alt: 'Bali cooking class for beginners' }],
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
  return <ClassLanding content={beginnersClass} activities={bookingActivities} />
}
