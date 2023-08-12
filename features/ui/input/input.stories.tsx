import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputState } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: "olivia@untitledui.com",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Empty: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
  },
};

export const WithIcon: Story = {
  args: {
    icon: "/icons/mail-icon.png",
  },
};

export const WithHint: Story = {
  args: {
    hint: "This is hint text to help the user.",
  },
};

export const WithHintAndIcon: Story = {
  args: {
    icon: "/icons/mail-icon.png",
    hint: "This is hint text to help the user.",
  },
};

export const WithHintAndIconAndLabel: Story = {
  args: {
    icon: "/icons/mail-icon.png",
    hint: "This is hint text to help the user.",
    label: "Label",
  },
};

export const WithError: Story = {
  args: {
    state: InputState.error,
  },
};

export const WithErrorWithHint: Story = {
  args: {
    state: InputState.error,
    hint: "This is an error message.",
  },
};

export const WithErrorWithHintAndLabel: Story = {
  args: {
    state: InputState.error,
    hint: "This is an error message.",
    label: "Email",
  },
};

export const WithErrorWithHintAndLabelAndIcon: Story = {
  args: {
    state: InputState.error,
    hint: "This is an error message.",
    label: "Email",
    icon: "/icons/mail-icon.png",
  },
};
