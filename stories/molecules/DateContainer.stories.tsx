import React from 'react';
import { Story } from '@storybook/react';
import { DateContainer, IDateContainer } from './index';

export default {
  title: 'Molecules/DateContainer',
};

export const getDateContainerArgs = () => ({
  dateProps: {
    timezone: 'America/New_York',
  },
  text: 'NYC',
});

const Template: Story<IDateContainer> = (args) => <DateContainer {...args} />;
export const dateContainer = Template.bind({});
dateContainer.args = getDateContainerArgs();
