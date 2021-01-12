import React from 'react';
import { Story } from '@storybook/react';
import wavy from 'assets/cant-grow-exclusively-from-anguis-unless-we-cherish-every-moment.jpg';
import { Image, IImage } from './index';

export default {
  title: 'Atoms/Image',
};

export const getImageArgs = () => ({
  src: wavy,
});
const Template: Story<IImage> = (args) => <Image {...args} />;
export const image = Template.bind({});
image.args = getImageArgs();
