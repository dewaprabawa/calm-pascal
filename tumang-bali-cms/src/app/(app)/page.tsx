import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export default async function Home() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs: activities } = await payload.find({
    collection: 'activities',
  })

  return (
    <main className="min-h-screen p-8 bg-zinc-50 dark:bg-black text-black dark:text-white font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">Tumang Bali</h1>
        <p className="text-xl mb-12 text-center text-zinc-600 dark:text-zinc-400">
          Traditional Balinese Cooking Classes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.length > 0 ? activities.map((activity) => (
            <div key={activity.id} className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">{activity.title}</h2>
              {activity.durationHours && (
                <p className="text-zinc-600 dark:text-zinc-400 mb-2 text-sm">Duration: {activity.durationHours} hours</p>
              )}
              <p className="text-xl font-bold mb-6">${activity.price}</p>
              <button className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-md hover:opacity-80 transition">
                Book Now
              </button>
            </div>
          )) : (
            <div className="col-span-full text-center text-zinc-500 py-16 border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-xl">
              <h3 className="text-xl font-medium mb-2">No Activities Yet</h3>
              <p>Go to <a href="/admin" className="text-blue-500 hover:underline">/admin</a> to create your first cooking class!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
