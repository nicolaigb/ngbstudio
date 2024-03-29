import React from 'react'
import styled from 'styled-components'
import { Content } from 'model'
import { client } from '@sanity/lib/client'
import { useNextSanityImage } from 'next-sanity-image'
import { Image } from '@atoms'

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  contentObj: Content
}

export const ContentView = ({ contentObj, ...props }: IContentView) => {
  const { type, image, maxWidth } = contentObj
  const imageProps: any = useNextSanityImage(client, image)

  const renderContent = () => {
    switch (type) {
      case 'image':
        return <SImage {...imageProps} />
      case 'screenshot':
        return <SScreenshot {...imageProps} />
      default:
        return null
    }
  }

  return (
    <SContentViewContainer $maxWidth={maxWidth} {...props}>
      {renderContent()}
    </SContentViewContainer>
  )
}

type TContentViewContainer = {
  $maxWidth: number
}

const SContentViewContainer = styled.div<TContentViewContainer>(
  ({ $maxWidth }) => `
  flex-grow: 1;
  max-width: ${$maxWidth}px;
`,
)

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
