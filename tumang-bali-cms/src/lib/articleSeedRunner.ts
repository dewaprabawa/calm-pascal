import fs from 'fs'
import path from 'path'
import type { Payload } from 'payload'

export type ArticleSeedInput = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  metaTitle: string
  metaDescription: string
  author: string
  authorRole: string
  authorBio: string
  articleSection: string
  keywords: string[]
  faq: { question: string; answer: string }[]
  content: Record<string, unknown>
}

export type SeedBatchResult = {
  created: string[]
  skipped: string[]
  errors: { slug: string; error: string }[]
}

function resolveImagePath(image: string, rootDir: string): string {
  const candidates = [
    path.join(rootDir, 'public', 'images', image),
    path.join(rootDir, 'public', 'images', 'blog', image.replace(/^blog\//, '')),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  return candidates[0]
}

function mimeFor(filePath: string): string {
  if (filePath.endsWith('.webp')) return 'image/webp'
  if (filePath.endsWith('.png')) return 'image/png'
  return 'image/jpeg'
}

export async function runArticleSeedBatch(
  payload: Payload,
  articles: ArticleSeedInput[],
  rootDir = process.cwd(),
): Promise<SeedBatchResult> {
  const result: SeedBatchResult = { created: [], skipped: [], errors: [] }

  for (const art of articles) {
    try {
      const existing = await payload.find({
        collection: 'articles',
        where: { slug: { equals: art.slug } },
        limit: 1,
      })
      if (existing.docs.length > 0) {
        result.skipped.push(art.slug)
        continue
      }

      const imgPath = resolveImagePath(art.image, rootDir)
      if (!fs.existsSync(imgPath)) {
        result.errors.push({ slug: art.slug, error: `Image not found: ${imgPath}` })
        continue
      }

      const stat = fs.statSync(imgPath)
      const media = await payload.create({
        collection: 'media',
        data: { alt: art.imageAlt },
        file: {
          data: fs.readFileSync(imgPath),
          mimetype: mimeFor(imgPath),
          name: `blog-${art.slug}${path.extname(imgPath)}`,
          size: stat.size,
        },
      })

      await payload.create({
        collection: 'articles',
        data: {
          title: art.title,
          slug: art.slug,
          status: 'published',
          publishedDate: new Date().toISOString(),
          author: art.author,
          authorRole: art.authorRole,
          authorBio: art.authorBio,
          featuredImage: media.id,
          excerpt: art.excerpt,
          content: art.content as Parameters<typeof payload.create>[0]['data']['content'],
          meta: { title: art.metaTitle, description: art.metaDescription },
          articleSection: art.articleSection,
          keywords: art.keywords.map((keyword) => ({ keyword })),
          faq: art.faq,
        },
      })
      result.created.push(art.slug)
    } catch (err) {
      result.errors.push({
        slug: art.slug,
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  return result
}
