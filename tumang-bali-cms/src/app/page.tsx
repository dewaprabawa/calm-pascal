import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VillageLife from '@/components/VillageLife';
import Timeline from '@/components/Timeline';
import DishShowcase from '@/components/DishShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      
      {/* 1. Hero: Immediate emotional hook */}
      <Hero />
      
      {/* 2. Village Life: Your competitive moat (Water Buffalos/Rice Paddies) */}
      <VillageLife />
      
      {/* 3. Timeline: Logistics & Pricing clarity */}
      <Timeline />
      
      {/* 4. Showcase: Visual proof of food quality */}
      <DishShowcase />
      
      {/* Footer / Call to Action area handled in Footer */}
      <Footer />
    </main>
  );
}
