import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
    textColor: '#ffffff',
    backgroundColor: '#1ea7fd',
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    label: 'Outline Button',
    textColor: '#1ea7fd',
    borderColor: '#1ea7fd',
  },
};

export const Ghost: Story = {
  args: {
    ghost: true,
    label: 'Ghost Button',
    textColor: '#ffffff',
  },
};

export const Filled: Story = {
  args: {
    filled: true,
    label: 'Filled Button',
    textColor: '#ffffff',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
    textColor: '#333',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
    textColor: '#333',
  },
};

export const NonRounded: Story = {
  args: {
    primary: true,
    label: 'Non-Rounded Button',
    rounded: false,
    textColor: '#ffffff',
  },
};
