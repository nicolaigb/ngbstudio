import React from 'react'
import { Image, Video } from '@atoms'
import { ContentData } from 'model'
import styled from 'styled-components'

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  data: ContentData

  marginBottom?: string
}

export const ContentView = ({ data, ...props }: IContentView) => {
  const { type } = data

  const renderContent = () => {
    switch (type) {
      case 'image':
        return <SImage {...data} />
      case 'screenshot':
        return <SScreenshot {...data} />
      case 'video':
        return <Video videoObj={data} />
      default:
        return null
    }
  }

  return (
    <SContentViewContainer {...props}>{renderContent()}</SContentViewContainer>
  )
}

const SContentViewContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 64px;
`

const SImage = styled(Image)`
  max-width: 100% !important;
  height: auto;
`

const SScreenshot = styled(SImage)`
  border-radius: 8px;
  box-shadow:
    0 0.6021873017743928px 0.6021873017743928px -1.25px #0000002e,
    0 2.288533303243457px 2.288533303243457px -2.5px #00000029,
    0 10px 10px -3.75px #00000010,
    0 1px 2px #0000001f,
    0 0 2px #00000014;
`
