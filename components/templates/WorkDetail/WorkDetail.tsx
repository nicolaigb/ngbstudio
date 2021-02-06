import React, { ReactElement, useState } from 'react';
import { Image, Button } from '@atoms';
import { ImageModal, TextEntry, ITextEntry } from '@organisms';
import styled from 'styled-components';

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
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
    textEntryProps,
    images,
    ...props
  },
): ReactElement => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  console.log(selectedIdx);
  const selectedImage = images[selectedIdx];
  const modalOpen = (selectedIdx !== null);
  return (
    <SWorkDetailContainer {...props}>
      <ImageModal
        isOpen={modalOpen}
        onRequestClose={() => setSelectedIdx(null)}
        image={selectedImage ?? null}
        text={selectedIdx ? `${selectedIdx}/${images.length}` : null}
      />
      <Button styleType="icon" onClick={() => setSelectedIdx(0)}>
        <SImage src={images[0]} />
      </Button>
      <STextEntry {...textEntryProps} />
      {images.slice(1).map((imageSrc, idx) => (
        <Button key={idx + 1} styleType="icon" onClick={() => setSelectedIdx(idx + 1)}>
          <SFeedImage src={imageSrc} />
        </Button>
      ))}
    </SWorkDetailContainer>
  );
};

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
