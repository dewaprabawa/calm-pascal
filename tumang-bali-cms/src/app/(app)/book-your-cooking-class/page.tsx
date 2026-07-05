import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import BookButton from '../components/BookButton'
import BookingModal from '../components/BookingModal'
import WhatsAppFloat from '../components/WhatsAppFloat'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Book Authentic Balinese Cooking Class in Ubud | Tumang Bali',
  description: 'Join a 5-star rated authentic Balinese cooking class in Ubud. Includes market tour, hotel transport, and vegetarian options. Book your culinary adventure today!',
  alternates: { canonical: 'https://tumangbaliclass.com/book-your-cooking-class' },
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const { docs: activities } = await payload.find({ collection: 'activities' })
  const bookingActivities = activities.map((a) => ({
    id: a.id as string,
    title: a.title as string,
    price: a.price as number,
  }))

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tumang Bali Cooking Class",
    "description": "Join an authentic 5-star rated Balinese cooking class in Ubud. Includes market tour, transport, and traditional recipes.",
    "url": "https://tumangbaliclass.com/book-your-cooking-class",
    "priceRange": "$$",
    "telephone": "+62 82210132418", // Defaulting to the number used in WhatsApp link
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tumang Village",
      "addressLocality": "Ubud",
      "addressRegion": "Bali",
      "postalCode": "80571",
      "addressCountry": "ID"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Tumang Bali Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500">
              TUMANG BALI
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <Link href="/#classes" className="hover:text-orange-500 transition-colors">
              Classes
            </Link>
            <Link href="/#menu" className="hover:text-orange-500 transition-colors">
              Menu
            </Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-stone-50 to-orange-50/30 dark:from-orange-950/20 dark:via-zinc-950 dark:to-orange-900/10 -z-10" />
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-semibold tracking-wide border border-orange-200 dark:border-orange-900/30 mb-5">
              Available Daily
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-5">
              Book Your Authentic Balinese Cooking Class in Ubud
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              Ready to experience the flavors of Bali? Join our authentic Balinese cooking class in Ubud for a complete culinary adventure. From the traditional morning market to the rice fields, you'll learn the secrets of Balinese cuisine with a local chef.
            </p>
            <div className="mb-8">
              <p className="font-bold text-stone-800 dark:text-stone-200 mb-3">What's included in your class:</p>
              <ul className="space-y-2 text-stone-700 dark:text-stone-300 font-medium">
                <li className="flex items-center gap-2">
                  <span>✈️</span> Free Hotel Pickup (Ubud Center)
                </li>
                <li className="flex items-center gap-2">
                  <span>🥬</span> Authentic Market & Rice Field Tour
                </li>
                <li className="flex items-center gap-2">
                  <span>👩‍🍳</span> Hands-on Cooking with a Local Chef
                </li>
                <li className="flex items-center gap-2">
                  <span>🥗</span> Vegetarian & Vegan Menu Options Available
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95">
                Book Experience
              </BookButton>
              <a
                href="https://wa.me/6282210132418"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/60 hover:bg-white border border-stone-200 px-7 py-3.5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-stone-200 dark:border-zinc-800">
            <Image
              src="/images/img4.jpg"
              alt="Balinese cooking class in Ubud"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-10 text-center">
          Why Choose Tumang Bali for Your Cooking Experience?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 border border-stone-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-orange-600 dark:text-orange-500">
              1. A Real Cultural Experience
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Unlike the large groups at other schools, our Balinese cooking class in Ubud offers a personalized, family-style experience. We don't just cook; we explore. You'll start your day with a guided Ubud morning market tour, buying fresh spices and vegetables from local vendors.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 border border-stone-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-orange-600 dark:text-orange-500">
              2. Eat What You Cook
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              After you master dishes like Sambal Matah and Bebek Betutu, you'll sit down to enjoy a delicious lunch (or dinner) in our beautiful rice-field-view kitchen.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 border border-stone-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-orange-600 dark:text-orange-500">
              3. Flexible for Everyone
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Whether you are a solo traveler, a couple, or a large group cooking class in Ubud, we accommodate all dietary needs, including vegetarian cooking class options.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-3xl mx-auto bg-stone-100/50 dark:bg-zinc-900/30 rounded-3xl border border-stone-200 dark:border-zinc-800 mb-16">
        <h2 className="text-3xl font-black tracking-tight text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800">
            <h3 className="font-bold text-lg mb-2">Q: Where does the cooking class take place?</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">A: Our cooking class in Ubud takes place in a traditional Balinese village compound just a short drive from central Ubud, surrounded by rice fields.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800">
            <h3 className="font-bold text-lg mb-2">Q: Is the class suitable for vegetarians?</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">A: Yes! We offer a dedicated vegetarian and vegan menu. Just let us know when you book your cooking class so we can prepare the fresh ingredients.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800">
            <h3 className="font-bold text-lg mb-2">Q: Do you provide transport?</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">A: Yes, we offer free hotel pickup and drop-off for all guests staying in central Ubud.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali Cooking Class · Ubud, Bali
      </footer>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <BookingModal activities={bookingActivities} />
      <WhatsAppFloat />
    </div>
  )
}
