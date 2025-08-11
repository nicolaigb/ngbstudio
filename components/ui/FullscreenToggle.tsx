'use client'

import { Button } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

import { useFullscreen } from '../../contexts/FullscreenContext'
import { IconButton, IconButtonProps } from '../atoms'

type TPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

/**
 * Props for the FullscreenToggle component
 */
export type FullscreenToggleProps = {
  /** Additional CSS classes to apply to the button */
  className?: string
  /** Position of the toggle button relative to its container */
  position?: TPosition
} & Pick<IconButtonProps, 'size' | 'variant'>

/**
 * A reusable fullscreen toggle button component that can be positioned anywhere
 * within a fullscreen-enabled container. Uses HeroIcons for consistent iconography.
 *
 * @param className - Additional CSS classes
 * @param position - Button position (default: 'top-right')
 * @param size - Button size variant (default: 'md')
 */
export const FullscreenToggle: React.FC<FullscreenToggleProps> = ({
  className = '',
  position = 'top-right',
  ...props
}) => {
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  // Position classes for absolute positioning
  const positionClasses: Record<TPosition, string> = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  }

  return (
    <IconButton
      iconName={isFullscreen ? 'ArrowsPointingInIcon' : 'ArrowsPointingOutIcon'}
      onClick={toggleFullscreen}
      className={clsx(
        'absolute z-[1000]',
        positionClasses[position],
        className,
      )}
      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      {...props}
    />
  )
}
