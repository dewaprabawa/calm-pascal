import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import { pathToFileURL } from 'url'
import { runArticleSeedBatch } from './src/lib/articleSeedRunner'
import { foreignSearchArticleSeeds } from './src/lib/foreignSearchArticles'

// Idempotent: skips slugs that already exist.
// Run: npx tsx --env-file=.env seedSeoForeignSearchArticles.ts
//
// These articles also ship as static pages under src/app/(app)/blog/<slug>,
// so seeding the CMS is optional — the static routes are the canonical source.

export const articles = foreignSearchArticleSeeds

async function seed() {
  const payload = await getPayload({ config: configPromise })
  const result = await runArticleSeedBatch(payload, articles)
  console.log('Foreign search articles seed:', JSON.stringify(result, null, 2))
  process.exit(result.errors.length > 0 ? 1 : 0)
}

const isDirectRun =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href

if (isDirectRun) {
  seed().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
