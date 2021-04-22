import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

export interface IModal extends React.HTMLAttributes<HTMLDivElement> {
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
): ReactElement => {
  const [open, setOpen] = useState(isOpen);

  return (
    <SModalContainer {...props} hidden={!open} onClick={() => setOpen(false)}>
      <SModalContent>
        {children}
      </SModalContent>
    </SModalContainer>
  );
};

const SModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.modal};
`;

const SModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
