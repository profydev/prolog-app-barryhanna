import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { color } from "../../../styles/theme";
import { Button } from "./button";
import Image from "next/image";

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

export enum ButtonIcon {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

export const StyledButton = styled(Button)<{
  color: ButtonColor;
  size: ButtonSize;
}>`
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

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  display: flex;
  gap: 8px;
  align-items: center;
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
      case ButtonColor.primary:
        return css`
          background: ${color("primary", 600)};
          color: white;
          border: 1px solid transparent;

          :hover {
            background: ${color("primary", 700)};
          }

          :focus {
            outline: 4px solid ${color("primary", 400)};
          }

          :disabled {
            background: ${color("primary", 200)};
          }
        `;
      case ButtonColor.secondary:
        return css`
          background: ${color("primary", 50)};
          color: ${color("primary", 700)};
          border: 1px solid transparent;

          :hover {
            background: ${color("primary", 100)};
          }

          :focus {
            outline: 4px solid ${color("primary", 100)};
          }

          :disabled {
            background: ${color("primary", 25)};
            color: ${color("primary", 300)};
          }
        `;
      case ButtonColor.gray:
        return css`
          background: white;
          color: ${color("gray", 700)};
          border: 1px solid ${color("gray", 300)};

          :hover {
            background: ${color("gray", 50)};
          }

          :focus {
            outline: 4px solid ${color("gray", 200)};
          }

          :disabled {
            color: ${color("gray", 300)};
            border: 1px solid ${color("gray", 200)};
          }
        `;

      case ButtonColor.empty:
        return css`
          background: white;
          color: ${color("primary", 700)};
          border: 1px solid transparent;

          :hover {
            background: ${color("primary", 50)};
          }

          :disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.emptyGray:
        return css`
          background: white;
          color: ${color("gray", 500)};
          border: 1px solid transparent;

          :hover {
            color: ${color("gray", 600)};
            background: ${color("gray", 50)};
          }

          :disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.error:
        return css`
          background: ${color("error", 600)};
          color: white;
          border: 1px solid transparent;

          :hover {
            background: ${color("error", 700)};
          }

          :focus {
            outline: 4px solid ${color("error", 100)};
          }

          :disabled {
            background: ${color("error", 200)};
          }
        `;
      default:
        return css`
          background: ${color("primary", 600)};
          color: white;
          border: 1px solid transparent;

          :hover {
            background: ${color("primary", 700)};
          }

          :focus {
            outline: 4px solid ${color("primary", 400)};
          }
        `;
    }
  }};
`;

type ButtonProps = {
  size: ButtonSize;
  color: ButtonColor;
  icon?: ButtonIcon;
  iconSrc?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UIButton({
  children,
  icon,
  iconSrc,
  color,
  size = ButtonSize.medium,
  ...delegated
}: ButtonProps) {
  if (icon === ButtonIcon.leading && iconSrc !== undefined) {
    return (
      <StyledButton color={color} size={size} {...delegated}>
        <Image src={iconSrc} alt="" height={20} width={20} />
        {children}
      </StyledButton>
    );
  }

  if (icon === ButtonIcon.trailing && iconSrc !== undefined) {
    return (
      <StyledButton color={color} size={size} {...delegated}>
        {children}
        <Image src={iconSrc} alt="" height={20} width={20} />
      </StyledButton>
    );
  }

  if (icon === ButtonIcon.only && iconSrc !== undefined) {
    return (
      <StyledButton color={color} size={size} {...delegated}>
        <Image src={iconSrc} alt="Button" height={20} width={20} />
      </StyledButton>
    );
  }
  return (
    <StyledButton size={size} color={color} {...delegated}>
      {children}
    </StyledButton>
  );
}
