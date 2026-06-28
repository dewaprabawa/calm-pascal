import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function run() {
  const payload = await getPayload({ config: configPromise })
  
  const activities = await payload.find({ collection: 'activities' })
  
  if (activities.docs.length > 0) {
    const existing = activities.docs[0]
    
    // Rename existing to Morning Class if it doesn't already say Morning
    if (!existing.title.toLowerCase().includes('morning')) {
      await payload.update({
        collection: 'activities',
        id: existing.id,
        data: {
          title: existing.title + ' (Morning)'
        }
      })
      console.log('Updated existing activity to Morning')
    }
    
    // Check if afternoon already exists
    const afternoonExists = activities.docs.find(d => d.title.toLowerCase().includes('afternoon'))
    if (!afternoonExists) {
      // Create Afternoon Class
      const newActivity = await payload.create({
        collection: 'activities',
        data: {
          title: existing.title.replace(' (Morning)', '') + ' (Afternoon)',
          description: existing.description,
          durationHours: existing.durationHours,
          price: existing.price,
          instructor: existing.instructor as string,
          images: existing.images,
          includedItems: existing.includedItems,
          excludedItems: existing.excludedItems
        }
      })
      console.log('Created Afternoon Class!', newActivity.title)
    } else {
      console.log('Afternoon Class already exists.')
    }
  } else {
    console.log('No existing activities found to duplicate.')
  }
  
  process.exit(0)
}

run().catch(console.error)
