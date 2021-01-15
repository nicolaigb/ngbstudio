import React from 'react';
import { Story } from '@storybook/react';
import { getWorksGridArgs } from '@organisms';
import { Home, IHome } from './index';

export default {
  title: 'Templates/Home',
};

export const getHomeArgs = () => ({
  worksGridProps: getWorksGridArgs(),
});

const Template: Story<IHome> = (args) => <Home {...args} />;
export const home = Template.bind({});
home.args = getHomeArgs();
