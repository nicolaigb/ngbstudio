import React from 'react';
import { Story } from '@storybook/react';
import { getDateContainerArgs } from '@molecules';
import { DropDown, IDropDown } from './index';

export default {
  title: 'Molecules/DropDown',
};

export const getDropDownArgs = () => ({
  dateContainerProps: Array(5).fill(getDateContainerArgs()),
});
const Template: Story<IDropDown> = (args) => <DropDown {...args} />;
export const dropDown = Template.bind({});
dropDown.args = getDropDownArgs();
