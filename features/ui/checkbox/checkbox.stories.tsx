import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxSize, CheckboxState } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const SmallUnchecked: Story = {
  args: {
    state: CheckboxState.unchecked,
    cbSize: CheckboxSize.small,
  },
};

export const SmallChecked: Story = {
  args: {
    state: CheckboxState.checked,
    cbSize: CheckboxSize.small,
  },
};

export const SmallIndeterminate: Story = {
  args: {
    state: CheckboxState.indeterminate,
    cbSize: CheckboxSize.small,
  },
};

export const MediumUnchecked: Story = {
  args: {
    state: CheckboxState.unchecked,
    cbSize: CheckboxSize.medium,
  },
};

export const MediumChecked: Story = {
  args: {
    state: CheckboxState.checked,
    cbSize: CheckboxSize.medium,
  },
};

export const MediumIndeterminate: Story = {
  args: {
    state: CheckboxState.indeterminate,
    cbSize: CheckboxSize.medium,
  },
};

export const SmallUncheckedLabel: Story = {
  args: {
    state: CheckboxState.unchecked,
    cbSize: CheckboxSize.small,
    label: "Label",
  },
};

export const MediumCheckedLabel: Story = {
  args: {
    state: CheckboxState.checked,
    cbSize: CheckboxSize.medium,
    label: "Label",
  },
};

export const MediumCheckedLabelDisabled: Story = {
  args: {
    state: CheckboxState.checked,
    cbSize: CheckboxSize.medium,
    label: "Label",
    disabled: true,
  },
};

export const MediumUncheckedLabelDisabled: Story = {
  args: {
    state: CheckboxState.unchecked,
    cbSize: CheckboxSize.medium,
    label: "Label",
    disabled: true,
  },
};

export const MediumInderterminateLabelDisabled: Story = {
  args: {
    state: CheckboxState.indeterminate,
    cbSize: CheckboxSize.medium,
    label: "Label",
    disabled: true,
  },
};
