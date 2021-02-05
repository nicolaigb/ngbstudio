import React, { ReactElement } from 'react';
import {
  Modal, IModal, Image, Text,
} from '@atoms';
import styled from 'styled-components';

export interface IImageModal extends IModal {
  /**
   * URL to image displayed in modal
   */
  image: string;

  /**
   * Text displayed with image
   */
  text: string;
}

export const ImageModal: React.FC<IImageModal> = (
  {
    image,
    text,
    ...props
  },
): ReactElement => (
  <SModal {...props}>
    <SContentContainer>
      <SImage src={image} />
      <SText styleType="emphasized">{text}</SText>
    </SContentContainer>
  </SModal>
);

const SModal = styled(Modal)``;

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.Spacing.regular};
  height: auto;
  width: auto;
`;

const SImage = styled(Image)`
  max-height: 90vh;
  max-width: 90vh;
  width: auto;
  margin-bottom: ${({ theme }) => theme.Spacing.tight};
`;

const SText = styled(Text)`
  width: 100%;
  text-align: start;
`;
