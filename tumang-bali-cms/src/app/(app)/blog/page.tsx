import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { Metadata } from 'next'
import { pageTitle, truncateDescription, SITE, SITE_CONTENT_UPDATED } from '@/lib/seoMetadata'
import { staticCommercialArticles } from './staticCommercialContent'

export const metadata: Metadata = {
  title: pageTitle('Ubud Food & Culture Blog'),
  description: truncateDescription(
    'Planning an authentic Ubud cooking class? Discover traditional recipes, lemongrass sate lilit, sambal matah, market tours, and Tumang Bali cooking class guides.',
  ),
  keywords: [
    'Balinese cooking blog',
    'Ubud cooking class tips',
    'lemongrass cooking class',
    'Tumang Bali',
    'sambal matah class',
  ],
  alternates: { canonical: `${SITE}/blog` },
}

export const revalidate = 60

const BlogListingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
  ],
}

const WebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE}/blog#webpage`,
  url: `${SITE}/blog`,
  name: 'Ubud Food & Culture Blog — Tumang Bali',
  description:
    'Discover traditional Balinese recipes, cooking class tips, lemongrass sate lilit, sambal matah, and authentic food stories from Tumang Bali Kitchen in Ubud, Bali.',
  dateModified: SITE_CONTENT_UPDATED,
  isPartOf: { '@id': `${SITE}/#website` },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]'],
  },
  about: {
    '@type': 'Thing',
    name: 'Balinese Cuisine & Cooking',
  },
  inLanguage: 'en-US',
}

export default async function BlogPage() {
  let cmsArticles: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const res = await payload.find({
      collection: 'articles',
      where: { status: { equals: 'published' } },
      sort: '-publishedDate',
      limit: 100,
    })
    cmsArticles = res.docs || []
  } catch (error) {
    console.error('blog page: could not load articles from CMS', error)
  }

  const staticSlugs = new Set(staticCommercialArticles.map((a) => a.slug))
  const cmsOnly = cmsArticles.filter((a) => !staticSlugs.has(a.slug as string))

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tumang Bali commercial cooking class guides',
    numberOfItems: staticCommercialArticles.length,
    itemListElement: staticCommercialArticles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}/blog/${a.slug}`,
      name: a.title,
    })),
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-orange-200 overflow-hidden relative">
            <Image src="/images/logo.jpg" alt="Tumang Bali Cooking Class Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-orange-600">Back to Home</span>
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">Balinese Food & Culture Blog</h1>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto" data-speakable>
            Guides from Tumang Bali Cooking Class in Ubud — lemongrass sate lilit, sambal matah, Base Genep
            spice paste, market tours, couples and family classes, and how to book an authentic village
            kitchen experience from IDR 350,000.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-black tracking-tight mb-6">Essential cooking class guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticCommercialArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="aspect-video relative bg-stone-200 dark:bg-zinc-800 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wide">
                    Updated August 2026
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                  <div className="text-xs font-semibold text-stone-500">{article.author}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {cmsOnly.length > 0 && (
          <section>
            <h2 className="text-2xl font-black tracking-tight mb-6">More from the kitchen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cmsOnly.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
                >
                  <div className="aspect-video relative bg-stone-200 dark:bg-zinc-800 overflow-hidden">
                    {article.featuredImage &&
                    typeof article.featuredImage === 'object' &&
                    article.featuredImage.url ? (
                      <Image
                        src={article.featuredImage.url}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Image
                        src="/images/img4.jpg"
                        alt="Balinese cooking class in Ubud"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wide">
                      {new Date(article.publishedDate || article.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
                      <div className="w-6 h-6 rounded-full bg-stone-200 dark:bg-zinc-800 flex items-center justify-center">
                        {(article.author || 'T')[0]}
                      </div>
                      {article.author}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogListingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </div>
  )
}
