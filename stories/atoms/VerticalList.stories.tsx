import React from 'react';
import { Text } from '@atoms/Text';
import { Story } from '@storybook/react';
import { VerticalList, IVerticalList } from './index';

export default {
  title: 'Atoms/VerticalList',
};

export const getVerticalListArgs = () => ({
  children: [
    <Text styleType="emphasized">Home</Text>,
    <Text styleType="emphasized">Me</Text>,
    <Text styleType="emphasized">Ideas</Text>,
    <Text styleType="emphasized">Mooooooood Board</Text>,
  ],
});
const Template: Story<IVerticalList> = (args) => <VerticalList {...args} />;
export const verticalList = Template.bind({});
verticalList.args = getVerticalListArgs();
