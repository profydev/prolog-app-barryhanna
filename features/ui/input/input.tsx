import { color, textFont } from "@styles/theme";
import styled, { css } from "styled-components";

const StyledInput = styled.input.attrs({ type: "text" })<{ state: InputState }>`
  border: 1px solid ${color("gray", 300)};
  ${textFont("md", "regular")};
  padding: 10px 14px;
  border-radius: 8px;
  color: ${color("gray", 900)};

  ${(props) =>
    props.state === InputState.error &&
    css`
      border: 1px solid ${color("error", 300)};
    `}

  + div {
    position: absolute;
    display: block;
    height: 13px;
    width: 13px;
    background: url("/icons/alert-circle.png");
    background-size: cover;
    top: 16px;
    right: 10px;
  }

  ::placeholder {
    color: ${color("gray", 500)};
  }

  :focus {
    border: 1px solid ${color("primary", 300)};
    outline: 3px solid ${color("primary", 100)};

    ${(props) =>
      props.state === InputState.error &&
      css`
        border: 1px solid ${color("error", 300)};
        outline: 3px solid ${color("error", 100)};
      `}
  }

  :disabled {
    background: ${color("gray", 50)};
    border: 1px solid ${color("gray", 300)};
    color: ${color("gray", 500)};
  }
`;

const StyledInputWithIcon = styled(StyledInput)<{
  icon: string;
  state: InputState;
}>`
  padding-left: 40px;
  position: relative;
  background: url(${(props) => props.icon}) no-repeat;
  background-position: 13px center;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: fit-content;
  margin-block: 0;

  label {
    color: ${color("gray", 700)};
    ${textFont("sm", "medium")};
  }

  p {
    margin-top: 0;
  }
`;

enum HintType {
  normal = "normal",
  error = "error",
}

export enum InputState {
  normal = "normal",
  error = "error",
}

const Hint = styled.p<{ type: HintType }>`
  ${textFont("sm", "regular")};
  ${(props) =>
    props.type === HintType.normal &&
    css`
      color: ${color("gray", 500)};
    `}
  ${(props) =>
    props.type === HintType.error &&
    css`
      color: ${color("error", 500)};
    `}
`;

const Error = styled.div``;

type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  icon?: string;
  hint?: string;
  state: InputState;
};

const Input = ({
  placeholder,
  disabled,
  label,
  icon,
  hint,
  state = InputState.normal,
}: InputProps) => {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      {icon ? (
        <InputContainer>
          <StyledInputWithIcon
            icon={icon}
            placeholder={placeholder}
            disabled={disabled}
            state={state}
          />
          {state === InputState.error && <Error />}
        </InputContainer>
      ) : (
        <InputContainer>
          <StyledInput
            placeholder={placeholder}
            disabled={disabled}
            state={state}
          />
          {state === InputState.error && <Error />}
        </InputContainer>
      )}
      {hint && (
        <Hint
          type={state === InputState.error ? HintType.error : HintType.normal}
        >
          {hint}
        </Hint>
      )}
    </InputContainer>
  );
};

export { Input };
