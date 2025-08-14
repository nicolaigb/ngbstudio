'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

import { checkRSVPExists } from '@/actions/rsvp/checkRSVP'
import { createRSVP } from '@/actions/rsvp/createRSVP'
import { RSVPSnackBarState } from '@/components/organisms/RSVPSnackBar'

export interface EventConfig {
  id: string
  title: string
  description: string
  startDateTime: string // ISO format
  endDateTime: string // ISO format
  location: string
  url?: string
  icsFileName?: string
}

interface UseRSVPReturn {
  state: RSVPSnackBarState
  handleRSVP: () => void
  handleCancel: () => void
  handleEmailSubmit: (email: string) => Promise<void>
  handleAddToCalendar: () => void
  reset: () => void
}

export const useRSVP = (eventConfig: EventConfig): UseRSVPReturn => {
  const [state, setState] = useState<RSVPSnackBarState>('initial')
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear any existing timeout on unmount
  useEffect(
    () => () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current)
      }
    },
    [],
  )

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }

  const clearErrorTimeout = () => {
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current)
      errorTimeoutRef.current = null
    }
  }

  const setErrorWithTimeout = () => {
    clearErrorTimeout()
    setState('error')
    errorTimeoutRef.current = setTimeout(() => {
      setState('entering-email')
    }, 3000)
  }

  const generateICSContent = useCallback((): string => {
    const now = new Date()
    const dtstamp = `${now.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`
    const dtstart = `${new Date(eventConfig.startDateTime).toISOString().replace(/[-:]/g, '').split('.')[0]}Z`
    const dtend = `${new Date(eventConfig.endDateTime).toISOString().replace(/[-:]/g, '').split('.')[0]}Z`

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ngbstudio//${eventConfig.title}//EN
BEGIN:VEVENT
UID:${eventConfig.id}@ngbstudio.com
DTSTAMP:${dtstamp}
DTSTART:${dtstart}
DTEND:${dtend}
SUMMARY:${eventConfig.title}
DESCRIPTION:${eventConfig.description}
LOCATION:${eventConfig.location}${eventConfig.url ? `\nURL:${eventConfig.url}` : ''}
END:VEVENT
END:VCALENDAR`
  }, [eventConfig])

  const handleRSVP = useCallback(() => {
    clearErrorTimeout()
    setState('entering-email')
  }, [])

  const handleCancel = useCallback(() => {
    clearErrorTimeout()
    setState('initial')
  }, [])

  const handleEmailSubmit = useCallback(async (email: string) => {
    const trimmedEmail = email.trim()

    if (!validateEmail(trimmedEmail)) {
      setErrorWithTimeout()
      return
    }

    setState('submitting')
    clearErrorTimeout()

    try {
      // Check if RSVP already exists
      const rsvpExists = await checkRSVPExists(trimmedEmail)

      if (rsvpExists) {
        setState('add-to-calendar')
        return
      }

      // Create new RSVP
      const result = await createRSVP(trimmedEmail)

      if (result.success) {
        setState('add-to-calendar')
      } else {
        setErrorWithTimeout()
      }
    } catch (error) {
      console.error('RSVP submission error:', error)
      setErrorWithTimeout()
    }
  }, [])

  const handleAddToCalendar = useCallback(() => {
    const icsContent = generateICSContent()
    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = eventConfig.icsFileName || `${eventConfig.id}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    setState('success')
  }, [eventConfig, generateICSContent])

  const reset = useCallback(() => {
    clearErrorTimeout()
    setState('initial')
  }, [])

  return {
    state,
    handleRSVP,
    handleCancel,
    handleEmailSubmit,
    handleAddToCalendar,
    reset,
  }
}
