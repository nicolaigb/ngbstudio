import React from 'react';
import { Story } from '@storybook/react';
import { Image, IImage } from './index';

export default {
  title: 'Atoms/Image',
};

export const getImageArgs = () => ({
  src: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/wavy-line/cant-grow-exclusively-from-anguish-we-must-cherish-every-moment.jpg',
});
const Template: Story<IImage> = (args) => <Image {...args} />;
export const image = Template.bind({});
image.args = getImageArgs();
