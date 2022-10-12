import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { Container } from '../Container';
import { BackGroundCowWrapper } from './BackGroundCowWrapper';

export default {
  title: 'UI/BackGroundCowWrapper',
  component: BackGroundCowWrapper,
  argTypes: {},
} as ComponentMeta<typeof BackGroundCowWrapper>;

const Template: ComponentStory<typeof BackGroundCowWrapper> = (args) => (
  <BackGroundCowWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {};
export const InContainer = Template.bind({});
InContainer.args = {
  children: (
    <div className="p-8">
      <Container>
        <div className="h-40">children</div>
      </Container>
    </div>
  ),
};
