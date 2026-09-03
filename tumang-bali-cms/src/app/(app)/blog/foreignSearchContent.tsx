import React from 'react'
import Link from 'next/link'
import type { StaticArticle } from './staticCommercialArticles'
import type { ArticleSeed } from '@/lib/lexicalArticleHelpers'
import { foreignSearchArticleSeeds } from '@/lib/foreignSearchArticles'
import { SITE_CONTENT_UPDATED } from '@/lib/seoMetadata'

type LexNode = {
  type?: string
  tag?: string
  text?: string
  format?: number | string
  listType?: string
  fields?: { url?: string }
  children?: LexNode[]
}

const FORMAT_BOLD = 1
const FORMAT_ITALIC = 2

function renderChildren(nodes: LexNode[] | undefined): React.ReactNode {
  if (!nodes?.length) return null
  return nodes.map((node, i) => <React.Fragment key={i}>{renderNode(node)}</React.Fragment>)
}

function renderNode(node: LexNode, speakable = false): React.ReactNode {
  switch (node.type) {
    case 'text': {
      const format = typeof node.format === 'number' ? node.format : 0
      let content: React.ReactNode = node.text ?? ''
      if (format & FORMAT_BOLD) content = <strong>{content}</strong>
      if (format & FORMAT_ITALIC) content = <em>{content}</em>
      return content
    }
    case 'link': {
      const url = node.fields?.url ?? '#'
      const children = renderChildren(node.children)
      if (url.startsWith('/')) return <Link href={url}>{children}</Link>
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    case 'paragraph':
      return <p {...(speakable ? { 'data-speakable': true } : {})}>{renderChildren(node.children)}</p>
    case 'heading':
      return node.tag === 'h3' ? (
        <h3>{renderChildren(node.children)}</h3>
      ) : (
        <h2>{renderChildren(node.children)}</h2>
      )
    case 'list':
      return node.listType === 'number' ? (
        <ol>{renderChildren(node.children)}</ol>
      ) : (
        <ul>{renderChildren(node.children)}</ul>
      )
    case 'listitem':
      return <li>{renderChildren(node.children)}</li>
    default:
      return renderChildren(node.children)
  }
}

/** The lead paragraph carries data-speakable so it matches the Speakable schema selector. */
function renderBody(seed: ArticleSeed): React.ReactNode {
  const root = (seed.content as { root?: LexNode }).root
  let leadAssigned = false
  return (
    <>
      {(root?.children ?? []).map((node, i) => {
        const isLead = !leadAssigned && node.type === 'paragraph'
        if (isLead) leadAssigned = true
        return <React.Fragment key={i}>{renderNode(node, isLead)}</React.Fragment>
      })}
    </>
  )
}

/** Seed images are stored as CMS-relative filenames; static pages serve them from /images. */
function toPublicImagePath(image: string): string {
  return image.startsWith('/') ? image : `/images/${image}`
}

export function seedToStaticArticle(seed: ArticleSeed): StaticArticle {
  return {
    slug: seed.slug,
    title: seed.title,
    metaTitle: seed.metaTitle,
    metaDescription: seed.metaDescription,
    excerpt: seed.excerpt,
    image: toPublicImagePath(seed.image),
    imageAlt: seed.imageAlt,
    author: seed.author,
    authorRole: seed.authorRole,
    publishedDate: SITE_CONTENT_UPDATED,
    keywords: seed.keywords,
    faqs: seed.faq,
    body: renderBody(seed),
  }
}

export const foreignSearchArticles: StaticArticle[] = foreignSearchArticleSeeds.map(seedToStaticArticle)

const bySlug = new Map(foreignSearchArticles.map((a) => [a.slug, a]))

export function getForeignSearchArticle(slug: string): StaticArticle {
  const article = bySlug.get(slug)
  if (!article) throw new Error(`No foreign-search article registered for slug "${slug}"`)
  return article
}
