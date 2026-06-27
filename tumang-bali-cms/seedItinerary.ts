import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

async function seed() {
  const payload = await getPayload({ config: configPromise })

  console.log('Seeding Itinerary Global...')

  // Helper to upload media
  const uploadMedia = async (filePath: string, alt: string) => {
    const fullPath = path.resolve(__dirname, 'public', filePath.replace(/^\//, ''))
    if (!fs.existsSync(fullPath)) {
        console.warn(`File not found: ${fullPath}, skipping...`)
        return null
    }

    const stat = fs.statSync(fullPath)
    
    // Read file into memory buffer to avoid complex stream handling in seed
    const fileData = fs.readFileSync(fullPath)
    
    const media = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: fileData,
        mimetype: 'image/jpeg',
        name: path.basename(fullPath),
        size: stat.size,
      },
    })
    return media.id
  }

  const media5 = await uploadMedia('/images/img5.jpg', 'Hotel Pickup')
  const media2 = await uploadMedia('/images/img2.jpg', 'Ubud Local Market')
  const media3 = await uploadMedia('/images/img3.jpg', 'Ricefield Walk')
  const media1 = await uploadMedia('/images/img1.jpg', 'Cooking Class')
  const media4 = await uploadMedia('/images/img4.jpg', 'Local Restaurant')

  await payload.updateGlobal({
    slug: 'itinerary',
    data: {
      steps: [
        {
          title: "Hotel Pickup",
          duration: "30–60 mins",
          description: "Meet your driver at your hotel lobby and enjoy a comfortable ride to Ubud to begin your culinary adventure.",
          image: media5 || '',
        },
        {
          title: "Stop 1: Ubud Local Market",
          duration: "45 mins",
          description: "Meet your guide and explore the traditional morning market. You will see where locals shop and buy the fresh spices, vegetables, and ingredients you need for the class.",
          image: media2 || '',
        },
        {
          title: "Stop 2: Ricefield Walk",
          duration: "30 mins",
          description: "Take a short, beautiful walk through the green rice paddies. Learn how Balinese farmers grow rice before arriving at the kitchen.",
          image: media3 || '',
        },
        {
          title: "Stop 3: Cooking Class",
          duration: "2 hours",
          description: "Arrive at Tumang Balinese Kitchen. Enjoy a welcome drink, put on your apron, and learn about the ingredients. For the next two hours, you will chop, mix, and cook 4 to 5 traditional Balinese dishes step-by-step with your chef.",
          image: media1 || '',
        },
        {
          title: "Stop 4: Local Restaurant",
          duration: "1 hour",
          description: "Move to our peaceful dining area or local restaurant space. Sit down at the table with the rest of the group to eat the delicious food you just cooked. Relax, enjoy the view, and share stories before heading back to your hotel.",
          image: media4 || '',
        }
      ]
    }
  })

  console.log('Seeding Complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
