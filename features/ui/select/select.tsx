import { color, textFont } from "@styles/theme";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

const StyledSelect = styled.select<{ state: SelectState }>`
  appearance: none;
  font-family: inherit;
  color: ${(props) => {
    switch (props.state) {
      case SelectState.empty:
        return css`
          ${color("gray", 500)}
        `;
      default:
        return css`
          ${color("gray", 900)}
        `;
    }
  }};
  ${textFont("md", "regular")};
  border: 1px solid ${color("gray", 300)};
  border-radius: 8px;
  padding: 10px 40px 14px 10px;

  :focus {
    border: 1px solid ${color("primary", 300)};
    outline: 4px solid ${color("primary", 100)};
  }

  :disabled {
    background: ${color("gray", 50)};
    color: ${color("gray", 500)};
    border: 1px solid ${color("gray", 300)};
  }
`;

const SelectContainer = styled.div<{ state: SelectState }>`
  position: relative;
  width: fit-content;

  .arrow {
    position: absolute;
    display: block;
    content: url(/icons/chevron.svg);
    height: 20px;
    width: 20px;
    right: -2px;
    top: 30px;
    transform: translate(-50%, -50%);
    ${(props) =>
      props.state === SelectState.open &&
      css`
        right: -5px;
        top: 26px;
        transform-origin: 0 0;
        transform: rotate(180deg);
      `};
  }
`;

export const enum SelectState {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
  open = "open",
}

type SelectProps = {
  children: ReactNode;
  state: SelectState;
  disabled: boolean;
};

export const Select = ({ children, state, disabled }: SelectProps) => {
  return (
    <SelectContainer state={state}>
      <StyledSelect state={state} disabled={disabled}>
        {children}
      </StyledSelect>
      <span className="arrow"></span>
    </SelectContainer>
  );
};
