'use client'

import { Button, ButtonProps } from '@headlessui/react'
import * as HeroIcons from '@heroicons/react/16/solid'
import clsx from 'clsx'
import React, { ReactElement } from 'react'

export type THeroIconName = keyof typeof HeroIcons

export interface IIconButton extends ButtonProps {
  /**
   * Name of the hero icon to display
   */
  iconName: THeroIconName
  /**
   * Show loading spinner instead of icon
   */
  loading?: boolean

  size?: 'small' | 'medium' | 'large'
}

export const IconButton: React.FC<IIconButton> = ({
  iconName,
  loading = false,
  className = '',
  ...props
}): ReactElement => {
  const IconComponent = HeroIcons[iconName] as React.ComponentType<{
    className?: string
  }>

  return (
    <Button
      className={clsx(
        className,
        'flex cursor-pointer items-center justify-center rounded-full border-none bg-stone-100 text-black outline-none transition-all duration-150 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-stone-300 data-[hover]:bg-stone-200',
        {
          'h-6 w-6': props.size === 'small',
          'h-8 w-8': props.size === 'medium' || !props.size,
          'h-10 w-10': props.size === 'large',
        },
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
      ) : (
        <IconComponent className="h-4 w-4" />
      )}
    </Button>
  )
}
