'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
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

  // Handle body scroll locking when entering/exiting fullscreen
  useEffect(() => {
    if (typeof document === 'undefined') return

    if (isFullscreen) {
      // Prevent body scroll when in fullscreen
      document.body.classList.add('fullscreen-active')
      // Store original overflow style to restore later
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      return () => {
        // Cleanup function to restore original overflow
        document.body.classList.remove('fullscreen-active')
        document.body.style.overflow = originalOverflow
      }
    }
    return () => {
      // Remove fullscreen class and restore scroll
      document.body.classList.remove('fullscreen-active')
      document.body.style.overflow = ''
    }
  }, [isFullscreen])

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
