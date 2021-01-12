import { Button, IButton } from '@atoms';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

export interface IMenu extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * List of items to be displayed in the menu
   */
  menuItemProps: IButton[],
}

export const Menu: React.FC<IMenu> = (
  {
    menuItemProps,
    ...props
  },
): ReactElement => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <SMenuContainer {...props}>
      {menuItemProps.map((itemProps, idx) => {
        const onClick = () => setSelected(idx);
        if (idx === selected) {
          return <SSelectedButton onClick={onClick} {...itemProps} />;
        }
        return <SButton onClick={onClick} {...itemProps} />;
      })}
    </SMenuContainer>
  );
};

const SMenuContainer = styled.div``;

const SButton = styled(Button)`
  color: black;
`;

const SSelectedButton = styled(Button)`
  color: red;
`;
