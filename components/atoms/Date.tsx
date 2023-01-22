import React, { ReactElement, useState } from 'react';
import { Text } from '@atoms/Text';
import { DateTime } from 'luxon';

export interface IDate {
  city: string;
  timezone: string;
}
export const Date: React.FC<IDate> = (
  {
    city,
    timezone,
    ...props
  },
): ReactElement => {
  const getDateTime = () => DateTime.local()
    .setZone(timezone)
    .toLocaleString(DateTime.TIME_24_SIMPLE);

  const [date, setDate] = useState<string>(getDateTime());

  setInterval(() => setDate(getDateTime()), 1000);

  return (
    <Text {...props} styleType="subtitle">
      {city}
      {' '}
      {date}
    </Text>
  );
};
