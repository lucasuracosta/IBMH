'use client'

// @ts-expect-error - Splide CSS import
import '@splidejs/react-splide/css'

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
// @ts-expect-error - Splide types issue with package.json exports
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useRef, useState } from 'react'

const events = [
  {
    date: new Date(2026, 0, 11),
    endDate: null,
    month: 'Ene',
    day: '11',
    dayOfWeek: 'Domingo',
    title: 'Servicio de Adoración y Ágape',
    subtitle: null,
    time: '10:30 am',
  },
  {
    date: new Date(2026, 0, 17),
    endDate: null,
    month: 'Ene',
    day: '17',
    dayOfWeek: 'Sábado',
    title: 'Estudio de Hombres',
    subtitle: '"Glorioso Evangelio"',
    time: '07:00 am',
  },
  {
    date: new Date(2026, 0, 18),
    endDate: null,
    month: 'Ene',
    day: '18',
    dayOfWeek: 'Domingo',
    title: 'Servicio de Adoración',
    subtitle: null,
    time: '10:30 am',
  },
  {
    date: new Date(2026, 0, 21),
    endDate: null,
    month: 'Ene',
    day: '21',
    dayOfWeek: 'Miércoles',
    title: 'Reunión de Oración',
    subtitle: null,
    time: '19:30 hs',
  },
  {
    date: new Date(2026, 0, 25),
    endDate: null,
    month: 'Ene',
    day: '25',
    dayOfWeek: 'Domingo',
    title: 'Servicio de Adoración',
    subtitle: null,
    time: '10:30 am',
  },
  {
    date: new Date(2026, 0, 30),
    endDate: new Date(2026, 1, 1),
    month: 'Ene-Feb',
    day: '30-1',
    dayOfWeek: null,
    title: 'Campamento de Jóvenes',
    subtitle: '"Un Amor Mayor"',
    time: 'Viernes a Domingo',
  },
  {
    date: new Date(2026, 1, 1),
    endDate: null,
    month: 'Feb',
    day: '1',
    dayOfWeek: 'Domingo',
    title: 'Servicio de Adoración y Santa Cena',
    subtitle: null,
    time: '10:30 am',
  },
  {
    date: new Date(2026, 1, 8),
    endDate: null,
    month: 'Feb',
    day: '8',
    dayOfWeek: 'Domingo',
    title: 'Servicio de Adoración y Ágape',
    subtitle: null,
    time: '10:30 am',
  },
  {
    date: new Date(2026, 1, 11),
    endDate: null,
    month: 'Feb',
    day: '11',
    dayOfWeek: 'Miércoles',
    title: 'Reunión de Oración',
    subtitle: null,
    time: '19:30 hs',
  },
]

export default function UpcomingEvents() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const splideRef = useRef<any>(null)
  const [canGoPrev, setCanGoPrev] = useState(false)
  const [canGoNext, setCanGoNext] = useState(true)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingEvents = events.filter((event) => {
    const eventEndDate = event.endDate || event.date
    return eventEndDate >= today
  })

  if (upcomingEvents.length === 0) {
    return null
  }

  const updateArrows = () => {
    const splide = splideRef.current?.splide
    if (splide) {
      const { index } = splide
      const end = splide.Components.Controller.getEnd()
      setCanGoPrev(index > 0)
      setCanGoNext(index < end)
    }
  }

  const goToPrev = () => {
    splideRef.current?.go('<')
  }

  const goToNext = () => {
    splideRef.current?.go('>')
  }

  return (
    <section className="py-20 px-6 bg-ibm-bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-light text-ibm-black">Próximos Eventos</h2>
          <div className="flex gap-2">
            <button
              onClick={goToPrev}
              disabled={!canGoPrev}
              className="p-2 rounded-full border border-ibm-gray-300 text-ibm-gray-600 hover:bg-white hover:border-ibm-blue hover:text-ibm-blue transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-ibm-gray-300 disabled:hover:text-ibm-gray-600"
            >
              <IoChevronBackOutline className="text-xl" />
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className="p-2 rounded-full border border-ibm-gray-300 text-ibm-gray-600 hover:bg-white hover:border-ibm-blue hover:text-ibm-blue transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-ibm-gray-300 disabled:hover:text-ibm-gray-600"
            >
              <IoChevronForwardOutline className="text-xl" />
            </button>
          </div>
        </div>

        <Splide
          ref={splideRef}
          onMounted={updateArrows}
          onMoved={updateArrows}
          options={{
            type: 'slide',
            perPage: 4,
            perMove: 4,
            gap: '1.5rem',
            pagination: false,
            arrows: false,
            breakpoints: {
              1024: {
                perPage: 3,
                perMove: 3,
              },
              768: {
                perPage: 2,
                perMove: 2,
              },
              480: {
                perPage: 1,
                perMove: 1,
              },
            },
          }}
        >
          {upcomingEvents.map((event, index) => (
            <SplideSlide key={index}>
              <div className="bg-white overflow-hidden border-b-4 border-transparent hover:border-ibm-gold transition-colors duration-300 h-full">
                <div className="p-5 pb-8 h-full flex flex-col">
                  {/* Date at top */}
                  <div className="text-center pb-4 border-b border-ibm-gray-300">
                    <p className="text-sm text-ibm-gray-600 uppercase tracking-wide font-medium">
                      {event.dayOfWeek || event.time}
                    </p>
                    <p className="text-3xl font-bold text-ibm-blue-dark">{event.day}</p>
                    <p className="text-sm text-ibm-gray-600 uppercase font-medium">{event.month}</p>
                  </div>
                  {/* Event details */}
                  <div className="pt-4 flex-1">
                    <h3 className="font-medium text-ibm-black">{event.title}</h3>
                    {event.subtitle && (
                      <p className="text-ibm-gold text-sm font-medium mt-1">{event.subtitle}</p>
                    )}
                    {event.dayOfWeek && (
                      <p className="text-ibm-gray-600 text-sm mt-2">{event.time}</p>
                    )}
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}
