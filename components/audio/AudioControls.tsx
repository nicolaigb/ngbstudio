import clsx from 'clsx'
import React from 'react'

import { Body, BodySmall, IconButton, IconButtonProps } from '../atoms'

type AudioControlsProps = {
  isPlaying: boolean
  title: string
  subtitle?: string
  onPlay: () => void
  onPause: () => void
  iconButtonProps?: Pick<IconButtonProps, 'variant'>
} & React.HTMLAttributes<HTMLDivElement>

const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  title,
  subtitle,
  onPlay,
  onPause,
  iconButtonProps = { variant: 'white' },
  className,
  ...props
}) => (
  <div
    className={clsx(
      'flex items-center gap-1 rounded-full border-[0.5px] border-solid border-stone-500 p-1 pr-5',
      className,
    )}
    {...props}
  >
    <IconButton
      iconName={isPlaying ? 'PauseIcon' : 'PlayIcon'}
      onClick={isPlaying ? onPause : onPlay}
      size="large"
      aria-label={isPlaying ? 'Pause' : 'Play'}
      {...iconButtonProps}
    />
    <div>
      <Body className="text-white">{title}</Body>
      <BodySmall className="text-white/80">
        {subtitle || 'Unknown Artist'}
      </BodySmall>
    </div>
  </div>
)

export default AudioControls
