import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  // The layout template appends " | Tumang Bali Cooking Class Ubud", so keep
  // this short to avoid duplicating the brand and overrunning the title length.
  title: 'Ubud Food & Culture Blog',
  description: 'Planning an authentic Ubud cooking class? Discover traditional recipes, local market tours, and the best Balinese food stories from Tumang Bali Kitchen.',
  keywords: ['Balinese cooking blog', 'Ubud cooking class tips', 'Bali food stories', 'Balinese recipes', 'Tumang Bali'],
}

export const revalidate = 60

const SITE = 'https://tumangbaliclass.com'

// BreadcrumbList + WebPage structured data for the blog listing
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
  description: 'Discover traditional Balinese recipes, cooking class tips, market tours, and authentic food stories from Tumang Bali Kitchen in Ubud, Bali.',
  isPartOf: { '@id': `${SITE}` },
  about: {
    '@type': 'Thing',
    name: 'Balinese Cuisine & Cooking',
  },
  inLanguage: 'en-US',
}

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs: articles } = await payload.find({ 
    collection: 'articles',
    where: { status: { equals: 'published' } },
    sort: '-publishedDate',
  })

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-orange-200 overflow-hidden relative">
            <Image src="/images/logo.jpg" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-orange-600">Back to Home</span>
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">Balinese Food & Culture Blog</h1>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto">Welcome to the Tumang Bali Kitchen blog — your ultimate guide to Ubud cooking classes and Balinese cuisine. Whether you are looking for a hands-on culinary experience, a traditional market tour, or just want to master authentic Balinese recipes like Sambal Matah and Base Genep, you've found the right place. Explore our latest food stories and travel tips below to find the perfect cooking class for your trip to Bali.</p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-stone-300 dark:border-zinc-700">
            <p className="text-stone-500">Articles are being prepared. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
                <div className="aspect-video relative bg-stone-200 dark:bg-zinc-800 overflow-hidden">
                  {article.featuredImage && typeof article.featuredImage === 'object' && article.featuredImage.url ? (
                    <Image src={article.featuredImage.url} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <Image src="/images/img4.jpg" alt="Fallback" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wide">
                    {new Date(article.publishedDate || article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">{article.title}</h2>
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
        )}
      </main>

      {/* ===== STRUCTURED DATA: BreadcrumbList + WebPage ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogListingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WebPageSchema) }} />
    </div>
  )
}
