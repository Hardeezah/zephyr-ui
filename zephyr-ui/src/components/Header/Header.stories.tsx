import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'Components/Header', // Updated title to reflect structure
  component: Header,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'], // Autodocs entry for this component
  argTypes: {
    backgroundColor: { control: 'color' }, // Control for background color
    onNotifyClick: { action: 'notify clicked' }, // Action for notify button
    onUsernameClick: { action: 'username clicked' }, // Action for username button
  },
  args: {
    title: 'Home', // Default title
    logo: 'https://via.placeholder.com/40', // Sample logo
    backgroundColor: '#282c34', // Default background color
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories for the Header component
export const Default: Story = {
  args: {
    title: 'Welcome to My App',
    logo: 'https://via.placeholder.com/40', // Sample logo
    backgroundColor: '#282c34',
  },
};

export const CustomPageName: Story = {
  args: {
    title: 'Dashboard',
    logo: 'https://via.placeholder.com/40', // Sample logo
    backgroundColor: '#3b3b3b',
  },
};
