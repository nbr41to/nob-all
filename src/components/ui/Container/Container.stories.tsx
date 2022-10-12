import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { Container } from './Container';

export default {
  title: 'UI/Container',
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <div className="h-40">children</div>,
};
