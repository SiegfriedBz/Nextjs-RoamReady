import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://travel-landing-seven.vercel.app/'),
  title: 'Travel landing',
  openGraph: {
    images: '/opengraph-image.png',
    title: 'Travel landing',
    description: 'Travel landing',
    url: `${process.env.NEXTAUTH_URL}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
