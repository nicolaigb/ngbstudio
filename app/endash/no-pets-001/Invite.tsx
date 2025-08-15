'use client'

import Image from 'next/image'

import { Body, ExternalLink, H1, P } from '@/components/atoms'
import { Embed } from '@/components/molecules/Embed'
import RSVPSnackBar from '@/components/organisms/RSVPSnackBar'
import { FullscreenContainer } from '@/components/ui/FullscreenContainer'
import { useRSVP, EventConfig } from '@/hooks/useRSVP'

import AudioVisualizer from './AudioVisualizer'

const eventConfig: EventConfig = {
  id: 'no-pets-001',
  title: 'NO PETS 001',
  description: 'INTRNT BF and "–" in the mix at Transmitter Park',
  startDateTime: '2025-08-23T22:00:00Z', // 6PM EST
  endDateTime: '2025-08-24T02:00:00Z', // 10PM EST
  location: 'Transmitter Park, Greenpoint, Brooklyn, NY',
  url: 'https://maps.app.goo.gl/rtpp5Fp3b1FFGWp17',
  icsFileName: 'no-pets-001.ics',
}

const Invite = () => {
  const {
    state,
    handleRSVP,
    handleCancel,
    handleEmailSubmit,
    handleAddToCalendar,
  } = useRSVP(eventConfig)

  return (
    <div className="space-y-5">
      <FullscreenContainer
        className="relative h-[80vh] w-full overflow-hidden bg-black"
        fullscreenClassName="fullscreen-content bg-black"
        fullScreenToggleProps={{ variant: 'white' }}
        startFullscreen
      >
        <div className="absolute left-6 top-6 z-[100]">
          <H1 isPlus className="text-white">
            NO PETS 001
          </H1>
          <Body className="text-white">TRANSMITTER PARK, GREENPOINT</Body>
          <Body className="text-white">AUGUST 23</Body>
          <Body className="text-white">6&ndash;10PM</Body>
        </div>
        <AudioVisualizer />
      </FullscreenContainer>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-textContentWidth space-y-5">
          <P>
            Born out of a very improvised party in June 2025, NO PETS is a free
            party concept hosted by Brennan Fendt & Nicolai Garcia Beckmann at
            WNYC Transmitter Park.
          </P>
          <P>
            At the heart of this event are the beliefs that music and dance
            should be accessible to all, and the more people involved in a party
            the better. While party specifics will change with each iteration,
            these values will remain constant as NO PETS continues to grow &
            evolve in the future. With that said, we are excited to invite
            literally everyone to join us on Saturday, August 23rd from 6:00 PM
            - 10:00 PM at{' '}
            <ExternalLink href="https://maps.app.goo.gl/rtpp5Fp3b1FFGWp17">
              Transmitter Park
            </ExternalLink>
            .{' '}
          </P>
          <P>
            for the first installment of NO PETS. Come hang out, walk the park,
            lay in the grass, enjoy the sunset, people watch…maybe even dance!
            Musical selections from INTRNT BF & “–” will take us into the night
            and transform this city park into a revelrous dreamscape. Bring your
            friends, make some new ones and let&apos;s see how much fun we can
            have together :))
          </P>
          <P>
            RSVP below to get more info for this party and those that we throw
            in the future.
          </P>
          <P>
            ***Water & restrooms available on site; BYOB;
            FREEPARTYFREEPARTYFREEPARTY***
          </P>
          <Image
            src="/no-pets-hero.JPG"
            width={1200}
            height={1600}
            alt="NO PETS 001"
            className="mx-auto w-full max-w-[400px]"
          />
          <P>Check out the DJs:</P>
          <div className="my-3 flex w-full max-w-textContentWidth flex-col items-center gap-4">
            <Embed
              className="w-full max-w-textContentWidth"
              embedType="soundcloud"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2131456740&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
            <Embed
              className="w-full max-w-textContentWidth"
              embedType="soundcloud"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2150145033&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>
          <P>
            The audioreactive visual is inspired by Tiago Canzian&apos;s
            tutorial found{' '}
            <ExternalLink href="https://tympanus.net/codrops/2023/12/19/creating-audio-reactive-visuals-with-dynamic-particles-in-three-js/">
              here
            </ExternalLink>
            .
          </P>
          <P>
            The track is Joy Orbison&apos;s chune of the year. We don&apos;t
            have the licensing for it so if you&apos;re Joy or from his team
            please reach out. We&apos;ll take it down but also uuuhhhh...pull
            up.
          </P>
        </div>
      </div>
      <RSVPSnackBar
        state={state}
        onRSVPClick={handleRSVP}
        onCancelClick={handleCancel}
        onEmailSubmitClick={handleEmailSubmit}
        onAddToCalendarClick={handleAddToCalendar}
      />
    </div>
  )
}

export default Invite
