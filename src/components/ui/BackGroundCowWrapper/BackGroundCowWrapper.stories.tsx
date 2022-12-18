import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Container } from '../Container';
import { BackGroundCowWrapper as Component } from './BackGroundCowWrapper';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    children: (
      <div className="p-8">
        <Container>
          <div className="h-40">children</div>
        </Container>
      </div>
    ),
  },
};
