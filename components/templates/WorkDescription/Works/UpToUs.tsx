import React from 'react'
import { ExternalLink } from '@atoms/ExternalLink'
import { ContentView } from '@molecules/ContentView'
import { IWork, SText } from './util'

export const UpToUs = ({ content }: IWork) => (
  <>
    <SText>
      <p>
        <ExternalLink href="https://www.uptous.org/">Up to Us</ExternalLink> is
        a NYC-based non-profit focused on activating young people to engage in
        civic action like registering to vote and receiving the Covid vaccine.
      </p>
      <p>
        In partnership with{' '}
        <ExternalLink href="https://www.headcount.org/">Headcount</ExternalLink>{' '}
        , we designed a customizable voter registration flow for major clients
        such as Billie Eilish, Phish, and Harry Styles. View a complete list of
        the campaigns{' '}
        <ExternalLink href="https://www.headcount.org/campaigns/">
          here
        </ExternalLink>
        .
      </p>
      <p>
        Each campaign aims to incentivize US Gen-Z voters to register, check
        their registration, or, if they are under 18, to receive election
        information. Upon completing the flow, they are entered in a sweepstakes
        to win all-expenses-paid trips, VIP passes, or other prizes from their
        favorite artists. You can view Harry Styles&apos; co-branded flow below.
      </p>
    </SText>
    <ExternalLink href="https://app.impactive.io/campaigns/headcount/activities/dfggmiea/teams/lu6xuw6i">
      <ContentView data={content[1]} />
    </ExternalLink>
    <SText>
      <p>
        In total, 520,000 people prepared to vote using the product. 150,000 of
        those people registered to vote. The complete impact can be found{' '}
        <ExternalLink href="https://www.headcount.org/wp-content/uploads/2023/04/Good-To-Vote-2022-_-2024.pdf">
          here
        </ExternalLink>
        .
      </p>
    </SText>
  </>
)
