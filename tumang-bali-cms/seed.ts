import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function seed() {
  const payload = await getPayload({ config: configPromise })

  console.log('Clearing Database...')
  await payload.delete({ collection: 'instructors', where: {} })
  await payload.delete({ collection: 'activities', where: {} })
  await payload.delete({ collection: 'recipes', where: {} })
  await payload.delete({ collection: 'reviews', where: {} })
  await payload.delete({ collection: 'external-listings', where: {} })

  console.log('Seeding Database...')

  // 1. Create Instructor
  const instructor1 = await payload.create({
    collection: 'instructors',
    data: {
      name: 'Wayan Sudiana',
      bio: 'Born and raised in Ubud, Wayan learned traditional Balinese cooking from his grandmother. He has over 15 years of experience sharing his culinary heritage.',
      specialties: [{ specialty: 'Traditional Spice Pastes (Bumbu)' }, { specialty: 'Balinese Sate' }],
    },
  })

  const instructor2 = await payload.create({
    collection: 'instructors',
    data: {
      name: 'Made Ayu',
      bio: 'Made specializes in plant-based Balinese cuisine and traditional desserts. Her classes are a joyful journey into the sweet side of Bali.',
      specialties: [{ specialty: 'Vegetarian/Vegan' }, { specialty: 'Traditional Desserts' }],
    },
  })

  // 2. Create Activities
  const activity1 = await payload.create({
    collection: 'activities',
    data: {
      title: 'Morning Market Tour & Cooking Masterclass',
      durationHours: 5,
      price: 65,
      instructor: instructor1.id,
      includedItems: [{ item: 'Market Tour' }, { item: 'Welcome Drink' }, { item: 'Lunch' }, { item: 'Recipe Book' }],
      excludedItems: [{ item: 'Hotel Pickup (Available for extra fee)' }],
    },
  })

  const activity2 = await payload.create({
    collection: 'activities',
    data: {
      title: 'Evening Vegetarian Balinese Feast',
      durationHours: 3.5,
      price: 55,
      instructor: instructor2.id,
      includedItems: [{ item: 'Welcome Drink' }, { item: 'Dinner' }, { item: 'Digital Recipes' }],
      excludedItems: [{ item: 'Hotel Pickup' }],
    },
  })

  // 3. Create Recipes (Menu)
  const menuItems = [
    // Regular
    { title: 'Sup Jamur', description: 'Mushroom Soup', type: 'regular' },
    { title: 'Tempe Manis', description: 'Sweet Fried Tempe', type: 'regular' },
    { title: 'Sayur Urap', description: 'Mix Vegetables in Coconut Spices', type: 'regular' },
    { title: 'Kare Ayam', description: 'Chicken Kare', type: 'regular' },
    { title: 'Sate Ayam', description: 'Chicken Satay', type: 'regular' },
    { title: 'Pepes Ikan', description: 'Steamed Fish in Banana Leaf', type: 'regular' },
    { title: 'Nasi Goreng atau Nasi Kuning', description: 'Fried Rice or Yellow Rice', type: 'regular' },
    { title: 'Pergedel Jagung', description: 'Fried Dumpling Corn', type: 'regular' },
    { title: 'Sambal Matah', description: 'Balinese Raw Sambal', type: 'regular' },
    { title: 'Dadar Gulung', description: 'Rolled Cake with Coconut and Palm Sugar', type: 'regular' },
    // Vegetarian
    { title: 'Sup Sayur', description: 'Vegetable Soup', type: 'vegetarian' },
    { title: 'Tempe Manis (Veg)', description: 'Sweet Fried Tempe', type: 'vegetarian' },
    { title: 'Sayur Urap (Veg)', description: 'Mix Vegetables in Coconut Spices', type: 'vegetarian' },
    { title: 'Sate Tempe', description: 'Soybean Cake Skewer with Peanut Sauce', type: 'vegetarian' },
    { title: 'Tofu Pepes', description: 'Steamed Tofu With Mushroom in Banana Leaf', type: 'vegetarian' },
    { title: 'Kare Tahu', description: 'Tofu Kare', type: 'vegetarian' },
    { title: 'Nasi Kuning (Veg)', description: 'Yellow Rice', type: 'vegetarian' },
    { title: 'Pergedel Jagung (Veg)', description: 'Fried Dumpling Corn', type: 'vegetarian' },
    { title: 'Sambal Matah (Veg)', description: 'Balinese Raw Sambal', type: 'vegetarian' },
    { title: 'Dadar Gulung (Veg)', description: 'Rolled Cake with Coconut and Palm Sugar', type: 'vegetarian' },
  ];

  for (const item of menuItems) {
    await payload.create({
      collection: 'recipes',
      data: {
        title: item.title,
        description: item.description,
        isRequestable: true,
      },
    })
  }

  // 4. Create Reviews
  await payload.create({
    collection: 'reviews',
    data: {
      customerName: 'Sarah Jenkins',
      rating: 5,
      comment: 'An absolutely incredible experience. Wayan was so knowledgeable and the market tour was eye-opening! The food we made was the best I had in Bali.',
      source: 'tripadvisor',
      status: 'published',
      activity: activity1.id,
    },
  })

  await payload.create({
    collection: 'reviews',
    data: {
      customerName: 'David Chen',
      rating: 5,
      comment: 'Made is a wonderful teacher. The vegetarian dishes were packed with flavor. Highly recommend!',
      source: 'google',
      status: 'published',
      activity: activity2.id,
    },
  })

  // 5. External Listings
  await payload.create({
    collection: 'external-listings',
    data: {
      platformName: 'klook',
      url: 'https://klook.com',
      isActive: true,
    },
  })
  
  await payload.create({
    collection: 'external-listings',
    data: {
      platformName: 'airbnb',
      url: 'https://airbnb.com/experiences',
      isActive: true,
    },
  })

  console.log('Seeding Complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
