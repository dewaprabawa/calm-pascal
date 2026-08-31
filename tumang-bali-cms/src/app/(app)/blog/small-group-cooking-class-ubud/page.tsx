import React from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { StaticBlogArticle } from '../StaticBlogArticle'
import { smallGroupCookingClassUbud } from '../staticCommercialContent'

export const revalidate = 3600

const article = smallGroupCookingClassUbud

export const metadata: Metadata = buildPageMetadata({
  title: article.metaTitle,
  description: article.metaDescription,
  path: `/blog/${article.slug}`,
  ogTitle: article.metaTitle,
  image: article.image,
  imageAlt: article.imageAlt,
})

export default function Page() {
  return <StaticBlogArticle article={article} />
}
