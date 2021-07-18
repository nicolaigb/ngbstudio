import React, { ReactElement, useState } from 'react';
import { Image, Button } from '@atoms';
import {
  ImageModal, TextEntry, ITextEntry, Masonry,
} from '@organisms';
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
  const selectedImage = images[selectedIdx];
  const modalOpen = (selectedIdx !== null);
  return (
    <SWorkDetailContainer {...props}>
      <ImageModal
        isOpen={modalOpen}
        onRequestClose={() => setSelectedIdx(null)}
        image={selectedImage ?? null}
        text={selectedIdx !== null ? `${selectedIdx + 1}/${images.length}` : null}
      />
      <SButton styleType="image" onClick={() => setSelectedIdx(0)}>
        <Image src={images[0]} />
      </SButton>
      <STextEntry {...textEntryProps} />
      <Masonry columns={2}>
        {images.slice(1).map((imageSrc, idx) => (
          <Button key={`image-${idx + 1}`} styleType="image" onClick={() => setSelectedIdx(idx + 1)}>
            <Image src={imageSrc} />
          </Button>
        ))}
      </Masonry>
    </SWorkDetailContainer>
  );
};

const SWorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const SButton = styled(Button)`
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    width: 100%;
    height: auto;
  }
  // Make images smaller on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    max-width: 90%;
    width: auto;
  }
  margin-bottom: ${({ theme }) => theme.Spacing.extraWide};
`;

const STextEntry = styled(TextEntry)`
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
  width: 100%;
`;
