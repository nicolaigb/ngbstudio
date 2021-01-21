import React, { ReactElement, useState } from 'react';
import { Button, VerticalList } from '@atoms';
import styled from 'styled-components';
import { DateContainer, IDateContainer } from '@molecules/DateContainer';

export interface IDropDown extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children to be displayed in the dropdown list
   */
  dateContainerProps : IDateContainer[];
}

export const DropDown: React.FC<IDropDown> = (
  {
    dateContainerProps,
    ...props
  },
): ReactElement => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SDropDownContainer {...props}>
      <Button styleType="regular" onClick={() => setExpanded(!expanded)}>
        <DateContainer {...dateContainerProps[0]} />
      </Button>
      {expanded ? (
        <VerticalList>
          {dateContainerProps.map((itemProps, idx) => (
            <Button styleType="regular">
              <DateContainer key={idx} {...itemProps} />
            </Button>
          ))}
        </VerticalList>
      ) : null}
    </SDropDownContainer>
  );
};

const SDropDownContainer = styled.div``;
