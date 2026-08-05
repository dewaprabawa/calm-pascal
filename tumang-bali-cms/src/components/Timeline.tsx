export default function Timeline() {
  const events = [
    { time: "09:00 AM", title: "Hotel Pick-up", desc: "Driver collects you from Ubud, Tegallalang, or Sukawati." },
    { time: "09:45 AM", title: "Tumang Morning Market", desc: "Walking tour. Buying fresh ingredients and learning about jungle herbs." },
    { time: "10:30 AM", title: "Kitchen Intro", desc: "Welcome drink and brief on hygiene and technique." },
    { time: "11:00 AM", title: "The Grinding", desc: "Grinding spices using the heavy stone mortar (cobek)." },
    { time: "12:30 PM", title: "Lunch Feast", desc: "Enjoy the food you made, plus coffee and tea breaks." },
    { time: "02:30 PM", title: "Recipe Book & Drop-off", desc: "Receive your recipe booklet and head back to your hotel." }
  ];

  return (
    <section id="experience" className="py-20 bg-[#2D4A3E] text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Timeline */}
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6">A Typical Day With Us</h2>
          <p className="opacity-90 mb-8 text-lg">We value quality over speed. This isn't a factory line; it's an immersive half-day workshop.</p>
          <div className="flex flex-col space-y-0">
            {events.map((item, index) => (
              <div key={index} className="flex items-start pb-4 border-b border-white/20 last:border-0">
                <span className="font-mono font-bold text-[#D9A05B] min-w-[90px]">{item.time}</span>
                <div>
                  <strong className="block text-lg mb-1">{item.title}</strong>
                  <span className="text-stone-300">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Pricing Box */}
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
           <h3 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Pricing & Inclusions</h3>
           <div className="space-y-4">
             <div className="flex justify-between items-center">
               <span>Adults (Full Menu)</span>
               <span className="font-bold text-[#D9A05B] text-xl">$35 USD</span>
             </div>
             <div className="flex justify-between items-center">
               <span>Kids (under 12)</span>
               <span className="font-bold text-[#D9A05B] text-xl">$25 USD</span>
             </div>
             <ul className="text-sm opacity-90 mt-4 space-y-2 list-disc list-inside">
               <li>Free Hotel Transfer (Ubud Area)</li>
               <li>All Ingredients & Equipment</li>
               <li>Cold Drinks during class</li>
               <li>Full Lunch & Coffee</li>
               <li>Digital Recipe Booklet Included</li>
             </ul>
             <button className="w-full bg-[#D9A05B] text-white font-bold py-3 rounded hover:bg-yellow-500 mt-4">
               Check Availability
             </button>
           </div>
        </div>
      </div>
    </section>
  );
}
