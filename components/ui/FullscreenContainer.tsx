'use client'

import clsx from 'clsx'
import React, { ReactNode, useMemo } from 'react'

import {
  useFullscreen,
  FullscreenPortal,
} from '../../contexts/FullscreenContext'

import { FullscreenToggle, FullscreenToggleProps } from './FullscreenToggle'

type FullscreenContainerProps = {
  children: ReactNode
  className?: string
  fullscreenClassName?: string
} & Pick<FullscreenToggleProps, 'position'>

export const FullscreenContainer: React.FC<FullscreenContainerProps> = ({
  children,
  className = '',
  fullscreenClassName = 'fullscreen-content',
}) => {
  const { isFullscreen } = useFullscreen()

  const contents = useMemo(
    () => (
      <>
        <FullscreenToggle />
        {children}
      </>
    ),
    [children],
  )

  const containerClassName = 'relative'

  if (isFullscreen) {
    return (
      <FullscreenPortal isActive>
        <div
          className={clsx(containerClassName, fullscreenClassName, className)}
        >
          {contents}
        </div>
      </FullscreenPortal>
    )
  }

  return <div className={clsx(containerClassName, className)}>{contents}</div>
}
