import './globals.css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata, Viewport } from 'next'
import { EB_Garamond, Inter, Montserrat } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

const siteUrl = 'https://ibmhurlingham.com.ar'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2c5f7a',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Iglesia Bautista Misionera Hurlingham',
    template: '%s | Iglesia Bautista Misionera Hurlingham',
  },
  description: 'Iglesia Bautista Misionera de Hurlingham - Una comunidad de fe en Cristo. Cultos domingos 10:30hs y 18:00hs. Schumann 2334, Hurlingham, Buenos Aires, Argentina.',
  keywords: ['iglesia', 'bautista', 'hurlingham', 'iglesia evangelica', 'culto', 'sermones', 'biblia', 'fe cristiana', 'buenos aires', 'argentina'],
  authors: [{ name: 'Iglesia Bautista Misionera Hurlingham' }],
  creator: 'Iglesia Bautista Misionera Hurlingham',
  publisher: 'Iglesia Bautista Misionera Hurlingham',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Iglesia Bautista Misionera Hurlingham',
    title: 'Iglesia Bautista Misionera Hurlingham',
    description: 'Una comunidad de fe en Cristo. Cultos domingos 10:30hs y 18:00hs. Schumann 2334, Hurlingham, Buenos Aires.',
    images: [
      {
        url: '/images/entrada.jpeg',
        width: 1200,
        height: 630,
        alt: 'Iglesia Bautista Misionera de Hurlingham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iglesia Bautista Misionera Hurlingham',
    description: 'Una comunidad de fe en Cristo. Cultos domingos 10:30hs y 18:00hs. Schumann 2334, Hurlingham, Buenos Aires.',
    images: ['/images/entrada.jpeg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'Iglesia Bautista Misionera de Hurlingham',
  alternateName: 'IBM Hurlingham',
  description: 'Iglesia Bautista Misionera de Hurlingham - Una comunidad de fe en Cristo',
  url: siteUrl,
  logo: `${siteUrl}/images/logo-ibmh.png`,
  image: `${siteUrl}/images/entrada.jpeg`,
  telephone: '+54 11 4665-0482',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Schumann 2334',
    addressLocality: 'Hurlingham',
    addressRegion: 'Buenos Aires',
    postalCode: 'B1686',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.588869,
    longitude: -58.647705,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:30',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '18:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/ibmhurlingham',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${ebGaramond.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
