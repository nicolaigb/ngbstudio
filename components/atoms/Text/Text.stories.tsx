import React from 'react';
import { Text } from './Text';

export default {
  title: 'Atoms/Text',
};

export const getTextArgs = () => ({
  children: 'Hello, World!',
  styleType: 'header',
});

const Template = (args) => <Text {...args} />;

export const textStory = Template.bind({});
textStory.args = getTextArgs();
