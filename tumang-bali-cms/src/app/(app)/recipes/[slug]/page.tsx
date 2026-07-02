import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { recipeSlug } from '@/lib/recipeSlug'

export const revalidate = 60

const SITE = 'https://tumangbaliclass.com'

// Resolve a recipe by its derived slug (no slug field in the CMS).
async function findRecipeBySlug(slug: string) {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'recipes', limit: 1000 })
  const recipe = docs.find((r) => recipeSlug(r.title as string) === slug)
  return recipe ?? null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const recipe = await findRecipeBySlug(slug)
  if (!recipe) return { title: 'Recipe Not Found | Tumang Bali' }

  const title = `${recipe.title} Recipe${recipe.description ? ` (${recipe.description})` : ''} | Tumang Bali`
  const description =
    `Authentic ${recipe.title} recipe from our Balinese cooking class in Ubud. ` +
    `${recipe.description ? recipe.description + '. ' : ''}` +
    `Real ingredients and step-by-step instructions from local chefs.`
  const img =
    recipe.image && typeof recipe.image === 'object' && 'url' in recipe.image
      ? (recipe.image.url as string)
      : '/images/itinerary/dadar-gulung-close.jpg'

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/recipes/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/recipes/${slug}`,
      siteName: 'Tumang Bali Cooking Class',
      locale: 'en_US',
      type: 'article',
      images: [{ url: img, width: 1200, height: 630, alt: `${recipe.title} recipe` }],
    },
  }
}

// Minimal Lexical AST -> React renderer (mirrors the blog renderer).
function renderLexical(node: any, index = 0): React.ReactNode {
  if (!node) return null
  if (node.type === 'text') {
    let text: React.ReactNode = node.text
    if (node.format & 1) text = <strong key={index}>{text}</strong>
    if (node.format & 2) text = <em key={index}>{text}</em>
    return <React.Fragment key={index}>{text}</React.Fragment>
  }
  const children = node.children ? node.children.map((c: any, i: number) => renderLexical(c, i)) : null
  switch (node.type) {
    case 'root':
      return <div className="space-y-4">{children}</div>
    case 'paragraph':
      return (
        <p key={index} className="leading-relaxed text-stone-700 dark:text-stone-300 text-lg">
          {children}
        </p>
      )
    case 'heading': {
      const Tag = (node.tag as any) || 'h3'
      return (
        <Tag key={index} className="font-bold mt-8 mb-3 text-2xl text-stone-900 dark:text-stone-100">
          {children}
        </Tag>
      )
    }
    case 'list': {
      const ListTag = node.listType === 'number' ? 'ol' : 'ul'
      return (
        <ListTag
          key={index}
          className={`my-2 pl-6 space-y-2 ${node.listType === 'number' ? 'list-decimal' : 'list-disc'}`}
        >
          {children}
        </ListTag>
      )
    }
    case 'listitem':
      return (
        <li key={index} className="text-stone-700 dark:text-stone-300 text-lg">
          {children}
        </li>
      )
    default:
      return <React.Fragment key={index}>{children}</React.Fragment>
  }
}

// Extract instruction steps as plain strings for schema.org recipeInstructions.
function lexicalToSteps(node: any, acc: string[] = []): string[] {
  if (!node) return acc
  if (node.type === 'listitem' || node.type === 'paragraph') {
    const text = collectText(node).trim()
    if (text) acc.push(text)
    return acc
  }
  if (node.children) node.children.forEach((c: any) => lexicalToSteps(c, acc))
  return acc
}
function collectText(node: any): string {
  if (!node) return ''
  if (node.type === 'text') return node.text || ''
  if (node.children) return node.children.map(collectText).join('')
  return ''
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const recipe = await findRecipeBySlug(slug)
  if (!recipe) notFound()

  const img =
    recipe.image && typeof recipe.image === 'object' && 'url' in recipe.image
      ? (recipe.image.url as string)
      : null

  const ingredients: { item?: string; quantity?: string }[] = Array.isArray(recipe.ingredients)
    ? (recipe.ingredients as any[])
    : []

  const steps =
    recipe.instructions && (recipe.instructions as any).root
      ? lexicalToSteps((recipe.instructions as any).root)
      : []

  // schema.org/Recipe — eligible for rich results (rich snippet card in Google).
  const recipeSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: `${recipe.title}${recipe.description ? ` (${recipe.description})` : ''}`,
    description: recipe.description || `Authentic ${recipe.title} from Tumang Bali Cooking Class.`,
    recipeCuisine: 'Balinese',
    recipeCategory: recipe.menuType === 'vegetarian' ? 'Vegetarian' : 'Main',
    author: { '@type': 'Organization', name: 'Tumang Bali Cooking Class', url: SITE },
    keywords: `${recipe.title} recipe, balinese recipe, indonesian recipe`,
    recipeIngredient: ingredients
      .map((i) => [i.quantity, i.item].filter(Boolean).join(' ').trim())
      .filter(Boolean),
  }
  if (img) recipeSchema.image = [img]
  if (steps.length) {
    recipeSchema.recipeInstructions = steps.map((s) => ({ '@type': 'HowToStep', text: s }))
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Recipes', item: `${SITE}/recipes` },
      { '@type': 'ListItem', position: 3, name: `${recipe.title} Recipe`, item: `${SITE}/recipes/${slug}` },
    ],
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <nav className="w-full bg-stone-50 dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <Link href="/recipes" className="flex items-center gap-3">
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-bold text-orange-600">All Recipes</span>
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-orange-500 mb-3 uppercase tracking-widest">
            {recipe.menuType === 'vegetarian' ? 'Vegetarian Balinese Recipe' : 'Authentic Balinese Recipe'}
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tight text-stone-900 dark:text-white">
            {recipe.title as string} Recipe
          </h1>
          {recipe.description && (
            <p className="text-xl text-stone-600 dark:text-stone-400">{recipe.description as string}</p>
          )}
        </div>

        {img && (
          <div className="w-full aspect-video md:aspect-[2/1] relative rounded-3xl overflow-hidden mb-12 shadow-xl border border-stone-200 dark:border-zinc-800">
            <Image src={img} alt={`${recipe.title} recipe`} fill className="object-cover" priority />
          </div>
        )}

        <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-12">
          This authentic <strong>{recipe.title as string}</strong> recipe comes straight from the kitchen of our
          Balinese cooking class in Ubud. We make it the traditional way our family has for generations — with fresh
          local ingredients and hand-ground spice paste. Follow along below, or{' '}
          <Link href="/#classes" className="text-orange-600 font-semibold hover:underline">
            join us in Bali
          </Link>{' '}
          to cook it hands-on with a local chef.
        </p>

        {ingredients.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-stone-900 dark:text-white">Ingredients</h2>
            <ul className="space-y-3">
              {ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-stone-700 dark:text-stone-300">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    {ing.quantity && <strong className="text-stone-900 dark:text-white">{ing.quantity}</strong>}{' '}
                    {ing.item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {steps.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-stone-900 dark:text-white">Instructions</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {renderLexical((recipe.instructions as any).root)}
            </div>
          </section>
        ) : (
          <section className="mb-12 bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-stone-900 dark:text-white">
              Want the full step-by-step method?
            </h2>
            <p className="text-stone-600 dark:text-stone-300 mb-6">
              We teach this dish hands-on in our Ubud cooking class — market tour, spice paste, and all the chef&apos;s
              secrets included.
            </p>
            <Link
              href="/#classes"
              className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg"
            >
              Book the Cooking Class
            </Link>
          </section>
        )}

        <div className="mt-16 pt-10 border-t border-stone-200 dark:border-zinc-800 text-center">
          <h3 className="text-2xl font-bold mb-4">Cook this dish with us in Bali</h3>
          <p className="text-stone-600 dark:text-stone-400 mb-6 max-w-xl mx-auto">
            Join our small-group Balinese cooking class in Ubud — visit the local market, grind your own spice paste,
            and cook {recipe.title as string} the authentic way.
          </p>
          <Link
            href="/#classes"
            className="inline-flex bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl"
          >
            Book Your Cooking Class
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  )
}
