import type { Migration } from '@payloadcms/next/types'

export const seedAISearchSchema: Migration = {
  name: 'seed-ai-search-schema',
  up: async ({ payload }) => {
    console.log('📦 Seeding AI search schema data...')

    const bumblu = await payload.findByValue({
      collection: 'articles',
      value: 'how-to-make-bumbu-bali',
    })
    if (bumblu) {
      await payload.update({
        collection: 'articles',
        id: bumblu.id,
        data: {
          faq: [
            { question: 'Can I make Balinese bumbu without shrimp paste (terasi)?', answer: 'Yes. While traditional savory dishes almost always include terasi, you can substitute it with a pinch of sugar and extra shallots, or simply omit it. We offer vegetarian options at our cooking class so everyone can enjoy the flavors.' },
            { question: 'What is the difference between Bumbu Bali and Bumbu Jawa (Javanese spice paste)?', answer: 'Balinese bumbu generally relies more heavily on turmeric, giving it a yellow/golden color, whereas Javanese bumbu tends to be darker, richer, and relies more on shalot and sweet soy sauce (kecap manis).' },
            { question: 'Do I really need a stone mortar and pestle?', answer: 'While a high-powered blender works in a pinch, a stone mortar produces a much more aromatic and flavorful paste. For the authentic experience, we highly recommend using a cobek.' },
          ],
          authorRole: 'Culinary Expert',
          authorBio: 'Expert in traditional Balinese cooking with 15+ years of experience.',
          articleSection: 'Cooking Tips',
          keywords: [
            { keyword: 'Balinese bumbu' },
            { keyword: 'Indonesian spice paste' },
            { keyword: 'how to make bumbu Bali' },
            { keyword: 'Balinese cooking' },
          ],
        },
      })
      console.log(`✅ Updated: how-to-make-bumbu-bali (${bumblu.id})`)
    }

    const tumangVs = await payload.findByValue({
      collection: 'articles',
      value: 'tumang-vs-ubud-cooking-class',
    })
    if (tumangVs) {
      await payload.update({
        collection: 'articles',
        id: tumangVs.id,
        data: {
          faq: [
            { question: 'Is Tumang (Batubulan) close to Ubud?', answer: 'Yes, it is very close. Tumang is only about 10–15 minutes from the center of Ubud. We pick up guests from their hotels in the morning and drop them off after lunch.' },
            { question: 'Is the cooking class in Tumang more authentic than in Ubud?', answer: 'Generally, yes. Because Tumang is a working village and not a tourism hub, the classes are often more focused on daily Balinese life and family traditions.' },
            { question: 'Do I need to rent a scooter to join the Tumang cooking class?', answer: 'No. We provide free hotel pickup from the Ubud area. We drive you to the local market, then to the rice paddy kitchen, and back to your hotel.' },
          ],
          authorRole: 'Local Food Guide',
          authorBio: 'Born and raised in the Ubud area with deep knowledge of Balinese cooking and culture.',
          articleSection: 'Travel Guide',
          keywords: [
            { keyword: 'Tumang cooking class' },
            { keyword: 'Tumang vs Ubud' },
            { keyword: 'Balinese cooking class location' },
            { keyword: 'authentic cooking class Bali' },
          ],
        },
      })
      console.log(`✅ Updated: tumang-vs-ubud-cooking-class (${tumangVs.id})`)
    }

    console.log('✅ AI search schema seeding complete.')
  },
  down: async ({ payload }) => {
    console.log('⚠️  Migration down: manual cleanup required')
  },
}
