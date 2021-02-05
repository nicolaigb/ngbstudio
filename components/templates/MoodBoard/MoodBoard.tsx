import React, { ReactElement, useState } from 'react';
import { MoodImage } from 'model';
import { Button, Image } from '@atoms';
import { Masonry, MoodImageModal } from '@organisms';
import styled from 'styled-components';

export interface IMoodBoard extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Images to be displayed in Masonry format
   */
  images: MoodImage[];
}

export const MoodBoard: React.FC<IMoodBoard> = (
  {
    images,
    ...props
  },
): ReactElement => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const selectedImage = images[selectedIdx];
  const modalOpen = (selectedIdx !== null);
  return (
    <SMoodBoardContainer {...props}>
      <MoodImageModal
        isOpen={modalOpen}
        image={selectedImage ? selectedImage.url : null}
        text={selectedImage ? selectedImage.title : null}
      />
      <Masonry columns={3}>
        {images.map((img, idx) => (
          <Button styleType="icon" onClick={() => setSelectedIdx(idx)}>
            <Image key={idx} src={img.url} />
          </Button>
        ))}
      </Masonry>
    </SMoodBoardContainer>
  );
};

const SMoodBoardContainer = styled.div``;
