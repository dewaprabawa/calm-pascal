import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-[#2D4A3E] tracking-wide">
          Tumang<span className="text-[#D9A05B]">Class</span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#culture" className="text-stone-600 hover:text-[#2D4A3E] transition">Village Life</a>
          <a href="#cooking" className="text-stone-600 hover:text-[#2D4A3E] transition">Experience</a>
          <a href="#menu" className="text-stone-600 hover:text-[#2D4A3E] transition">Menu</a>
          <Link 
            href="#book" 
            className="bg-[#2D4A3E] text-white px-6 py-2 rounded-full hover:bg-[#2D4A3E]/90 transition shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
