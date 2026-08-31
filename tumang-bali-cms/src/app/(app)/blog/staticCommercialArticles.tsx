import type { ReactNode } from 'react'
import { STATIC_COMMERCIAL_SLUGS } from '@/lib/staticCommercialSlugs'

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

export { STATIC_COMMERCIAL_SLUGS }
