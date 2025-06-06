'use client'

import React, { useState, useEffect } from 'react'

import { checkRSVPExists } from '@/actions/rsvp/checkRSVP'
import { createRSVP } from '@/actions/rsvp/createRSVP'
import { Display, ExternalLink, H3, H4, P } from '@/components/atoms'
import { Embed } from '@/components/molecules'
import RSVPSnackBar, {
  RSVPSnackBarState,
} from '@/components/organisms/RSVPSnackBar'
import UnicornScene from '@/components/UnicornScene'

const SCENE_HEIGHT = 900 // Default height for the scene

export default function Invite() {
  const [rsvpState, setRsvpState] = useState<RSVPSnackBarState>('initial')
  const [sceneHeight, setSceneHeight] = useState(SCENE_HEIGHT)

  useEffect(() => {
    const calculateHeight = () => {
      // Available height is viewport height minus 116px (from container) minus 100px
      const availableHeight = window.innerHeight
      setSceneHeight(Math.max(SCENE_HEIGHT, availableHeight)) // Minimum height of 400px
    }

    calculateHeight()
    window.addEventListener('resize', calculateHeight)

    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

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
    <>
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
        <UnicornScene height={sceneHeight} projectId="OEzAfEz0yujlULaD6sEZ" />
        <RSVPSnackBar
          state={rsvpState}
          onRSVPClick={handleRSVPClick}
          onCancelClick={handleCancelClick}
          onEmailSubmitClick={handleEmailSubmit}
          onAddToCalendarClick={handleAddToCalendar}
        />
      </div>
      <div className="my-6 flex flex-col items-center">
        <div className="w-full max-w-textContentWidth">
          <P>
            Join us for a FREE party under the *gasp* bridge to celebrate the
            longest day of the year. We set up the dancefloor, you shut it down.
            Bring your best vibe, your worst enemies, and something fun to
            share.
          </P>
          <P>
            RSVP using the little floatie. We&apos;ll holler at you closer to
            the event with more deets.
          </P>
          <P>In the meantime check out some of our mixes:</P>
          <div className="my-3 flex w-full max-w-textContentWidth flex-col items-center gap-4">
            <Embed
              className="w-full max-w-textContentWidth"
              embedType="soundcloud"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2059644748&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
            <Embed
              className="w-full max-w-textContentWidth"
              embedType="soundcloud"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2096765721&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>
          <P className="mt-6">
            <strong>P.S.</strong> The visual was made using{' '}
            <ExternalLink href="https://www.unicorn.studio/">
              Unicorn
            </ExternalLink>{' '}
            but I chopped off the watermark. If you&apos;re on their team and
            looking at this:
          </P>
          <ol className="w-full max-w-textContentWidth list-decimal pl-4">
            <li>sick</li>
            <li>let me know and I&apos;ll add it back</li>
          </ol>
          <P className="mt-6">
            <strong>P.P.S.</strong> If you&apos;re from the NYC Department of
            Parks & Recreation
          </P>
          <ol className="w-full max-w-textContentWidth list-decimal pl-4">
            <li>thank you for your service</li>
            <li>please don&apos;t shut us down</li>
          </ol>
          <P isPlus className="mt-6">
            Notes from the community
          </P>
          <P>
            The longest day of 2025 in the northern hemisphere is Friday, June
            20th - commonly referred to as the Summer Solstice.
          </P>
        </div>
      </div>
    </>
  )
}
