'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../styles'

export default function AppProvider({
  children,
}: {
  children?: React.ReactNode
}) {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
}
