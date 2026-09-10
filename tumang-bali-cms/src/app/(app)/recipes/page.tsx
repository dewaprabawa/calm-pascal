import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seoMetadata'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { recipeSlug } from '@/lib/recipeSlug'
import { recipeImageSrc } from '@/lib/recipeImage'

export const revalidate = 60

const SITE = 'https://tumangbaliclass.com'

export const metadata: Metadata = {
  title: 'Authentic Balinese Recipes | Tumang Bali',
  description:
    'Free authentic Balinese & Indonesian recipes from the chefs at Tumang Bali Cooking Class in Ubud. Nasi goreng, sate, sambal matah, pepes & more — with ingredients and step-by-step instructions.',
  alternates: { canonical: `${SITE}/recipes` },
  openGraph: {
    title: 'Authentic Balinese Recipes | Tumang Bali',
    description:
      'Free authentic Balinese & Indonesian recipes from the chefs at Tumang Bali Cooking Class in Ubud.',
    url: `${SITE}/recipes`,
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-thumbs.jpg',
        width: 1200,
        height: 630,
        alt: 'Authentic Balinese recipes from Tumang Bali Cooking Class in Ubud',
      },
    ],
  },
}

export default async function RecipesIndexPage() {
  let recipes: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({ collection: 'recipes', limit: 1000, depth: 1 })
    recipes = docs || []
  } catch (err) {
    console.error('recipes page: could not load recipes from CMS', err)
  }

  const sorted = [...recipes].sort((a, b) =>
    String(a.title).localeCompare(String(b.title)),
  )

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Authentic Balinese Recipes',
    itemListElement: sorted.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.title as string,
      url: `${SITE}/recipes/${recipeSlug(r.title as string)}`,
    })),
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-bold text-orange-600">Back to Home</span>
        </Link>
      </nav>

      <header className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <p className="text-sm font-bold text-orange-500 mb-4 uppercase tracking-widest">Free Recipes</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-stone-900 dark:text-white">
          Authentic Balinese Recipes
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Cook the real taste of Bali at home. Every recipe below comes straight from the kitchen of our
          Ubud cooking class — ingredients plus step-by-step methods from local family chefs. Then come{' '}
          <Link href="/#classes" className="text-orange-600 font-semibold hover:underline">
            cook them with us in person
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/api/recipes/download-pdf"
            className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            Download menu PDF
          </a>
          <Link
            href="/balinese-cooking-class-ubud"
            className="inline-flex border border-stone-300 dark:border-zinc-700 px-6 py-3 rounded-full font-semibold text-sm hover:border-orange-500 hover:text-orange-600 transition-colors"
          >
            Book a cooking class
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((r) => {
            const slug = recipeSlug(r.title as string)
            const img = recipeImageSrc(slug, r.image)
            return (
              <Link
                key={r.id as string}
                href={`/recipes/${slug}`}
                className="group bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative bg-stone-100 dark:bg-zinc-800">
                  <Image
                    src={img}
                    alt={r.title as string}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {r.menuType === 'vegetarian' && (
                    <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 bg-green-500 text-white rounded-full shadow">
                      Vegetarian
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-stone-900 dark:text-white group-hover:text-orange-600 transition-colors">
                    {r.title as string}
                  </h2>
                  {r.description && (
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{r.description as string}</p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </div>
  )
}
