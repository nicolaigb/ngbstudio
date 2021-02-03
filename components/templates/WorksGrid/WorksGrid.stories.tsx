import React from 'react';
import { Story } from '@storybook/react';
import { getContentPreviewArgs } from '@molecules';
import { WorksGrid, IWorksGrid } from './index';

export default {
  title: 'Templates/WorksGrid',
};

export const getWorksGridArgs = () => ({
  worksProps: new Array(16).fill(getContentPreviewArgs()),
});
const Template: Story<IWorksGrid> = (args) => <WorksGrid {...args} />;
export const worksGrid = Template.bind({});
worksGrid.args = getWorksGridArgs();
