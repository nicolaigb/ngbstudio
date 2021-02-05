import React, { ReactElement } from 'react';
import {
  Modal, IModal, Image, Text,
} from '@atoms';
import styled from 'styled-components';

export interface IMoodImageModal extends IModal {
  /**
   * URL to image displayed in modal
   */
  image: string;

  /**
   * Text displayed with image
   */
  text: string;
}

export const MoodImageModal: React.FC<IMoodImageModal> = (
  {
    image,
    text,
    ...props
  },
): ReactElement => (
  <SModal {...props}>
    <SContentContainer>
      <SImage src={image} />
      <Text styleType="emphasized">{text}</Text>
    </SContentContainer>
  </SModal>
);

const SModal = styled(Modal)`
  height: 100%;
`;

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SImage = styled(Image)`
  max-height: 90%;
  max-width: 90%;
  width: auto;
  margin-bottom: ${({ theme }) => theme.Spacing.tight};
`;
