import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { Metadata } from 'next'

export const revalidate = 60

const SITE = 'https://tumangbaliclass.com'

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

  const rawTitle = (article.meta?.title as string) || article.title
  // Ensure the brand suffix is present exactly once and trim if too long
  const noSuffix = rawTitle.endsWith('| Tumang Bali')
    ? rawTitle.slice(0, -15)  // remove the existing suffix
    : rawTitle
  const trimmedTitle = noSuffix.length > 65 ? noSuffix.slice(0, 62) + '...' : noSuffix
  const finalTitle = trimmedTitle + ' | Tumang Bali'
  const rawDesc = (article.meta?.description as string) || article.excerpt
  const trimmedDesc = rawDesc.length > 160 ? rawDesc.slice(0, 157) + '...' : rawDesc
  return {
    title: finalTitle,
    description: trimmedDesc,
    alternates: {
      canonical: `${SITE}/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: finalTitle,
      description: trimmedDesc,
      type: 'article',
      publishedTime: article.publishedDate || article.createdAt,
      authors: [article.author as string],
      url: `${SITE}/blog/${resolvedParams.slug}`,
      siteName: 'Tumang Bali Cooking Class',
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
    case 'upload':
      const val = node.value;
      if (val && typeof val === 'object' && val.url) {
        return (
          <div key={index} className="my-8 relative rounded-3xl overflow-hidden shadow-lg border border-stone-200 dark:border-zinc-800 aspect-[3/2] w-full max-w-2xl mx-auto">
            <Image
              src={val.url}
              alt={val.alt || ''}
              fill
              className="object-cover"
            />
          </div>
        );
      }
      return null;
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
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://tumangbaliclass.com/blog/${article.slug}`
            },
            headline: article.title,
            description: (article.meta?.description as string) || article.excerpt,
            image: article.featuredImage && typeof article.featuredImage === 'object' && article.featuredImage.url ? [article.featuredImage.url] : [],
            author: {
              '@type': 'Person',
              name: article.author
            },
            publisher: {
              '@type': 'Organization',
              name: 'Tumang Bali Cooking Class',
              logo: {
                '@type': 'ImageObject',
                url: 'https://tumangbaliclass.com/images/logo.webp'
              }
            },
            datePublished: article.publishedDate ? article.publishedDate.split('T')[0] : article.createdAt.split('T')[0],
            dateModified: article.updatedAt ? article.updatedAt.split('T')[0] : article.createdAt.split('T')[0]
          })
        }}
      />

      {/* Conditionally Render FAQPage Schema */}
      {article.slug === 'how-to-make-bumbu-bali' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Can I make Balinese bumbu without shrimp paste (terasi)?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. While traditional savory dishes almost always include terasi, you can substitute it with a pinch of sugar and extra shallots, or simply omit it. We offer vegetarian options at our cooking class so everyone can enjoy the flavors.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What is the difference between Bumbu Bali and Bumbu Jawa (Javanese spice paste)?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Balinese bumbu generally relies more heavily on turmeric, giving it a yellow/golden color, whereas Javanese bumbu tends to be darker, richer, and relies more on shalot and sweet soy sauce (kecap manis).'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do I really need a stone mortar and pestle?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'While a high-powered blender works in a pinch, a stone mortar produces a much more aromatic and flavorful paste. For the authentic experience, we highly recommend using a cobek.'
                  }
                }
              ]
            })
          }}
        />
      )}

      {/* FAQPage Schema for Tumang vs Ubud */}
      {article.slug === 'tumang-vs-ubud-cooking-class' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is Tumang (Batubulan) close to Ubud?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, it is very close. Tumang is only about 10–15 minutes from the center of Ubud. We pick up guests from their hotels in the morning and drop them off after lunch.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Is the cooking class in Tumang more authentic than in Ubud?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Generally, yes. Because Tumang is a working village and not a tourism hub, the classes are often more focused on daily Balinese life and family traditions.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do I need to rent a scooter to join the Tumang cooking class?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. We provide free hotel pickup from the Ubud area. We drive you to the local market, then to the rice paddy kitchen, and back to your hotel.'
                  }
                }
              ]
            })
          }}
        />
      )}
    </div>
  )
}
