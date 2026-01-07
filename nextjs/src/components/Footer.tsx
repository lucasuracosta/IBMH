import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'
import { BsSpotify } from 'react-icons/bs'

const youtubeLink = 'https://www.youtube.com/@ibmhurlingham'
const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'
const facebookLink = 'https://facebook.com/ibmhurlingham/'

export default function Footer() {
  return (
    <footer className="bg-ibm-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Logo and mission */}
          <div className="space-y-6">
            <Image
              src="/logoWhite.png"
              width={64}
              height={64}
              alt="IBM Hurlingham"
              className="opacity-90"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Iglesia Bautista Misionera</h3>
              <p className="text-white/60 text-sm">Pastor Diego Velazquez</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl text-white/90 font-medium">Contacto</h3>
            <div className="space-y-4 text-sm">
              <p className="text-white/70">Domingo 10:30 hs</p>
              <p className="text-white/70">Schumann 2334, Hurlingham</p>
              <a 
                href="mailto:ibmhurlingham@gmail.com"
                className="block text-white/70 hover:text-ibm-gold transition-colors"
              >
                ibmhurlingham@gmail.com
              </a>
            </div>
          </div>

          {/* Social and CTA */}
          <div className="space-y-6">
            <h3 className="text-xl text-white/90 font-medium">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookSquare className="text-xl" />
              </a>
              <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-white/10 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href={spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Spotify"
              >
                <BsSpotify className="text-xl" />
              </a>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block text-sm px-6 py-3 bg-ibm-gold text-white hover:bg-ibm-gold/90 transition-colors rounded-full"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Iglesia Bautista Misionera Hurlingham
          </p>
        </div>
      </div>
    </footer>
  )
}
