import React from 'react';
import { Text } from '@atoms/Text';
import { Story } from '@storybook/react';
import { HorizontalList, IHorizontalList } from './index';

export default {
  title: 'Atoms/HorizontalList',
};

export const getHorizontalListArgs = () => ({
  children: [
    <Text styleType="subheader">Hello</Text>,
    <Text styleType="subheader">World!</Text>,
  ],
});
const Template: Story<IHorizontalList> = (args) => <HorizontalList {...args} />;
export const horizontalList = Template.bind({});
horizontalList.args = getHorizontalListArgs();
