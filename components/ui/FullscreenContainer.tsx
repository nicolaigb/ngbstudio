'use client'

import clsx from 'clsx'
import React, { ReactNode, useMemo, useEffect } from 'react'

import {
  useFullscreen,
  FullscreenPortal,
} from '../../contexts/FullscreenContext'

import { FullscreenToggle, FullscreenToggleProps } from './FullscreenToggle'

type FullscreenContainerProps = {
  children: ReactNode
  className?: string
  fullscreenClassName?: string
  startFullscreen?: boolean
  fullScreenToggleProps?: Pick<
    FullscreenToggleProps,
    'position' | 'size' | 'variant'
  >
}

export const FullscreenContainer: React.FC<FullscreenContainerProps> = ({
  children,
  className = '',
  fullscreenClassName = 'fullscreen-content',
  startFullscreen = false,
  fullScreenToggleProps = { size: 'medium', position: 'top-right' },
}) => {
  const { isFullscreen, setFullscreen } = useFullscreen()

  useEffect(() => {
    if (startFullscreen) {
      setFullscreen(true)
    }
  }) // Only run on mount

  const contents = useMemo(
    () => (
      <>
        <FullscreenToggle {...fullScreenToggleProps} />
        {children}
      </>
    ),
    [children, fullScreenToggleProps],
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

  return (
    <div className={clsx('rounded-lg', containerClassName, className)}>
      {contents}
    </div>
  )
}
