import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

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
