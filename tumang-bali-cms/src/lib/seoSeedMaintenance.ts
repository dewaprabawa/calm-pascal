import type { Payload } from 'payload'
import { runArticleSeedBatch } from '@/lib/articleSeedRunner'
import { runMetaSeedBatch } from '@/lib/articleMetaSeedRunner'
import { articles as foodTravelArticles } from '../../seedSeoFoodTravelArticles'
import { articles as culinaryArticles } from '../../seedSeoCulinaryBaliForeign'
import { articles as month1Articles } from '../../seedSeoMonth1Commercial'

export async function runSeoSeedMaintenance(payload: Payload) {
  const allArticles = [...foodTravelArticles, ...culinaryArticles, ...month1Articles]

  const foodTravel = await runArticleSeedBatch(payload, foodTravelArticles)
  const culinary = await runArticleSeedBatch(payload, culinaryArticles)
  const month1 = await runArticleSeedBatch(payload, month1Articles)
  const meta = await runMetaSeedBatch(payload)

  return {
    ok: true as const,
    ranAt: new Date().toISOString(),
    totalTargeted: allArticles.length,
    foodTravel,
    culinary,
    month1,
    meta,
    summary: {
      created:
        foodTravel.created.length + culinary.created.length + month1.created.length,
      skipped:
        foodTravel.skipped.length + culinary.skipped.length + month1.skipped.length,
      errors: foodTravel.errors.length + culinary.errors.length + month1.errors.length,
      metaUpdated: meta.updated.length,
      metaNotFound: meta.notFound.length,
      metaErrors: meta.errors.length,
    },
  }
}
