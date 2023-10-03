import { styled } from "styled-components";
import { colors } from "../../../colors";

export const OnlyIconButtonStyle = styled.button`
  padding: 0.4em 1.4em;
  background-color: transparent;
  border-radius: .5em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: .5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  color: ${colors.primaryColor};
`