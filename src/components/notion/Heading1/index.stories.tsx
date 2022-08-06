import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import exampleBlock from './example.json';

import { Heading1 } from '.';

export default {
  title: 'Notion Block/Heading1',
  component: Heading1,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => (
  <Heading1 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: exampleBlock,
};
