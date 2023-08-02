import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonColor, ButtonSize, ButtonIcon } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} size={ButtonSize.small}>
      {" "}
      Button CTA
    </Button>
  ),
};

export const Medium: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const Large: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const XLarge: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const Primary: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} color={ButtonColor.primary}>
      Button CTA
    </Button>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Button
      onClick={() => console.log("clicked")}
      color={ButtonColor.secondary}
    >
      Button CTA
    </Button>
  ),
};

export const Gray: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} color={ButtonColor.gray}>
      Button CTA
    </Button>
  ),
};

export const Empty: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} color={ButtonColor.empty}>
      Button CTA
    </Button>
  ),
};

export const EmptyGray: Story = {
  render: () => (
    <Button
      onClick={() => console.log("clicked")}
      color={ButtonColor.emptyGray}
    >
      Button CTA
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button onClick={() => console.log("clicked")} color={ButtonColor.error}>
      Button CTA
    </Button>
  ),
};

export const IconLeading: Story = {
  render: () => (
    <Button
      color={ButtonColor.error}
      icon={ButtonIcon.leading}
      iconSrc={"/icons/icon.png"}
      onClick={() => console.log("clicked")}
    >
      Button CTA
    </Button>
  ),
};

export const IconTrailing: Story = {
  render: () => (
    <Button
      color={ButtonColor.error}
      icon={ButtonIcon.trailing}
      iconSrc={"/icons/icon.png"}
      onClick={() => console.log("clicked")}
    >
      Button CTA
    </Button>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <Button
      color={ButtonColor.error}
      icon={ButtonIcon.only}
      iconSrc={"/icons/icon.png"}
      onClick={() => console.log("clicked")}
    >
      Button CTA
    </Button>
  ),
};
