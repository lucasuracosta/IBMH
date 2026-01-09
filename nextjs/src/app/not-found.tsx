import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe o ha sido movida.',
}

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-6xl md:text-8xl font-garamond text-ibm-blue mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-garamond text-ibm-black mb-6">
        Página no encontrada
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="bg-ibm-gold text-white hover:bg-ibm-gold/90 px-8 py-3 rounded-full font-medium transition-all"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
