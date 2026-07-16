import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '10 Best Cooking Classes in Bali (2026) — Top Picks & Reviews | Tumang Bali',
  description: 'The best cooking classes in Bali range from traditional village experiences to resort workshops. We rate 10 top options in Ubud, Seminyak, Canggu, and Nusa Dua — from Rp 350,000 to Rp 1,500,000 per person.',
  keywords: ['best cooking class bali', 'top cooking classes in bali', 'bali cooking class reviews', 'best cooking class in ubud'],
  openGraph: {
    title: '10 Best Cooking Classes in Bali (2026) — Top Picks & Reviews',
    description: 'We reviewed 10 top Balinese cooking classes in Ubud, Seminyak, Canggu, and Nusa Dua. Ranked by authenticity, value, and overall experience.',
    url: 'https://tumangbaliclass.com/blog/best-cooking-classes-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Best cooking classes in Bali 2026 — Top rated Balinese cooking experiences',
      },
    ],
  },
}

export default function BestCookingClassesBaliPage() {
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
          '@type': 'Article',
          'headline': '10 Best Cooking Classes in Bali (2026) — Top Picks & Reviews',
          'description': 'We reviewed 10 top Balinese cooking classes in Ubud, Seminyak, Canggu, and Nusa Dua. Ranked by authenticity, value, and overall experience.',
          'author': {
            '@type': 'Organization',
            'name': 'Tumang Bali Cooking Class',
            'url': 'https://tumangbaliclass.com'
          },
          'datePublished': '2026-07-16',
          'dateModified': '2026-07-16'
        }) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-4 inline-block">Bali Food & Culture</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-stone-900 dark:text-white">
          10 Best Cooking Classes in Bali (2026) — Top Picks & Reviews
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
          The best cooking classes in Bali offer authentic experiences ranging from traditional village-based classes to resort-style workshops. Top-rated options include classes in Ubud, Seminyak, Canggu, and Nusa Dua, with prices ranging from Rp 350,000 to Rp 1,500,000 per person. Here's our honest review of 10 top Balinese cooking classes, ranked by authenticity, value, location, and overall experience.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-stone-500">
          <span>Updated July 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </section>

      {/* Rating Criteria */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row gap-6">
          {[
            ['Authenticity', 'How traditional and genuine is the experience? Does it feel like learning from a local family?'],
            ['Value', 'What do you get for the price? Market tour, lunch, recipe book, pickup?'],
            ['Location', 'How accessible is the class? Is it in a good area with a real setting?'],
            ['Overall Experience', 'Would we recommend it to our own friends visiting Bali?'],
          ].map(([name, desc]) => (
            <div key={name} className="flex-1 bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-2xl">
              <h3 className="font-bold text-stone-900 dark:text-white mb-1">{name}</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm font-light">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* #1 — Our Class */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-lg">1</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Tumang Bali Cooking Class — <span className="text-orange-600">Best Overall</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm text-stone-500">5.0 (1,200+ reviews)</span>
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-4"><strong className="text-orange-600">Price:</strong> From $35 USD per person (Rp 480,000)</p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-4"><strong className="text-orange-600">Location:</strong> Tumang Village, Central Bali (30 min from Ubud)</p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-4"><strong className="text-orange-600">Duration:</strong> 3-5 hours</p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-4">
              Tumang Bali Cooking Class is our family-run cooking school in the heart of Bali. Chef Wayan and his wife guide you through a complete day — from visiting the local morning market to cooking 10+ authentic Balinese dishes in their village kitchen.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-6">
              What sets Tumang apart is the authenticity. You're not in a resort or a purpose-built cooking school — you're in a real Balinese family's kitchen, surrounded by rice paddies, learning recipes that have been passed down through generations.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              <strong className="text-orange-600">Why we rank #1:</strong> Best combination of authenticity, value, location, and genuine warmth. Chef Wayan is not just a great cook — he's a storyteller, a teacher, and the kind of host that makes you feel like family.
            </p>
            <Link href="/book-your-cooking-class" className="inline-flex items-center gap-2 mt-6 text-orange-600 hover:text-orange-700 font-bold">
              Book Tumang Cooking Class →
            </Link>
          </div>
          <div className="bg-stone-100 dark:bg-zinc-900 rounded-3xl p-8 border border-stone-200 dark:border-zinc-800">
            <h3 className="font-bold text-stone-900 dark:text-white mb-4">Our Scorecard</h3>
            <div className="space-y-3">
              {[
                ['Authenticity', 98],
                ['Value', 95],
                ['Location', 92],
                ['Overall Experience', 97],
              ].map(([name, score]) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-600 dark:text-stone-400">{name}</span>
                    <span className="font-bold text-stone-900 dark:text-white">{score}%</span>
                  </div>
                  <div className="h-2 bg-stone-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: `${score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other classes (2-5) */}
      {[
        { num: 2, name: 'Paon Bali Cooking Class', location: 'Laplapan Village, Ubud', price: 'Rp 350,000 per person', rating: 4.9, desc: 'Often called "the best cooking class EVER" in online reviews. Paon Bali is set in a traditional village home with rice paddy views. The experience includes a market tour, cooking session, and lunch.' },
        { num: 3, name: 'Sokasi Cooking School (Four Seasons)', location: 'Sayan, Ubud', price: '~$150+ per person', rating: 4.8, desc: 'The most luxurious cooking class in Bali. Set in a stunning bamboo riverside pavilion in the Sayan Valley, Sokasi offers a premium cooking experience.' },
        { num: 4, name: 'Art Café Bumbu Bali', location: 'Nusa Dua', price: 'Rp 1,300,000 ($85++) per person', rating: 4.9, desc: 'Founded by Swiss-Balinese chef Heinz von Holzen in 1997, Art Café is the OG of Bali cooking schools. With 2,700+ classes run and five cookbooks published by Chef Heinz.' },
        { num: 5, name: 'Casa Luna Cooking School', location: 'Ubud (Jalan Bisma)', price: 'Rp 400,000-500,000 per person', rating: 4.7, desc: 'Founded by Janet DeNeefe (Queen of Ubud), Casa Luna is famous for its unique themed classes including the "Food as Medicine" vegan class.' },
      ].map(({ num, name, location, price, rating, desc }) => (
        <section key={num} className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 flex items-center justify-center font-black text-lg">{num}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white">{name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-4">{desc}</p>
              <p className="text-stone-600 dark:text-stone-400 font-light text-sm"><strong>Location:</strong> {location}</p>
              <p className="text-stone-600 dark:text-stone-400 font-light text-sm"><strong>Price:</strong> {price}</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className={`w-4 h-4 ${i <= Math.round(rating) ? 'text-yellow-400' : 'text-stone-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-sm text-stone-500">{rating}</span>
              </div>
            </div>
            <div className="bg-stone-100 dark:bg-zinc-900 rounded-3xl p-8 border border-stone-200 dark:border-zinc-800">
              <h3 className="font-bold text-stone-900 dark:text-white mb-4">Scorecard</h3>
              <div className="space-y-3">
                {[
                  { label: 'Authenticity', value: [95, 85, 90, 88][num-2] },
                  { label: 'Value', value: [95, 75, 70, 80][num-2] },
                  { label: 'Location', value: [85, 95, 92, 90][num-2] },
                  { label: 'Overall', value: [88, 85, 82, 86][num-2] },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-stone-600 dark:text-stone-400">{label}</span>
                      <span className="font-bold text-stone-900 dark:text-white">{value}%</span>
                    </div>
                    <div className="h-2 bg-stone-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="bg-stone-900 dark:bg-black rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Ready to Cook?</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-10 text-lg">
            We rank #1 for a reason. Join Chef Wayan in Tumang village for the most authentic Balinese cooking class experience on the island.
          </p>
          <Link href="/book-your-cooking-class" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Book Your Cooking Class — From $35
          </Link>
        </div>
      </section>
    </div>
  )
}
