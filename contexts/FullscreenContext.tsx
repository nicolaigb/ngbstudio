'use client'

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react'
import { createPortal } from 'react-dom'

interface FullscreenContextType {
  isFullscreen: boolean
  toggleFullscreen: () => void
  setFullscreen: (fullscreen: boolean) => void
}

const FullscreenContext = createContext<FullscreenContextType | undefined>(
  undefined,
)

export const useFullscreen = () => {
  const context = useContext(FullscreenContext)
  if (context === undefined) {
    throw new Error('useFullscreen must be used within a FullscreenProvider')
  }
  return context
}

interface FullscreenProviderProps {
  children: ReactNode
}

export const FullscreenProvider = ({ children }: FullscreenProviderProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev)
  }

  const setFullscreen = (fullscreen: boolean) => {
    setIsFullscreen(fullscreen)
  }

  const value = useMemo(
    () => ({
      isFullscreen,
      toggleFullscreen,
      setFullscreen,
    }),
    [isFullscreen],
  )

  return (
    <FullscreenContext.Provider value={value}>
      {children}
    </FullscreenContext.Provider>
  )
}

interface FullscreenPortalProps {
  children: ReactNode
  isActive: boolean
}

export const FullscreenPortal: React.FC<FullscreenPortalProps> = ({
  children,
  isActive,
}) => {
  if (!isActive || typeof window === 'undefined') {
    return null
  }

  return createPortal(
    <div className="fullscreen-overlay">{children}</div>,
    document.body,
  )
}
