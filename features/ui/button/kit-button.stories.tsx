import type { Meta, StoryObj } from "@storybook/react";
import {
  UIButton as Button,
  ButtonColor,
  ButtonSize,
  ButtonIcon,
} from "./kit-button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
  render: () => (
    <Button color={ButtonColor.primary} size={ButtonSize.small}>
      {" "}
      Button CTA
    </Button>
  ),
};

export const Medium: Story = {
  render: () => (
    <Button color={ButtonColor.primary} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const Large: Story = {
  render: () => (
    <Button color={ButtonColor.primary} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const XLarge: Story = {
  render: () => (
    <Button color={ButtonColor.primary} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const Primary: Story = {
  render: () => (
    <Button color={ButtonColor.primary} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const PrimaryDisabled: Story = {
  render: () => (
    <Button color={ButtonColor.primary} size={ButtonSize.medium} disabled>
      Button CTA
    </Button>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Button color={ButtonColor.secondary} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const SecondaryDisabled: Story = {
  render: () => (
    <Button color={ButtonColor.secondary} size={ButtonSize.medium} disabled>
      Button CTA
    </Button>
  ),
};

export const Gray: Story = {
  render: () => (
    <Button color={ButtonColor.gray} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const GrayDisabled: Story = {
  render: () => (
    <Button color={ButtonColor.gray} size={ButtonSize.medium} disabled>
      Button CTA
    </Button>
  ),
};

export const Empty: Story = {
  render: () => (
    <Button color={ButtonColor.empty} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const EmptyDisabled: Story = {
  render: () => (
    <Button color={ButtonColor.empty} size={ButtonSize.medium} disabled>
      Button CTA
    </Button>
  ),
};

export const EmptyGray: Story = {
  render: () => (
    <Button color={ButtonColor.emptyGray} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const EmptyGrayDisabled: Story = {
  render: () => (
    <Button color={ButtonColor.emptyGray} size={ButtonSize.medium} disabled>
      Button CTA
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button color={ButtonColor.error} size={ButtonSize.medium}>
      Button CTA
    </Button>
  ),
};

export const ErrorDisabled: Story = {
  render: () => (
    <Button color={ButtonColor.error} size={ButtonSize.medium} disabled>
      Button CTA
    </Button>
  ),
};

export const IconLeading: Story = {
  render: () => (
    <Button
      color={ButtonColor.primary}
      icon={ButtonIcon.leading}
      iconSrc={"/icons/icon.png"}
      size={ButtonSize.medium}
    >
      Button CTA
    </Button>
  ),
};

export const IconLeadingDisabled: Story = {
  render: () => (
    <Button
      color={ButtonColor.primary}
      icon={ButtonIcon.leading}
      iconSrc={"/icons/icon.png"}
      size={ButtonSize.medium}
      disabled
    >
      Button CTA
    </Button>
  ),
};

export const IconTrailing: Story = {
  render: () => (
    <Button
      color={ButtonColor.primary}
      icon={ButtonIcon.trailing}
      iconSrc={"/icons/icon.png"}
      size={ButtonSize.medium}
    >
      Button CTA
    </Button>
  ),
};

export const IconTrailingDisabled: Story = {
  render: () => (
    <Button
      color={ButtonColor.primary}
      icon={ButtonIcon.trailing}
      iconSrc={"/icons/icon.png"}
      size={ButtonSize.medium}
      disabled
    >
      Button CTA
    </Button>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <Button
      color={ButtonColor.primary}
      icon={ButtonIcon.only}
      iconSrc={"/icons/icon.png"}
      size={ButtonSize.medium}
    >
      Button CTA
    </Button>
  ),
};

export const IconOnlyDisabled: Story = {
  render: () => (
    <Button
      color={ButtonColor.primary}
      icon={ButtonIcon.only}
      iconSrc={"/icons/icon.png"}
      size={ButtonSize.medium}
      disabled
    >
      Button CTA
    </Button>
  ),
};
