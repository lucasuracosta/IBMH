import Link from 'next/link'

export default function BannerContact() {
  return (
    <section className="py-24 px-6 bg-ibm-bg-cream">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-ibm-blue">¿Tienes preguntas?</h2>
        <p className="text-xl text-black/60 max-w-xl mx-auto">
          Nos encantaría conocerte y responder tus inquietudes
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block text-base px-8 py-4 bg-ibm-gold text-white hover:bg-ibm-gold/90 transition-colors rounded-full"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  )
}
