'use client'

import { Button, ButtonProps } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { Icon, THeroIconName } from './Icon'

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
}): ReactElement => (
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
      <Icon name={iconName} />
    )}
  </Button>
)
