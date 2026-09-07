import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'
import { PRIMARY_COOKING_CLASS_PATH, SITE, SITE_CONTENT_UPDATED, SITE_CONTENT_UPDATED_LABEL } from '@/lib/seoMetadata'
import ViatorBookButtons from '../components/ViatorBookButtons'
import RelatedKeywordLinks from '../components/RelatedKeywordLinks'

export function StaticBlogArticle({ article }: { article: StaticArticle }) {
  const url = `${SITE}/blog/${article.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `${SITE}${article.image}`,
    datePublished: article.publishedDate,
    dateModified: SITE_CONTENT_UPDATED,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorRole,
      worksFor: {
        '@type': 'Organization',
        name: 'Tumang Bali Cooking Class',
        url: SITE,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tumang Bali Cooking Class',
      logo: { '@type': 'ImageObject', url: `${SITE}/images/logo.jpg` },
    },
    mainEntityOfPage: url,
    keywords: article.keywords.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Balinese cooking class in Ubud',
      sameAs: `${SITE}/llms-full.txt`,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: article.title,
    description: article.excerpt,
    dateModified: SITE_CONTENT_UPDATED,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '[data-speakable]'],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  return (
    <article className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500">
              TUMANG BALI
            </span>
          </Link>
          <Link href="/blog" className="text-sm font-semibold hover:text-orange-500 transition-colors">
            Blog
          </Link>
        </div>
      </nav>

      <header className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <p className="text-sm text-stone-500 mb-3">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>
          {' / '}
          <Link href="/blog" className="hover:text-orange-600">
            Blog
          </Link>
          {' / '}
          <span className="text-stone-700 dark:text-stone-300">{article.slug.replace(/-/g, ' ')}</span>
        </p>
        <p className="text-sm font-semibold text-orange-600 mb-3 uppercase tracking-wider">
          {article.authorRole} · Updated {SITE_CONTENT_UPDATED_LABEL}
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-5">{article.title}</h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-6">{article.excerpt}</p>
        <p className="text-sm text-stone-500">
          By {article.author} · {article.publishedDate}
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-stone-200 dark:border-zinc-800 shadow-lg">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-12 prose-custom [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-stone-700 dark:[&_p]:text-stone-300 [&_p]:mb-5 [&_ul]:my-4 [&_ul]:pl-8 [&_ul]:list-disc [&_ul]:space-y-2 [&_li]:text-lg [&_li]:text-stone-700 dark:[&_li]:text-stone-300 [&_a]:text-orange-600 [&_a]:font-semibold [&_a]:underline">
        {article.body}
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-black tracking-tight mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {article.faqs.map((f) => (
            <div
              key={f.question}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800"
            >
              <h3 className="font-bold text-lg mb-2">{f.question}</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-10">
        <RelatedKeywordLinks slug={article.slug} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200/60 dark:border-orange-900/30 rounded-3xl p-8">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Ready to book?</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-6">
            Shared class from IDR 506,370 · Free Ubud hotel pickup · TripAdvisor Travelers&apos; Choice 2026
          </p>
          {article.slug === 'book-cooking-class-ubud-tripadvisor' ? (
            <>
              <ViatorBookButtons context="TripAdvisor article footer" layout="row" />
              <p className="mt-6 text-sm text-stone-500">
                Or{' '}
                <Link href={PRIMARY_COOKING_CLASS_PATH} className="text-orange-600 font-semibold underline">
                  book direct on our website
                </Link>
              </p>
            </>
          ) : (
            <Link
              href={PRIMARY_COOKING_CLASS_PATH}
              className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            >
              Book Cooking Class Ubud
            </Link>
          )}
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali Cooking Class · Ubud, Bali ·{' '}
        <Link href="/blog" className="text-orange-600 hover:underline">
          More guides
        </Link>
      </footer>
    </article>
  )
}
