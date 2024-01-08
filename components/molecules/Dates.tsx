import React from 'react'
import { Date } from '@atoms'
import { MdLanguage } from 'react-icons/md'
import styled from 'styled-components'
import dates from '../../constants/dates'

export const Dates = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <SDatesContainer {...props}>
    <SGlobe />
    {dates.map((date, idx) => (
      <Date key={idx} {...date} />
    ))}
  </SDatesContainer>
)

const SDatesContainer = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 20px repeat(5, 1fr);
  align-items: center;
  column-gap: 8px;
  gap: ${({ theme }) => theme.Spacing.tight};

  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    width: 100%;
  }
`

const SGlobe = styled(MdLanguage).attrs(() => ({
  size: 20,
}))`
  color: ${({ theme }) => theme.Colors.text};
`
