import React from 'react'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs: activities } = await payload.find({ collection: 'activities', depth: 1 })
  const { docs: instructors } = await payload.find({ collection: 'instructors' })
  const { docs: reviews } = await payload.find({ collection: 'reviews', where: { status: { equals: 'published' } } })
  const { docs: listings } = await payload.find({ collection: 'external-listings', where: { isActive: { equals: true } } })
  const { docs: recipes } = await payload.find({ collection: 'recipes', limit: 100 })

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b border-white/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-orange-600 dark:text-orange-500">TUMANG BALI</div>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 font-medium text-xs md:text-sm tracking-wide mt-4 md:mt-0">
            <a href="#classes" className="hover:text-orange-500 transition-colors">CLASSES</a>
            <a href="#menu" className="hover:text-orange-500 transition-colors">MENU</a>
            <a href="#instructors" className="hover:text-orange-500 transition-colors">INSTRUCTORS</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">REVIEWS</a>
          </div>
          <a href="#classes" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-stone-50 to-orange-50/30 dark:from-orange-950/20 dark:via-zinc-950 dark:to-orange-900/10 -z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-10000" />
        
        <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-semibold tracking-wide border border-orange-200 dark:border-orange-900/30 mb-4 animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Authentic Balinese Cooking Class in Ubud
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] animate-fade-in-up">
              Taste the Spirit <br/> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500">Bali</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-xl font-light leading-relaxed animate-fade-in-up">
              Immerse yourself in traditional flavors, fresh market ingredients, and ancient culinary secrets passed down through generations. Cook, dine, and share in the beauty of Ubud's rice fields.
            </p>
            
            {/* Quick Badges / Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-stone-200 relative overflow-hidden">
                    <Image src="/images/img3.jpg" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-stone-200 relative overflow-hidden">
                    <Image src="/images/img5.jpg" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-orange-600 flex items-center justify-center text-[10px] font-bold text-white">
                    5★
                  </div>
                </div>
                <div className="text-xs text-left">
                  <p className="font-bold text-stone-900 dark:text-white">1,500+ Happy Guests</p>
                  <p className="text-stone-500 dark:text-stone-400">Excellent reviews on TripAdvisor & Klook</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto animate-fade-in-up">
              <a href="#classes" className="bg-orange-600 hover:bg-orange-700 text-white text-center px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all hover:-translate-y-1">
                Explore Classes
              </a>
              <a href="#menu" className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 text-stone-800 dark:text-stone-200 text-center px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-50 dark:hover:bg-zinc-800 transition-all hover:-translate-y-1">
                View Recipes
              </a>
            </div>
          </div>
          
          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center lg:pl-4 mt-8 lg:mt-0">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-orange-500/5 dark:bg-orange-500/10 rounded-[2.5rem] -rotate-3 -z-10" />
            
            {/* Main Featured Image Card */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-white/30 dark:bg-zinc-950/30 backdrop-blur-sm group hover:-rotate-1 transition-transform duration-500">
              <Image 
                src="/images/img4.jpg" 
                alt="Cooking Class Experience" 
                fill 
                sizes="(max-w-768px) 100vw, 400px" 
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/0 to-stone-950/0" />
              
              {/* Image Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500">Dining Experience</p>
                <p className="text-sm font-semibold text-stone-900 dark:text-white mt-0.5">Savoring our hand-made feast overlooking Ubud's rice fields.</p>
              </div>
            </div>

            {/* Overlapping secondary image badge */}
            <div className="absolute -bottom-6 -left-6 w-32 md:w-40 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-900 hidden sm:block rotate-12 hover:rotate-0 transition-transform duration-300">
              <Image 
                src="/images/img2.jpg" 
                alt="Balinese Flower Offerings" 
                fill 
                sizes="160px"
                className="object-cover" 
              />
            </div>
            
            {/* Overlapping third badge */}
            <div className="absolute -top-6 -right-6 w-32 md:w-36 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-900 hidden sm:block -rotate-12 hover:rotate-0 transition-transform duration-300">
              <Image 
                src="/images/img1.jpg" 
                alt="Grilling Satay" 
                fill 
                sizes="140px"
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Activities / Classes */}
      <section id="classes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Experiences</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Choose from our hand-crafted cooking experiences, designed to suit both beginners and seasoned foodies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.length > 0 ? activities.map((activity) => (
            <div key={activity.id} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col">
              <div className="aspect-video bg-stone-200 dark:bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 to-amber-300/30 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-40 z-10" />
                {(() => {
                  let imgPath = '/images/img4.jpg';
                  if (activity.title.toLowerCase().includes('market') || activity.title.toLowerCase().includes('masterclass')) {
                    imgPath = '/images/img1.jpg';
                  } else if (activity.title.toLowerCase().includes('vegetarian') || activity.title.toLowerCase().includes('feast') || activity.title.toLowerCase().includes('veg')) {
                    imgPath = '/images/img2.jpg';
                  }
                  return (
                    <Image 
                      src={imgPath} 
                      alt={activity.title} 
                      fill 
                      sizes="(max-w-768px) 100vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  );
                })()}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-orange-600 transition-colors">{activity.title}</h3>
                  <span className="text-2xl font-black text-orange-500">${activity.price}</span>
                </div>
                <div className="flex items-center gap-4 mb-6 text-sm font-medium text-stone-500 dark:text-stone-400">
                  <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {activity.durationHours} Hours
                  </div>
                  {activity.instructor && typeof activity.instructor === 'object' && (
                    <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      With {activity.instructor.name}
                    </div>
                  )}
                </div>
                
                {/* Included Items */}
                {activity.includedItems && activity.includedItems.length > 0 && (
                  <div className="mb-8 mt-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">What's Included</p>
                    <ul className="space-y-2">
                      {activity.includedItems.map((item: any, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-stone-600 dark:text-stone-300 text-sm">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          {item.item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button className="w-full py-4 rounded-xl bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white dark:bg-orange-500/10 dark:hover:bg-orange-500 font-semibold transition-all duration-300 border border-orange-200 dark:border-transparent mt-auto">
                  Book Experience
                </button>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center bg-stone-100 dark:bg-zinc-900 rounded-3xl border border-dashed border-stone-300 dark:border-zinc-700 text-stone-500">
              Classes are being updated. Check back soon!
            </div>
          )}
        </div>
      </section>

      {/* Visual Gallery / Moments Section */}
      <section className="py-24 bg-stone-100/50 dark:bg-zinc-900/30 border-t border-b border-stone-200 dark:border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider">Photo Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4">Captured Moments</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">A glimpse into the authentic atmosphere, colorful ingredients, and smiles in our kitchen.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Moment 1 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/img1.jpg" 
                alt="Grilling Satay" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Tradition</p>
                <p className="text-white font-bold text-base mt-1">Grilling Satay Lilit</p>
                <p className="text-white/80 text-xs mt-1">Cooking with traditional coconut husk charcoal for signature smoke flavor.</p>
              </div>
            </div>

            {/* Moment 2 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/img2.jpg" 
                alt="Canang Sari Offerings" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Culture</p>
                <p className="text-white font-bold text-base mt-1">Balinese Flowers</p>
                <p className="text-white/80 text-xs mt-1">Crafting Canang Sari, the daily self-offering of flowers and grass leaves.</p>
              </div>
            </div>

            {/* Moment 3 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/img3.jpg" 
                alt="Guest Cooking Class" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Smiles</p>
                <p className="text-white font-bold text-base mt-1">Happy Cooking</p>
                <p className="text-white/80 text-xs mt-1">Enjoying hands-on experience and discovering local culinary tricks.</p>
              </div>
            </div>

            {/* Moment 4 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/img4.jpg" 
                alt="Guest Feast" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Gathering</p>
                <p className="text-white font-bold text-base mt-1">The Feast</p>
                <p className="text-white/80 text-xs mt-1">Eating the delicious Balinese lunch prepared together in a cozy setting.</p>
              </div>
            </div>

            {/* Moment 5 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/img5.jpg" 
                alt="Balinese Offering" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Ubud Vibe</p>
                <p className="text-white font-bold text-base mt-1">Rice Field Views</p>
                <p className="text-white/80 text-xs mt-1">Breathtaking views overlooking local farming fields during class breaks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Recipes */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 text-center md:text-left gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-green-700 dark:text-green-500">Tumang Bali Menu</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">In this cooking class you will learn how to make all the above menu by your hand and you will savor for lunch or dinner.</p>
          </div>
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Download Menu (PDF)
          </button>
        </div>
        
        <div className="space-y-16">
          {/* Regular Menu */}
          <div>
            <h3 className="text-3xl font-black text-green-700 dark:text-green-500 mb-8 tracking-tight flex items-center gap-4">
              <span className="bg-green-100 dark:bg-green-900/40 p-3 rounded-2xl">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </span>
              Regular Menu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.filter(r => !r.title.toLowerCase().includes('veg')).map((item, index) => {
                // Determine image URL
                const fallbackImages = ['1546069901-ba9599a7e63c', '1540420773420-3366772f4999', '1512621776951-a57141f2eefd', '1565557623262-b51c2513a641', '1555939594-58d7cb561ad1', '1511690656952-34342bb7c2f2']
                const fallbackImgId = fallbackImages[index % fallbackImages.length]
                const imageUrl = (item.image && typeof item.image === 'object' && item.image.url) 
                  ? item.image.url 
                  : `https://images.unsplash.com/photo-${fallbackImgId}?auto=format&fit=crop&q=80&w=200`
                  
                return (
                <div key={item.id} className="bg-white dark:bg-zinc-900 border border-stone-100 dark:border-zinc-800 rounded-3xl p-4 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-20 h-20 relative rounded-2xl overflow-hidden flex-shrink-0">
                    <Image src={imageUrl} alt={item.title} fill sizes="80px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-lg leading-tight group-hover:text-green-600 transition-colors">{item.title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{item.description}</p>
                  </div>
                </div>
              )})}
            </div>
          </div>

          {/* Vegetarian Menu */}
          <div>
            <h3 className="text-3xl font-black text-emerald-700 dark:text-emerald-500 mb-8 tracking-tight flex items-center gap-4">
              <span className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-2xl">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </span>
              Vegetarian Menu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.filter(r => r.title.toLowerCase().includes('veg')).map((item, index) => {
                // Determine image URL
                const fallbackImages = ['1511690656952-34342bb7c2f2', '1540420773420-3366772f4999', '1512621776951-a57141f2eefd', '1555939594-58d7cb561ad1', '1546069901-ba9599a7e63c', '1565557623262-b51c2513a641']
                const fallbackImgId = fallbackImages[index % fallbackImages.length]
                const imageUrl = (item.image && typeof item.image === 'object' && item.image.url) 
                  ? item.image.url 
                  : `https://images.unsplash.com/photo-${fallbackImgId}?auto=format&fit=crop&q=80&w=200`
                  
                return (
                <div key={item.id} className="bg-white dark:bg-zinc-900 border border-stone-100 dark:border-zinc-800 rounded-3xl p-4 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-20 h-20 relative rounded-2xl overflow-hidden flex-shrink-0">
                    <Image src={imageUrl} alt={item.title} fill sizes="80px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-lg leading-tight group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{item.description}</p>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-24 bg-stone-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Meet Your Hosts</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Local culinary experts passionate about sharing the true taste of Bali.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-stone-200 dark:border-zinc-800 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-32 h-32 mx-auto bg-stone-200 dark:bg-zinc-800 rounded-full mb-6 border-4 border-white dark:border-zinc-900 shadow-lg flex items-center justify-center text-3xl overflow-hidden relative">
                  {(() => {
                    const hasPhoto = instructor.photo && typeof instructor.photo === 'object' && instructor.photo.url;
                    if (hasPhoto) {
                      return <Image src={instructor.photo.url} alt={instructor.name} fill className="object-cover" />;
                    }
                    
                    // Fallback to our custom images
                    let fallbackPhoto = '/images/img1.jpg';
                    let objectPosition = 'center';
                    if (instructor.name.toLowerCase().includes('made') || instructor.name.toLowerCase().includes('ayu')) {
                      fallbackPhoto = '/images/img3.jpg';
                    } else if (instructor.name.toLowerCase().includes('wayan') || instructor.name.toLowerCase().includes('sudiana')) {
                      fallbackPhoto = '/images/img1.jpg';
                      // Focus on Wayan's face (the chef on the right side of the photo)
                      objectPosition = '55% 20%';
                    }
                    return (
                      <Image 
                        src={fallbackPhoto} 
                        alt={instructor.name} 
                        fill 
                        style={{ objectPosition }}
                        className="object-cover" 
                      />
                    );
                  })()}
                </div>
                <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                {instructor.specialties && (
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {instructor.specialties.map((s: any, i: number) => (
                      <span key={i} className="text-xs font-semibold px-2 py-1 bg-stone-100 dark:bg-zinc-800 text-stone-600 dark:text-stone-300 rounded-md">
                        {s.specialty}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Guest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="p-8 rounded-3xl bg-stone-50 dark:bg-zinc-900/50 border border-stone-100 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-lg">{review.customerName}</h4>
                    <div className="flex text-amber-500 mt-1">
                      {Array.from({ length: review.rating || 5 }).map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      ))}
                    </div>
                  </div>
                  {review.source && (
                    <span className="text-xs font-bold uppercase tracking-wider bg-stone-200 dark:bg-zinc-800 px-3 py-1 rounded-full">
                      {review.source}
                    </span>
                  )}
                </div>
                <p className="text-stone-600 dark:text-stone-300 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* External Listings Footer */}
      <footer className="bg-stone-900 dark:bg-black text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-2xl font-black tracking-tighter text-white mb-2">TUMANG BALI</div>
            <p className="text-sm">Authentic Cooking Classes in the heart of Bali.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Find us on</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {listings.map(listing => (
                <a key={listing.id} href={listing.url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-stone-700 hover:border-orange-500 hover:text-orange-500 transition-colors text-sm">
                  {listing.platformName}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
