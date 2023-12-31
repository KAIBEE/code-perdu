import styled from "styled-components";
import { KeyboardEvent, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Reset } from "@components/styled/ResetButton";

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  font-size: Roboto;
  border-radius: 4px;
  height: 5.25dvh;
  outline: 0;
  font-size: 1em;
  color: white;
  padding: 8px 16px;
  background: transparent;
  transition: border 0.2s;
  border-color: #d2d2d2;

  &:focus {
    border-color: #d0bcff;
    border-width: 2px;
  }

  &::placeholder {
    color: transparent;
  }

  &.form__error {
    color: #f2b8b5;
    border-color: #f2b8b5;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 16px;
    cursor: text;
    top: 1.75dvh;
    left: 16px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: 3dvh;
  fill: #d2d2d2;
  color: #d2d2d2;
  height: 10dvh;

  &:focus-within {
    fill: #d0bcff;
    color: #d0bcff;
  }
`;

const Label = styled.label`
  &,
  .form__field:focus ~ .form__label {
    position: absolute;
    top: -2dvh;
    display: block;
    font-size: Roboto;
    transition: 0.3s;
    font-size: 12px;
  }

  &.form__error {
    color: #f2b8b5;
  }
`;

const Error = styled.span`
  color: #f2b8b5;
  font-size: 12px;
`;

export const CustomLabelInput = ({
  inputProps,
  error,
  placeholder,
  id,
  resetValue,
}: {
  inputProps: UseFormRegisterReturn<string> & {
    onKeyDown?: (e: KeyboardEvent) => void;
  };
  error?: ReactNode;
  placeholder?: string;
  id: string;
  resetValue?: () => void;
}): ReactNode => {
  return (
    <>
      <InputContainer className={"form__group"}>
        <Input
          {...inputProps}
          onKeyDown={inputProps.onKeyDown ? inputProps.onKeyDown : undefined}
          id={id}
          className={`form__field${error ? " form__error" : ""}`}
          placeholder={placeholder}
        />
        <Label
          htmlFor={id}
          className={`form__label${error ? " form__error" : ""}`}
        >
          {placeholder}
        </Label>
        <Reset
          onClick={resetValue}
          aria-label="reset"
          className={error ? "form__error" : ""}
        />
        <Error>{error}</Error>
      </InputContainer>
    </>
  );
};
