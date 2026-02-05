import React from "react"
import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientWidgets } from '@/components/client-widgets'
import { Providers } from '@/components/providers'
import './globals.css'

const barlow = Barlow({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
  display: "swap"
});

const barlowCondensed = Barlow_Condensed({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap"
});



export const metadata: Metadata = {
  metadataBase: new URL('https://rivsolar.com'),
  title: 'RIV Solar | Californians Helping Californians Go Solar',
  description: 'AI-powered tools that show your exact savings. No pushy sales tactics. Just honest solar solutions for California families.',
  generator: 'v0.app',
  openGraph: {
    title: 'RIV Solar | Californians Helping Californians Go Solar',
    description: 'AI-powered tools that show your exact savings. No pushy sales tactics. Just honest solar solutions for California families.',
    images: [
      {
        url: '/images/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'RIV Solar - Power Your Home With California Sunshine',
      },
    ],
    type: 'website',
    siteName: 'RIV Solar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RIV Solar | Californians Helping Californians Go Solar',
    description: 'AI-powered tools that show your exact savings. No pushy sales tactics. Just honest solar solutions for California families.',
    images: ['/images/thumbnail.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <ClientWidgets />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
