'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function MenuSection({ recipes }: { recipes: any[] }) {
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);

  const getImageUrl = (item: any, index: number) => {
    if (item.image && typeof item.image === 'object' && item.image.url) {
      return item.image.url;
    }
    const imageMap: Record<string, string> = {
      'Sup Jamur': 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
      'Sup Sayur': 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
      'Tempe Manis': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
      'Sayur Urap': 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
      'Kare Ayam': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
      'Kare Tahu': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
      'Sate Ayam': '/images/gallery-satay.jpg',
      'Sate Tempe': '/images/gallery-satay.jpg',
      'Pepes Ikan': 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800',
      'Tofu Pepes': 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800',
      'Nasi Goreng atau Nasi Kuning': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
      'Nasi Kuning': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
      'Pergedel Jagung': 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800',
      'Sambal Matah': '/images/gallery-chopping.jpg',
      'Dadar Gulung': '/images/gallery-thumbs.jpg'
    };
    const fallbackFoodImages = [
      'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
      '/images/gallery-satay.jpg'
    ];
    return imageMap[item.title] || fallbackFoodImages[index % fallbackFoodImages.length];
  };

  return (
    <>
      <section id="menu" className="py-24 border-t border-stone-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 text-center md:text-left gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-green-700 dark:text-green-500">Tumang Bali Menu</h2>
              <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">In this cooking class you will learn how to make all the above menu by your hand and you will savor for lunch or dinner.</p>
            </div>
            <a href="/api/recipes/download-pdf" target="_blank" rel="noreferrer" className="flex-shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download Menu (PDF)
            </a>
          </div>
        </div>
        
        <div className="space-y-12">
          {/* Regular Menu */}
          <div>
            <div className="max-w-7xl mx-auto px-6 mb-6">
              <h3 className="text-2xl font-black text-green-700 dark:text-green-500 tracking-tight flex items-center gap-3">
                <span className="bg-green-100 dark:bg-green-900/40 p-2 rounded-xl">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                </span>
                Regular Menu
                <span className="text-sm font-normal text-stone-400 ml-2">← Scroll →</span>
              </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
              <div className="w-2 flex-shrink-0 xl:w-[calc(50vw-40rem+0.5rem)]" />
              {recipes.filter(r => r.menuType !== 'vegetarian').map((item, index) => {
                const imageUrl = getImageUrl(item, index);
                return (
                <div key={item.id} onClick={() => setSelectedRecipe({ ...item, imageUrl })} className="cursor-pointer flex-shrink-0 w-64 snap-start scroll-ml-6 xl:scroll-ml-[calc(50vw-40rem+1.5rem)] bg-white dark:bg-zinc-900 border border-stone-100 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-full h-40 relative overflow-hidden">
                    <Image src={imageUrl} alt={item.title} fill sizes="256px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-stone-900 dark:text-white text-base leading-tight group-hover:text-green-600 transition-colors">{item.title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              )})}
              <div className="w-2 flex-shrink-0 xl:w-[calc(50vw-40rem+0.5rem)]" />
            </div>
          </div>

          {/* Vegetarian Menu */}
          <div>
            <div className="max-w-7xl mx-auto px-6 mb-6">
              <h3 className="text-2xl font-black text-emerald-700 dark:text-emerald-500 tracking-tight flex items-center gap-3">
                <span className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-xl">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </span>
                Vegetarian Menu
                <span className="text-sm font-normal text-stone-400 ml-2">← Scroll →</span>
              </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
              <div className="w-2 flex-shrink-0 xl:w-[calc(50vw-40rem+0.5rem)]" />
              {recipes.filter(r => r.menuType === 'vegetarian').map((item, index) => {
                const imageUrl = getImageUrl(item, index);
                return (
                <div key={item.id} onClick={() => setSelectedRecipe({ ...item, imageUrl })} className="cursor-pointer flex-shrink-0 w-64 snap-start scroll-ml-6 xl:scroll-ml-[calc(50vw-40rem+1.5rem)] bg-white dark:bg-zinc-900 border border-stone-100 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-full h-40 relative overflow-hidden">
                    <Image src={imageUrl} alt={item.title} fill sizes="256px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-stone-900 dark:text-white text-base leading-tight group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              )})}
              <div className="w-2 flex-shrink-0 xl:w-[calc(50vw-40rem+0.5rem)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedRecipe(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />
          <div 
            className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in-up" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="relative h-64 w-full flex-shrink-0">
              <Image src={selectedRecipe.imageUrl} alt={selectedRecipe.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{selectedRecipe.title}</h3>
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 font-medium leading-relaxed">
                {selectedRecipe.description}
              </p>

              {selectedRecipe.ingredients && selectedRecipe.ingredients.length > 0 ? (
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-stone-900 dark:text-white">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    Ingredients
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 dark:bg-zinc-950 p-6 rounded-2xl border border-stone-100 dark:border-zinc-800">
                    {selectedRecipe.ingredients.map((ing: any, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-stone-700 dark:text-stone-300">
                          {ing.quantity && <strong className="text-stone-900 dark:text-white mr-1">{ing.quantity}</strong>}
                          {ing.item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="bg-stone-50 dark:bg-zinc-950 p-6 rounded-2xl border border-stone-100 dark:border-zinc-800 text-stone-500 text-center italic">
                  Ingredients list is typically provided during the class.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
