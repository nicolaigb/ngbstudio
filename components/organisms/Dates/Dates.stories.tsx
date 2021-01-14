import React from 'react';
import { Story } from '@storybook/react';
import { Dates, IDates } from './index';

export default {
  title: 'Organisms/Dates',
};

export const getDatesArgs = () => ({
  dateProps: [
    {
      timezone: 'America/Los_Angeles',
      text: 'BRK',
    },
    {
      timezone: 'America/New_York',
      text: 'NYC',
    },
    {
      timezone: 'Europe/London',
      text: 'LDN',
    },
    {
      timezone: 'Europe/Berlin',
      text: 'BER',
    },
    {
      timezone: 'Asia/Tokyo',
      text: 'TYO',
    },
  ],
});

const Template: Story<IDates> = (args) => <Dates {...args} />;
export const dates = Template.bind({});
dates.args = getDatesArgs();
