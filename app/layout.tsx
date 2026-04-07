import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'United World | Leading the Evolution of Global Sports',
  description: 'At United World, we lead the evolution of the global sports industry through strategic investment, smart innovation, and a commitment to sustainable growth.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/og-image.png',
  },
  openGraph: {
    title: 'United World | Leading the Evolution of Global Sports',
    description: 'Strategic Investment. Smart Innovation. Sustainable Growth.',
    url: 'https://unitedworld.ch',
    siteName: 'United World',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'United World',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United World | Leading the Evolution of Global Sports',
    description: 'Strategic Investment. Smart Innovation. Sustainable Growth.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
