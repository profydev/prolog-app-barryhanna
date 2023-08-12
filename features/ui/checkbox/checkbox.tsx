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

  + label {
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

    :focus {
      background: crimson;
      border-color: red;
      outline: 4px solid ${color("primary", 300)};
    }

    :hover {
      border: 1px solid ${color("primary", 400)};
    }

    background: ${color("primary", 50)};
    color: ${color("primary", 600)};
    height: ${(props) =>
      props.cbSize === CheckboxSize.small ? "16px" : "20px"};
    width: ${(props) =>
      props.cbSize === CheckboxSize.small ? "16px" : "20px"};
    border: 1px solid ${color("gray", 300)};
    border-radius: 4px;
    cursor: pointer;
  }

  :disabled ~ label {
    content: ${(props) => {
      switch (props.state) {
        case CheckboxState.checked:
          return "url(/icons/check-disabled.png)";
        case CheckboxState.indeterminate:
          return "url(/icons/minus-disabled.png)";
        default:
          return " ";
      }
    }};
    background: ${color("gray", 100)};
    border: 1px solid ${color("gray", 200)};
  }

  :disabled ~ p {
    color: ${color("gray", 300)};
  }
`;

const CheckboxContainer = styled.div<{ cbSize: CheckboxSize }>`
  position: relative;
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
  disabled?: boolean;
};

const Checkbox = ({
  cbSize = CheckboxSize.small,
  state = CheckboxState.unchecked,
  label,
  disabled = false,
}: CheckboxProps) => {
  const id = crypto.randomUUID();

  if (label) {
    const id = crypto.randomUUID();
    return (
      <CheckboxContainer cbSize={cbSize}>
        <StyledCheckbox
          cbSize={cbSize}
          state={state}
          id={id}
          checked={state === "checked" ? true : false}
          disabled={disabled}
        />
        <label htmlFor={id}></label>
        <p>{label}</p>
      </CheckboxContainer>
    );
  }

  return (
    <CheckboxContainer cbSize={cbSize}>
      <StyledCheckbox
        cbSize={cbSize}
        state={state}
        checked={state === "checked" ? true : false}
        id={id}
        disabled={disabled}
      />
      <label htmlFor={id}></label>
    </CheckboxContainer>
  );
};

export { Checkbox };
