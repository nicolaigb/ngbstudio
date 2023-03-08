import React from 'react';
import { Story } from '@storybook/react';
import { Dates, IDates } from './index';

export default {
  title: 'Organisms/Dates',
};

const Template: Story<IDates> = (args) => <Dates {...args} />;
export const dates = Template.bind({});
