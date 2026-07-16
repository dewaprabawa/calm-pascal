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
import { faqSchema } from './components/faqsData'

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

  let displayActivities = [...activities]

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl -z-10" />
        
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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] animate-fade-in-up">
              Experience Authentic <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500">Balinese Cooking Classes</span>
              <br className="hidden xl:block" /> in Ubud
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-xl font-light leading-relaxed animate-fade-in-up">
              Learn to cook authentic Balinese cuisine with our local chef in a traditional village kitchen. Our hands-on cooking class includes a local market tour, rice field walk, and a recipe booklet to take home.
            </p>
            
            {/* Quick Badges / Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 animate-fade-in-up">
              <TripAdvisorWidget />
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-stone-200 relative overflow-hidden">
                    <Image src="/images/itinerary/guest-dessert.jpg" alt="Student" fill className="object-cover" />
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
              <Link href="/book-your-cooking-class" className="w-full sm:w-auto text-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all hover:-translate-y-1">
                Book Your Cooking Class
              </Link>
              <Link href="/half-day-cooking-class-bali" className="w-full sm:w-auto flex items-center justify-center bg-white/50 hover:bg-white/80 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/80 backdrop-blur-md border border-stone-200 dark:border-zinc-700 text-stone-800 dark:text-stone-200 px-8 py-4 rounded-full font-semibold text-lg shadow-md transition-all hover:-translate-y-1">
                View Afternoon & Evening
              </Link>
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
                src="/images/itinerary/offerings-detail.jpg" 
                alt="Balinese Flower Offerings" 
                fill 
                sizes="160px"
                className="object-cover" 
              />
            </div>
            
            {/* Overlapping third badge */}
            <div className="absolute -top-6 -right-6 w-32 md:w-36 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-900 hidden sm:block -rotate-12 hover:rotate-0 transition-transform duration-300">
              <Image 
                src="/images/gallery-satay.jpg" 
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

      {/* Spice Paste Promotion Banner */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="space-y-4 max-w-2xl text-center md:text-left z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest">
              Secret Spice Paste
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Why Choose Our Balinese Cooking Class?
            </h2>
            <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">
              Read our guide on how we make our secret spice paste (Bumbu Bali) using authentic ingredients and traditional hand-grinding techniques.
            </p>
            <div className="pt-2 text-sm text-orange-100 font-medium">
              Thinking about a class?{' '}
              <Link href="/blog/tumang-vs-ubud-cooking-class" className="text-white underline hover:text-orange-200 transition-colors">
                Read why we choose the village setting over the town
              </Link>.
            </div>
          </div>
          <div className="z-10 w-full md:w-auto flex justify-center">
            <Link href="/blog/how-to-make-bumbu-bali" className="w-full md:w-auto inline-flex items-center justify-center bg-white hover:bg-orange-50 text-orange-700 font-bold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 shadow-lg text-center whitespace-nowrap">
              Read the Guide
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities / Classes */}
      <section id="classes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Cooking Experiences & Classes</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Choose from our hand-crafted cooking experiences, designed to suit both beginners and seasoned foodies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayActivities.length > 0 ? displayActivities.map((activity, index) => (
            <div key={activity.id} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col">
              <div className="aspect-video bg-stone-200 dark:bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 to-amber-300/30 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-40 z-10" />
                {(() => {
                  const cmsImage = activity.images?.[0]?.image;
                  const imgPath = (cmsImage && typeof cmsImage === 'object' && cmsImage.url)
                    ? cmsImage.url
                    : `/images/activities/grid${(index % 5) + 1}.jpg`;
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

      {/* What's Included Section */}
      <section id="whats-included" className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">Everything Covered</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What's Included in Our Cooking Class</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">
            We provide a complete, hassle-free experience so you can focus entirely on enjoying your culinary adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Hotel Pickup & Drop-off</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Complimentary transport for all major Ubud areas.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Market & Rice Field Tour</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Guided local market tour & authentic rice field walk.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Hands-on Cooking</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Learn to prepare 10+ traditional Balinese dishes step-by-step.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Take-Home Recipe Booklet</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Printed booklet with all recipes so you can cook them at home.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A7.5 7.5 0 105.146 9.146l3.536 3.536m6.707-3.536l-3.536-3.536M9.146 9.146l-3.536-3.536m0 0L3.05 3.05M9.146 9.146l6.707 6.707M12 21a9.003 9.003 0 008.364-5.636m-16.728 0A9.003 9.003 0 0012 21z"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Welcome Drink & Feast</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Refreshing welcome drink plus lunch/dinner feast of your creations.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Vegetarian/Vegan Friendly</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Fully customisable plant-based menu available upon request.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Small Group Sizes</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Intimate and hands-on session with a maximum of 8 guests.</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <span className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </span>
            <h3 className="font-bold text-stone-900 dark:text-white mb-2">Local Guides & Chefs</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">Learn from local Balinese experts in a warm family atmosphere.</p>
          </div>
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
                src="/images/cooking-stirfry.jpg" 
                alt="Stir Frying Ingredients" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Preparation</p>
                <p className="text-white font-bold text-base mt-1">Stir Frying</p>
                <p className="text-white/80 text-xs mt-1">Stir frying fresh ingredients on our traditional Balinese gas stoves.</p>
              </div>
            </div>

            {/* Moment 2 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/dining-table.jpg" 
                alt="Guests Dining" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Gathering</p>
                <p className="text-white font-bold text-base mt-1">Shared Feast</p>
                <p className="text-white/80 text-xs mt-1">Savoring our hand-made traditional Balinese lunch together overlooking the sawah.</p>
              </div>
            </div>

            {/* Moment 3 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/group-shrine.jpg" 
                alt="Group in Rice Fields" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Group Fun</p>
                <p className="text-white font-bold text-base mt-1">Rice Field Shrine</p>
                <p className="text-white/80 text-xs mt-1">Smiling and celebrating a wonderful day of cooking by our traditional stone shrine.</p>
              </div>
            </div>

            {/* Moment 4 */}
            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/group-brochures.jpg" 
                alt="Chef and Guests with Certificates" 
                fill 
                sizes="(max-w-768px) 100vw, 250px"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Graduation</p>
                <p className="text-white font-bold text-base mt-1">Proud Certificates</p>
                <p className="text-white/80 text-xs mt-1">Guests showing off their cooking certificates after a fun-filled day.</p>
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

      {/* About Balinese Cuisine Section */}
      <section id="balinese-cuisine" className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider block">Culinary Heritage</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">Discover Traditional Balinese Cuisine</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              Balinese cuisine is built on fresh market ingredients, aromatic spices, and centuries-old family recipes. 
              In this class, you'll learn the secrets behind <strong className="font-semibold text-orange-600 dark:text-orange-400">Bumbu Bali</strong> (our signature spice paste), 
              the perfect <strong className="font-semibold text-stone-800 dark:text-stone-200">Sate Ayam</strong>, <strong className="font-semibold text-stone-800 dark:text-stone-200">Pepes Ikan</strong>, and the iconic <strong className="font-semibold text-stone-800 dark:text-stone-200">Sayur Urap</strong>.
            </p>
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              Whether you're a beginner or an experienced home cook, you'll walk away with real skills and a recipe booklet to recreate these authentic flavors at home.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900">
            <Image 
              src="/images/cooking-stirfry.jpg" 
              alt="Traditional Balinese Cooking" 
              fill 
              sizes="(max-w-1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Traditional Techniques</p>
              <p className="text-base font-semibold mt-1">Grinding and cooking fresh herbs in our village kitchen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Recipes */}
      <MenuSection recipes={recipes} />

      {/* Instructors */}
      <section id="instructors" className="py-24 bg-stone-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Cook with Local Balinese Chef Wayan Suryana</h2>
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
                      fallbackPhoto = '/images/instructor-wayan.jpg';
                      // Focus on Wayan's face (the chef is on the left/middle of the photo)
                      objectPosition = '41% 36%';
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
                      <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full" width={48} height={48} />
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

      {/* From Our Blog — internal links for orphan pages */}
      <section className="py-24 px-6 bg-stone-100/50 dark:bg-zinc-900/30 border-t border-b border-stone-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">Explore More</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">From Our Blog</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Deepen your knowledge of Balinese cuisine, cooking techniques, and the best experiences in Ubud.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/how-bali-cooking-classes-work" className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-lg font-bold flex-shrink-0">01</div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">How a Balinese Cooking Class Works</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">A step-by-step walkthrough of what to expect during your cooking class in Ubud.</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/more-about-our-cooking-class" className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-lg font-bold flex-shrink-0">02</div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">More About Our Cooking Class</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">What makes our cooking experience in Ubud different from other Balinese cooking classes.</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/ubud-cooking-class-first-timers-guide" className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-lg font-bold flex-shrink-0">03</div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">First-Timers Guide to Ubud Cooking Class</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">Everything you need to know before your first Balinese cooking experience.</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/cooking-with-local-family" className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-lg font-bold flex-shrink-0">04</div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">Cook with a Local Balinese Family</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">Discover the real Ubud experience — cooking in a traditional home with a local family.</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/rice-field-cooking-class" className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-lg font-bold flex-shrink-0">05</div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">Rice Field Cooking Class in Ubud</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">Outdoor cooking in the heart of Bali's iconic rice paddies.</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/best-things-to-do-in-ubud" className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-lg font-bold flex-shrink-0">06</div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">10 Best Things to Do in Ubud</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">Beyond cooking — the top experiences and activities in Ubud.</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/cooking-class-bali-faqs" className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-lg font-bold flex-shrink-0">07</div>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">Cooking Class in Bali — FAQs</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">Prices, what to wear, dietary options, and everything we get asked most.</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
              View all blog posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

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

      {/* Who This Cooking Class Is For Section */}
      <section id="who-this-is-for" className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">Designed For Everyone</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Who This Cooking Class Is For</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">
            Our Ubud cooking class is perfect for travelers, food lovers, and families looking for an authentic cultural experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V14a2 2 0 012-2h.055M11 20.055V18a2 2 0 00-2-2h-.5a2 2 0 01-2-2v-1.055M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">Travelers & Explorers</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed font-light">
              Dive deep into Balinese heritage. From picking ingredients at the local Ubud market to exploring scenic rice fields, it's a true cultural immersion.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">Food Lovers & Cooks</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed font-light">
              Master the aromatic secrets of Balinese cuisine. Learn to blend our signature spice paste (Bumbu Bali) and cook 10+ traditional dishes from scratch.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">Families & Beginners</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed font-light">
              No prior experience needed. We guide you step-by-step. Fully welcoming to dietary options (vegetarian/vegan) and kids aged 8+.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Booking CTA */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-stone-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow gap-6">
           <div className="text-center md:text-left mb-6 md:mb-0">
             <h3 className="text-2xl font-bold text-stone-900 dark:text-white">Prefer to book via our partners?</h3>
             <p className="text-stone-500 dark:text-stone-400 mt-2">Check availability and book your cooking class instantly on Airbnb or GetYourGuide.</p>
           </div>
           <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
             <a 
               id="cta-book-airbnb"
               href="https://www.airbnb.com/rp/idewagedea5?p=recommendations&product=experience&listing_id=7165714&s=67&unique_share_id=582a21ed-bab6-4137-9fc8-4465e02e60e2" 
               target="_blank" 
               rel="noreferrer" 
               className="flex items-center justify-center gap-3 bg-[#FF385C] hover:bg-[#E61E4D] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.03] hover:-translate-y-1 shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto whitespace-nowrap"
             >
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2.163c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
               </svg>
               Book on Airbnb
             </a>
             <a 
               id="cta-book-getyourguide"
               href="https://www.getyourguide.com/ubud-l32246/ubud-balinese-cooking-class-with-local-chef-t1377291/?preview=Z20T720YWPOY66RHBWIETDBX34JYLJW7" 
               target="_blank" 
               rel="noreferrer" 
               className="flex items-center justify-center gap-3 bg-[#FF5533] hover:bg-[#E04B2D] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.03] hover:-translate-y-1 shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto whitespace-nowrap"
             >
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                 <path d="M9 12l2 2 4-4"/>
               </svg>
               Book on GetYourGuide
             </a>
           </div>
        </div>
      </section>

      {/* External Listings Footer */}
      <footer className="bg-stone-900 dark:bg-black text-stone-400 py-16 border-t border-stone-800">
        {/* Internal links to dedicated class pages (SEO) */}
        <div className="max-w-7xl mx-auto px-6 mb-12 pb-12 border-b border-stone-800">
          <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider text-center md:text-left">Our Cooking Classes in Ubud</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start text-sm">
            <Link href="/authentic-balinese-cooking-class" className="hover:text-orange-500 transition-colors">Authentic Balinese Cooking Class</Link>
            <Link href="/best-bali-cooking-class" className="hover:text-orange-500 transition-colors">Best Bali Cooking Classes</Link>
            <Link href="/bali-cooking-class-for-beginners" className="hover:text-orange-500 transition-colors">Cooking Class for Beginners</Link>
            <Link href="/vegetarian-cooking-class-ubud" className="hover:text-orange-500 transition-colors">Vegetarian Cooking Class</Link>
            <Link href="/private-cooking-class-ubud" className="hover:text-orange-500 transition-colors">Private Cooking Class</Link>
            <Link href="/cooking-class-with-market-tour-ubud" className="hover:text-orange-500 transition-colors">Cooking Class with Market Tour</Link>
            <Link href="/half-day-cooking-class-bali" className="hover:text-orange-500 transition-colors">Half-Day Cooking Class</Link>
            <Link href="/where-to-stay-bali-cooking-class" className="hover:text-orange-500 transition-colors">Where to Stay in Bali</Link>
            <Link href="/what-to-wear-bali-cooking-class" className="hover:text-orange-500 transition-colors">What to Wear</Link>
            <Link href="/cooking-class-bali" className="hover:text-orange-500 transition-colors">Cooking Class in Bali</Link>
            <Link href="/balinese-cooking-class-ubud" className="hover:text-orange-500 transition-colors">Balinese Cooking Class in Ubud</Link>
            <Link href="/best-cooking-classes-bali" className="hover:text-orange-500 transition-colors">Best Cooking Classes in Bali</Link>
            <Link href="/tumang-village" className="hover:text-orange-500 transition-colors">Tumang Village</Link>
            <Link href="/tumpeng-making-class" className="hover:text-orange-500 transition-colors">Tumpeng Making Class</Link>
            <Link href="/bali-cooking-experience" className="hover:text-orange-500 transition-colors">Bali Cooking Experience</Link>
            <Link href="/recipes" className="hover:text-orange-500 transition-colors">Balinese Recipes</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog &amp; Recipes</Link>
            <Link href="/id" hrefLang="id" className="hover:text-orange-500 transition-colors">Bahasa Indonesia</Link>
          </div>
        </div>
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
              {listings.map(listing => {
                const platformLabels: Record<string, string> = {
                  klook: 'Klook',
                  agoda: 'Agoda',
                  airbnb: 'Airbnb',
                  expedia: 'Expedia',
                  viator: 'Viator',
                  instagram: 'Instagram',
                }
                return (
                  <a key={listing.id} id={`footer-listing-${listing.platformName}`} href={listing.url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 rounded-full border border-stone-700 hover:border-orange-500 hover:text-orange-500 transition-colors text-sm">
                    {platformLabels[listing.platformName] || listing.platformName}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <WhatsAppFloat />

      {/* Booking Modal */}
      <BookingModal activities={displayActivities.map(a => ({ id: a.id as string, title: a.title, price: a.price as number }))} />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
