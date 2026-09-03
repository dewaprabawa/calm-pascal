import React from 'react'
import { Metadata } from 'next'
import { buildStaticArticleMetadata } from '@/lib/seoMetadata'
import { StaticBlogArticle } from '../StaticBlogArticle'
import { getForeignSearchArticle } from '../foreignSearchContent'

export const revalidate = 3600

const article = getForeignSearchArticle('what-religion-is-bali')

export const metadata: Metadata = buildStaticArticleMetadata(article)

export default function Page() {
  return <StaticBlogArticle article={article} />
}
