import styled from "styled-components";

interface ButtonProps {
  selected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 140px;
  height: 140px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#63BFBC" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  position: relative;
  font-family: Source Serif Pro;
  font-weight: 600;
  & > svg {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
