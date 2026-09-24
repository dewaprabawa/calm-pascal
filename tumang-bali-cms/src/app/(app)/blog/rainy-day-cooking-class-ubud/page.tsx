import React from 'react'
import { Metadata } from 'next'
import { buildStaticArticleMetadata } from '@/lib/seoMetadata'
import { StaticBlogArticle } from '../StaticBlogArticle'
import { rainyDayCookingClassUbud } from '../salesConversionCluster'

export const revalidate = 3600

const article = rainyDayCookingClassUbud

export const metadata: Metadata = buildStaticArticleMetadata(article)

export default function Page() {
  return <StaticBlogArticle article={article} />
}
