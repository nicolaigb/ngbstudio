import React from 'react';
import { Story } from '@storybook/react';
import { SLink, ILink } from './index';

export default {
  title: 'Atoms/Link',
};

export const getLinkArgs = () => ({
  styleType: 'prominent',
  children: 'home',
  href: 'https://blonded.co/',
});
const Template: Story<ILink> = (args) => <SLink {...args} />;
export const link = Template.bind({});
link.args = getLinkArgs();
