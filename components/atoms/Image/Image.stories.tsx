import React from 'react';
import { Story } from '@storybook/react';
import test from 'assets/test.png';
import { Image, IImage } from './index';

export default {
  title: 'Atoms/Image',
};

export const getImageArgs = () => ({ src: 'https://www.tate.org.uk/art/images/work/P/P20/P20284_10.jpg' });
const Template: Story<IImage> = (args) => <Image {...args} />;
export const image = Template.bind({});
image.args = getImageArgs();
