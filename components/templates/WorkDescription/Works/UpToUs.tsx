import React from 'react'
import { ExternalLink } from '@atoms/ExternalLink'
import { ContentView } from '@molecules/ContentView'
import { IWork, SText } from './util'

export const UpToUs = ({ content }: IWork) => (
  <>
    <SText>
      <ExternalLink href="https://www.uptous.org/">Up to Us</ExternalLink> is a
      NYC-based non-profit focused on activating young people to engage in civic
      action like registering to vote and receiving the Covid vaccine. In
      partnership with{' '}
      <ExternalLink href="https://www.headcount.org/">Headcount</ExternalLink> ,
      we designed a customizable voter registration flow that could be easily
      co-branded by major clients such as Billie Eilish, Phish, and Harry
      Styles.
      <p>
        The product is geared towards Gen-Z voters and provides a simple way for
        checking voter registration status and updating it accordingly. You can
        find Harry Styles&apos; branded flow{' '}
        <ExternalLink href="https://app.impactive.io/campaigns/headcount/activities/dfggmiea/teams/lu6xuw6i">
          here
        </ExternalLink>
        .
      </p>
    </SText>
    <ContentView data={content[1]} />
  </>
)
