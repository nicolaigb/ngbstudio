import React from 'react';
import { Story } from '@storybook/react';
import { PressableImage, IPressableImage } from './index';

export default {
  title: 'Molecules/PressableImage',
};

export const getPressableImageArgs = () => ({
  imageURL: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/visualize/screenshot-01.png',
});
const Template: Story<IPressableImage> = (args) => <PressableImage {...args} />;
export const pressableImage = Template.bind({});
pressableImage.args = getPressableImageArgs();
