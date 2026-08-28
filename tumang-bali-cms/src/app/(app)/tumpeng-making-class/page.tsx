import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { tumpengMakingClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Tumpeng Making Class in Bali — Learn Traditional Balinese Cone Rice',
  description:
    'Learn to make tumpeng — the iconic Balinese cone-shaped ceremonial rice dish — in our hands-on cooking class in Tumang village. Includes market tour and recipe booklet.',
  path: '/tumpeng-making-class',
  ogTitle: 'Tumpeng Making Class in Bali — Learn Traditional Balinese Cone Rice',
  image: '/images/img2.jpg',
  imageAlt: 'Tumpeng making class in Bali — traditional Balinese cone-shaped rice dish',
})

export default async function Page() {
  let bookingActivities: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs: activities } = await payload.find({ collection: 'activities' })
    bookingActivities = activities.map((a) => ({
      id: a.id as string,
      title: a.title as string,
      price: a.price as number,
      kidsPrice: (a as { kidsPrice?: number }).kidsPrice,
    }))
  } catch (err) {
    console.error('tumpeng class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={tumpengMakingClass} activities={bookingActivities} />
}
