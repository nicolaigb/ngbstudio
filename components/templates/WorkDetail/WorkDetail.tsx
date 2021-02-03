import React, { ReactElement } from 'react';
import { Image } from '@atoms';
import { TextEntry, ITextEntry } from '@organisms';
import styled from 'styled-components';

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Main image displayed at top of work detail
   */
  mainImage: string;

  /**
   * Props for text entry
   */
  textEntryProps: ITextEntry

  /**
   * Images displayed in feed
   */
  images: string[];
}

export const WorkDetail: React.FC<IWorkDetail> = (
  {
    mainImage,
    textEntryProps,
    images,
    ...props
  },
): ReactElement => (
  <SWorkDetailContainer {...props}>
    <SImage src={mainImage} />
    <STextEntry {...textEntryProps} />
    {images.map((imageSrc, idx) => <SFeedImage src={imageSrc} key={idx} />)}
  </SWorkDetailContainer>
);

const SWorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SImage = styled(Image)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
`;

const SFeedImage = styled(SImage)`
  margin-top: ${({ theme }) => theme.Spacing.wide};
`;

const STextEntry = styled(TextEntry)`
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
  width: 100%;
`;
