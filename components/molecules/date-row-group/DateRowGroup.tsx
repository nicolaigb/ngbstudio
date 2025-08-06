import { Body } from '@/components/atoms'

import DateRow, { TDateRow } from './DateRow'

export type TDateRowGroup = {
  year: string
  rows: TDateRow[]
}

const DateRowGroup = ({ year, rows }: TDateRowGroup) => (
  <div>
    <Body className="text-center">{year}</Body>
    <div className="grid grid-cols-[1fr_1fr] justify-center gap-x-2">
      {rows.map((row, index) => (
        <DateRow
          key={index}
          date={row.date}
          title={row.title}
          href={row.href}
        />
      ))}
    </div>
  </div>
)

export default DateRowGroup
