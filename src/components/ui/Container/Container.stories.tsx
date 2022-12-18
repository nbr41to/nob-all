import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Container as Component } from './Container';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    children: <div className="h-40">children</div>,
  },
};
