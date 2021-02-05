import React, { ReactElement, useState } from 'react';
import { MoodImage } from 'model';
import { Button, Image } from '@atoms';
import { Masonry } from '@organisms';
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
  return (
    <SMoodBoardContainer {...props}>
      <Masonry columns={3}>
        {images.map((img, idx) => (
          <Button styleType="icon" onClick={() => console.log(`presenting ${img}`)}>
            <Image key={idx} src={img.url} />
          </Button>
        ))}
      </Masonry>
    </SMoodBoardContainer>
  );
};

const SMoodBoardContainer = styled.div``;
