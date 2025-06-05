'use client'

import { Button, Input } from '@headlessui/react'
import clsx from 'clsx'
import React, { useMemo, useState, useRef, useEffect } from 'react'

import { Body } from '../atoms'

type RSVPSnackBarState =
  | 'initial'
  | 'entering-email'
  | 'submitting'
  | 'success'
  | 'error'

type RSVPSnackBarProps = {
  className?: string
  state?: RSVPSnackBarState
}

export default function RSVPSnackBar({
  className,
  state = 'initial',
}: RSVPSnackBarProps) {
  const [curState, setCurState] = useState<RSVPSnackBarState>(state)
  const [inputValue, setInputValue] = useState('')
  const [inputWidth, setInputWidth] = useState(100)
  const measureRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (measureRef.current) {
      const textWidth = measureRef.current.offsetWidth
      const padding = 24 // px-3 = 12px * 2
      const minWidth = 100
      const newWidth = Math.max(minWidth, textWidth + padding)
      setInputWidth(newWidth)
    }
  }, [inputValue])

  const content = useMemo(() => {
    switch (curState) {
      case 'initial':
        return (
          <Button
            onClick={() => {
              setCurState('entering-email')
            }}
            className="flex h-full items-center rounded-full px-3 data-[hover]:bg-slate-100"
          >
            <Body>RSVP</Body>
          </Button>
        )
      case 'entering-email':
        return (
          <div className="relative flex h-full w-fit items-center">
            <Input
              type="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="h-full rounded-full px-3 transition-all duration-200 ease-out"
              style={{ width: `${inputWidth}px` }}
              placeholder="Email"
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
      default:
        return <div />
    }
  }, [curState, inputValue, inputWidth])

  return (
    <div
      className={clsx(
        className,
        'fixed bottom-3 left-1/2 z-50 flex h-11 w-fit -translate-x-1/2 items-center rounded-full border-[0.5px] border-stone-500 bg-stone-50 bg-opacity-85 shadow-lg backdrop-blur-md backdrop-contrast-125 backdrop-filter transition-all duration-300 ease-in-out',
        {
          'bottom-4 h-10 hover:scale-110': curState === 'initial',
        },
      )}
    >
      {content}
    </div>
  )
}
