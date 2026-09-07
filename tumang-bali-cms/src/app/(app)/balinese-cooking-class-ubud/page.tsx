import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { balineseCookingClassUbud } from '../components/landingContent'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Cooking Class Ubud — Market Tour, 10+ Dishes, Max 8 Guests',
  description:
    'Cooking class in Ubud: morning market tour, rice-field walk, 10+ dishes with local chefs. From IDR 506,370, free hotel pickup, max 8 guests. TripAdvisor favorite.',
  path: '/balinese-cooking-class-ubud',
  ogTitle: 'Cooking Class Ubud — Hands-On Balinese Class from IDR 506,370',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Cooking class in Ubud Bali with local chefs',
  keywords: [
    'cooking class ubud',
    'ubud cooking class',
    'balinese cooking class ubud',
    'best cooking class in ubud',
    'cooking class with market tour ubud',
    'rice terrace cooking class ubud',
    'balinese home cooking class',
    'half day cooking class bali',
    'private cooking class ubud',
  ],
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
    console.error('balinese class ubud page: could not load activities from CMS', err)
  }
  return <ClassLanding content={balineseCookingClassUbud} activities={bookingActivities} />
}
