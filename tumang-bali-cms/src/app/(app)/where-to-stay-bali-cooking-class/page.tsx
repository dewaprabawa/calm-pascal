import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { whereToStayClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Where to Stay for a Bali Cooking Class | Tumang Bali',
  description:
    'Planning a cooking class in Bali? Best areas to stay in Ubud, Seminyak and Canggu for a seamless cooking-class experience.',
  alternates: { canonical: 'https://tumangbaliclass.com/where-to-stay-bali-cooking-class' },
  openGraph: {
    title: 'Where to Stay for a Bali Cooking Class | Tumang Bali',
    description:
      'Planning a cooking class in Bali? Best areas to stay in Ubud, Seminyak and Canggu for a seamless cooking-class experience.',
    url: 'https://tumangbaliclass.com/where-to-stay-bali-cooking-class',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/gallery-girls.jpg', width: 1200, height: 630, alt: 'Where to stay in Bali for cooking class' }],
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
  return <ClassLanding content={whereToStayClass} activities={bookingActivities} />
}
