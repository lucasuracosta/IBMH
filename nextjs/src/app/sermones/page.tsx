import BannerContact from '@/components/BannerContact'
import GoogleMap from '@/components/GoogleMap'
import InfoMeeting from '@/components/InfoMeeting'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sermones | Iglesia Bautista Misionera Hurlingham',
  description: 'Escucha los sermones de la Iglesia Bautista Misionera de Hurlingham.',
}

// Placeholder sermon data - This will be replaced with Firestore data later
const placeholderSermons = [
  {
    id: '1',
    title: 'Próximamente',
    preacher: 'Pastor Diego Velazquez',
    description: 'Los sermones serán cargados próximamente desde YouTube.',
    date: '',
  },
  {
    id: '2',
    title: 'Próximamente',
    preacher: 'Pastor Diego Velazquez',
    description: 'Los sermones serán cargados próximamente desde YouTube.',
    date: '',
  },
  {
    id: '3',
    title: 'Próximamente',
    preacher: 'Pastor Diego Velazquez',
    description: 'Los sermones serán cargados próximamente desde YouTube.',
    date: '',
  },
  {
    id: '4',
    title: 'Próximamente',
    preacher: 'Pastor Diego Velazquez',
    description: 'Los sermones serán cargados próximamente desde YouTube.',
    date: '',
  },
  {
    id: '5',
    title: 'Próximamente',
    preacher: 'Pastor Diego Velazquez',
    description: 'Los sermones serán cargados próximamente desde YouTube.',
    date: '',
  },
  {
    id: '6',
    title: 'Próximamente',
    preacher: 'Pastor Diego Velazquez',
    description: 'Los sermones serán cargados próximamente desde YouTube.',
    date: '',
  },
]

export default function SermonesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-ibm-blue text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Image
            src="/logoWhite.png"
            width={100}
            height={100}
            alt="IBM Hurlingham"
            className="mx-auto opacity-90"
          />
          <h1 className="text-white">Sermones</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Escucha nuestros sermones y crece en tu fe
          </p>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 px-6 bg-ibm-bg-cream">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="text-4xl mb-4">🚧</div>
          <h2 className="text-2xl text-ibm-blue">Estamos trabajando en esta sección</h2>
          <p className="text-lg text-black/60 leading-relaxed">
            Próximamente podrás ver todos nuestros sermones integrados desde YouTube.
            Mientras tanto, te invitamos a visitar nuestro canal directamente.
          </p>
          <div className="pt-4">
            <Link
              href="https://www.youtube.com/@ibmhurlingham"
              target="_blank"
              className="inline-block text-base px-8 py-4 bg-ibm-gold text-white hover:bg-ibm-gold/90 transition-colors rounded-full"
            >
              Ver en YouTube
            </Link>
          </div>
        </div>
      </section>

      {/* Sermons Grid Placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-ibm-blue mb-16">Todos los Sermones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {placeholderSermons.map((sermon) => (
              <div key={sermon.id} className="group">
                <div className="aspect-video bg-gray-100 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <span className="text-gray-400 text-4xl">🎬</span>
                  </div>
                </div>
                <h3 className="text-xl mb-2 text-ibm-blue">{sermon.title}</h3>
                <p className="text-ibm-gold text-sm mb-3 italic">{sermon.preacher}</p>
                <p className="text-black/60 text-sm leading-relaxed">{sermon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfoMeeting />
      <BannerContact />
      <GoogleMap />
    </div>
  )
}
