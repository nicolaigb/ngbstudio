import styled from 'styled-components'
import { Text } from '@atoms/Text'
import { ContentData } from 'model'

export interface IWork {
  content: ContentData[]
}

export const SText = styled(Text)`
  width: 100%;
  max-width: ${({ theme }) => theme.Spacing.contentTextWidth};
  margin-bottom: 64px;
`

export const SContentViewPair = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.Spacing.contentImageWidth};
  display: flex;
  gap: 16px;
`
