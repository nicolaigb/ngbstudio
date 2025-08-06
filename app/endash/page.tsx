import { Body, H1, InternalLink } from '@/components/atoms'
import DateRowGroup from '@/components/molecules/date-row-group/DateRowGroup'
import { ENDASH_DATES } from '@/constants/endash-dates'

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6">
      <H1>(endash)</H1>
      <Body>Defining the space between you and me</Body>
      {ENDASH_DATES.map(({ year, rows }) => (
        <DateRowGroup key={year} year={year} rows={rows} />
      ))}
    </div>
  )
}
