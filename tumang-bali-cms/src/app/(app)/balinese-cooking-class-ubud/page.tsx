import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ClassLanding, { type ClassLandingContent } from '../components/ClassLanding'
import { balineseCookingClassUbud } from '../components/landingContent'
import {
  formatIdr,
  isPromoActive,
  PRIVATE_ADULT_MIN2_IDR,
  PRIVATE_ADULT_SOLO_IDR,
  PROMO_LABEL,
  PROMO_PRIVATE_IDR,
  PROMO_SHARED_IDR,
  SHARED_ADULT_GROUP_IDR,
  SHARED_ADULT_SOLO_IDR,
  sharedHeroPriceText,
} from '@/lib/pricing'

export const revalidate = 60

function moneyPageContent(now: Date = new Date()): ClassLandingContent {
  const promo = isPromoActive(now)
  const sharedDisplay = promo
    ? `${formatIdr(PROMO_SHARED_IDR)} (${PROMO_LABEL})`
    : formatIdr(SHARED_ADULT_GROUP_IDR)
  const sharedFrom = sharedHeroPriceText(now)
  const privateDisplay = promo ? formatIdr(PROMO_PRIVATE_IDR) : formatIdr(PRIVATE_ADULT_SOLO_IDR)

  const base = balineseCookingClassUbud
  if (!promo) return base

  return {
    ...base,
    intro: `Book the best cooking class in Ubud — morning market tour, rice-field walk, hands-on cooking of 10+ traditional dishes, and a shared feast with local chefs in Tumang village. Free hotel pickup. Vegetarian friendly. From ${sharedFrom} per person.`,
    citabilityBlock: `A cooking class in Ubud at Tumang Bali is a hands-on Balinese culinary experience in Tumang village, about 30 minutes from central Ubud. ${PROMO_LABEL}: shared class ${formatIdr(PROMO_SHARED_IDR)}; private ${formatIdr(PROMO_PRIVATE_IDR)}. Regular rates after September: ${formatIdr(SHARED_ADULT_GROUP_IDR)} shared (2+), ${formatIdr(SHARED_ADULT_SOLO_IDR)} for 1. Includes guided morning market tour, rice-field walk, Canang Sari flower offering, and cooking 10+ traditional dishes with Chef Wayan Suryana. Max 8 guests, free Ubud hotel pickup, vegetarian and vegan on request.`,
    body: base.body.map((section) =>
      section.heading.toLowerCase().includes('price')
        ? {
            ...section,
            paragraphs: [
              `${PROMO_LABEL}: shared morning or afternoon class ${formatIdr(PROMO_SHARED_IDR)} (includes market tour, cooking, lunch or dinner, pickup, and recipes). Private class ${formatIdr(PROMO_PRIVATE_IDR)}. Regular rates after September: ${formatIdr(SHARED_ADULT_GROUP_IDR)} shared (2+) / ${formatIdr(SHARED_ADULT_SOLO_IDR)} (1); private ${formatIdr(PRIVATE_ADULT_SOLO_IDR)} (1) / ${formatIdr(PRIVATE_ADULT_MIN2_IDR)} (min. 2).`,
            ],
          }
        : section,
    ),
    sellingPoints: [
      {
        title: `${sharedDisplay} All-Inclusive`,
        description: 'Market tour, 10+ dishes, meal, pickup, and recipe booklet included.',
      },
      ...base.sellingPoints.slice(1),
    ],
    pricing: {
      adultLabel: 'Shared class (morning or afternoon)',
      adultPrice: sharedDisplay,
      kidsLabel: 'Kids (8+)',
      kidsPrice: 'Same as adult',
      note: `${PROMO_LABEL} private: ${privateDisplay}. Regular private: ${formatIdr(PRIVATE_ADULT_SOLO_IDR)} (1) / ${formatIdr(PRIVATE_ADULT_MIN2_IDR)} (min. 2). Complimentary pickup from Ubud hotels.`,
    },
    faqs: base.faqs.map((faq) => {
      if (faq.question.toLowerCase().includes('how much')) {
        return {
          ...faq,
          answer: `${PROMO_LABEL}: shared class ${formatIdr(PROMO_SHARED_IDR)}; private ${formatIdr(PROMO_PRIVATE_IDR)}. After September, shared is ${formatIdr(SHARED_ADULT_GROUP_IDR)} (2+) / ${formatIdr(SHARED_ADULT_SOLO_IDR)} (1); private ${formatIdr(PRIVATE_ADULT_SOLO_IDR)} (1). Includes market tour, ingredients, meal, hotel pickup, and recipe booklet.`,
        }
      }
      if (faq.question.toLowerCase().includes('best cooking class')) {
        return {
          ...faq,
          answer: faq.answer.replace(/from IDR 506,370/gi, `from ${sharedFrom}`),
        }
      }
      return faq
    }),
    ctaSubtext: `Market tour · 10+ dishes · local chefs · ${sharedFrom} — TripAdvisor Travelers' Choice 2026.`,
  }
}

const fromPrice = isPromoActive()
  ? `${formatIdr(PROMO_SHARED_IDR)} ${PROMO_LABEL}`
  : formatIdr(SHARED_ADULT_GROUP_IDR)

export const metadata: Metadata = buildPageMetadata({
  title: 'Cooking Class Ubud — Market Tour, 10+ Dishes, Max 8 Guests',
  description: `Cooking class in Ubud: morning market tour, rice-field walk, 10+ dishes with local chefs. From ${fromPrice}, free hotel pickup, max 8 guests. TripAdvisor favorite.`,
  path: '/balinese-cooking-class-ubud',
  ogTitle: `Cooking Class Ubud — Hands-On Balinese Class from ${fromPrice}`,
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
  return <ClassLanding content={moneyPageContent()} activities={bookingActivities} />
}
