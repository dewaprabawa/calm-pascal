import type { Payload } from 'payload'
import { runArticleSeedBatch } from '@/lib/articleSeedRunner'
import { runMetaSeedBatch } from '@/lib/articleMetaSeedRunner'
import { runRecipeInstructionSeed } from '../../seedRecipeInstructions'
import { articles as foodTravelArticles } from '../../seedSeoFoodTravelArticles'
import { articles as culinaryArticles } from '../../seedSeoCulinaryBaliForeign'
import { articles as month1Articles } from '../../seedSeoMonth1Commercial'
import { articles as month2Articles } from '../../seedSeoMonth2Commercial'

export async function runSeoSeedMaintenance(payload: Payload) {
  const allArticles = [
    ...foodTravelArticles,
    ...culinaryArticles,
    ...month1Articles,
    ...month2Articles,
  ]

  const foodTravel = await runArticleSeedBatch(payload, foodTravelArticles)
  const culinary = await runArticleSeedBatch(payload, culinaryArticles)
  const month1 = await runArticleSeedBatch(payload, month1Articles)
  const month2 = await runArticleSeedBatch(payload, month2Articles)
  const meta = await runMetaSeedBatch(payload)
  const recipes = await runRecipeInstructionSeed(payload)

  return {
    ok: true as const,
    ranAt: new Date().toISOString(),
    totalTargeted: allArticles.length,
    foodTravel,
    culinary,
    month1,
    month2,
    meta,
    recipes,
    summary: {
      created:
        foodTravel.created.length +
        culinary.created.length +
        month1.created.length +
        month2.created.length,
      skipped:
        foodTravel.skipped.length +
        culinary.skipped.length +
        month1.skipped.length +
        month2.skipped.length,
      errors:
        foodTravel.errors.length +
        culinary.errors.length +
        month1.errors.length +
        month2.errors.length,
      metaUpdated: meta.updated.length,
      metaNotFound: meta.notFound.length,
      metaErrors: meta.errors.length,
      recipeInstructionsUpdated: recipes.updated.length,
      recipeInstructionsSkipped: recipes.skipped.length,
      recipeInstructionsNotFound: recipes.notFound.length,
      recipeInstructionsErrors: recipes.errors.length,
    },
  }
}
