'use client'

import React, { useState, useEffect } from 'react'

export type ActivityOption = {
  id: string
  title: string
  price?: number
}

export default function BookingModal({ activities }: { activities: ActivityOption[] }) {
  const [isOpen, setIsOpen] = useState(false)
  
  // Form State
  const [selectedActivity, setSelectedActivity] = useState('')
  const [numPeople, setNumPeople] = useState('2')
  const [pickupLocation, setPickupLocation] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  
  // Real WhatsApp number
  const WHATSAPP_NUMBER = '6282210132418' 

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      setIsOpen(true)
      if (e.detail?.activityTitle) {
        setSelectedActivity(e.detail.activityTitle)
      } else if (activities.length > 0) {
        setSelectedActivity(activities[0].title)
      }
    }

    // Auto-select on initial load if we have activities
    if (!selectedActivity && activities.length > 0) {
      setSelectedActivity(activities[0].title)
    }

    window.addEventListener('open-booking-modal', handleOpenModal)
    return () => window.removeEventListener('open-booking-modal', handleOpenModal)
  }, [activities])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hello Tumang Bali! I would like to make a booking:

*Experience:* ${selectedActivity}
*Date:* ${date}
*Number of People:* ${numPeople}
*Pickup Location:* ${pickupLocation}
${notes ? `*Special Notes:* ${notes}\n` : ''}
Please let me know about availability!`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-3xl w-full max-w-lg shadow-2xl border border-stone-200 dark:border-zinc-800 overflow-hidden animate-fade-in-up">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white">Book Your Experience</h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">Fill out the details below and we'll confirm via WhatsApp.</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-white bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Activity Selection */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Select Experience</label>
              <select 
                required
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow appearance-none"
              >
                <option value="" disabled>Select an experience...</option>
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.title}>
                    {activity.title} {activity.price ? `- ${activity.price.toLocaleString('id-ID')} IDR` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Date</label>
                <input 
                  type="date" 
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow [color-scheme:light] dark:[color-scheme:dark] appearance-none"
                />
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Guests</label>
                <input 
                  type="number" 
                  min="1"
                  max="20"
                  required
                  value={numPeople}
                  onChange={(e) => setNumPeople(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                />
              </div>
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Pickup Location (Hotel/Villa Name)</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Alila Ubud"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
              />
            </div>

            {/* Special Notes */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Special Notes / Requirements</label>
              <textarea 
                placeholder="Any allergies, special requests, or extra details?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow resize-none"
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white py-4 px-6 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Book Your Experience
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
