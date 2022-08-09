import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import exampleBlock from './example.json';

import { Heading2 } from '.';

export default {
  title: 'Notion Block/Heading2',
  component: Heading2,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Heading2>;

const Template: ComponentStory<typeof Heading2> = (args) => (
  <Heading2 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: exampleBlock,
};
