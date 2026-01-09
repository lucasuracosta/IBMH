import GoogleMap from '@/components/GoogleMap'
import UpcomingEvents from '@/components/UpcomingEvents'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section - Split Layout */}
      <section className="flex flex-col md:flex-row w-full min-h-[70vh]">
        {/* Left: Image Container */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-ibm-gray-200 overflow-hidden">
          <Image
            src="/images/ibmh-blur.png"
            alt="Iglesia Bíblica de Hurlingham"
            fill
            className="object-cover scale-100 object-[50%_30%]"
            priority
          />
        </div>
        {/* Right: Content Container */}
        <div className="w-full md:w-1/2 bg-ibm-gray-50 flex flex-col justify-center p-8 md:p-12 lg:p-20">
          <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl leading-tight text-ibm-black mb-6">
            Bienvenido a <br className="hidden lg:block" /> IBM Hurlingham
          </h1>
          
          <div className="max-w-lg mt-2">
            <p className="font-sans text-lg md:text-xl text-ibm-gray-700 mb-3">
              Existimos para:
            </p>
            <ul className="space-y-2 font-sans text-base md:text-lg text-ibm-gray-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-ibm-gray-700 rounded-full mr-3"></span>
                <span><strong className="text-ibm-black font-semibold text-lg">Glorificar</strong> a Dios.</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-ibm-gray-700 rounded-full mr-3"></span>
                <span><strong className="text-ibm-black font-semibold text-lg">Evangelizar</strong> a los perdidos.</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-ibm-gray-700 rounded-full mr-3"></span>
                <span><strong className="text-ibm-black font-semibold text-lg">Edificar</strong> a los santos.</span>
              </li>
            </ul>
          </div>

          <p className="font-sans text-lg md:text-xl text-ibm-gray-700 mt-10 mb-8 font-normal border-l-4 border-ibm-gold pl-4">
            Servicio de Adoración: Domingo 10:30 am
          </p>

        </div>
      </section>


      {/* Recent Sermon */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-ibm-gold font-medium mb-2">Sermón Reciente</p>
            <h2 className="text-4xl font-light text-ibm-black">Último Sermón del Domingo</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-ibm-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-ibm-gray-400">Próximamente desde YouTube</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-ibm-black">Próximamente</h3>
              <p className="text-lg text-ibm-gray-600 leading-relaxed">
                Pronto podrás acceder a nuestros sermones directamente desde esta página. Mientras tanto, visita nuestro canal de YouTube.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="/sermones"
                  className="inline-block px-6 py-3 bg-ibm-blue text-white hover:bg-ibm-blue/90 transition-colors rounded-full"
                >
                  Ver Todos los Sermones
                </Link>
                <Link
                  href="https://www.youtube.com/@ibmhurlingham"
                  target="_blank"
                  className="text-ibm-gray-600 relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-ibm-gold after:transition-all hover:after:w-full"
                >
                  YouTube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-6 bg-ibm-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-ibm-gold font-medium mb-2">Destacado</p>
            <h2 className="text-4xl font-light text-ibm-black">Comienza Aquí</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/about" className="bg-white overflow-hidden group cursor-pointer border-b-4 border-transparent hover:border-ibm-gold transition-colors duration-300">
              <div className="aspect-[4/3] bg-ibm-gray-200 relative overflow-hidden">
                <Image
                  src="/images/culto.jpg"
                  alt="Nuevo en IBM Hurlingham"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 pb-8 space-y-3">
                <h3 className="text-2xl font-medium text-ibm-black">
                  ¿Nuevo en IBM Hurlingham?
                </h3>
                <p className="text-ibm-gray-600 leading-relaxed">
                  Te damos la bienvenida. Conoce más sobre nuestra iglesia, nuestras creencias y cómo puedes involucrarte.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/about" className="bg-white overflow-hidden group cursor-pointer border-b-4 border-transparent hover:border-ibm-gold transition-colors duration-300">
              <div className="aspect-[4/3] bg-ibm-gray-200 relative overflow-hidden">
                <Image
                  src="/images/pulpito-2.png"
                  alt="Nuestras Creencias"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 pb-8 space-y-3">
                <h3 className="text-2xl font-medium text-ibm-black">
                  ¿En qué creemos?
                </h3>
                <p className="text-ibm-gray-600 leading-relaxed">
                  Descubre nuestras convicciones doctrinales fundamentadas en las Escrituras y la fe histórica cristiana.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white overflow-hidden group cursor-pointer border-b-4 border-transparent hover:border-ibm-gold transition-colors duration-300">
              <div className="aspect-[4/3] bg-ibm-gray-200 relative overflow-hidden">
                <Image
                  src="/images/entrada.jpeg"
                  alt="Visitando Nuestro Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 pb-8 space-y-3">
                <h3 className="text-2xl font-medium text-ibm-black">
                  ¿Dónde nos congregamos?
                </h3>
                <p className="text-ibm-gray-600 leading-relaxed">
                  Obtén direcciones, detalles sobre los servicios dominicales y más información sobre nuestros ministerios.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <UpcomingEvents />

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-light text-ibm-black">¿Buscas algo más?</h2>
          <p className="text-xl text-ibm-gray-600">
            Estamos aquí para ayudarte. Contáctanos con cualquier pregunta.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-ibm-gold text-white hover:bg-ibm-gold/90 transition-colors rounded-full"
            >
              Contáctanos
            </Link>
            <Link
              href="/about"
              className="text-ibm-gray-600 relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-ibm-gold after:transition-all hover:after:w-full"
            >
              Más Información
            </Link>
          </div>
        </div>
      </section>

      <GoogleMap />
    </div>
  )
}