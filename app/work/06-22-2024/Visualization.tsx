'use client'

// Visualization.tsx
import React from 'react'
import styled from 'styled-components'
import { Text } from '@atoms/Text'
import { ExternalLink } from '@atoms/ExternalLink'
import ThreeCanvas from './Canvas'

export default function Visualization() {
  return (
    <SVisualization>
      <STextContainer>
        <Text>JOIN US FOR A BIRTHDAY CELEBRATION</Text>
        <Text>JUNE 22, 2024 9PM</Text>
        <Text>354 MYRTLE AVE #7, BROOKLYN, NY</Text>
      </STextContainer>
      <SCalendarLink href="/nico-and-thebes-26th-birthday.ics">
        ADD TO CALENDAR
      </SCalendarLink>
      <ThreeCanvas />
    </SVisualization>
  )
}

const SVisualization = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
`

const STextContainer = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
`

const SCalendarLink = styled(ExternalLink)`
  z-index: 100;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`
