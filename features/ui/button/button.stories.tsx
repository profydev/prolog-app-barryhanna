import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Button CTA</Button>,
};

export const Small: Story = {
  render: () => <Button size={ButtonSize.small}>Button CTA</Button>,
};

export const Medium: Story = {
  render: () => <Button size={ButtonSize.medium}>Button CTA</Button>,
};
export const Large: Story = {
  render: () => <Button size={ButtonSize.medium}>Button CTA</Button>,
};
export const XLarge: Story = {
  render: () => <Button size={ButtonSize.medium}>Button CTA</Button>,
};
