import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import exampleBlock from './example.json';

import { Heading3 } from '.';

export default {
  title: 'Notion Block/Heading3',
  component: Heading3,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Heading3>;

const Template: ComponentStory<typeof Heading3> = (args) => (
  <Heading3 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: exampleBlock,
};
