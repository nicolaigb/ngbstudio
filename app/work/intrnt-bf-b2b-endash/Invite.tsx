'use client'

import React, { useState } from 'react'

import { checkRSVPExists } from '@/actions/rsvp/checkRSVP'
import { createRSVP } from '@/actions/rsvp/createRSVP'
import { Display, H3 } from '@/components/atoms'
import RSVPSnackBar, {
  RSVPSnackBarState,
} from '@/components/organisms/RSVPSnackBar'
import UnicornScene from '@/components/UnicornScene'

export default function Invite() {
  const [rsvpState, setRsvpState] = useState<RSVPSnackBarState>('initial')

  const handleRSVPClick = () => {
    setRsvpState('entering-email')
  }

  const handleCancelClick = () => {
    setRsvpState('initial')
  }

  const handleEmailSubmit = async (email: string) => {
    setRsvpState('submitting')

    try {
      // First check if RSVP already exists
      const rsvpExists = await checkRSVPExists(email)

      if (rsvpExists) {
        // RSVP already exists, skip creation and go to calendar
        setRsvpState('add-to-calendar')
        return
      }

      // RSVP doesn't exist, create new one
      const result = await createRSVP(email)

      if (result.success) {
        setRsvpState('add-to-calendar')
      } else {
        setRsvpState('error')
      }
    } catch (error) {
      setRsvpState('error')
    }
  }

  const handleAddToCalendar = () => {
    // Download the ICS file
    const link = document.createElement('a')
    link.href = '/intrnt-bf-b2b-endash.ics'
    link.download = 'intrnt-bf-b2b-endash.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Update state to success
    setRsvpState('success')
  }

  return (
    <div className="relative h-[calc(100vh-116px)] overflow-hidden">
      <div className="absolute z-10 flex w-full justify-between p-3">
        <H3 isPlus className="text-white">
          UNDER
        </H3>
        <H3 isPlus className="text-white">
          THE
        </H3>
        <H3 isPlus className="text-white">
          &ldquo;K&rdquo;
        </H3>
        <H3 isPlus className="text-white">
          BRIDGE
        </H3>
      </div>
      <Display
        isPlus
        className="absolute top-1/2 z-10 w-[calc(100%-16px)] -translate-y-1/2 text-center text-white"
      >
        INTRNT BF B2B &ldquo;&#8211;&rdquo;
      </Display>
      <div className="absolute bottom-0 z-10 flex w-full justify-between p-3">
        <H3 isPlus className="text-white">
          JUNE
        </H3>
        <H3 isPlus className="text-white">
          21
        </H3>
        <H3 isPlus className="text-white">
          2025
        </H3>
        <H3 isPlus className="text-white">
          7PM
        </H3>
      </div>
      <UnicornScene height={900} projectId="OEzAfEz0yujlULaD6sEZ" />
      <RSVPSnackBar
        state={rsvpState}
        onRSVPClick={handleRSVPClick}
        onCancelClick={handleCancelClick}
        onEmailSubmitClick={handleEmailSubmit}
        onAddToCalendarClick={handleAddToCalendar}
      />
    </div>
  )
}
