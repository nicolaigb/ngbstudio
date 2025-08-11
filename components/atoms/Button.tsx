'use client'

import { Button as HeadlessButton, ButtonProps } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactElement, ReactNode } from 'react'

export type TSButtonVariants = 'regular' | 'icon' | 'image'

export interface IButton extends ButtonProps {
  /**
   * Variant defining how button is styled according to use
   */
  variant?: TSButtonVariants
  /**
   * Child components to be displayed in the button
   */
  children: ReactNode
}

export const Button: React.FC<IButton> = ({
  children,
  variant = 'regular',
  className,
  disabled,
  ...props
}): ReactElement => {
  const baseClasses = 'border-none outline-none bg-transparent'

  const variantClasses = {
    regular: 'flex justify-center items-center m-0',
    icon: '',
    image: 'p-0',
  }[variant]

  return (
    <HeadlessButton
      className={clsx(baseClasses, variantClasses, className, {
        'pointer-events-none opacity-50': disabled,
      })}
      {...props}
    >
      {children}
    </HeadlessButton>
  )
}
