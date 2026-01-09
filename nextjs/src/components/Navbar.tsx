'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaXmark } from 'react-icons/fa6'

const links = [
  { name: 'Sermones', href: '/sermones' },
  { name: 'En qué creemos?', href: '/about' },
  { name: 'Contacto', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`w-full fixed z-50 top-0 left-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo section */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/onlylogo-no-text.png"
              width={50}
              height={30}
              alt="IBM Hurlingham"
              className="w-14 transition-transform group-hover:scale-105"
            />
            <div className="pt-1 hidden sm:block font-montserrat">
              <p className="text-ibm-black font-bold text-md leading-none">Iglesia Bautista Misionera</p>
              <p className="text-ibm-black font-normal text-md leading-none mt-0.5">Hurlingham</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex md:items-center md:gap-12">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  className="text-base text-ibm-gray-900 relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-ibm-gold after:transition-all hover:after:w-full"
                  href={l.href}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaXmark size={24} className="text-black/80" />
            ) : (
              <AiOutlineMenu size={24} className="text-black/80" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-b-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {links.map((l) => (
            <li key={l.name}>
              <Link
                className="block py-3 text-base text-ibm-gray-600"
                href={l.href}
                onClick={() => setIsOpen(false)}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
