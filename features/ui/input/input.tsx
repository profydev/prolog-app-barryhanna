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
    background: ${color("gray", 50)};
    border: 1px solid ${color("gray", 300)};
    color: ${color("gray", 500)};
  }
`;

const StyledInputWithIcon = styled(StyledInput)<{ icon: string }>`
  padding-left: 40px;
  position: relative;
  background: url(${(props) => props.icon}) no-repeat;
  background-position: 13px center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: fit-content;

  label {
    color: ${color("gray", 700)};
    ${textFont("sm", "medium")};
  }
`;

const Input = ({
  placeholder,
  disabled,
  label,
  icon,
}: {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  icon?: string;
}) => {
  if (label) {
    return (
      <InputContainer>
        <label>{label}</label>
        <StyledInput placeholder={placeholder} disabled={disabled} />
      </InputContainer>
    );
  }

  if (icon) {
    return (
      <StyledInputWithIcon
        icon={icon}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  }

  return <StyledInput placeholder={placeholder} disabled={disabled} />;
};

export { Input };
