import styled from "styled-components";
import { colors } from '../../colors'

export const HeaderContainer = styled.header`
  background-color: ${colors.primaryColor};
  padding: 1em;
  border-radius: 0 0 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderNavigation = styled.nav`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 6em;
    list-style: none;
    a {
      text-decoration: none;
      font-weight: 500;
      font-size: medium;
      color: white;
    }
    a:focus {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
    }
  }
`