import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bali Cooking Experience — Authentic Traditional Balinese Cooking | Tumang Bali',
  description: 'A Bali cooking experience is more than a class — it\'s cultural immersion. Visit a local market, walk through rice paddies, learn from a Balinese family, and cook authentic dishes in a village kitchen.',
  keywords: ['bali cooking experience', 'authentic balinese cooking', 'bali culinary experience', 'cooking experience in bali'],
  openGraph: {
    title: 'Bali Cooking Experience — Authentic Traditional Balinese Cooking',
    description: 'A Bali cooking experience is more than a class — it\'s cultural immersion. Visit a local market, walk through rice paddies, learn from a Balinese family, and cook authentic dishes in a village kitchen.',
    url: 'https://tumangbaliclass.com/bali-cooking-experience',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Bali cooking experience — Authentic traditional Balinese cooking class',
      },
    ],
  },
}

export default function BaliCookingExperiencePage() {
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
          '@type': 'TouristTrip',
          'name': 'Bali Cooking Experience — Tumang Village',
          'description': 'An authentic Balinese cooking experience in Tumang village. Includes market tour, rice field walk, hands-on cooking, lunch, and recipe booklet. Free hotel pickup from Ubud area.',
          'touristType': 'Families, Couples, Solo Travelers',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Tumang Bali Cooking Class',
            'url': 'https://tumangbaliclass.com'
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
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-4 inline-block">Bali Cooking Experience</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-stone-900 dark:text-white">
          Bali Cooking Experience — Authentic Traditional Balinese Cooking
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
          A Bali cooking experience is more than just learning to cook — it's cultural immersion. At Tumang Bali Cooking Class, your experience includes visiting a local morning market to select fresh ingredients, walking through stunning rice paddies, learning traditional recipes from Chef Wayan's family, and sharing a feast of dishes you prepared together — all set in a real Balinese village, not a resort or purpose-built cooking school.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">Your Bali Cooking Experience — Step by Step</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">
            Here's what your day with Chef Wayan looks like — from the first moment we pick you up at your hotel.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            { step: 1, time: '7:30 AM', title: 'Hotel Pickup', desc: 'We come to your hotel in the Ubud area. The driver brings you to our meeting point with a cup of Balinese coffee or tea.' },
            { step: 2, time: '8:00 AM', title: 'Morning Market Tour', desc: 'Your guide takes you to a traditional Balinese morning market. This is where locals shop for their daily needs — vibrant colors of spices, exotic fruits, fresh vegetables, and herbs you\'ve never seen before.' },
            { step: 3, time: '8:45 AM', title: 'Rice Paddy Walk', desc: 'Walk through the stunning green rice paddies that surround Tumang village. The morning breeze, the sound of water channels, and views of distant mountains set the stage for your cooking experience.' },
            { step: 4, time: '9:15 AM', title: 'Welcome & Preparation', desc: 'Arrive at the Tumang kitchen. Wash your hands, put on a welcoming Balinese flower offering, get your apron, and enjoy a welcome drink. Chef Wayan introduces himself and explains the dishes you\'ll cook today.' },
            { step: 5, time: '9:30 AM - 11:30 AM', title: 'Hands-On Cooking', desc: 'This is the heart of your experience. You\'ll grind spice pastes with a traditional stone mortar and pestle, chop vegetables, marinate meats, wrap fish in banana leaves, and cook 4-5 traditional Balinese dishes.' },
            { step: 6, time: '11:30 AM - 12:30 PM', title: 'The Feast & Certificate', desc: 'Sit down at the table with your new friends and eat the food you just cooked. You\'ll receive a printed recipe booklet with all the dishes you made, a certificate of completion, and photos of the day.' },
          ].map(({ step, time, title, desc }) => (
            <div key={step} className="relative pl-8 md:pl-0 mb-12 last:mb-0">
              <div className="hidden md:block absolute left-[48px] top-0 bottom-[-24px] w-0.5 bg-stone-200 dark:bg-zinc-800" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="hidden md:flex relative z-10 flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-stone-50 dark:bg-zinc-950 border-4 border-white dark:border-zinc-900 shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-sm">{step}</div>
                </div>
                <div className="md:hidden absolute -left-2 top-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-sm">{step}</div>
                <div className="flex-1 bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/30 rounded-full px-3 py-1">{time}</span>
                    <h3 className="font-bold text-xl text-stone-900 dark:text-white">{title}</h3>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">What Our Guests Say</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">
            Don't just take our word for it — hear from people who've shared this experience with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ['"An absolutely incredible experience. Wayan was so knowledgeable and the market tour was eye-opening! The food we made was the best I had in Bali."', '- Sarah M., Australia', '5 ★★★★★'],
            ['"This was the highlight of our Bali trip. The village setting, the market tour, the cooking — everything was authentic and fun. We even learned to make offerings!"', '- James & Emma, UK', '5 ★★★★★'],
            ['"We did this cooking class as a family with two kids (ages 10 and 13) and they loved it. Chef Wayan was so patient and made it fun for everyone. Highly recommend!"', '- The Chen Family, Singapore', '5 ★★★★★'],
          ].map(([quote, author, rating]) => (
            <blockquote key={author} className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
              <p className="text-stone-600 dark:text-stone-400 font-light italic leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center justify-between">
                <span className="text-stone-900 dark:text-white font-bold text-sm">{author}</span>
                <span className="text-orange-500 font-bold text-sm">{rating}</span>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="bg-stone-900 dark:bg-black rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Your Bali Cooking Experience Awaits</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-10 text-lg">
            Join us in Tumang village for the most authentic Balinese cooking experience on the island. From $35 per person. Free pickup from Ubud.
          </p>
          <Link href="/book-your-cooking-class" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Book Your Cooking Experience
          </Link>
        </div>
      </section>
    </div>
  )
}
