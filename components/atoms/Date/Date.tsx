import React, { ReactElement, useState } from 'react';
import { Text } from '@atoms/Text';
import { DateTime } from 'luxon';
import styled from 'styled-components';

export interface IDate {
  timezone: string;
}
export const Date: React.FC<IDate> = (
  {
    timezone,
    ...props
  },
): ReactElement => {
  const getDateTime = () => DateTime.local()
    .setZone(timezone)
    .toLocaleString(DateTime.TIME_24_WITH_SECONDS);

  const [date, setDate] = useState<string>(getDateTime());

  setInterval(() => setDate(getDateTime()), 1000);

  return (
    <SDateContainer {...props}>
      <Text styleType="emphasized">{date}</Text>
    </SDateContainer>
  );
};

const SDateContainer = styled.div``;
