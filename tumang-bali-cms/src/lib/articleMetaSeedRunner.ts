import type { Payload } from 'payload'
import { META_UPDATES } from '../../seedSeoMetaQuickWins'

export async function runMetaSeedBatch(payload: Payload) {
  const updated: string[] = []
  const notFound: string[] = []
  const errors: { slug: string; error: string }[] = []

  for (const update of META_UPDATES) {
    try {
      const { docs } = await payload.find({
        collection: 'articles',
        where: { slug: { equals: update.slug } },
        limit: 1,
      })
      const article = docs[0]
      if (!article) {
        notFound.push(update.slug)
        continue
      }

      await payload.update({
        collection: 'articles',
        id: article.id,
        data: {
          meta: {
            title: update.metaTitle,
            description: update.metaDescription,
          },
        },
      })
      updated.push(update.slug)
    } catch (err) {
      errors.push({
        slug: update.slug,
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  return { updated, notFound, errors }
}
