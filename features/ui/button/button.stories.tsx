import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonColor, ButtonSize } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

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

export const Primary: Story = {
  render: () => <Button color={ButtonColor.primary}>Button CTA</Button>,
};

export const Secondary: Story = {
  render: () => <Button color={ButtonColor.secondary}>Button CTA</Button>,
};

export const Gray: Story = {
  render: () => <Button color={ButtonColor.gray}>Button CTA</Button>,
};

export const Empty: Story = {
  render: () => <Button color={ButtonColor.empty}>Button CTA</Button>,
};

export const EmptyGray: Story = {
  render: () => <Button color={ButtonColor.emptyGray}>Button CTA</Button>,
};

export const Error: Story = {
  render: () => <Button color={ButtonColor.error}>Button CTA</Button>,
};
