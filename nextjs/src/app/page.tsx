import BannerContact from '@/components/BannerContact'
import GoogleMap from '@/components/GoogleMap'
import InfoMeeting from '@/components/InfoMeeting'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Image
            src="/logoBlack.png"
            width={120}
            height={120}
            alt="Iglesia Bautista Misionera Hurlingham"
            className="mx-auto mb-8 opacity-90"
          />
          <h1 className="text-ibm-blue">
            Iglesia Bautista Misionera
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-light max-w-2xl mx-auto">
            Una comunidad de fe en Hurlingham, Buenos Aires
          </p>
          <div className="pt-4">
            <Link
              href="/sermones"
              className="inline-flex items-center gap-2 text-base px-8 py-4 bg-ibm-blue text-white hover:bg-ibm-blue/90 transition-colors rounded-full"
            >
              Explorar Sermones
            </Link>
          </div>
        </div>
      </section>

      <InfoMeeting />

      {/* Recent Sermons */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-ibm-blue">Últimos Sermones</h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Próximamente estarán disponibles desde YouTube
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group"
              >
                <div className="aspect-video bg-gray-100 flex items-center justify-center mb-6 overflow-hidden">
                  <span className="text-gray-400 text-sm">Video {i}</span>
                </div>
                <h3 className="text-xl mb-2 text-ibm-blue">Próximamente</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Los sermones serán cargados desde YouTube.
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