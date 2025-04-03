'use client'

import { DateTime } from 'luxon'
import React, { useState } from 'react'

import { BodySmall } from '@atoms/Text'

export interface IDate {
  city: string
  timezone: string
}

export const Date = ({ city, timezone }) => {
  const getDateTime = () =>
    DateTime.local().setZone(timezone).toLocaleString(DateTime.TIME_24_SIMPLE)

  const [date, setDate] = useState<string>(getDateTime())

  setInterval(() => setDate(getDateTime()), 1000)

  return (
    <BodySmall isPlus>
      {city} {date}
    </BodySmall>
  )
}
