import React from 'react'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import AppProvider from './app-provider'

export const metadata: Metadata = {
  title: {
    template: '%s | NGB Studio',
    default: 'NGB Studio',
  },
  description: 'Design',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
