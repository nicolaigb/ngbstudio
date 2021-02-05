import React, { ReactElement } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export interface IModal extends ReactModal.Props {}

export const Modal: React.FC<IModal> = (
  {
    ...props
  },
): ReactElement => (
  <SModal {...props}>
    HELLO
  </SModal>
);

const SModal = styled(ReactModal)``;
