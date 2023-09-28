import { styled } from "styled-components";

export const MinhasReceitasContainer = styled.div`
  display: flex;
  padding: 4em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  
  .receitasContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 64px;
  }
  .navReceitas {
    width: 100em;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2em;
  }
`