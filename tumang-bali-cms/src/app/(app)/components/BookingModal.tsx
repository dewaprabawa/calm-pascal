'use client'

import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { trackBooking } from '@/lib/bookingTracking'
import { formatPickupForMessage } from '@/lib/bookingEmailContent'
import { sortActivities } from '@/lib/sortActivities'
import type { PickupLocationValue } from './PickupLocationMap'
import OtaChannelIcon from './OtaChannelIcon'

const PickupLocationMap = dynamic(() => import('./PickupLocationMap'), { ssr: false })

export type ActivityOption = {
  id: string
  title: string
  /** Adult solo (1 participant) price in full IDR, or legacy thousands. */
  price?: number
  /** Adult 2+ / private min-2 price in full IDR. */
  groupPrice?: number
  kidsPrice?: number
}

type BookingStep = 'choose' | 'whatsapp'

type PartnerOption = {
  channel: 'getyourguide' | 'viator' | 'airbnb'
  label: string
  href: string
  className: string
}

const PARTNER_OPTIONS: PartnerOption[] = [
  {
    channel: 'getyourguide',
    label: 'GetYourGuide',
    href: 'https://gyg.me/dE6n3Lwg',
    className: 'bg-[#C13515] hover:bg-[#9A2A10]',
  },
  {
    channel: 'viator',
    label: 'Viator',
    href: 'https://www.viator.com/tours/Ubud/Ubud-Market-to-Table-Cooking-Class-and-Local-Herb-Discovery/d5467-5690403P1?medium=social-share-copy',
    className: 'bg-[#00A19C] hover:bg-[#008a86]',
  },
  {
    channel: 'airbnb',
    label: 'Airbnb',
    href: 'https://www.airbnb.com/experiences/7165714?direct_open=true',
    className: 'bg-[#FF5A5F] hover:bg-[#e04e52]',
  },
]

