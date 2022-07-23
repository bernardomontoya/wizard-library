import { Story, Meta } from '@storybook/react/types-6-0';
import { baseMachine } from '../consts/baseMachine';
import { Wizard } from '../machines/Wizard';

export default {
  title: 'Example/Wizard',
  component: Wizard,
} as Meta;

const Template: Story = (args) => (
  <Wizard configuration={baseMachine} {...args} />
);

export const Default = Template.bind({});
