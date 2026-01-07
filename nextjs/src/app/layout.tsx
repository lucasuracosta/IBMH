import './globals.css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iglesia Bautista Misionera Hurlingham',
  description: 'Iglesia Bautista Misionera de Hurlingham - Schumann 2334, Buenos Aires, Argentina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
