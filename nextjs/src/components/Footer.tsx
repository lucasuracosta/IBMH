import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'

import Image from 'next/image'
import { BsSpotify } from 'react-icons/bs'

const youtubeLink = 'https://www.youtube.com/@ibmhurlingham'
const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'
const facebookLink = 'https://facebook.com/ibmhurlingham/'

export default function Footer() {
  return (
    <footer className="bg-ibm-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Logo and mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logoWhite-notext.png"
                width={50}
                height={30}
                alt="IBM Hurlingham"
                className="w-14 opacity-90"
              />
              <div className="font-montserrat pt-1">
                <p className="text-white font-bold text-md leading-none">Iglesia Bautista Misionera</p>
                <p className="text-white font-normal text-md leading-none mt-0.5">Hurlingham</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">Pastor Diego Velazquez</p>
          </div>

          {/* Direccion */}
          <a
            href="https://maps.app.goo.gl/ofYdrW9GDmyXzmsp6"
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-6 group"
          >
            <h3 className="text-xl text-white/90 font-medium">Dirección</h3>
            <div className="space-y-1 text-sm">
              <p className="text-white/70 group-hover:text-white transition-colors">Iglesia Bautista Misionera Hurlingham</p>
              <p className="text-white/70 group-hover:text-white transition-colors">Schumann 2334</p>
              <p className="text-white/70 group-hover:text-white transition-colors">Hurlingham, Buenos Aires</p>
            </div>
          </a>

          {/* Social and CTA */}
          <div className="space-y-6">
            <h3 className="text-xl text-white/90 font-medium pl-1">Redes Sociales</h3>
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare className="text-xl" />
                </a>
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a
                  href={spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Spotify"
                >
                  <BsSpotify className="text-xl" />
                </a>
              </div>
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
