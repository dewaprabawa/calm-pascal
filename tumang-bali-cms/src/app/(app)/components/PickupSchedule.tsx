'use client'

import React from 'react'

export default function PickupSchedule() {
  const schedule = [
    { area: 'Nusa Dua', morning: '06:00 am – 06:30 am', afternoon: '13:00 pm – 13:30 pm', dinner: '16:00 pm – 16:30 pm' },
    { area: 'Kuta', morning: '06:30 am – 07:30 am', afternoon: '13:30 pm – 14:00 pm', dinner: '16:30 pm – 17:00 pm' },
    { area: 'Sanur', morning: '07:00 am – 07:30 am', afternoon: '14:00 pm – 14:30 pm', dinner: '17:00 pm – 17:30 pm' },
    { area: 'Ubud', morning: '08:00 am – 08:30 am', afternoon: '14:00 pm – 14:30 pm', dinner: '17:00 pm – 17:30 pm' },
  ]

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-stone-200 dark:border-zinc-800">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">Transportation</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Pickup Schedule</h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">We offer three classes everyday. <strong className="font-bold text-stone-900 dark:text-white">Free shuttle service</strong> is available for the Ubud area.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
        {/* Morning Class */}
        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-orange-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-32 h-32 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/><path d="M12 7a.75.75 0 00-.75.75v4.69l-2.72 1.57a.75.75 0 00.75 1.3l3.1-1.79A.75.75 0 0012.75 12V7.75A.75.75 0 0012 7z"/></svg>
          </div>
          <h3 className="text-2xl font-black mb-2 text-stone-900 dark:text-white relative z-10">Morning Class</h3>
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-bold mb-8 relative z-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            08:30 am — 13:30 pm
          </div>
          <div className="space-y-4 relative z-10">
            {schedule.map(s => (
              <div key={s.area} className="flex justify-between items-center py-3 border-b border-stone-100 dark:border-zinc-800 last:border-0">
                <span className="font-bold text-stone-700 dark:text-stone-300">
                  {s.area} 
                  {s.area === 'Ubud' && <span className="ml-2 text-[10px] bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-black align-middle">Free</span>}
                </span>
                <span className="text-stone-500 dark:text-stone-400 font-medium">{s.morning}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Afternoon Class */}
        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-blue-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-32 h-32 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/><path d="M12 7a.75.75 0 00-.75.75v4.69l-2.72 1.57a.75.75 0 00.75 1.3l3.1-1.79A.75.75 0 0012.75 12V7.75A.75.75 0 0012 7z"/></svg>
          </div>
          <h3 className="text-2xl font-black mb-2 text-stone-900 dark:text-white relative z-10">Afternoon Class</h3>
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-bold mb-8 relative z-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            14:30 pm — 19:30 pm
          </div>
          <div className="space-y-4 relative z-10">
            {schedule.map(s => (
              <div key={s.area} className="flex justify-between items-center py-3 border-b border-stone-100 dark:border-zinc-800 last:border-0">
                <span className="font-bold text-stone-700 dark:text-stone-300">
                  {s.area} 
                  {s.area === 'Ubud' && <span className="ml-2 text-[10px] bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-black align-middle">Free</span>}
                </span>
                <span className="text-stone-500 dark:text-stone-400 font-medium">{s.afternoon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dinner Class */}
        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-purple-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-32 h-32 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/><path d="M12 7a.75.75 0 00-.75.75v4.69l-2.72 1.57a.75.75 0 00.75 1.3l3.1-1.79A.75.75 0 0012.75 12V7.75A.75.75 0 0012 7z"/></svg>
          </div>
          <h3 className="text-2xl font-black mb-2 text-stone-900 dark:text-white relative z-10">Dinner Class</h3>
          <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-bold mb-8 relative z-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            17:30 pm — 22:30 pm
          </div>
          <div className="space-y-4 relative z-10">
            {schedule.map(s => (
              <div key={s.area} className="flex justify-between items-center py-3 border-b border-stone-100 dark:border-zinc-800 last:border-0">
                <span className="font-bold text-stone-700 dark:text-stone-300">
                  {s.area} 
                  {s.area === 'Ubud' && <span className="ml-2 text-[10px] bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-black align-middle">Free</span>}
                </span>
                <span className="text-stone-500 dark:text-stone-400 font-medium">{s.dinner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}
