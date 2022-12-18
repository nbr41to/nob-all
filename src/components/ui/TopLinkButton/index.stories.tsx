import type { Meta, StoryObj } from '@storybook/react';

import { TopLinkButton as Component } from '.';

export default {
  component: Component,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    label: 'Profile',
  },
};
