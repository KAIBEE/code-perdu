import styled from "styled-components";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  & {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d2d2d2;
    outline: 0;
    font-size: 16px;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
`;

const Label = styled.label`
  &,
  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #9b9b9b;
  }

  .form__field:focus ~ .form__label {
    color: #009788;
  }

  .form_field:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #009788;
  }
`;

export const CustomLabelInput = ({
  inputProps,
  error,
  placeholder,
  id,
  resetValue,
}: {
  inputProps: UseFormRegisterReturn<string>;
  error?: ReactNode;
  placeholder?: string;
  id: string;
  resetValue?: () => void;
}): ReactNode => {
  return (
    <>
      {error}
      <InputContainer className={"form__group"}>
        <Input
          {...inputProps}
          className={"form__field"}
          placeholder={placeholder}
        />
        <Label htmlFor={id} className="form__label">
          {placeholder}
        </Label>
        <img
          src="./src/assets/Icon.png"
          alt="Icon"
          width={24}
          height={24}
          style={{
            position: "absolute",
            right: "5px",
          }}
          onClick={resetValue}
        />
      </InputContainer>
    </>
  );
};
