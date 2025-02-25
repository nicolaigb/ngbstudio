import clsx from 'clsx'
import React, { ComponentPropsWithoutRef, ElementType } from 'react'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'p' | 'bodySmall'

// Define props for the Text component
type TextProps<C extends ElementType> = {
  variant?: TextVariant
  isPlus?: boolean
  children: React.ReactNode
  className?: string
} & ComponentPropsWithoutRef<C>

const variantMap: Record<TextVariant, ElementType> = {
  h1: 'h1', // Changed from 'title' to 'h1'
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'div',
  p: 'p',
  bodySmall: 'div',
}

export const Text = <C extends ElementType>({
  variant = 'body',
  isPlus = false, // Explicitly default to false
  children,
  className = '',
  ...props
}: TextProps<C>) => {
  const TextComponent = variantMap[variant]

  return (
    <TextComponent
      className={clsx(
        // Variant specific styles
        {
          'text-5xl': variant === 'h1',
          'text-3xl': variant === 'h2',
          'text-2xl': variant === 'h3',
          'text-xl': variant === 'h4',
          'text-base': variant === 'body',
          'text-xs': variant === 'bodySmall',
          'font-bold': isPlus,
        },
        // User provided classes come last to allow overrides
        className,
      )}
      {...props}
    >
      {children}
    </TextComponent>
  )
}
