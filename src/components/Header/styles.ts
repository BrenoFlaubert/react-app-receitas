import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #C70039;
  padding: 20px;
  border-radius: 0 0 16px 16px;
`
export const HeaderNavigation = styled.nav`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;
  ul{
    display: flex;
    gap: 12em;
    list-style: none;
    a {
      text-decoration: none;
      font-weight: 500;
      font-size: large;
      color: white;
    }
    a:focus {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
    }
  }
`