import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import MenuSection from './components/MenuSection'
import HeroVideo from './components/HeroVideo'
import ItinerarySection from './components/ItinerarySection'
import BookingModal from './components/BookingModal'
import BookButton from './components/BookButton'
import TripAdvisorWidget from './components/TripAdvisorWidget'
import StructuredData from './components/StructuredData'
import FAQSection from './components/FAQSection'
import WhatsAppFloat from './components/WhatsAppFloat'
import StatsCounter from './components/StatsCounter'
import MobileMenu from './components/MobileMenu'
import PickupSchedule from './components/PickupSchedule'
import TikTokEmbed from './components/TikTokEmbed'
import InstagramEmbed from './components/InstagramEmbed'

export const revalidate = 60

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  
  // Fetch from Payload concurrently for massive speed boost
  const [
    { docs: activities },
    { docs: instructors },
    { docs: reviews },
    { docs: listings },
    { docs: recipes },
    itinerary
  ] = await Promise.all([
    payload.find({ collection: 'activities', depth: 1 }),
    payload.find({ collection: 'instructors' }),
    payload.find({ collection: 'reviews', where: { status: { equals: 'published' } } }),
    payload.find({ collection: 'external-listings', where: { isActive: { equals: true } } }),
    payload.find({ collection: 'recipes', limit: 100 }),
    payload.findGlobal({ slug: 'itinerary', depth: 1 })
  ])

  // Automatically split single generic activity into Morning and Afternoon options
  let displayActivities = [...activities]
  if (displayActivities.length === 1 && !displayActivities[0].title.toLowerCase().includes('afternoon')) {
    displayActivities = [
      { ...displayActivities[0], title: 'Morning Class', id: 'morning-class' },
      { ...displayActivities[0], title: 'Afternoon Class', id: 'afternoon-class' }
    ]
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b border-white/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" fill className="object-cover" />
            </div>
            <div className="text-2xl font-black tracking-tighter text-orange-600 dark:text-orange-500">TUMANG BALI</div>
          </div>
          <div className="hidden lg:flex flex-wrap items-center gap-4 md:gap-8 font-medium text-xs md:text-sm tracking-wide mt-4 md:mt-0">
            <a href="#classes" className="hover:text-orange-500 transition-colors">CLASSES</a>
            <a href="#itinerary" className="hover:text-orange-500 transition-colors">ITINERARY</a>
            <a href="#menu" className="hover:text-orange-500 transition-colors">MENU</a>
            <a href="#instructors" className="hover:text-orange-500 transition-colors">INSTRUCTORS</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">REVIEWS</a>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">BLOG</Link>
            <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
            <a href="#location" className="hover:text-orange-500 transition-colors">LOCATION</a>
          </div>
          <BookButton className="hidden sm:inline-flex bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 text-sm md:text-base">
            Book Now
          </BookButton>
          <MobileMenu />
        </div>
      </nav>

      {/* SEO Structured Data */}
      <StructuredData />

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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 animate-fade-in-up">
              <TripAdvisorWidget />
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
                  <p className="font-bold text-stone-900 dark:text-white">500++ Happy Guests</p>
                  <p className="text-stone-500 dark:text-stone-400">Excellent reviews on TripAdvisor & Klook</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up">
              <BookButton className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white text-center px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all hover:-translate-y-1">
                Book Experience
              </BookButton>
              <a href="#classes" className="w-full sm:w-auto flex items-center justify-center bg-white/50 hover:bg-white/80 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/80 backdrop-blur-md border border-stone-200 dark:border-zinc-700 text-stone-800 dark:text-stone-200 px-8 py-4 rounded-full font-semibold text-lg shadow-md transition-all hover:-translate-y-1">
                Explore Classes
              </a>
              <div className="w-full sm:w-auto flex items-center justify-center">
                <HeroVideo />
              </div>
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

      {/* Animated Stats */}
      <StatsCounter />

      {/* Activities / Classes */}
      <section id="classes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Experiences</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Choose from our hand-crafted cooking experiences, designed to suit both beginners and seasoned foodies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayActivities.length > 0 ? displayActivities.map((activity) => (
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
                  <span className="text-2xl font-black text-orange-500">IDR {activity.price}K</span>
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
                
                <BookButton activityTitle={activity.title} className="w-full py-4 rounded-xl bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white dark:bg-orange-500/10 dark:hover:bg-orange-500 font-semibold transition-all duration-300 border border-orange-200 dark:border-transparent mt-auto">
                  Book Experience
                </BookButton>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center bg-stone-100 dark:bg-zinc-900 rounded-3xl border border-dashed border-stone-300 dark:border-zinc-700 text-stone-500">
              Classes are being updated. Check back soon!
            </div>
          )}
        </div>
      </section>

      <ItinerarySection steps={itinerary?.steps as any} />

      {/* Pickup Schedule */}
      <PickupSchedule />

      {/* Visual Gallery / Moments Section */}
      <section className="py-24 bg-stone-100/50 dark:bg-zinc-900/30 border-t border-b border-stone-200 dark:border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider">Photo Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4">Captured Moments</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">A glimpse into the authentic atmosphere, colorful ingredients, and smiles in our kitchen.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Moment 1 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/gallery-chopping.jpg" 
                alt="Chopping Ingredients" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Preparation</p>
                <p className="text-white font-bold text-base mt-1">Hands-on Cooking</p>
                <p className="text-white/80 text-xs mt-1">Chopping fresh ingredients together for our authentic Balinese spice paste.</p>
              </div>
            </div>

            {/* Moment 2 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/gallery-group.jpg" 
                alt="Group in Rice Fields" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Gathering</p>
                <p className="text-white font-bold text-base mt-1">New Friends</p>
                <p className="text-white/80 text-xs mt-1">Sharing smiles and beautiful rice field views with guests from around the world.</p>
              </div>
            </div>

            {/* Moment 3 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/gallery-girls.jpg" 
                alt="Guests with Offerings" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Culture</p>
                <p className="text-white font-bold text-base mt-1">Balinese Offerings</p>
                <p className="text-white/80 text-xs mt-1">Holding handmade Canang Sari flower offerings by our traditional temple.</p>
              </div>
            </div>

            {/* Moment 4 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/gallery-thumbs.jpg" 
                alt="Chef and Guests" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Smiles</p>
                <p className="text-white font-bold text-base mt-1">Expert Guidance</p>
                <p className="text-white/80 text-xs mt-1">Thumbs up! Our local chefs ensure a fun, safe, and delicious experience.</p>
              </div>
            </div>

            {/* Moment 5 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/gallery-satay.jpg" 
                alt="Grilling Satay" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Tradition</p>
                <p className="text-white font-bold text-base mt-1">Grilling Satay</p>
                <p className="text-white/80 text-xs mt-1">Cooking with traditional coconut husk charcoal for signature smoke flavor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen on Social Media */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">As Seen On</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Social Media</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Watch what our guests are saying about their cooking experience!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center">
          <TikTokEmbed />
          <InstagramEmbed />
        </div>
      </section>

      {/* Menu / Recipes */}
      <MenuSection recipes={recipes} />

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
            {reviews.map((review: any) => (
              <div key={review.id || review.time} className="p-8 rounded-3xl bg-stone-50 dark:bg-zinc-900/50 border border-stone-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {review.profile_photo_url ? (
                      <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center font-bold text-orange-600">
                        {(review.customerName || review.author_name || 'G')[0]}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-lg">{review.customerName || review.author_name}</h4>
                      <div className="flex text-amber-500 mt-1">
                        {Array.from({ length: review.rating || 5 }).map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        ))}
                        {review.relative_time_description && (
                          <span className="text-xs text-stone-400 ml-2 mt-0.5">{review.relative_time_description}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-stone-200 dark:bg-zinc-800 px-3 py-1 rounded-full flex items-center gap-1">
                    {review.author_name ? (
                      <>
                        <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>
                        Google
                      </>
                    ) : (
                      review.source || 'Verified'
                    )}
                  </span>
                </div>
                <p className="text-stone-600 dark:text-stone-300 italic">"{review.comment || review.text}"</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQSection />

      {/* Location */}
      <section id="location" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Find Us</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Join us in the heart of Bali. We are located at Warung Tumang Bali.</p>
        </div>
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-stone-100 dark:bg-zinc-900 aspect-video md:aspect-[21/9]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505094.34248964326!2d115.2810863!3d-8.4945634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d2325683733%3A0x52a86956537dd317!2sWarung%20Tumang%20Bali!5e0!3m2!1sen!2sid!4v1782035274458!5m2!1sen!2sid" 
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Review CTA Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-3xl p-8 md:p-16 border border-orange-100 dark:border-orange-900/30 text-center flex flex-col items-center shadow-lg shadow-orange-500/5">
          <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">We Love Our Guests</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Enjoyed your experience?</h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-2xl text-lg mb-10">
            As a local family business, your reviews mean the world to us. They help other travelers find authentic Balinese experiences and support our community. If you loved cooking with us, please take a moment to share your story!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto">
            <a 
              href="https://maps.app.goo.gl/4t7AQnSqF1Uxqm5h8" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-white dark:bg-zinc-900 hover:bg-stone-50 dark:hover:bg-zinc-800 border-2 border-stone-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 text-stone-900 dark:text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-md w-full sm:w-1/2"
            >
              <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>
              Review on Google
            </a>
            
            <a 
              href="https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-white dark:bg-zinc-900 hover:bg-stone-50 dark:hover:bg-zinc-800 border-2 border-stone-200 dark:border-zinc-700 hover:border-green-500 dark:hover:border-green-500 text-stone-900 dark:text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-md w-full sm:w-1/2"
            >
              <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.5 13.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-1.5 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm-9 0c0 2.485-2.015 4.5-4.5 4.5S3 15.985 3 13.5 5.015 9 7.5 9s4.5 2.015 4.5 4.5zm-1.5 0c0-1.657-1.343-3-3-3S4.5 11.843 4.5 13.5s1.343 3 3 3 3-1.343 3-3zM12 4.5c-2.485 0-4.5 2.015-4.5 4.5 0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5c0-2.485-2.015-4.5-4.5-4.5z" />
              </svg>
              Review on TripAdvisor
            </a>
          </div>
        </div>
      </section>

      {/* Partner Booking CTA */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-stone-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
           <div className="text-center md:text-left mb-6 md:mb-0">
             <h3 className="text-2xl font-bold text-stone-900 dark:text-white">Prefer to book via our partners?</h3>
             <p className="text-stone-500 dark:text-stone-400 mt-2">Check availability and book your cooking class instantly on GetYourGuide.</p>
           </div>
           <a 
             href="https://www.getyourguide.com/ubud-l32246/ubud-balinese-cooking-class-with-local-chef-t1377291/?preview=Z20T720YWPOY66RHBWIETDBX34JYLJW7" 
             target="_blank" 
             rel="noreferrer" 
             className="flex items-center justify-center gap-3 bg-[#FF5533] hover:bg-[#E04B2D] text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-md w-full md:w-auto whitespace-nowrap"
           >
             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
               <path d="M9 12l2 2 4-4"/>
             </svg>
             Book on GetYourGuide
           </a>
        </div>
      </section>

      {/* External Listings Footer */}
      <footer className="bg-stone-900 dark:bg-black text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter text-white mb-2">TUMANG BALI</div>
            <p className="text-sm">Authentic Cooking Classes in the heart of Bali.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Find us on</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://www.instagram.com/tumangbali_/?hl=en" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-700 hover:border-pink-500 hover:text-pink-500 transition-colors text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              {listings.map(listing => (
                <a key={listing.id} href={listing.url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 rounded-full border border-stone-700 hover:border-orange-500 hover:text-orange-500 transition-colors text-sm">
                  {listing.platformName}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <WhatsAppFloat />

      {/* Booking Modal */}
      <BookingModal activities={displayActivities.map(a => ({ id: a.id as string, title: a.title, price: a.price as number }))} />
    </div>
  )
}
