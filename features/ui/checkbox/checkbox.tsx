import { color, textFont } from "@styles/theme";
import styled from "styled-components";

export enum CheckboxSize {
  small = "small",
  medium = "medium",
}

export enum CheckboxState {
  unchecked = "unchecked",
  indeterminate = "indeterminate",
  checked = "checked",
}

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })<{
  state: CheckboxState;
  cbSize: CheckboxSize;
}>`
  appearance: none;

  &::before {
    display: grid;
    place-items: center;
    white-space: pre;
    line-height: 1;
    content: " ";
    content: ${(props) => {
      switch (props.state) {
        case CheckboxState.checked:
          return props.cbSize === CheckboxSize.small
            ? "url(/icons/check-small.png)"
            : "url(/icons/check-medium.png)";
        case CheckboxState.indeterminate:
          return props.cbSize === CheckboxSize.small
            ? "url(/icons/minus-small.png)"
            : "url(/icons/minus-medium.png)";
        default:
          return " ";
      }
    }};

    background: ${color("primary", 50)};
    color: ${color("primary", 600)};
    height: ${(props) =>
      props.cbSize === CheckboxSize.small ? "16px" : "20px"};
    width: ${(props) =>
      props.cbSize === CheckboxSize.small ? "16px" : "20px"};
    border: 1px solid ${color("gray", 300)};
    border-radius: 4px;
    cursor: pointer;

    &::focus::before {
      outline: 4px solid ${color("primary", 300)};
    }
  }
`;

const CheckboxContainer = styled.div<{ cbSize: CheckboxSize }>`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.cbSize === CheckboxSize.small ? "8px" : "12px")};

  ${(props) => {
    const size = props.cbSize === CheckboxSize.small ? "sm" : "md";
    return textFont(size, "medium");
  }};
`;

type CheckboxProps = {
  state: CheckboxState;
  cbSize: CheckboxSize;
  label?: string;
};

const Checkbox = ({
  cbSize = CheckboxSize.small,
  state = CheckboxState.unchecked,
  label,
}: CheckboxProps) => {
  if (label) {
    const id = crypto.randomUUID();
    return (
      <CheckboxContainer cbSize={cbSize}>
        <StyledCheckbox
          cbSize={cbSize}
          state={state}
          id={id}
          checked={state === "checked" ? true : false}
        />
        <label htmlFor={id}>{label}</label>
      </CheckboxContainer>
    );
  }

  return (
    <StyledCheckbox
      cbSize={cbSize}
      state={state}
      checked={state === "checked" ? true : false}
    />
  );
};

export { Checkbox };
