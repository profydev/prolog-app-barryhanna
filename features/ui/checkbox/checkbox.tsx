import { color } from "@styles/theme";
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
  position: absolute;

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
            ? "url(/icons/check-small.svg"
            : "url(/icons/check-medium.svg";
        case CheckboxState.indeterminate:
          return props.cbSize === CheckboxSize.small
            ? "url(/icons/minus-small.svg"
            : "url(/icons/minus-medium.svg";
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

type CheckboxProps = {
  state: CheckboxState;
  cbSize: CheckboxSize;
};

const Checkbox = ({
  cbSize = CheckboxSize.small,
  state = CheckboxState.unchecked,
}: CheckboxProps) => {
  return (
    <StyledCheckbox
      cbSize={cbSize}
      state={state}
      checked={state === "checked" ? true : false}
    />
  );
};

export { Checkbox };
