import React, { ReactElement } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export interface IModal extends ReactModal.Props {
  /**
   * Boolean determining whether the modal is open
   */
  isOpen: boolean;

  /**
   * Function to handle closing modal
   */
  onRequestClose: () => void;
}

export const Modal: React.FC<IModal> = (
  {
    children,
    isOpen,
    onRequestClose,
    ...props
  },
): ReactElement => (
  <SModal
    {...props}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    shouldCloseOnOverlayClick
    style={{
      overlay: {
        backgroundColor: 'rgba(52, 55, 64, 0.85)',
      },
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    }}
  >
    {children}
  </SModal>
);

const SModal = styled(ReactModal)`
  outline: none;
`;
