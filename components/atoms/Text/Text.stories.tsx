import React from 'react';
import { Text } from './Text';

export default {
  title: 'Atoms/Text',
};

export const getTextArgs = () => ({ text: 'Hello, World!' });

const Template = (args) => <Text {...args} />;

export const textStory = Template.bind({});
textStory.args = getTextArgs();
