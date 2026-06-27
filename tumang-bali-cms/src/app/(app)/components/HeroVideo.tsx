'use client'

import React, { useState } from 'react'

export default function HeroVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/50 hover:bg-white/80 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/80 backdrop-blur-md border border-stone-200 dark:border-zinc-700 text-stone-800 dark:text-stone-200 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-md group"
      >
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
        Watch Video
      </button>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
            onClick={() => setIsOpen(false)}
          />
          
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 bg-black/50 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <video 
              className="w-full h-full object-contain bg-black"
              src="/api/media/file/WhatsApp%20Video%202026-06-26%20at%2015.14.07.mp4" 
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  )
}
