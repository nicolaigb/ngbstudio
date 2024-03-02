import React from 'react'
import styled from 'styled-components'
import { Text } from '@atoms'

const MePage = () => (
  <SBody>
    <SText styleType="regular">
      <p>
        Hi, I&apos;m Nicolai Garcia Beckmann. I am 🇺🇸🇩🇪🇲🇽🇪🇸 from Berkeley, CA
        and based in Greenpoint, Brooklyn.
      </p>
    </SText>
  </SBody>
)

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const SText = styled(Text)`
  margin-top: 32px;
  width: 100%;
  max-width: 800px;
`

export default MePage
