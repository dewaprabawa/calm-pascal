import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function seedReviews() {
  const payload = await getPayload({ config: configPromise })
  console.log("Seeding Reviews...")
  const reviews = [
    { customerName: "Sarah M.", rating: 5, comment: "Absolutely incredible experience! The market tour was eye-opening and the host family made us feel so welcome. Best food we had in Bali!", status: 'published', source: 'tripadvisor' },
    { customerName: "James T.", rating: 5, comment: "We loved learning how to make the authentic Bumbu Bali and Satay. Highly recommend this for anyone visiting Ubud.", status: 'published', source: 'google' },
    { customerName: "Elena R.", rating: 5, comment: "Such a beautiful setting in the rice fields. The cooking class was hands-on and the feast at the end was delicious.", status: 'published', source: 'google' },
    { customerName: "Michael & Jen", rating: 5, comment: "A highlight of our honeymoon! Everything from the Canang Sari offering making to the Dadar Gulung dessert was perfect.", status: 'published', source: 'tripadvisor' }
  ]

  for (const r of reviews) {
    await payload.create({ collection: 'reviews', data: r })
  }
  console.log("Reviews Seeded!")
}
seedReviews()
