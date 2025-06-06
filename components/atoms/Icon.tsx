'use client'

import * as HeroIcons from '@heroicons/react/16/solid'
import React from 'react'

export type THeroIconName = keyof typeof HeroIcons

export interface IIcon {
  /**
   * Name of the hero icon to display
   */
  name: THeroIconName
  /**
   * Additional CSS classes
   */
  className?: string
}

export const Icon: React.FC<IIcon> = ({ name, className = '' }) => {
  const IconComponent = HeroIcons[name] as React.ComponentType<{
    className?: string
  }>

  return <IconComponent className={`w-4 h-4 ${className}`} />
}