import React, { ReactElement } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export interface IModal extends ReactModal.Props {
  isOpen: boolean;
}

export const Modal: React.FC<IModal> = (
  {
    children,
    isOpen,
    ...props
  },
): ReactElement => (
  <SModal {...props} isOpen={isOpen} style={{ overlay: { backgroundColor: 'rgba(52, 55, 64, 0.85)' } }}>
    {children}
  </SModal>
);

const SModal = styled(ReactModal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  padding: 16px;
  outline: none;
`;
