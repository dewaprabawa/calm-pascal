import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { tumpengMakingClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Tumpeng Making Class in Bali — Learn Traditional Balinese Cone Rice | Tumang Bali',
  description: 'Learn to make tumpeng — the iconic Balinese cone-shaped ceremonial rice dish — in our hands-on cooking class in Tumang village. Includes market tour and recipe booklet.',
  alternates: { canonical: 'https://tumangbaliclass.com/tumpeng-making-class' },
  openGraph: {
    title: 'Tumpeng Making Class in Bali — Learn Traditional Balinese Cone Rice',
    description: 'Learn to make tumpeng — the iconic Balinese cone-shaped ceremonial rice dish — in our hands-on cooking class in Tumang village.',
    url: 'https://tumangbaliclass.com/tumpeng-making-class',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/img2.jpg', width: 1200, height: 630, alt: 'Tumpeng making class in Bali — traditional Balinese cone-shaped rice dish' }],
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
  return <ClassLanding content={tumpengMakingClass} activities={bookingActivities} />
}
