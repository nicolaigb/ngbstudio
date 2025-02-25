'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React from 'react'

import Footer from '@organisms/Footer'
import Header from '@organisms/Header'

export default function AppLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname.includes('studio')) return <div>{children}</div>

  return (
    <div
      className={clsx('relative flex min-h-screen flex-col', {
        'pb-[calc(100vh-50vw-100px)] md:pb-0': pathname === '/',
      })}
    >
      <Header />
      <div className="flex-shrink-0 flex-grow overflow-hidden overscroll-y-none p-4 md:p-6">
        {children}
      </div>
      <Footer />
    </div>
  )
}
