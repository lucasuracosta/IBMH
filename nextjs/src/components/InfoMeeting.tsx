import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'

import Link from 'next/link'
import { BsSpotify } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const mapsLink = 'https://maps.app.goo.gl/ofYdrW9GDmyXzmsp6'
const facebookLink = 'https://facebook.com/ibmhurlingham/'
const youtubeLink = 'https://www.youtube.com/@ibmhurlingham'
const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'

export default function InfoMeeting() {
  return (
    <section className="py-20 px-6 bg-ibm-bg-cream">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Meeting Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-ibm-blue/10 flex items-center justify-center mb-2">
              <IoTimeOutline className="text-2xl text-ibm-blue" />
            </div>
            <h3 className="text-lg font-medium text-ibm-blue">Horario</h3>
            <p className="text-black/60 leading-relaxed">
              Domingos<br />10:30 hs
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-ibm-blue/10 flex items-center justify-center mb-2">
              <IoLocationOutline className="text-2xl text-ibm-blue" />
            </div>
            <h3 className="text-lg font-medium text-ibm-blue">Ubicación</h3>
            <Link 
              href={mapsLink} 
              target="_blank"
              className="text-black/60 hover:text-ibm-gold transition-colors leading-relaxed"
            >
              Schumann 2334<br />Hurlingham, Buenos Aires
            </Link>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-ibm-blue/10 flex items-center justify-center mb-2">
              <MdOutlineEmail className="text-2xl text-ibm-blue" />
            </div>
            <h3 className="text-lg font-medium text-ibm-blue">Contacto</h3>
            <a 
              href="mailto:ibmhurlingham@gmail.com"
              className="text-black/60 hover:text-ibm-gold transition-colors leading-relaxed"
            >
              ibmhurlingham@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center space-y-8">
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            También puedes acceder al contenido en nuestras redes
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 hover:bg-ibm-blue/5 rounded-full transition-colors"
              aria-label="Spotify"
            >
              <BsSpotify className="text-3xl text-[#1DB954]" />
            </a>
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 hover:bg-ibm-blue/5 rounded-full transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="text-3xl text-[#FF0000]" />
            </a>
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 hover:bg-ibm-blue/5 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookSquare className="text-3xl text-[#1877F2]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
