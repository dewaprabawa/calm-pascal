import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { bestCookingClassesBali } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Best Cooking Classes in Bali 2026 — Reviewed & Compared',
  description:
    'We compared the best cooking classes in Bali so you do not have to. See what to look for, how classes rank, and why Tumang Bali leads for authentic hands-on cooking in Ubud village.',
  path: '/best-cooking-classes-bali',
  ogTitle: 'Best Cooking Classes in Bali 2026 — Reviewed & Compared',
  image: '/images/img1.jpg',
  imageAlt: 'Best cooking classes in Bali 2026 — reviewed and compared',
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
    console.error('best cooking classes bali page: could not load activities from CMS', err)
  }
  return <ClassLanding content={bestCookingClassesBali} activities={bookingActivities} />
}
