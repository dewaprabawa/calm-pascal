import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cooking Class in Bali — Traditional Balinese Cooking Experience | Tumang Bali',
  description: 'A cooking class in Bali is a hands-on culinary experience where you learn to prepare traditional Balinese dishes using fresh, locally sourced ingredients. Includes market tour, cooking instruction, and lunch.',
  keywords: ['cooking class bali', 'balinese cooking class', 'cooking class ubud', 'bali cooking experience'],
  openGraph: {
    title: 'Cooking Class in Bali — Traditional Balinese Cooking Experience',
    description: 'A cooking class in Bali is a hands-on culinary experience where you learn to prepare traditional Balinese dishes using fresh, locally sourced ingredients.',
    url: 'https://tumangbaliclass.com/cooking-class-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Traditional Balinese cooking class in Bali — Hands-on cooking experience in Ubud',
      },
    ],
  },
}

export default function CookingClassBaliPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      {/* Navigation (simplified) */}
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
          '@type': 'HowTo',
          'name': 'Balinese Cooking Class in Tumang Village',
          'description': 'Learn to prepare traditional Balinese dishes including babi guling, bebek betutu, lawar, and sambal in a hands-on cooking class in Central Bali.',
          'totalTime': 'PT4H',
          'estimatedCost': {
            '@type': 'MonetaryCost',
            'currency': 'USD',
            'value': '35'
          },
          'supply': [
            'Fresh market vegetables and spices',
            'Traditional Balinese spice paste (bumbu)',
            'Meat (babi guling, bebek betutu)',
            'Coconut and herbs',
            'Rice and accompaniments'
          ],
          'step': [
            { '@type': 'HowToStep', 'name': 'Market Tour', 'text': 'Visit a traditional Balinese morning market to select fresh ingredients for your cooking class.' },
            { '@type': 'HowToStep', 'name': 'Rice Field Walk', 'text': 'Walk through green rice paddies to reach the cooking venue.' },
            { '@type': 'HowToStep', 'name': 'Prepare Spice Paste', 'text': 'Grind Balinese spice paste (bumbu) using a traditional stone mortar and pestle.' },
            { '@type': 'HowToStep', 'name': 'Cook Traditional Dishes', 'text': 'Cook 4-5 traditional Balinese dishes under chef guidance.' },
            { '@type': 'HowToStep', 'name': 'Enjoy Your Feast', 'text': 'Share the meal you just prepared with your group.' }
          ]
        }) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-4 inline-block">Cooking Classes in Bali</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-stone-900 dark:text-white">
          Cooking Class in Bali — Authentic Balinese Cooking Experience
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
          A cooking class in Bali is a hands-on culinary experience where you learn to prepare traditional Balinese dishes using fresh, locally sourced ingredients. Classes typically include a visit to a morning market, step-by-step cooking instruction from a local chef, and a shared lunch featuring the dishes you prepared.
        </p>
      </section>

      {/* What You'll Cook */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">What You'll Learn to Cook</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">Our class covers 10+ traditional Balinese dishes — from spice pastes to desserts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ['Babi Guling', 'Suckling pig — the star of Balinese cuisine, marinated in turmeric and lemongrass'],
            ['Bebek Betutu', 'Slow-cooked duck wrapped in banana leaves with a rich spice paste'],
            ['Lawar', 'Mixed salad with coconut, meat, and herbs — a Balinese staple'],
            ['Sate Lilit', 'Traditional skewered satay made with minced meat and spice paste'],
            ['Pepes Ikan', 'Fish steamed in banana leaf with aromatic spices'],
            ['Bumbu Bali', 'The signature Balinese spice paste — the foundation of every dish'],
            ['Kolak Pisang', 'Sweet banana dessert in palm sugar gravy'],
            ['Nasi Goreng', 'Indonesian fried rice with Balinese twist'],
            ['Gado Gado', 'Blanched vegetable salad with peanut sauce'],
          ].map(([name, desc]) => (
            <div key={name} className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl">
              <h3 className="font-bold text-stone-900 dark:text-white mb-2">{name}</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-stone-900 dark:text-white">The Cooking Class Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-stone-900 dark:text-white text-lg mb-1">1. Market Tour (45 min)</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light">Meet your guide and explore a traditional Balinese morning market. Buy fresh spices, vegetables, and ingredients for your class.</p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 dark:text-white text-lg mb-1">2. Rice Field Walk (30 min)</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light">Walk through stunning green rice paddies to reach the kitchen, learning about Balinese agriculture along the way.</p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 dark:text-white text-lg mb-1">3. Cooking Class (2 hours)</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light">Put on your apron and cook 4-5 traditional Balinese dishes step-by-step with your local chef.</p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 dark:text-white text-lg mb-1">4. Lunch & Certificate (1 hour)</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light">Enjoy the feast you just cooked, receive a recipe booklet and certificate, and head back to your hotel.</p>
              </div>
            </div>
          </div>
          <div className="bg-stone-100 dark:bg-zinc-900 rounded-3xl p-8 border border-stone-200 dark:border-zinc-800">
            <h3 className="font-bold text-stone-900 dark:text-white mb-4">What's Included</h3>
            <ul className="space-y-3">
              {[
                'Hotel pickup and drop-off from Ubud area',
                'Guided morning market tour',
                'All cooking ingredients and equipment',
                'Hands-on instruction from a local chef',
                'Full lunch/dinner of your prepared dishes',
                'Recipe booklet to take home',
                'Cooking certificate',
                'Vegetarian and vegan menu available',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-stone-600 dark:text-stone-400 font-light">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-stone-200 dark:border-zinc-800">
              <p className="text-3xl font-bold text-stone-900 dark:text-white">From $35 <span className="text-sm font-normal text-stone-500">per person</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="bg-stone-900 dark:bg-black rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Ready to Cook in Bali?</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-10 text-lg">
            Join us for an authentic Balinese cooking class in Tumang village, just 30 minutes from Ubud.
          </p>
          <Link href="/book-your-cooking-class" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Book Your Cooking Class
          </Link>
        </div>
      </section>
    </div>
  )
}
