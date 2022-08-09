import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import exampleBlock from './example.json';

import { ToDo } from '.';

export default {
  title: 'Notion Block/ToDo',
  component: ToDo,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof ToDo>;

const Template: ComponentStory<typeof ToDo> = (args) => <ToDo {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  block: { ...exampleBlock, to_do: { ...exampleBlock.to_do, checked: true } },
};
export const NotChecked = Template.bind({});
NotChecked.args = {
  block: { ...exampleBlock, to_do: { ...exampleBlock.to_do, checked: false } },
};
