/**
 * Seed FAQ/HowTo/author data into existing articles so they get rich results.
 * Run: node scripts/seed-article-schemas.mjs
 * Requires: the CMS is running (default: localhost:3000)
 */

async function updateArticle(slug, data) {
  const res = await fetch(`http://localhost:3000/api/articles/find`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      where: { slug: { equals: slug } },
      limit: 1,
    }),
  })
  const json = await res.json()
  const article = json.docs?.[0]
  if (!article) {
    console.warn(`⚠️  Not found: ${slug}`)
    return false
  }
  const updateRes = await fetch(`http://localhost:3000/api/articles/${article.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  })
  if (updateRes.ok) {
    console.log(`✅ Updated: ${article.title} (${slug})`)
    return true
  }
  const errText = await updateRes.text()
  console.error(`❌ Failed to update ${slug}:`, errText)
  return false
}

async function main() {
  console.log('Seeding article schemas for rich results...\n')

  await updateArticle('how-to-make-bumbu-bali', {
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
  })

  await updateArticle('tumang-vs-ubud-cooking-class', {
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
  })

  console.log('\nDone! Restart the dev server if needed.')
}

main().catch(console.error)
