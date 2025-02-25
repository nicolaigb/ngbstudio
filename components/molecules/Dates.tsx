import { GlobeAltIcon } from '@heroicons/react/16/solid'
import React from 'react'

import { Date } from '@atoms'

import dates from '../../constants/dates'

export const Dates = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex w-full items-center gap-2 md:w-auto">
    <GlobeAltIcon className="size-4" />
    <div className="grid w-full grid-cols-5 gap-2" {...props}>
      {dates.map((date, idx) => (
        <Date key={idx} {...date} />
      ))}
    </div>
  </div>
)
