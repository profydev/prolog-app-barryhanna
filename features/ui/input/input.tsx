import { color, textFont } from "@styles/theme";
import styled from "styled-components";

const StyledInput = styled.input.attrs({ type: "text" })`
  border: 1px solid ${color("gray", 300)};
  ${textFont("md", "regular")};
  padding: 10px 14px;
  border-radius: 8px;
  color: ${color("gray", 900)};

  ::placeholder {
    color: ${color("gray", 500)};
  }

  :focus {
    border: 1px solid ${color("primary", 300)};
    outline: 3px solid ${color("primary", 100)};
  }

  :disabled {
    background: ${color("primary", 50)};
    border: 1px solid ${color("primary", 300)};
    color: ${color("primary", 500)};
  }
`;

const Input = ({
  placeholder,
  disabled,
}: {
  placeholder?: string;
  disabled?: boolean;
}) => {
  return <StyledInput placeholder={placeholder} disabled={disabled} />;
};

export { Input };
