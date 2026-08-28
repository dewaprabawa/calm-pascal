import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { whereToStayClass } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Where to Stay for a Bali Cooking Class',
  description:
    'Planning a cooking class in Bali? Best areas to stay in Ubud, Seminyak and Canggu for a seamless cooking-class experience.',
  path: '/where-to-stay-bali-cooking-class',
  ogTitle: 'Where to Stay for a Bali Cooking Class',
  image: '/images/gallery-girls.jpg',
  imageAlt: 'Where to stay in Bali for cooking class',
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
    console.error('where to stay page: could not load activities from CMS', err)
  }
  return <ClassLanding content={whereToStayClass} activities={bookingActivities} />
}
