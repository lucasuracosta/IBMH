import BannerContact from '@/components/BannerContact'
import FAQ from '@/components/FAQ'
import GoogleMap from '@/components/GoogleMap'
import InfoMeeting from '@/components/InfoMeeting'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿En qué creemos? | Iglesia Bautista Misionera Hurlingham',
  description: 'Conoce nuestras creencias y fundamentos doctrinales basados en la Biblia.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-ibm-blue">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Image
            src="/logoWhite.png"
            width={120}
            height={120}
            alt="IBM Hurlingham"
            className="mx-auto opacity-90"
          />
          <h1 className="text-white">¿En qué creemos?</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Nuestras creencias y fundamentos doctrinales basados en la Biblia
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FAQ />
        </div>
      </section>

      <InfoMeeting />

      {/* Recent Sermons */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-ibm-blue">Últimos Sermones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-video bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-sm">Video {i}</span>
                </div>
                <h3 className="text-lg mb-2 text-ibm-blue">Próximamente</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Los sermones serán cargados próximamente.
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Link
              href="/sermones"
              className="text-ibm-gold hover:text-ibm-blue transition-colors underline underline-offset-4"
            >
              Ver todos los sermones
            </Link>
          </div>
        </div>
      </section>

      <BannerContact />
      <GoogleMap />
    </div>
  )
}
