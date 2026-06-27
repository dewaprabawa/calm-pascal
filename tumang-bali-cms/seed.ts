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
      price: 350,
      instructor: instructor1.id,
      includedItems: [{ item: 'Market Tour' }, { item: 'Welcome Drink' }, { item: 'Lunch' }, { item: 'Recipe Book' }],
      excludedItems: [{ item: 'Hotel Pickup (Available for extra fee)' }],
    },
  })



  // 3. Create Recipes (Menu)
  const menuItems = [
    // Regular
    { title: 'Sup Jamur', description: 'Mushroom Soup', type: 'regular', ingredients: [{item: 'Oyster mushrooms', quantity: '200g'}, {item: 'Coconut milk', quantity: '100ml'}, {item: 'Lemongrass', quantity: '1 stalk'}, {item: 'Galangal', quantity: '1 slice'}, {item: 'Garlic', quantity: '2 cloves'}, {item: 'Shallots', quantity: '4 cloves'}] },
    { title: 'Tempe Manis', description: 'Sweet Fried Tempe', type: 'regular', ingredients: [{item: 'Tempeh', quantity: '250g'}, {item: 'Sweet soy sauce (Kecap Manis)', quantity: '3 tbsp'}, {item: 'Palm sugar', quantity: '1 tbsp'}, {item: 'Garlic', quantity: '3 cloves'}, {item: 'Red chili', quantity: '2 pcs'}] },
    { title: 'Sayur Urap', description: 'Mix Vegetables in Coconut Spices', type: 'regular', ingredients: [{item: 'Long beans', quantity: '100g'}, {item: 'Bean sprouts', quantity: '50g'}, {item: 'Grated coconut', quantity: '100g'}, {item: 'Lesser galangal (Kencur)', quantity: '1 tsp'}, {item: 'Lime leaves', quantity: '2 pcs'}, {item: 'Palm sugar', quantity: '1 tbsp'}] },
    { title: 'Kare Ayam', description: 'Chicken Kare', type: 'regular', ingredients: [{item: 'Chicken breast', quantity: '300g'}, {item: 'Coconut milk', quantity: '200ml'}, {item: 'Turmeric', quantity: '1 inch'}, {item: 'Coriander seeds', quantity: '1 tsp'}, {item: 'Lemongrass', quantity: '1 stalk'}, {item: 'Lime juice', quantity: '1 tbsp'}] },
    { title: 'Sate Ayam', description: 'Chicken Satay', type: 'regular', ingredients: [{item: 'Chicken breast', quantity: '300g'}, {item: 'Bamboo skewers', quantity: '10 pcs'}, {item: 'Sweet soy sauce', quantity: '2 tbsp'}, {item: 'Garlic', quantity: '2 cloves'}, {item: 'Peanut sauce', quantity: '100g'}] },
    { title: 'Pepes Ikan', description: 'Steamed Fish in Banana Leaf', type: 'regular', ingredients: [{item: 'White fish fillet', quantity: '300g'}, {item: 'Banana leaves', quantity: '2 large'}, {item: 'Tomato', quantity: '1 pc'}, {item: 'Lemon basil (Kemangi)', quantity: '1 handful'}, {item: 'Turmeric paste', quantity: '2 tbsp'}] },
    { title: 'Nasi Goreng atau Nasi Kuning', description: 'Fried Rice or Yellow Rice', type: 'regular', ingredients: [{item: 'Cooked white rice', quantity: '2 cups'}, {item: 'Egg', quantity: '1 pc'}, {item: 'Sweet soy sauce', quantity: '1 tbsp'}, {item: 'Shallots', quantity: '3 cloves'}, {item: 'Garlic', quantity: '2 cloves'}, {item: 'Shrimp paste (Terasi)', quantity: '1/2 tsp'}] },
    { title: 'Pergedel Jagung', description: 'Fried Dumpling Corn', type: 'regular', ingredients: [{item: 'Sweet corn', quantity: '2 cobs'}, {item: 'Flour', quantity: '3 tbsp'}, {item: 'Egg', quantity: '1 pc'}, {item: 'Celery leaves', quantity: '1 stalk'}, {item: 'Garlic', quantity: '2 cloves'}, {item: 'White pepper', quantity: '1/2 tsp'}] },
    { title: 'Sambal Matah', description: 'Balinese Raw Sambal', type: 'regular', ingredients: [{item: 'Shallots', quantity: '10 cloves'}, {item: "Bird's eye chili", quantity: '5 pcs'}, {item: 'Lemongrass', quantity: '2 stalks'}, {item: 'Shrimp paste', quantity: '1/2 tsp'}, {item: 'Coconut oil', quantity: '3 tbsp'}, {item: 'Kaffir lime', quantity: '1 pc'}] },
    { title: 'Dadar Gulung', description: 'Rolled Cake with Coconut and Palm Sugar', type: 'regular', ingredients: [{item: 'Pandan juice', quantity: '50ml'}, {item: 'Flour', quantity: '1 cup'}, {item: 'Egg', quantity: '1 pc'}, {item: 'Coconut milk', quantity: '100ml'}, {item: 'Grated coconut', quantity: '1 cup'}, {item: 'Palm sugar', quantity: '100g'}] },
    // Vegetarian
    { title: 'Sup Sayur', description: 'Vegetable Soup', type: 'vegetarian', ingredients: [{item: 'Carrots', quantity: '100g'}, {item: 'Cabbage', quantity: '100g'}, {item: 'Potatoes', quantity: '2 pcs'}, {item: 'Vegetable broth', quantity: '500ml'}, {item: 'Garlic', quantity: '2 cloves'}, {item: 'Celery', quantity: '1 stalk'}] },
    { title: 'Tempe Manis', description: 'Sweet Fried Tempe', type: 'vegetarian', ingredients: [{item: 'Tempeh', quantity: '250g'}, {item: 'Sweet soy sauce (Kecap Manis)', quantity: '3 tbsp'}, {item: 'Palm sugar', quantity: '1 tbsp'}, {item: 'Garlic', quantity: '3 cloves'}, {item: 'Red chili', quantity: '2 pcs'}] },
    { title: 'Sayur Urap', description: 'Mix Vegetables in Coconut Spices', type: 'vegetarian', ingredients: [{item: 'Long beans', quantity: '100g'}, {item: 'Bean sprouts', quantity: '50g'}, {item: 'Grated coconut', quantity: '100g'}, {item: 'Lesser galangal (Kencur)', quantity: '1 tsp'}, {item: 'Lime leaves', quantity: '2 pcs'}, {item: 'Palm sugar', quantity: '1 tbsp'}] },
    { title: 'Sate Tempe', description: 'Soybean Cake Skewer with Peanut Sauce', type: 'vegetarian', ingredients: [{item: 'Tempeh', quantity: '300g'}, {item: 'Bamboo skewers', quantity: '10 pcs'}, {item: 'Sweet soy sauce', quantity: '2 tbsp'}, {item: 'Coriander powder', quantity: '1 tsp'}, {item: 'Peanut sauce', quantity: '100g'}] },
    { title: 'Tofu Pepes', description: 'Steamed Tofu With Mushroom in Banana Leaf', type: 'vegetarian', ingredients: [{item: 'Firm Tofu', quantity: '300g'}, {item: 'Oyster mushrooms', quantity: '100g'}, {item: 'Banana leaves', quantity: '2 large'}, {item: 'Tomato', quantity: '1 pc'}, {item: 'Lemon basil (Kemangi)', quantity: '1 handful'}, {item: 'Turmeric paste', quantity: '2 tbsp'}] },
    { title: 'Kare Tahu', description: 'Tofu Kare', type: 'vegetarian', ingredients: [{item: 'Firm Tofu', quantity: '300g'}, {item: 'Coconut milk', quantity: '200ml'}, {item: 'Turmeric', quantity: '1 inch'}, {item: 'Coriander seeds', quantity: '1 tsp'}, {item: 'Lemongrass', quantity: '1 stalk'}, {item: 'Lime juice', quantity: '1 tbsp'}] },
    { title: 'Nasi Kuning', description: 'Yellow Rice', type: 'vegetarian', ingredients: [{item: 'White rice', quantity: '2 cups'}, {item: 'Coconut milk', quantity: '100ml'}, {item: 'Turmeric juice', quantity: '2 tbsp'}, {item: 'Lemongrass', quantity: '1 stalk'}, {item: 'Pandan leaf', quantity: '1 pc'}, {item: 'Lime leaves', quantity: '2 pcs'}] },
    { title: 'Pergedel Jagung', description: 'Fried Dumpling Corn', type: 'vegetarian', ingredients: [{item: 'Sweet corn', quantity: '2 cobs'}, {item: 'Flour', quantity: '3 tbsp'}, {item: 'Celery leaves', quantity: '1 stalk'}, {item: 'Garlic', quantity: '2 cloves'}, {item: 'White pepper', quantity: '1/2 tsp'}] },
    { title: 'Sambal Matah', description: 'Balinese Raw Sambal', type: 'vegetarian', ingredients: [{item: 'Shallots', quantity: '10 cloves'}, {item: "Bird's eye chili", quantity: '5 pcs'}, {item: 'Lemongrass', quantity: '2 stalks'}, {item: 'Coconut oil', quantity: '3 tbsp'}, {item: 'Kaffir lime', quantity: '1 pc'}, {item: 'Salt', quantity: '1/2 tsp'}] },
    { title: 'Dadar Gulung', description: 'Rolled Cake with Coconut and Palm Sugar', type: 'vegetarian', ingredients: [{item: 'Pandan juice', quantity: '50ml'}, {item: 'Flour', quantity: '1 cup'}, {item: 'Coconut milk', quantity: '100ml'}, {item: 'Grated coconut', quantity: '1 cup'}, {item: 'Palm sugar', quantity: '100g'}, {item: 'Salt', quantity: '1/4 tsp'}] },
  ];

  for (const item of menuItems) {
    await payload.create({
      collection: 'recipes',
      data: {
        title: item.title,
        description: item.description,
        menuType: item.type as any,
        isRequestable: true,
        ingredients: item.ingredients,
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
