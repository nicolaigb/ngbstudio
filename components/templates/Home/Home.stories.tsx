import React from 'react';
import { Story } from '@storybook/react';
import { getWorksGridArgs } from '@organisms';
import { HomePage, IHomePage } from './index';

export default {
  title: 'Templates/Home',
};

export const getHomePageArgs = () => ({
  worksGridProps: getWorksGridArgs(),
});

const Template: Story<IHomePage> = (args) => <HomePage {...args} />;
export const home = Template.bind({});
home.args = getHomePageArgs();
