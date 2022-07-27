import { Story, Meta } from '@storybook/react/types-6-0';
import {
  wizardConfiguration,
  wizardDarkMode,
} from '../consts/baseConfiguration';
import { Wizard } from '../machines/Wizard';

export default {
  title: 'Example/Wizard',
  component: Wizard,
} as Meta;

const Template: Story = (args) => (
  <Wizard
    configuration={wizardConfiguration}
    styles={wizardDarkMode}
    {...args}
  />
);

export const Default = Template.bind({});
