import styled from 'styled-components';
import { Text } from '@atoms/Text';
import { ContentData } from 'model';

export interface IWork {
  content: ContentData[],
}

export const SText = styled(Text)`
  width: 100%;
`;
