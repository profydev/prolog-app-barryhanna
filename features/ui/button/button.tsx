import styled, { css } from "styled-components";
import { color } from "../../../styles/theme";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

export const Button = styled.button<{ size?: ButtonSize; color?: ButtonColor }>`
  cursor: pointer;
  color: ${color("primary", 600)};

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  border-radius: 8px;

  padding: ${(props) => {
    switch (props.size) {
      case ButtonSize.small:
        return "8px 14px";
      case ButtonSize.medium:
        return "10px 16px";
      case ButtonSize.large:
        return "10px 18px";
      case ButtonSize.xlarge:
        return "12px 20px";
      default:
        return "10px 16px";
    }
  }};

  ${(props) => {
    switch (props.color) {
      default:
        return css`
          background: ${color("primary", 600)};
          color: white;
        `;
    }
  }};
`;
