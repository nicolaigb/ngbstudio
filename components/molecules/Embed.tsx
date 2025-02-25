import classNames from 'classnames'
import React from 'react'

import { TEmbed } from '@/types/model'

export interface IEmbed extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string

  embedType: TEmbed
}

export const Embed = ({ src, embedType, title, ...props }: IEmbed) => (
  <iframe
    title={title}
    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    src={src}
    className={classNames('w-full', {
      'h-[150px] md:w-[500px]': embedType === 'soundcloud',
      'aspect-video h-auto md:w-[500px]': embedType === 'youtube',
      'h-[450px] overflow-hidden rounded-lg': embedType === 'appleMusic',
    })}
    {...props}
  />
)
