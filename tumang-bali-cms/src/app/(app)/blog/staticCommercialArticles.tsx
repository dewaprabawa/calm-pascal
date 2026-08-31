import type { ReactNode } from 'react'

export type StaticFaq = { question: string; answer: string }

export type StaticArticle = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  image: string
  imageAlt: string
  author: string
  authorRole: string
  publishedDate: string
  keywords: string[]
  faqs: StaticFaq[]
  body: ReactNode
}

export const STATIC_COMMERCIAL_SLUGS = [
  'cooking-class-ubud-for-couples',
  'cooking-class-ubud-guide-2026',
  'ubud-cooking-class-for-families',
  'vegetarian-cooking-class-ubud-guide',
  'morning-cooking-class-ubud-market-tour',
  'lemongrass-cooking-class-ubud',
  'tumang-bali-cooking-class-experience',
  'sambal-matah-cooking-class-ubud',
  'small-group-cooking-class-ubud',
  'balinese-spice-paste-cooking-class',
] as const
