'use client'

import { Button, ButtonProps } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { Icon, THeroIconName } from './Icon'

export interface IconButtonProps extends ButtonProps {
  /**
   * Name of the hero icon to display
   */
  iconName: THeroIconName
  /**
   * Show loading spinner instead of icon
   */
  loading?: boolean

  variant?: 'default' | 'white'

  size?: 'small' | 'medium' | 'large'
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  variant = 'default',
  loading = false,
  className = '',
  ...props
}): ReactElement => (
  <Button
    className={clsx(
      className,
      'flex cursor-pointer items-center justify-center rounded-full outline-none transition-all duration-150 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500',
      {
        'h-6 w-6': props.size === 'small',
        'h-8 w-8': props.size === 'medium' || !props.size,
        'h-10 w-10': props.size === 'large',
      },
      {
        'border-none bg-stone-100 text-black active:bg-stone-400 data-[hover]:bg-stone-300':
          variant === 'default',
        'bg-transparent text-white data-[hover]:bg-stone-900':
          variant === 'white',
      },
    )}
    disabled={loading}
    {...props}
  >
    {loading ? (
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
    ) : (
      <Icon name={iconName} />
    )}
  </Button>
)
