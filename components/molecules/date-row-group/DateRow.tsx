import { Body, InternalLink } from '@/components/atoms'

export type TDateRow = {
  date: string
  title: string
  href: string
}

export default function DateRow({ date, title, href }: TDateRow) {
  return (
    <>
      <Body className="text-right">{date}</Body>
      <InternalLink href={href} className="w-fit">
        <Body isPlus className="hover:underline">
          {title}
        </Body>
      </InternalLink>
    </>
  )
}
