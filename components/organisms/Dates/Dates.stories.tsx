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
    },
    {
      timezone: 'America/New_York',
    },
    {
      timezone: 'Europe/London',
    },
    {
      timezone: 'Europe/Berlin',
    },
    {
      timezone: 'Asia/Tokyo',
    },
  ],
});

const Template: Story<IDates> = (args) => <Dates {...args} />;
export const dates = Template.bind({});
dates.args = getDatesArgs();
