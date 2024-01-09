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
        <SText styleType="title" key={`dashmonet-word-${i}`}>
          {words[idx]}
        </SText>
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

const SText = styled(Text)`
  width: 100%;
  flex-grow: 1;
  text-align: center;
  font-size: 96px;
`

export default DashMonet
