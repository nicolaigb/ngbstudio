'use client'

import React from 'react'
import { Work } from 'model'
import { Text } from '@atoms'
import { ContentView } from '@molecules'
import styled from 'styled-components'
import WorkDescription from '@templates/WorkDescription'

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
  work: Work
}

export default function WorkPage({ work, ...props }: IWorkDetail) {
  const { content, title, year, medium, tag } = work

  return (
    <SWorkDetailContainer {...props}>
      <ContentView data={content[0]} />
      <SBody>
        <SHeader>
          <Text styleType="subheader">{title}</Text>
          <Text styleType="emphasized">{year}</Text>
          <Text styleType="regular" style={{ fontStyle: 'italic' }}>
            {medium}
          </Text>
        </SHeader>
        <WorkDescription tag={tag} content={content} />
      </SBody>
    </SWorkDetailContainer>
  )
}

const SWorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  position: relative;
`

const SBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SHeader = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.Spacing.contentTextWidth};
  display: flex;
  flex-direction: column;
  gap: 8px;
`
