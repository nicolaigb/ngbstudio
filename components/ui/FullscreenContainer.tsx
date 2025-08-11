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
  fullScreenToggleProps?: Pick<
    FullscreenToggleProps,
    'position' | 'size' | 'variant'
  >
}

export const FullscreenContainer: React.FC<FullscreenContainerProps> = ({
  children,
  className = '',
  fullscreenClassName = 'fullscreen-content',
  fullScreenToggleProps = { size: 'medium', position: 'top-right' },
}) => {
  const { isFullscreen } = useFullscreen()

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
