import { Story, Meta } from '@storybook/react/types-6-0';

import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Qualquer coisa',
  },
} as Meta;

export const Primary: Story<HeadingProps> = (args) => <Heading {...args} />;
