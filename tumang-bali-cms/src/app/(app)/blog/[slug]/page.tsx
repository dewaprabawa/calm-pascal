import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { Metadata } from 'next'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'articles',
    where: { slug: { equals: resolvedParams.slug } },
    limit: 1,
  })

  const article = docs[0]
  if (!article) return { title: 'Not Found' }

  return {
    title: (article.meta?.title as string) || `${article.title} | Tumang Bali Blog`,
    description: (article.meta?.description as string) || article.excerpt,
    openGraph: {
      title: (article.meta?.title as string) || article.title,
      description: (article.meta?.description as string) || article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate || article.createdAt,
      authors: [article.author as string],
      images: article.featuredImage && typeof article.featuredImage === 'object' && article.featuredImage.url ? [article.featuredImage.url] : [],
    },
  }
}

// Simple recursive Lexical AST renderer
function renderLexical(node: any, index: number = 0): React.ReactNode {
  if (!node) return null;

  if (node.type === 'text') {
    let text = node.text;
    if (node.format & 1) text = <strong key={index}>{text}</strong>;
    if (node.format & 2) text = <em key={index}>{text}</em>;
    if (node.format & 8) text = <u key={index}>{text}</u>;
    return <React.Fragment key={index}>{text}</React.Fragment>;
  }

  const children = node.children ? node.children.map((c: any, i: number) => renderLexical(c, i)) : null;

  switch (node.type) {
    case 'root':
      return <div className="lexical-content space-y-6">{children}</div>;
    case 'paragraph':
      return <p key={index} className="leading-relaxed text-stone-700 dark:text-stone-300 text-lg">{children}</p>;
    case 'heading':
      const Tag = node.tag as any;
      return <Tag key={index} className={`font-bold mt-8 mb-4 text-stone-900 dark:text-stone-100 ${node.tag === 'h2' ? 'text-3xl' : node.tag === 'h3' ? 'text-2xl' : 'text-xl'}`}>{children}</Tag>;
    case 'list':
      const ListTag = node.listType === 'number' ? 'ol' : 'ul';
      return <ListTag key={index} className={`my-4 pl-8 space-y-2 ${node.listType === 'number' ? 'list-decimal' : 'list-disc'}`}>{children}</ListTag>;
    case 'listitem':
      return <li key={index} className="text-stone-700 dark:text-stone-300 text-lg">{children}</li>;
    case 'link':
      return <a key={index} href={node.fields?.url} className="text-orange-600 hover:underline">{children}</a>;
    case 'quote':
      return <blockquote key={index} className="border-l-4 border-orange-500 pl-4 italic text-stone-600 dark:text-stone-400 my-6 text-xl">{children}</blockquote>;
    default:
      return <React.Fragment key={index}>{children}</React.Fragment>;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const payload = await getPayload({ config: configPromise })
  
  const { docs } = await payload.find({ 
    collection: 'articles',
    where: { 
      slug: { equals: resolvedParams.slug },
      status: { equals: 'published' }
    },
    limit: 1,
  })

  const article = docs[0]
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      <nav className="w-full bg-stone-50 dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <Link href="/blog" className="flex items-center gap-3">
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span className="font-bold text-orange-600">Back to Blog</span>
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="text-sm font-bold text-orange-500 mb-4 uppercase tracking-widest">
            {new Date(article.publishedDate || article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-stone-900 dark:text-white">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm font-semibold text-stone-600 dark:text-stone-400">
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-zinc-800 flex items-center justify-center text-orange-600 text-lg">
              {(article.author || 'T')[0]}
            </div>
            By {article.author}
          </div>
        </div>

        {article.featuredImage && typeof article.featuredImage === 'object' && article.featuredImage.url && (
          <div className="w-full aspect-video md:aspect-[2/1] relative rounded-3xl overflow-hidden mb-16 shadow-xl border border-stone-200 dark:border-zinc-800">
            <Image src={article.featuredImage.url} alt={article.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert prose-orange max-w-none">
          {renderLexical(article.content?.root)}
        </div>
        
        <div className="mt-20 pt-10 border-t border-stone-200 dark:border-zinc-800 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to taste the real Bali?</h3>
          <Link href="/#classes" className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg">
            Book Your Cooking Class Today
          </Link>
        </div>
      </article>
      
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            image: article.featuredImage && typeof article.featuredImage === 'object' ? [article.featuredImage.url] : [],
            datePublished: article.publishedDate || article.createdAt,
            author: [{
              '@type': 'Person',
              name: article.author,
              url: 'https://tumangbali.com'
            }]
          })
        }}
      />
    </div>
  )
}
