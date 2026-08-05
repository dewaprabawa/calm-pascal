export default function VillageLife() {
  return (
    <section id="culture" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A05B]/10 rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <span className="text-[#D9A05B] font-bold tracking-wider uppercase text-xs mb-2 block">The Tumang Difference</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D4A3E] mb-6 leading-tight">
            Where Tradition Still<br/>Guides the Harvest
          </h2>
          <p className="text-stone-600 mb-6 leading-relaxed text-lg">
            Most visitors stay in central Ubud. But north of the city lies Tumang—a living, breathing agricultural heartland. 
            Here, farmers still use the water buffalo method to plough their paddies, a tradition fading elsewhere.
          </p>
          <p className="text-stone-600 mb-8 leading-relaxed text-lg">
            Our guests don't just watch; they participate. You can try planting rice alongside locals, see how we make natural dyes from leaves, and taste food straight from the garden.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-[#D9A05B]/20 p-2 rounded-full mr-4 flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[#2D4A3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div><strong>Rice Paddy Workshops:</strong> Get muddy and learn sustainable farming.</div>
            </li>
            <li className="flex items-start">
              <div className="bg-[#D9A05B]/20 p-2 rounded-full mr-4 flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[#2D4A3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div><strong>Natural Dyeing:</strong> Use banana stalks and leaves to color textiles.</div>
            </li>
            <li className="flex items-start">
              <div className="bg-[#D9A05B]/20 p-2 rounded-full mr-4 flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[#2D4A3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div><strong>Ceremonial Insight:</strong> Learn about daily Canang Sari offerings.</div>
            </li>
          </ul>
        </div>

        {/* Image Grid */}
        <div className="relative">
           <img 
             src="/images/buffalo-rice-field.jpg" 
             alt="Water buffalo ploughing in Tumang village" 
             className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition duration-500" 
           />
           
           <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl max-w-xs border-l-4 border-[#D9A05B] hidden md:block">
              <p className="text-xs text-stone-500 font-bold uppercase tracking-wide mb-1">Did you know?</p>
              <p className="text-sm text-stone-800 font-serif italic">"In Tumang, the harvest season brings the famous Makepung buffalo races."</p>
           </div>
        </div>
      </div>
    </section>
  );
}
