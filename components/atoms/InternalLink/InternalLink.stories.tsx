import React from 'react';
import { Story } from '@storybook/react';
import { InternalLink, IInternalLink } from './index';

export default {
  title: 'Atoms/Link',
};

export const getLinkArgs = () => ({
  styleType: 'prominent',
  children: 'home',
  href: 'https://blonded.co/',
});
const Template: Story<IInternalLink> = (args) => <InternalLink {...args} />;
export const link = Template.bind({});
link.args = getLinkArgs();
