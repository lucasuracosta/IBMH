import FormContact from '@/components/FormContact'
import GoogleMap from '@/components/GoogleMap'
import InfoMeeting from '@/components/InfoMeeting'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto | Iglesia Bautista Misionera Hurlingham',
  description: 'Contáctate con la Iglesia Bautista Misionera de Hurlingham. Estamos para ayudarte.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-ibm-blue">Contáctanos</h1>
          <p className="text-xl text-black/60 leading-relaxed">
            Si tienes alguna duda acerca del evangelio, nuestras reuniones, alguna
            pregunta o simplemente quieres mandar un mensaje ¡No dudes en hacerlo!
            Te contactaremos a la brevedad.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-white">
        <FormContact />
      </section>

      <InfoMeeting />
      <GoogleMap />

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
    </div>
  )
}
