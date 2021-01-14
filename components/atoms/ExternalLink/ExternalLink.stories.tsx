import React from 'react';
import { Story } from '@storybook/react';
import { ExternalLink, IExternalLink } from './index';

export default {
  title: 'Atoms/ExternalLink',
};

export const getExternalLinkArgs = () => ({
  children: 'HELLO, BLONDED',
  href: 'https://blonded.co',
});
const Template: Story<IExternalLink> = (args) => <ExternalLink {...args} />;
export const externalLink = Template.bind({});
externalLink.args = getExternalLinkArgs();
