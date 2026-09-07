/**
 * One-shot: update activity prices in Payload to the new adult tiered rates.
 * Run: npx tsx seedUpdatePricing.ts
 */
import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import {
  PRIVATE_ADULT_MIN2_IDR,
  PRIVATE_ADULT_SOLO_IDR,
  SHARED_ADULT_GROUP_IDR,
  SHARED_ADULT_SOLO_IDR,
} from './src/lib/pricing'

async function main() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'activities', limit: 50 })

  for (const doc of docs) {
    const title = String(doc.title || '')
    const isPrivate = title.toLowerCase().includes('private')
    const data = isPrivate
      ? {
          title: title.includes('1 Person') ? 'Private Cooking Class' : title,
          price: PRIVATE_ADULT_SOLO_IDR,
          groupPrice: PRIVATE_ADULT_MIN2_IDR,
          kidsPrice: null as unknown as undefined,
        }
      : {
          price: SHARED_ADULT_SOLO_IDR,
          groupPrice: SHARED_ADULT_GROUP_IDR,
        }

    await payload.update({
      collection: 'activities',
      id: doc.id,
      data,
    })
    console.log(`Updated ${title} →`, data)
  }

  console.log('Done.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
