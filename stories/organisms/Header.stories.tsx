import React from 'react';
import { Story } from '@storybook/react';
import { Header, IHeader } from './index';

export default {
  title: 'Organisms/Header',
};

const Template: Story<IHeader> = (args) => <Header {...args} />;
export const header = Template.bind({});
