import React from 'react'
import { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/globals.css'
import AppLayout from '@templates/AppLayout'
import AppProvider from './AppProvider'

export const metadata: Metadata = {
  title: {
    template: '%s | NGB Studio',
    default: 'NGB Studio',
  },
  description:
    'Product design and creative technology by Nicolai Garcia Beckmann.',
  openGraph: {
    title: 'NGB Studio',
    description:
      'Product design and creative technology by Nicolai Garcia Beckmann.',
    url: 'https://ngb.studio',
    siteName: 'NGB Studio',
    images: [
      {
        url: 'https:ngb.studio/og.png', // Must be an absolute URL
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <AppLayout>{children}</AppLayout>
          <SpeedInsights />
        </AppProvider>
      </body>
    </html>
  )
}
