import styled from "styled-components";
import { color } from "../../../styles/theme";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export const Button = styled.button`
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
`;
