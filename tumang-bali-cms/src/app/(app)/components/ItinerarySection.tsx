import React from 'react'
import Image from 'next/image'
import BookButton from './BookButton'

type ItineraryStep = {
  title: string
  duration: string
  description: string
  image: string | any
}
export default function ItinerarySection({ steps: payloadSteps }: { steps?: ItineraryStep[] }) {
  const staticImages = [
    '/images/img5.jpg',                        // Step 1: Hotel Pickup (stays as is)
    '/images/itinerary/market-fresh.jpg',      // Step 2: Ubud Local Market
    '/images/itinerary/offerings-detail.jpg',  // Step 3: Ricefield Walk
    '/images/itinerary/cooking-table.jpg',     // Step 4: Cooking Class
    '/images/itinerary/guest-dessert.jpg',     // Step 5: Local Restaurant/Dining
  ]

  const rawSteps = payloadSteps && payloadSteps.length > 0 ? payloadSteps : [
    {
      title: "Hotel Pickup",
      duration: "30–60 mins",
      description: "Meet your driver at your hotel lobby and enjoy a comfortable ride to Ubud to begin your culinary adventure.",
      image: "/images/img5.jpg"
    },
    {
      title: "Stop 1: Ubud Local Market",
      duration: "45 mins",
      description: "Meet your guide and explore the traditional morning market. You will see where locals shop and buy the fresh spices, vegetables, and ingredients you need for the class.",
      image: "/images/itinerary/market-fresh.jpg"
    },
    {
      title: "Stop 2: Ricefield Walk",
      duration: "30 mins",
      description: "Take a short, beautiful walk through the green rice paddies. Learn how Balinese farmers grow rice before arriving at the kitchen.",
      image: "/images/itinerary/offerings-detail.jpg"
    },
    {
      title: "Stop 3: Cooking Class",
      duration: "2 hours",
      description: "Arrive at Tumang Balinese Kitchen. Enjoy a welcome drink, put on your apron, and learn about the ingredients. For the next two hours, you will chop, mix, and cook 4 to 5 traditional Balinese dishes step-by-step with your chef.",
      image: "/images/itinerary/cooking-table.jpg"
    },
    {
      title: "Stop 4: Local Restaurant",
      duration: "1 hour",
      description: "Move to our peaceful dining area or local restaurant space. Sit down at the table with the rest of the group to eat the delicious food you just cooked. Relax, enjoy the view, and share stories before heading back to your hotel.",
      image: "/images/itinerary/guest-dessert.jpg"
    }
  ]

  const steps = rawSteps.map((step, index) => ({
    ...step,
    image: staticImages[index] || (typeof step.image === 'object' && step.image?.url ? step.image.url : step.image)
  }))

  return (
    <section id="itinerary" className="py-24 px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">The Experience</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Your Itinerary</h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg md:text-xl font-light">A step-by-step guide to your culinary adventure with Tumang Bali.</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[27px] md:left-[39px] top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-orange-300 dark:via-orange-600/50 to-transparent rounded-full opacity-50"></div>
        
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group">
              
              {/* Timeline Number - Mobile (Hidden on MD) */}
              <div className="md:hidden absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 font-black text-xl z-10 shadow-sm border-2 border-white dark:border-zinc-900">
                {index + 1}
              </div>

              {/* Timeline Number - Desktop */}
              <div className="hidden md:flex relative z-10 flex-shrink-0 items-center justify-center w-20 h-20 rounded-full bg-stone-50 dark:bg-zinc-950 border-4 border-white dark:border-zinc-900 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-2xl shadow-inner shadow-white/20">
                  {index + 1}
                </div>
              </div>

              {/* Content Box */}
              <div className="flex-1 flex flex-col-reverse md:flex-row gap-0 md:gap-6 bg-white dark:bg-zinc-900/80 rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 border border-stone-200 dark:border-zinc-800 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:-translate-y-1 w-full relative overflow-hidden backdrop-blur-xl">
                
                {/* Text Content */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center relative z-10">
                  <div className="flex flex-col items-start gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100 dark:text-orange-400 dark:bg-orange-500/10 rounded-full px-3 py-1.5 shadow-sm border border-orange-200/50 dark:border-orange-500/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {step.duration}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors pr-12 md:pr-0">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg font-light">
                    {step.description}
                  </p>
                </div>

                {/* Step Image */}
                <div className="w-full md:w-64 aspect-[21/9] md:aspect-square rounded-[1.5rem] overflow-hidden relative shadow-inner z-0">
                  <Image 
                    src={typeof step.image === 'object' && step.image?.url ? step.image.url : step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                </div>

              </div>
              
            </div>
          ))}

          <div className="mt-16 flex justify-center">
            <BookButton className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-2xl font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-stone-900/20 dark:shadow-white/20">
              Book Your Spot Now
            </BookButton>
          </div>
        </div>

        {/* Optional Drop-off Notice */}
        <div className="mt-16 md:pl-[120px] flex justify-center md:justify-start">
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/30 shadow-sm max-w-lg">
            <svg className="w-8 h-8 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base font-medium">
              <span className="font-bold text-orange-600 dark:text-orange-400 block mb-0.5">Optional Drop-off</span> 
              Your driver will be waiting to take you back to your accommodation after the meal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
