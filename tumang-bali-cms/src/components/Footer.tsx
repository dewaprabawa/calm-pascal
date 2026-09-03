export default function Footer() {
  return (
    <footer id="book" className="bg-[#1C1917] text-stone-500 py-12 text-sm border-t border-stone-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-serif text-lg font-bold text-white">Tumang<span className="text-[#D9A05B]">Class</span></span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="https://www.instagram.com/tumangbali_/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          <a href="https://wa.me/6282210132418" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/terms-of-service" className="hover:text-white">Terms</a>
          <a href="/editorial-policy" className="hover:text-white">Editorial</a>
          <a href="/refund-policy" className="hover:text-white">Refund Policy</a>
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
        </div>
        <div className="mt-4 md:mt-0">
          © {new Date().getFullYear()} Tumang Bali Class. All rights reserved.
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-4 border-t border-stone-800 text-center space-y-2">
         <p className="text-stone-400 text-xs">WhatsApp: <a href="https://wa.me/6282210132418" className="text-[#D9A05B] hover:text-white transition">+62 822-1013-2418</a></p>
         <p className="text-stone-400 text-xs">Email: <a href="mailto:tumangbalicookingclass@gmail.com" className="text-[#D9A05B] hover:text-white transition">tumangbalicookingclass@gmail.com</a></p>
         <p className="text-stone-400 text-xs">Address: Warung Tumang Bali, Banjar Laplapan, Petulu, Ubud, Bali</p>
         <p className="text-stone-400 text-xs mt-2">Discover more adventures at <a href="https://www.sekarbaliactivity.com/#experiences#top" target="_blank" rel="noopener noreferrer" className="text-[#D9A05B] hover:text-white transition">Sekar Bali Experiences</a></p>
      </div>
    </footer>
  );
}