export default function BookingModal({ activities }: { activities: ActivityOption[] }) {
  const orderedActivities = useMemo(() => sortActivities(activities), [activities])
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<BookingStep>('choose')
  
  // Form State
  const [selectedActivity, setSelectedActivity] = useState('')
  const [selectedSession, setSelectedSession] = useState<'morning' | 'afternoon'>('morning')
  const [adults, setAdults] = useState('2')
  const [kids, setKids] = useState('0')
  const [pickup, setPickup] = useState<PickupLocationValue>({
    name: '',
    lat: null,
    lng: null,
    address: '',
  })
  const [date, setDate] = useState('')
  const [foodRestriction, setFoodRestriction] = useState('')
  const [notes, setNotes] = useState('')
  
  // Real WhatsApp number
  const WHATSAPP_NUMBER = '6282210132418' 

  useEffect(() => {
    setDate(new Date().toISOString().split('T')[0])
  }, [])

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const detail = (e as CustomEvent<{ activityTitle?: string; session?: 'morning' | 'afternoon' }>).detail
      setIsOpen(true)
      setStep('choose')
      if (detail?.activityTitle) {
        setSelectedActivity(detail.activityTitle)
        if (detail.activityTitle.toLowerCase().includes('afternoon')) {
          setSelectedSession('afternoon')
        } else if (detail.activityTitle.toLowerCase().includes('morning')) {
          setSelectedSession('morning')
        }
      } else if (orderedActivities.length > 0) {
        setSelectedActivity(orderedActivities[0].title)
      }

      if (detail?.session === 'afternoon' || detail?.session === 'morning') {
        setSelectedSession(detail.session)
      }
    }

    // Auto-select on initial load if we have activities
    if (!selectedActivity && orderedActivities.length > 0) {
      setSelectedActivity(orderedActivities[0].title)
    }

    window.addEventListener('open-booking-modal', handleOpenModal)
    return () => window.removeEventListener('open-booking-modal', handleOpenModal)
  }, [orderedActivities])

  const closeModal = () => {
    setIsOpen(false)
    setStep('choose')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const sessionLabel = selectedSession === 'morning'
      ? 'Morning Class (3–4 Hours · 08:30 – 12:30 with Market Tour)'
      : 'Afternoon Class (3 Hours · 14:30 – 17:30)'

    const pickupText = formatPickupForMessage({
      pickupLocation: pickup.name,
      pickupAddress: pickup.address,
      pickupLat: pickup.lat,
      pickupLng: pickup.lng,
    })

    const message = `Hello Tumang Bali! I would like to *secure a spot* for your cooking class.

This is a *WhatsApp consultation* — please confirm availability, how we can secure the spot, and the payment options.

*Experience:* ${selectedActivity}
*Session:* ${sessionLabel}
*Date:* ${date}
*Guests:* ${adults} Adult(s)${parseInt(kids) > 0 ? `, ${kids} Kid(s)` : ''}
*Food Restrictions:* ${foodRestriction || 'None'}
*Pickup Location:*
${pickupText}
${notes ? `*Special Notes:* ${notes}\n` : ''}
Thank you!

_(WhatsApp consultation from website)_`
    
    trackBooking({
      channel: 'whatsapp',
      activity: selectedActivity,
      session: sessionLabel,
      date,
      adults,
      kids,
      foodRestriction,
      pickupLocation: pickup.name,
      pickupAddress: pickup.address,
      pickupLat: pickup.lat,
      pickupLng: pickup.lng,
      notes,
      pageUrl: window.location.href,
    })

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    closeModal()
  }

  return (
    <div
      className={isOpen ? 'fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6' : 'hidden'}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-3xl w-full max-w-xl shadow-2xl border border-stone-200 dark:border-zinc-800 overflow-y-auto max-h-full animate-fade-in-up">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              {step === 'whatsapp' ? (
                <button
                  type="button"
                  onClick={() => setStep('choose')}
                  className="mb-2 text-sm font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400"
                >
                  ← Other booking options
                </button>
              ) : null}
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white">
                {step === 'choose' ? 'Book Your Experience' : 'WhatsApp consultation'}
              </h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
                {step === 'choose'
                  ? 'Book instantly with a partner, or consult with us on WhatsApp to secure your spot.'
                  : (
                    <>
                      Use WhatsApp to secure your spot and arrange payment (consultation). Email:{' '}
                      <a href="mailto:tumangbalicookingclass@gmail.com" className="text-orange-600 hover:underline">tumangbalicookingclass@gmail.com</a>
                    </>
                  )}
              </p>
            </div>
            <button 
              onClick={closeModal}
              className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-white bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {step === 'choose' ? (
            <div className="flex flex-col gap-3">
              {PARTNER_OPTIONS.map((partner) => (
                <a
                  key={partner.channel}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackBooking({
                      channel: partner.channel,
                      pageUrl: window.location.href,
                      linkLabel: `Booking chooser — ${partner.label}`,
                    })
                  }
                  className={`flex w-full items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${partner.className}`}
                >
                  <OtaChannelIcon channel={partner.channel} className="w-6 h-6" />
                  {partner.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setStep('whatsapp')}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white py-4 px-6 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp consultation
              </button>
              <p className="text-center text-xs text-stone-500 dark:text-stone-400 leading-relaxed px-1 pt-1">
                WhatsApp is a consultation to secure your spot and arrange payment — not instant checkout.
              </p>
              <p className="text-center text-xs text-stone-500 dark:text-stone-400 leading-relaxed px-1 pt-2 border-t border-stone-200 dark:border-zinc-800 mt-3">
                <strong>Use an OTA above</strong> (GetYourGuide, Viator, Airbnb) to secure your spot
                with <strong>instant checkout</strong>. Prices are the same as direct booking — no
                commission overcharge.
              </p>
            </div>
          ) : (
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
                {orderedActivities.map((activity) => {
                  const solo =
                    activity.price != null
                      ? activity.price < 10_000
                        ? activity.price * 1000
                        : activity.price
                      : null
                  const group =
                    activity.groupPrice != null
                      ? activity.groupPrice < 10_000
                        ? activity.groupPrice * 1000
                        : activity.groupPrice
                      : null
                  const priceLabel =
                    solo == null
                      ? ''
                      : group == null
                        ? ` - ${solo.toLocaleString('id-ID')} IDR`
                        : ` - ${solo.toLocaleString('id-ID')} (1) / ${group.toLocaleString('id-ID')} (2+)`
                  return (
                  <option key={activity.id} value={activity.title}>
                    {activity.title}{priceLabel}
                  </option>
                  )
                })}
              </select>
            </div>

            {/* Session Option Selector (Morning 3-4 Hours vs Afternoon 3 Hours) */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Select Class Session / Duration
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSession('morning')}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    selectedSession === 'morning'
                      ? 'border-orange-500 bg-orange-50/70 dark:bg-orange-950/40 text-orange-900 dark:text-orange-200 ring-2 ring-orange-500/20 shadow-sm'
                      : 'border-stone-200 dark:border-zinc-700 bg-stone-50/50 dark:bg-zinc-800/50 text-stone-700 dark:text-stone-300 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      🌅 Morning Class
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-200/70 text-orange-800 dark:bg-orange-900/60 dark:text-orange-300">
                      3–4 Hours
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    08:30 – 12:30 · Includes Market Tour & Lunch
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedSession('afternoon')}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    selectedSession === 'afternoon'
                      ? 'border-orange-500 bg-orange-50/70 dark:bg-orange-950/40 text-orange-900 dark:text-orange-200 ring-2 ring-orange-500/20 shadow-sm'
                      : 'border-stone-200 dark:border-zinc-700 bg-stone-50/50 dark:bg-zinc-800/50 text-stone-700 dark:text-stone-300 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      🌇 Afternoon Class
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                      3 Hours
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    14:30 – 17:30 · Cooking & Balinese Dinner
                  </p>
                </button>
              </div>
            </div>

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

            <div className="grid grid-cols-2 gap-4">
              {/* Adults */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Adults</label>
                <input 
                  type="number" 
                  min="1"
                  max="20"
                  required
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                />
              </div>

              {/* Kids */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Kids</label>
                <input 
                  type="number" 
                  min="0"
                  max="20"
                  required
                  value={kids}
                  onChange={(e) => setKids(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                />
              </div>
            </div>

            {/* Food Restrictions */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Food Restrictions</label>
              <select
                value={foodRestriction}
                onChange={(e) => setFoodRestriction(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow appearance-none"
              >
                <option value="">None</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
                <option value="Halal">Halal</option>
                <option value="Other">Other (please specify in notes)</option>
              </select>
            </div>

            <PickupLocationMap active={isOpen && step === 'whatsapp'} value={pickup} onChange={setPickup} />

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

            <div className="pt-4 space-y-3">
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white py-4 px-6 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Secure spot via WhatsApp
              </button>
              <p className="text-center text-xs text-stone-500 dark:text-stone-400 leading-relaxed px-1">
                WhatsApp is a consultation to secure your spot and arrange payment — not instant checkout.
              </p>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  )
}
