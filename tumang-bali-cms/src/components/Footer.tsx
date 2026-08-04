export default function Footer() {
  return (
    <footer id="book" className="bg-[#1C1917] text-stone-500 py-12 text-sm border-t border-stone-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-serif text-lg font-bold text-white">Tumang<span className="text-[#D9A05B]">Class</span></span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">WhatsApp</a>
        </div>
        <div className="mt-4 md:mt-0">
          © 2024 Tumang Bali Class. All rights reserved.
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-8 pt-4 border-t border-stone-800 text-center">
         <p className="text-stone-400 text-xs">Inquiries: <a href="mailto:tumangbalicookingclass@gmail.com" className="text-[#D9A05B] hover:text-white transition">tumangbalicookingclass@gmail.com</a></p>
      </div>
    </footer>
  );
}
