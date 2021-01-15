import React from 'react';
import { Story } from '@storybook/react';
import { Date, IDate } from './index';

export default {
  title: 'Atoms/Date',
};

export const getDateArgs = () => ({
  timezone: 'America/New_York',
});
const Template: Story<IDate> = (args) => <Date {...args} />;
export const date = Template.bind({});
date.args = getDateArgs();
