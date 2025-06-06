import clsx from 'clsx'
import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import { hasCommentMessageValue } from 'sanity'

export type TextVariant =
  | 'display'
  | 'title'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodySmall'

// Define props for the Text component
type TextProps = {
  isPlus?: boolean
  className?: string
  children: React.ReactNode
} & Omit<ComponentPropsWithoutRef<ElementType>, 'as' | 'children'>

export const getTextStyles = (variant: TextVariant, isPlus?: boolean) => ({
  'text-xs': variant === 'bodySmall',
  'text-base': variant === 'body', // Fallback for body
  'text-lg': variant === 'h4',
  'text-2xl': variant === 'h3',
  'text-3xl': variant === 'h2',
  'text-4xl': variant === 'h1',
  'text-5xl': variant === 'title',
  'text-6xl': variant === 'display',
  'font-bold': isPlus,
})

export const BodySmall = ({ isPlus, className, children }: TextProps) => (
  <div className={clsx(getTextStyles('bodySmall', isPlus), className)}>
    {children}
  </div>
)

export const Body = ({
  isPlus,
  hasMaxWidth,
  className,
  children,
}: TextProps) => (
  <div
    className={clsx(
      getTextStyles('body', isPlus),
      'text-base',
      {
        'w-full max-w-textContentWidth': hasMaxWidth,
      },
      className,
    )}
  >
    {children}
  </div>
)

export const P = ({ isPlus, className, children }: TextProps) => (
  <p
    className={clsx(getTextStyles('body', isPlus), 'my-2 text-base', className)}
  >
    {children}
  </p>
)

export const H4 = ({ isPlus, className, children }: TextProps) => (
  <h4 className={clsx(getTextStyles('h4', isPlus), className)}>{children}</h4>
)

export const H3 = ({ isPlus, hasMaxWidth, className, children }: TextProps) => (
  <h3 className={clsx(getTextStyles('h3', isPlus), className)}>{children}</h3>
)

export const H2 = ({ isPlus, className, children }: TextProps) => (
  <h2 className={clsx(getTextStyles('h2', isPlus), className)}>{children}</h2>
)

export const H1 = ({ isPlus, className, children }: TextProps) => (
  <h1 className={clsx(getTextStyles('h1', isPlus), className)}>{children}</h1>
)

export const Title = ({ isPlus, className, children }: TextProps) => (
  <h1 className={clsx(getTextStyles('title', isPlus), className)}>
    {children}
  </h1>
)

export const Display = ({ isPlus, className, children }: TextProps) => (
  <h1 className={clsx(getTextStyles('display', isPlus), className)}>
    {children}
  </h1>
)
