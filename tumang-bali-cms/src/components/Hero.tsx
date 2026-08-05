import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="/images/hero-market.jpg" 
           alt="Fresh ingredients at the Ubud morning market" 
           fill 
           className="object-cover brightness-50"
           priority
         />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
        <span className="text-[#D9A05B] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">Since 20XX • Ubud Village</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Master the Art of <br/> Authentic Balinese Cuisine
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
          Join us in Tumang for a journey from the local market to the open-air kitchen. 
          Learn secrets passed down through generations of Balinese cooks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#book" className="bg-[#D9A05B] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition transform hover:-translate-y-1 shadow-xl">
            Reserve Your Spot
          </a>
          <a href="#experience" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2D4A3E] transition">
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
}
