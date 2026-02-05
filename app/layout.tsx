import React from "react"
import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientWidgets } from '@/components/client-widgets'
import { Providers } from '@/components/providers'
import Script from 'next/script'
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
  title: 'RIV Solar | Solar Installation in California, Florida & Puerto Rico',
  description: 'AI-powered solar solutions for California, Florida & Puerto Rico. See your exact savings instantly. No pushy sales tactics. 25-year warranty. Serving families across America.',
  generator: 'v0.app',
  alternates: {
    canonical: 'https://rivsolar.com',
  },
  openGraph: {
    title: 'RIV Solar | Solar Installation in California, Florida & Puerto Rico',
    description: 'AI-powered solar solutions for California, Florida & Puerto Rico. See your exact savings instantly. No pushy sales tactics. 25-year warranty.',
    images: [
      {
        url: '/images/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'RIV Solar - Power Your Home With Sunshine',
      },
    ],
    type: 'website',
    siteName: 'RIV Solar',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RIV Solar | Solar Installation in California, Florida & Puerto Rico',
    description: 'AI-powered solar solutions for California, Florida & Puerto Rico. See your exact savings instantly. No pushy sales tactics.',
    images: ['/images/thumbnail.jpg'],
  },
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

// Structured Data / Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RIV Solar",
  "url": "https://rivsolar.com",
  "logo": "https://rivsolar.com/images/riv-logo.png",
  "description": "AI-powered solar installation company serving California, Florida, and Puerto Rico with transparent pricing and 25-year warranties.",
  "foundingDate": "2024",
  "areaServed": [
    {
      "@type": "State",
      "name": "California",
      "sameAs": "https://en.wikipedia.org/wiki/California"
    },
    {
      "@type": "State",
      "name": "Florida",
      "sameAs": "https://en.wikipedia.org/wiki/Florida"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Puerto Rico",
      "sameAs": "https://en.wikipedia.org/wiki/Puerto_Rico"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://facebook.com/rivsolar",
    "https://instagram.com/rivsolar",
    "https://linkedin.com/company/rivsolar"
  ]
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rivsolar.com/#localbusiness",
  "name": "RIV Solar",
  "image": "https://rivsolar.com/images/riv-logo.png",
  "url": "https://rivsolar.com",
  "telephone": "",
  "priceRange": "$$",
  "description": "Professional solar panel installation with AI-powered savings tools. Serving California, Florida, and Puerto Rico.",
  "areaServed": [
    { "@type": "State", "name": "California" },
    { "@type": "State", "name": "Florida" },
    { "@type": "AdministrativeArea", "name": "Puerto Rico" }
  ],
  "serviceType": ["Solar Panel Installation", "Battery Storage Installation", "Solar Financing"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solar Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Solar Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Battery Storage Systems"
        }
      }
    ]
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "RIV Solar",
  "url": "https://rivsolar.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rivsolar.com/insights?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much can I save with solar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most homeowners save 50-90% on their electricity bills. In high-rate areas like California and Florida, savings typically range from $150-400+ per month. Our AI Bill Analyzer shows your exact savings based on your actual usage."
      }
    },
    {
      "@type": "Question",
      "name": "What is NEM 3.0 and how does it affect me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NEM 3.0 is California's new net metering policy that reduced export rates by about 75%. This makes battery storage more valuable and self-consumption more important. Solar is still highly profitable, but system design matters more than ever."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer $0 down financing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer multiple $0 down options including solar loans, leases, and PPAs. Most homeowners qualify and start saving from day one with no upfront cost."
      }
    },
    {
      "@type": "Question",
      "name": "What does your 25-year warranty cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our comprehensive 25-year warranty covers panels, inverters, workmanship, and production guarantees. If anything fails or underperforms, we fix it free. No fine print, no hassle."
      }
    },
    {
      "@type": "Question",
      "name": "How long does solar installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The actual installation typically takes 1-2 days. The full process from signing to power-on is usually 4-8 weeks, mostly due to permitting and utility approval timelines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you service Florida and Puerto Rico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! RIV Solar serves California, Florida, and Puerto Rico. Each region has different utility rates and incentives, and our AI tools are trained on local rate structures to give you accurate savings estimates."
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
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
