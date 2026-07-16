import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Balinese Cooking Class in Ubud — Traditional Cooking Experience | Tumang Bali',
  description: 'A Balinese cooking class in Ubud is a hands-on culinary experience where you learn to prepare traditional Balinese dishes. Our class near Ubud includes a market tour, cooking instruction, and lunch.',
  keywords: ['balinese cooking class ubud', 'cooking class near ubud', 'ubud cooking class', 'ubud cooking experience'],
  openGraph: {
    title: 'Balinese Cooking Class in Ubud — Traditional Cooking Experience',
    description: 'A Balinese cooking class in Ubud is a hands-on culinary experience where you learn to prepare traditional Balinese dishes. Our class near Ubud includes a market tour, cooking instruction, and lunch.',
    url: 'https://tumangbaliclass.com/balinese-cooking-class-ubud',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Balinese cooking class in Ubud — Learn traditional Balinese cooking with market tour',
      },
    ],
  },
}

export default function BalineseCookingClassUbudPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b border-white/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600 dark:text-orange-500">TUMANG BALI</Link>
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <Link href="/book-your-cooking-class" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105">Book Now</Link>
          </div>
        </div>
      </nav>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Event',
          'name': 'Balinese Cooking Class in Ubud',
          'description': 'A hands-on Balinese cooking class near Ubud. Includes market tour, cooking instruction, and lunch. 30 minutes from Ubud center with hotel pickup included.',
          'eventType': 'https://schema.org/CookingClass',
          'location': {
            '@type': 'Place',
            'name': 'Tumang Village',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Gianyar Regency',
              'addressRegion': 'Bali',
              'addressCountry': 'ID'
            }
          },
          'offers': {
            '@type': 'Offer',
            'price': '35',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock'
          }
        }) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-4 inline-block">Balinese Cooking Class Near Ubud</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-stone-900 dark:text-white">
          Balinese Cooking Class in Ubud — Traditional Cooking Experience
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
          A Balinese cooking class in Ubud is a hands-on culinary experience where participants learn to prepare authentic Balinese dishes including babi guling (suckling pig), bebek betutu (slow-cooked duck), lawar (mixed salad), and traditional sambals. Our class near Ubud typically includes a morning market visit, cooking instruction in a traditional village setting, and a shared lunch — all just 30 minutes from Ubud's center.
        </p>
      </section>

      {/* Why Ubud */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-stone-900 dark:text-white">Why Choose a Cooking Class Near Ubud?</h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-6">
              Ubud is Bali's cultural heart, famous for its art galleries, temples, and rice terraces. Adding a cooking class to your Ubud itinerary is the perfect way to experience authentic Balinese culture beyond the tourist trail.
            </p>
            <div className="space-y-4">
              {[
                ['Cultural Immersion', 'Learn about Balinese ingredients, spice pastes, and cooking traditions passed down through generations.'],
                ['Convenient Location', 'Our village location is only 30 minutes from Ubud center — close enough for a day activity, far enough to feel like a genuine escape.'],
                ['Authentic Setting', 'Unlike resort cooking classes, our village kitchen gives you the real Balinese experience — surrounded by rice paddies and local village life.'],
                ['All Skill Levels', 'Whether you\'ve never cooked Balinese food before or you\'re an experienced home cook, our class is designed for everyone.'],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <h3 className="font-bold text-stone-900 dark:text-white">{title}</h3>
                    <p className="text-stone-600 dark:text-stone-400 font-light text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-stone-100 dark:bg-zinc-900 rounded-3xl p-8 border border-stone-200 dark:border-zinc-800">
            <h3 className="font-bold text-stone-900 dark:text-white mb-4">Location & Transport</h3>
            <div className="space-y-4 text-stone-600 dark:text-stone-400 font-light">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <p className="font-medium text-stone-900 dark:text-white">From Ubud Center</p>
                  <p>30 minutes by car / scooter</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <p className="font-medium text-stone-900 dark:text-white">From Seminyak/Canggu</p>
                  <p>~1 hour by car</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <p className="font-medium text-stone-900 dark:text-white">Pickup Included</p>
                  <p>Free hotel pickup from Ubud area — we come to you!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <p className="font-medium text-stone-900 dark:text-white">Other Areas</p>
                  <p>We can arrange pickup from outside Ubud for a small additional fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-3xl p-8 md:p-16 border border-orange-100 dark:border-orange-900/30 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">Book Your Cooking Class Near Ubud</h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-10 text-lg font-light">
            Join us in Tumang village, just 30 minutes from Ubud. Free hotel pickup, market tour, cooking instruction, and lunch included.
          </p>
          <Link href="/book-your-cooking-class" className="inline-flex items-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Book Now — From $35 per Person
          </Link>
        </div>
      </section>
    </div>
  )
}
