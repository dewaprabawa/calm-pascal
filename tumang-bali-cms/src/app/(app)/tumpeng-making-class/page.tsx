import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tumpeng Making Class in Bali — Learn to Make Traditional Balinese Cone Rice | Tumang Bali',
  description: 'Learn to make tumpeng — the iconic Balinese cone-shaped ceremonial rice dish — in our hands-on cooking class in Tumang village. Includes market tour, cooking, and lunch.',
  keywords: ['tumpeng making class bali', 'how to make tumpeng', 'balinese cone rice', 'tumpeng bali'],
  openGraph: {
    title: 'Tumpeng Making Class in Bali — Learn to Make Traditional Balinese Cone Rice',
    description: 'Learn to make tumpeng — the iconic Balinese cone-shaped ceremonial rice dish — in our hands-on cooking class in Tumang village.',
    url: 'https://tumangbaliclass.com/tumpeng-making-class',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Tumpeng making class in Bali — Learn to make traditional Balinese cone rice',
      },
    ],
  },
}

export default function TumpengMakingPage() {
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
          'name': 'Tumpeng Making Class in Bali',
          'description': 'Learn to make tumpeng — the iconic Balinese cone-shaped ceremonial rice dish — in a hands-on cooking class in Tumang village.',
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
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-4 inline-block">Balinese Ceremonial Cooking</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-stone-900 dark:text-white">
          Tumpeng Making Class in Bali — Learn to Make the Iconic Balinese Cone Rice
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
          Tumpeng making is a hands-on cooking class in Tumang village where you learn to prepare tumpeng — the iconic Balinese cone-shaped rice dish that is central to every Balinese ceremony, celebration, and offering. You'll shape the rice, prepare the accompanying side dishes, and learn the cultural significance behind this beautiful culinary tradition.
        </p>
      </section>

      {/* What is Tumpeng */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-stone-900 dark:text-white">What is Tumpeng?</h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-6">
              Tumpeng is the most iconic dish in Balinese and Javanese cuisine — a cone-shaped mound of yellow turmeric rice, surrounded by an assortment of colorful side dishes. The cone shape represents Mount Agung, Bali's sacred volcano, and tumpeng is served at every important celebration: birthdays, temple ceremonies, graduations, and even just to say thank you.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-6">
              Making tumpeng is more than cooking — it's a spiritual practice. The arrangement of the side dishes follows specific traditions, with each component representing a different element of Balinese cosmology. Learning to make tumpeng in our class means learning a piece of Bali's soul.
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-2xl p-6">
              <p className="text-stone-700 dark:text-stone-300 font-light italic">
                "Tumpeng is the heart of Balinese celebrations. When you learn to make it, you're not just learning to cook — you're learning what makes Bali, Bali." — Chef Wayan
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-100 dark:bg-zinc-900 rounded-2xl aspect-square overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
              <img src="/images/tumpeng-making.jpg" alt="Traditional Balinese tumpeng cone-shaped rice dish" className="w-full h-full object-cover" />
            </div>
            <div className="bg-stone-100 dark:bg-zinc-900 rounded-2xl aspect-square overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl mt-8">
              <img src="/images/tumpeng-side-dishes.jpg" alt="Colorful side dishes arranged around tumpeng" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">What You'll Learn in the Tumpeng Class</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['Shape the Rice Cone', 'Learn the traditional technique for shaping perfect tumpeng — the cone shape is an art form passed down through generations.'],
            ['Prepare Side Dishes', 'Cook 4-6 side dishes including vegetables, meats, and sambal that surround the tumpeng cone.'],
            ['Cultural Significance', 'Understand the meaning behind each element — why turmeric, why the cone shape, why specific side dishes.'],
            ['Make the Yellow Rice', 'Grind your own turmeric paste and cook the perfect yellow rice that gives tumpeng its distinctive color and flavor.'],
            ['Arrange the Presentation', 'Learn the traditional arrangement of dishes around the cone — each position has a specific meaning.'],
            ['Recipe to Take Home', 'Receive a printed recipe booklet so you can recreate your own tumpeng at home.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 rounded-3xl text-center">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="font-bold text-stone-900 dark:text-white mb-3">{title}</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-3xl p-8 md:p-16 border border-orange-100 dark:border-orange-900/30 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">Learn to Make Tumpeng</h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-10 text-lg font-light">
            Join our tumpeng making class and learn the art of shaping the iconic Balinese cone rice. Book your spot today — from $35 per person.
          </p>
          <Link href="/book-your-cooking-class" className="inline-flex items-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Book Your Tumpeng Class
          </Link>
        </div>
      </section>
    </div>
  )
}
