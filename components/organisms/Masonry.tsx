import React, { ReactElement } from 'react'
import styled from 'styled-components'

export interface IMasonry extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Components to be displayed in Masonry format
   */
  children: ReactElement[]

  /**
   * Number of columns to hold children
   */
  columns: number
}

export const Masonry: React.FC<IMasonry> = ({
  children,
  columns,
  ...props
}): ReactElement => {
  const buckets = {}
  children.forEach((child, idx) => {
    const hash = idx % columns
    const item = <SItemContainer key={idx}>{child}</SItemContainer>
    buckets[hash] = buckets[hash] ? buckets[hash].concat([item]) : [item]
  })
  // Wrap columns in divs
  const cols = Object.keys(buckets).map((col, idx) => (
    <SColumnContainer key={idx}>{buckets[col]}</SColumnContainer>
  ))
  return <SMasonryContainer {...props}>{cols}</SMasonryContainer>
}

const SMasonryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.medium}) {
    margin: 0 ${({ theme }) => theme.Spacing.condensed};
  }
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.large}) {
    margin: 0 ${({ theme }) => theme.Spacing.tight};
  }
`

const SItemContainer = styled.div`
  width: 100%;
  height: auto;

  @media only screen and (max-width: ${({ theme }) => theme.Spacing.medium}) {
    margin: ${({ theme }) => theme.Spacing.condensed} 0;
  }
  margin: ${({ theme }) => theme.Spacing.tight} 0;
`
