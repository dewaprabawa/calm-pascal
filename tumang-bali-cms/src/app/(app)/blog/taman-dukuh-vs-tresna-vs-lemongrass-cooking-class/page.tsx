import React from 'react'
import { Metadata } from 'next'
import { buildStaticArticleMetadata } from '@/lib/seoMetadata'
import { StaticBlogArticle } from '../StaticBlogArticle'
import { tamanDukuhVsTresnaVsLemongrass } from '../salesGeoCommercialContent'

export const revalidate = 3600

const article = tamanDukuhVsTresnaVsLemongrass

export const metadata: Metadata = buildStaticArticleMetadata(article)

export default function Page() {
  return <StaticBlogArticle article={article} />
}
