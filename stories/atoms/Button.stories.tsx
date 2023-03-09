import React from 'react';
import { Story } from '@storybook/react';
import Image from 'next/image';
import { Button, IButton } from '@atoms/Button';

export default {
  title: 'Atoms/Button',
};

export const getButtonArgs = () => ({
  styleType: 'image',
  children: <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/visualize/screenshot-00.png" width={100} height={100} />,
});

const Template: Story<IButton> = (args) => <Button {...args} />;
export const button = Template.bind({});
button.args = getButtonArgs();
