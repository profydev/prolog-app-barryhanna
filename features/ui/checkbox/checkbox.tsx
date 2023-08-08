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
    content: " ";
    content: ${(props) => {
      switch (props.state) {
        case CheckboxState.checked:
          return "url(/icons/checkbox-tick.png)";
        case CheckboxState.indeterminate:
          return "url(/icons/minus.png)";
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
