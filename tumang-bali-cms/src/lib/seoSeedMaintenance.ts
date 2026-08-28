import type { Payload } from 'payload'
import { runArticleSeedBatch } from '@/lib/articleSeedRunner'
import { runMetaSeedBatch } from '@/lib/articleMetaSeedRunner'
import { articles as foodTravelArticles } from '../../seedSeoFoodTravelArticles'
import { articles as culinaryArticles } from '../../seedSeoCulinaryBaliForeign'

export async function runSeoSeedMaintenance(payload: Payload) {
  const allArticles = [...foodTravelArticles, ...culinaryArticles]

  const foodTravel = await runArticleSeedBatch(payload, foodTravelArticles)
  const culinary = await runArticleSeedBatch(payload, culinaryArticles)
  const meta = await runMetaSeedBatch(payload)

  return {
    ok: true as const,
    ranAt: new Date().toISOString(),
    totalTargeted: allArticles.length,
    foodTravel,
    culinary,
    meta,
    summary: {
      created: foodTravel.created.length + culinary.created.length,
      skipped: foodTravel.skipped.length + culinary.skipped.length,
      errors: foodTravel.errors.length + culinary.errors.length,
      metaUpdated: meta.updated.length,
      metaNotFound: meta.notFound.length,
      metaErrors: meta.errors.length,
    },
  }
}
