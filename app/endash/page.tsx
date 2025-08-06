import Image from 'next/image'

import { Body, H1, InternalLink } from '@/components/atoms'
import DateRowGroup from '@/components/molecules/date-row-group/DateRowGroup'
import { ENDASH_DATES } from '@/constants/endash-dates'
import EndashAbloh from '@/public/endash-abloh.jpeg'

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image
        src={EndashAbloh}
        alt="Endash Abloh"
        className="h-[500px] w-auto"
      />
      <H1 isPlus>&ldquo;–&rdquo;</H1>
      <Body className="text-center">
        (endash)
        <br />
        Defining the space between you and me
      </Body>
      {ENDASH_DATES.map(({ year, rows }) => (
        <DateRowGroup key={year} year={year} rows={rows} />
      ))}
    </div>
  )
}
