import React from 'react';
import { getDatesArgs } from '@organisms/Dates';
import { getMenuArgs } from '@molecules';
import { Story } from '@storybook/react';
import { Header, IHeader } from './index';

export default {
  title: 'Organisms/Header',
};

export const getHeaderArgs = () => ({
  datesProps: getDatesArgs(),
  menuProps: getMenuArgs(),
  textProps: {
    styleType: 'title',
    children: 'Nicolai Garcia',
  },
});
const Template: Story<IHeader> = (args) => <Header {...args} />;
export const header = Template.bind({});
header.args = getHeaderArgs();
