'use client'

import { Button, Input } from '@headlessui/react'
import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'
import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react'

import { Body, Icon, IconButton, THeroIconName } from '../atoms'

interface ConfettiEmoji {
  id: number
  emoji: string
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
}

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
  const [confetti, setConfetti] = useState<ConfettiEmoji[]>([])
  const measureRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const snackBarRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(null)

  useEffect(() => {
    if (measureRef.current) {
      const textWidth = measureRef.current.offsetWidth
      const padding = 12 // px-3 = 12px * 2
      const minWidth = 64
      const newWidth = Math.max(minWidth, textWidth + padding)
      setInputWidth(newWidth)
    }
  }, [inputValue])

  useEffect(() => {
    if (state === 'entering-email' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [state])

  const spawnConfetti = useCallback(() => {
    if (!snackBarRef.current) return

    const rect = snackBarRef.current.getBoundingClientRect()
    const buttonCenterX = rect.left + rect.width / 2
    const buttonCenterY = rect.top + rect.height / 2

    const emojis = ['✨', '🌟', '💫', '🐾', '🫡', '🙂‍↔️', '🙂‍↕️', '⚡️', '🫶']
    const newConfetti: ConfettiEmoji[] = []

    for (let i = 0; i < 15; i += 1) {
      newConfetti.push({
        id: Date.now() + i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: buttonCenterX + (Math.random() - 0.5) * 30,
        y: buttonCenterY,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 12 - 8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      })
    }

    setConfetti(newConfetti)

    const animate = () => {
      setConfetti((prev) =>
        prev
          .map((emoji) => ({
            ...emoji,
            x: emoji.x + emoji.vx,
            y: emoji.y + emoji.vy,
            vy: emoji.vy + 0.5, // gravity
            rotation: emoji.rotation + emoji.rotationSpeed,
          }))
          .filter((emoji) => emoji.y < window.innerHeight + 50),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    animate()

    // Clear confetti after 3 seconds
    setTimeout(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      setConfetti([])
    }, 5000)
  }, [snackBarRef])

  useEffect(
    () => () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    },
    [],
  )

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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onEmailSubmitClick?.(inputValue)
                }
              }}
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
          <SnackBarButton
            onClick={onAddToCalendarClick}
            iconName="CalendarDaysIcon"
          >
            Add to calendar
          </SnackBarButton>
        )
      case 'success':
        return (
          <SnackBarButton onClick={spawnConfetti} iconName="SparklesIcon">
            See you there
          </SnackBarButton>
        )
      case 'initial':
      default:
        return (
          <SnackBarButton onClick={() => onRSVPClick?.()}>RSVP</SnackBarButton>
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
    spawnConfetti,
  ])

  return (
    <>
      <div
        ref={snackBarRef}
        className={clsx(
          className,
          'fixed bottom-3 left-1/2 z-50 flex h-12 w-fit -translate-x-1/2 items-center rounded-full border-[0.5px] border-stone-500 bg-stone-50 bg-opacity-85 shadow-lg backdrop-blur-md backdrop-contrast-125 backdrop-filter transition-all duration-300 ease-in-out',
          {
            'hover:scale-110 active:scale-95':
              state === 'initial' ||
              state === 'add-to-calendar' ||
              state === 'success',
          },
        )}
      >
        {content}
      </div>
      {confetti.map((emoji) => (
        <div
          key={emoji.id}
          className="pointer-events-none fixed z-40 text-4xl"
          style={{
            left: emoji.x,
            top: emoji.y,
            transform: `rotate(${emoji.rotation}deg)`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </>
  )
}

const SnackBarButton = ({
  onClick,
  children,
  iconName,
}: {
  onClick?: () => void
  children: React.ReactNode
  iconName?: THeroIconName
}) => (
  <Button
    onClick={onClick}
    className="flex h-full items-center gap-2 rounded-full px-3 data-[hover]:bg-slate-100"
  >
    {iconName && <Icon name={iconName} />}
    <Body>{children}</Body>
  </Button>
)
