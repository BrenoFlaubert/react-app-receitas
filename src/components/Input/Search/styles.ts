import { styled } from "styled-components";
import { colors } from "../../../colors";

export const InputStyled = styled.input`
  min-width: 50%;
  height: 4em;
  border-radius: 8px;
  padding: 0 1rem;
  transition: .3s ease;
  line-height: 28px;
  border: 1px solid transparent;
  outline: none;
  background-color: #f3f3f4;
  color: black;

  &:focus, &:hover {
    outline: none;
    border-color: ${colors.primaryColor};
    background-color: ${colors.textWhite};
    box-shadow: 0 0 0 4px ${colors.primaryColor};
  }

`