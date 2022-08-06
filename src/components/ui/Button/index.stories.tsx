import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { Button } from '.';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
