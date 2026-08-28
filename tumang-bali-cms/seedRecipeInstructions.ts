/**
 * Adds step-by-step Lexical instructions to top CMS recipes.
 * Idempotent: skips recipes that already have instructions content.
 * Run: npx tsx --env-file=.env seedRecipeInstructions.ts
 * Also run via SEO cron maintenance.
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import { pathToFileURL } from 'url'
import type { Payload } from 'payload'

type LexNode = Record<string, unknown>

const text = (value: string): LexNode => ({
  type: 'text',
  version: 1,
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text: value,
})

const orderedSteps = (steps: string[]): LexNode => ({
  root: {
    type: 'root',
    version: 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children: [
      {
        type: 'list',
        version: 1,
        listType: 'number',
        start: 1,
        tag: 'ol',
        direction: 'ltr',
        format: '',
        indent: 0,
        children: steps.map((step, i) => ({
          type: 'listitem',
          version: 1,
          value: i + 1,
          direction: 'ltr',
          format: '',
          indent: 0,
          children: [text(step)],
        })),
      },
    ],
  },
})

type RecipeInstructionSeed = {
  title: string
  menuType: 'regular' | 'vegetarian'
  steps: string[]
}

export const RECIPE_INSTRUCTIONS: RecipeInstructionSeed[] = [
  {
    title: 'Sambal Matah',
    menuType: 'regular',
    steps: [
      'Thinly slice shallots and bird\'s eye chilies. Finely slice lemongrass (white part only) and tear kaffir lime leaves into thin strips.',
      'Combine shallots, chili, lemongrass, and lime leaves in a bowl. Add toasted shrimp paste (terasi) crumbled finely.',
      'Squeeze fresh kaffir lime or lime juice over the mix and season with salt.',
      'Heat coconut oil until shimmering (not smoking). Pour the hot oil over the raw mix to release aroma — do not cook the vegetables.',
      'Toss gently and taste. Adjust salt, lime, and chili. Serve immediately with grilled fish, chicken, or rice.',
    ],
  },
  {
    title: 'Sambal Matah',
    menuType: 'vegetarian',
    steps: [
      'Thinly slice shallots and bird\'s eye chilies. Finely slice lemongrass and tear kaffir lime leaves.',
      'Combine in a bowl with salt — skip shrimp paste for a fully vegan sambal.',
      'Squeeze fresh lime juice over the mixture.',
      'Heat coconut oil until hot, then pour over the raw aromatics to bloom the fragrance.',
      'Toss and taste. Serve with tempeh, tofu pepes, or nasi kuning.',
    ],
  },
  {
    title: 'Dadar Gulung',
    menuType: 'regular',
    steps: [
      'Make the filling: melt palm sugar with a splash of water, then simmer grated coconut until sticky and fragrant. Cool.',
      'Whisk flour, egg, coconut milk, pandan juice, and a pinch of salt into a thin crepe batter. Rest 10 minutes.',
      'Heat a non-stick pan lightly oiled. Pour a thin ladle of batter and swirl into a green circle. Cook until set; flip briefly if needed.',
      'Cool each crepe slightly, place a spoon of coconut filling in the centre, fold sides, and roll tightly.',
      'Serve at room temperature. In class you will make several rolls to share for dessert.',
    ],
  },
  {
    title: 'Dadar Gulung',
    menuType: 'vegetarian',
    steps: [
      'Cook grated coconut with melted palm sugar and a pinch of salt until sticky. Cool completely.',
      'Mix flour, coconut milk, pandan juice, and salt into a smooth batter (egg-free for vegan). Rest 10 minutes.',
      'Cook thin pandan crepes in a lightly oiled pan until set.',
      'Fill, fold, and roll each crepe with the coconut mixture.',
      'Arrange on a platter and serve as the sweet finish to your vegetarian Balinese feast.',
    ],
  },
  {
    title: 'Pepes Ikan',
    menuType: 'regular',
    steps: [
      'Cut white fish into portions. Toss with turmeric paste, salt, and a squeeze of lime. Marinate 10–15 minutes.',
      'Wilt banana leaves over a low flame or hot pan so they are pliable. Cut into wrap-sized sheets.',
      'Layer fish with sliced tomato and a handful of kemangi (lemon basil) in the centre of each leaf.',
      'Fold into a tight parcel and secure with a toothpick or leaf strip.',
      'Steam 15–20 minutes until the fish flakes easily. Open at the table and serve with sambal matah and rice.',
    ],
  },
  {
    title: 'Sate Ayam',
    menuType: 'regular',
    steps: [
      'Cut chicken into bite-size cubes. Marinate with garlic, sweet soy sauce, a little oil, and salt for 20 minutes.',
      'Thread onto soaked bamboo skewers (3–4 pieces per stick).',
      'Grill over charcoal or a hot grill pan, turning and basting with sweet soy until cooked and lightly charred.',
      'Warm peanut sauce: blend roasted peanuts with garlic, chili, sweet soy, and a splash of water until pourable.',
      'Serve skewers with peanut sauce, sliced shallots, and lime. Pair with rice and sambal.',
    ],
  },
  {
    title: 'Sate Tempe',
    menuType: 'vegetarian',
    steps: [
      'Cut tempeh into cubes. Marinate with sweet soy, coriander, garlic, and a little oil.',
      'Thread onto bamboo skewers.',
      'Grill or pan-sear until golden and caramelised on the edges.',
      'Prepare peanut sauce and thin with warm water to dipping consistency.',
      'Serve hot with peanut sauce, rice, and sambal matah.',
    ],
  },
  {
    title: 'Nasi Goreng atau Nasi Kuning',
    menuType: 'regular',
    steps: [
      'For nasi goreng: scramble an egg in a hot wok, add minced shallot, garlic, and a pinch of terasi.',
      'Add day-old cooked rice, breaking up clumps. Season with sweet soy sauce and salt. Stir-fry on high heat until fragrant.',
      'For nasi kuning (when chosen instead): simmer rice with coconut milk, turmeric, lemongrass, and lime leaves until cooked and yellow.',
      'Taste and adjust seasoning. Plate with cucumber, sambal, and a protein from the class menu.',
      'Serve immediately — nasi goreng should be hot and slightly smoky from the wok.',
    ],
  },
]

function hasInstructions(instructions: unknown): boolean {
  if (!instructions || typeof instructions !== 'object') return false
  const rootNode = (instructions as { root?: { children?: unknown[] } }).root
  return Array.isArray(rootNode?.children) && rootNode.children.length > 0
}

export async function runRecipeInstructionSeed(payload: Payload) {
  const updated: string[] = []
  const skipped: string[] = []
  const notFound: string[] = []
  const errors: { key: string; error: string }[] = []

  for (const recipe of RECIPE_INSTRUCTIONS) {
    const key = `${recipe.title} (${recipe.menuType})`
    try {
      const { docs } = await payload.find({
        collection: 'recipes',
        where: {
          and: [
            { title: { equals: recipe.title } },
            { menuType: { equals: recipe.menuType } },
          ],
        },
        limit: 1,
      })
      const doc = docs[0]
      if (!doc) {
        notFound.push(key)
        continue
      }
      if (hasInstructions(doc.instructions)) {
        skipped.push(key)
        continue
      }

      await payload.update({
        collection: 'recipes',
        id: doc.id,
        data: {
          instructions: orderedSteps(recipe.steps) as never,
        },
      })
      updated.push(key)
    } catch (err) {
      errors.push({
        key,
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  return { updated, skipped, notFound, errors }
}

async function main() {
  const payload = await getPayload({ config: configPromise })
  const result = await runRecipeInstructionSeed(payload)
  console.log(JSON.stringify(result, null, 2))
}

const isDirectRun =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href

if (isDirectRun) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
