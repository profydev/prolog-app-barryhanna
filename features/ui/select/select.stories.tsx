import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectState } from "./select";

const meta: Meta<typeof Select> = {
  component: Select,
  args: {
    children: (
      <>
        <option value="" disabled selected hidden>
          Select team member
        </option>
        <option value="Phoenix Baker">Phoenix Baker</option>
        <option value="Olivia Rhye">Olivia Rhye</option>
        <option value="Lana Steiner">Lana Steiner</option>
        <option value="Demi Wilkinson">Demi Wilkinson</option>
        <option value="Candice Wu">Candice Wu</option>
        <option value="Natali Craig">Natali Craig</option>
        <option value="Drew Cano">Drew Cano</option>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Empty: Story = {
  args: {
    children: (
      <option value="" disabled selected hidden>
        Select team member
      </option>
    ),
    state: SelectState.empty,
  },
};

export const Filled: Story = {
  args: {
    state: SelectState.filled,
  },
};

export const Disabled: Story = {
  args: {
    state: SelectState.disabled,
    disabled: true,
  },
};
