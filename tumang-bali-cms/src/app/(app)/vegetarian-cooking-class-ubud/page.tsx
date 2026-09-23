import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding from '../components/ClassLanding'
import { vegetarianClass } from '../components/landingContent'
import { fromPriceMetaSnippet } from '@/lib/pricing'

export const revalidate = 60

const fromPrice = fromPriceMetaSnippet()

export const metadata: Metadata = buildPageMetadata({
  title: 'Vegetarian Cooking Class Ubud — Tempe, Tofu & Sambal Matah',
  description: `Vegetarian Balinese cooking class in Ubud: tempe, tofu, sayur urap & sambal matah. Vegan on request. Max 8 guests, free hotel pickup, from ${fromPrice}.`,
  path: '/vegetarian-cooking-class-ubud',
  ogTitle: 'Vegetarian Cooking Class in Ubud — Plant-Based Balinese Menu',
  image: '/images/gallery-chopping.jpg',
  imageAlt: 'Vegetarian Balinese cooking class in Ubud',
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
    console.error('vegetarian class page: could not load activities from CMS', err)
  }
  return <ClassLanding content={vegetarianClass} activities={bookingActivities} />
}
