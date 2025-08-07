'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import { FullscreenProvider } from '../contexts/FullscreenContext'
import { LightTheme } from '../styles'

/**
 * Main application provider that wraps the app with necessary context providers.
 * Includes theme provider for styled-components and fullscreen functionality.
 */
export default function AppProvider({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <ThemeProvider theme={LightTheme}>
      <FullscreenProvider>
        {children}
      </FullscreenProvider>
    </ThemeProvider>
  )
}
