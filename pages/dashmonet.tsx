import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Text } from '@atoms'
import { pickRandNNumbers } from '@utils/util'

const words: string[] = [
  'Internet',
  'Radio',
  'Outdoor',
  'Sound',
  'The',
  'Color',
  'Green',
  'Atmosphere',
  'Wave',
  'Infinite',
  'Ride',
]

const DashMonet = () => {
  const [idxArr, setIdxArr] = useState([0, 1, 2])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIdxArr(pickRandNNumbers(words.length, 3))
    }, 1000)
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <SContainer>
      {idxArr.map((idx, i) => (
        <STextContainer>
          <SText styleType="title" key={`dashmonet-word-${i}`}>
            {words[idx]}
          </SText>
        </STextContainer>
      ))}
    </SContainer>
  )
}

const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const STextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`

const SText = styled(Text)`
  text-align: center;
  font-size: 256px;
`

export default DashMonet
