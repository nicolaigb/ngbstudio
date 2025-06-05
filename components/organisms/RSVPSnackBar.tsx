'use client'

import { Button, Input } from '@headlessui/react'
import clsx from 'clsx'
import React, { useMemo, useState, useRef, useEffect } from 'react'

import { Body, IconButton } from '../atoms'

export type RSVPSnackBarState =
  | 'initial'
  | 'entering-email'
  | 'submitting'
  | 'success'
  | 'error'
  | 'add-to-calendar'

type RSVPSnackBarProps = {
  className?: string
  state?: RSVPSnackBarState
  onEmailSubmitClick?: (email: string) => void
  onAddToCalendarClick?: () => void
  onRSVPClick?: () => void
  onCancelClick?: () => void
}

export default function RSVPSnackBar({
  className,
  state = 'initial',
  onEmailSubmitClick,
  onAddToCalendarClick,
  onRSVPClick,
  onCancelClick,
}: RSVPSnackBarProps) {
  const [inputValue, setInputValue] = useState('')
  const [inputWidth, setInputWidth] = useState(100)
  const measureRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (measureRef.current) {
      const textWidth = measureRef.current.offsetWidth
      const padding = 24 // px-3 = 12px * 2
      const minWidth = 100
      const newWidth = Math.max(minWidth, textWidth + padding)
      setInputWidth(newWidth)
    }
  }, [inputValue])

  useEffect(() => {
    if (state === 'entering-email' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [state])

  const content = useMemo(() => {
    switch (state) {
      case 'entering-email':
      case 'submitting':
      case 'error':
        return (
          <div className="relative flex h-full w-fit items-center gap-1 rounded-full bg-stone-100 p-1">
            <IconButton
              size="large"
              iconName="XMarkIcon"
              disabled={state === 'submitting'}
              onClick={() => {
                onCancelClick?.()
                setInputValue('')
              }}
            />
            <Input
              ref={inputRef}
              type="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={state === 'submitting'}
              className={clsx(
                'h-full rounded-full bg-stone-100 px-3 transition-all duration-200 ease-out',
                {
                  'outline outline-2 outline-red-500': state === 'error',
                },
              )}
              style={{ width: `${inputWidth}px` }}
              placeholder="Email"
            />
            <IconButton
              size="large"
              iconName="ArrowUpIcon"
              loading={state === 'submitting'}
              onClick={() => onEmailSubmitClick?.(inputValue)}
            />
            <span
              ref={measureRef}
              className="invisible absolute left-0 top-0 whitespace-nowrap px-3"
              style={{ fontSize: 'inherit', fontFamily: 'inherit' }}
            >
              {inputValue || 'Email'}
            </span>
          </div>
        )
      case 'add-to-calendar':
        return (
          <div className="flex h-full items-center gap-2 rounded-full pl-3 pr-1">
            <Body>Add to calendar</Body>
            <IconButton
              size="large"
              iconName="CalendarIcon"
              onClick={() => onAddToCalendarClick?.()}
            />
          </div>
        )
      case 'success':
        return (
          <div className="flex h-full items-center rounded-full px-3">
            <Body>See you there :)</Body>
          </div>
        )
      case 'initial':
      default:
        return (
          <Button
            onClick={() => onRSVPClick?.()}
            className="flex h-full items-center rounded-full px-3 data-[hover]:bg-slate-100"
          >
            <Body>RSVP</Body>
          </Button>
        )
    }
  }, [
    state,
    inputValue,
    inputWidth,
    onEmailSubmitClick,
    onAddToCalendarClick,
    onRSVPClick,
    onCancelClick,
  ])

  return (
    <div
      className={clsx(
        className,
        'fixed bottom-3 left-1/2 z-50 flex h-12 w-fit -translate-x-1/2 items-center rounded-full border-[0.5px] border-stone-500 bg-stone-50 bg-opacity-85 shadow-lg backdrop-blur-md backdrop-contrast-125 backdrop-filter transition-all duration-300 ease-in-out',
        {
          'bottom-4 h-10 hover:scale-110': state === 'initial',
        },
      )}
    >
      {content}
    </div>
  )
}
