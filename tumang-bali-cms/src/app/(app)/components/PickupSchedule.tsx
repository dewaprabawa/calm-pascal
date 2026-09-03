'use client'

import React from 'react'
import BookButton from './BookButton'

export default function PickupSchedule() {
  const schedule = [
    { area: 'Nusa Dua', morning: '06:00 am – 06:30 am', afternoon: '12:30 pm – 13:00 pm', dinner: '16:00 pm – 16:30 pm' },
    { area: 'Kuta / Seminyak', morning: '06:30 am – 07:30 am', afternoon: '13:00 pm – 13:30 pm', dinner: '16:30 pm – 17:00 pm' },
    { area: 'Sanur', morning: '07:00 am – 07:30 am', afternoon: '13:30 pm – 14:00 pm', dinner: '17:00 pm – 17:30 pm' },
    { area: 'Ubud Center', morning: '08:00 am – 08:30 am', afternoon: '14:00 pm – 14:30 pm', dinner: '17:00 pm – 17:30 pm' },
  ]

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-stone-200 dark:border-zinc-800">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">Daily Sessions & Transport</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Class Schedule & Pickup Times</h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">
          Choose between our immersive <strong className="font-bold text-stone-900 dark:text-white">Morning Class (3–4 Hours)</strong> or focused <strong className="font-bold text-stone-900 dark:text-white">Afternoon Class (3 Hours)</strong>. <strong className="font-bold text-stone-900 dark:text-white">Free shuttle service</strong> is available for the Ubud area.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Morning Class (3-4 Hours) */}
        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-orange-500/50 transition-colors flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <svg className="w-32 h-32 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/><path d="M12 7a.75.75 0 00-.75.75v4.69l-2.72 1.57a.75.75 0 00.75 1.3l3.1-1.79A.75.75 0 0012.75 12V7.75A.75.75 0 0012 7z"/></svg>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
              <h3 className="text-2xl font-black text-stone-900 dark:text-white">Morning Class</h3>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50">
                3–4 Hours
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-bold mb-4 relative z-10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              08:30 am — 12:30 pm
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 font-medium">
              Includes guided local morning market tour (morning classes only), rice field walk, hands-on cooking of 10+ dishes in English, and a full lunch feast.
            </p>
            <div className="space-y-3 relative z-10 border-t border-stone-100 dark:border-zinc-800 pt-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Pickup Times by Area</p>
              {schedule.map(s => (
                <div key={s.area} className="flex justify-between items-center py-1.5 border-b border-stone-50 dark:border-zinc-800/50 last:border-0 text-sm">
                  <span className="font-semibold text-stone-700 dark:text-stone-300">
                    {s.area} 
                    {s.area.includes('Ubud') && <span className="ml-2 text-[10px] bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-black align-middle">Free</span>}
                  </span>
                  <span className="text-stone-500 dark:text-stone-400 font-medium">{s.morning}</span>
                </div>
              ))}
            </div>
          </div>
          <BookButton session="morning" className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] text-center shadow-md">
            Book Morning Class (3–4 Hrs)
          </BookButton>
        </div>

        {/* Afternoon Class (3 Hours) */}
        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-blue-500/50 transition-colors flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <svg className="w-32 h-32 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/><path d="M12 7a.75.75 0 00-.75.75v4.69l-2.72 1.57a.75.75 0 00.75 1.3l3.1-1.79A.75.75 0 0012.75 12V7.75A.75.75 0 0012 7z"/></svg>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
              <h3 className="text-2xl font-black text-stone-900 dark:text-white">Afternoon Class</h3>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                3 Hours
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-bold mb-4 relative z-10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              14:30 pm — 17:30 pm
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 font-medium">
              No market visit — afternoon classes start with the rice-field walk, then hands-on cooking in English, spice grinding, and a Balinese dinner feast.
            </p>
            <div className="space-y-3 relative z-10 border-t border-stone-100 dark:border-zinc-800 pt-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Pickup Times by Area</p>
              {schedule.map(s => (
                <div key={s.area} className="flex justify-between items-center py-1.5 border-b border-stone-50 dark:border-zinc-800/50 last:border-0 text-sm">
                  <span className="font-semibold text-stone-700 dark:text-stone-300">
                    {s.area} 
                    {s.area.includes('Ubud') && <span className="ml-2 text-[10px] bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-black align-middle">Free</span>}
                  </span>
                  <span className="text-stone-500 dark:text-stone-400 font-medium">{s.afternoon}</span>
                </div>
              ))}
            </div>
          </div>
          <BookButton session="afternoon" className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] text-center shadow-md">
            Book Afternoon Class (3 Hrs)
          </BookButton>
        </div>
      </div>
      
    </section>
  )
}
