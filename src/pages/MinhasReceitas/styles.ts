import { styled } from "styled-components";

export const MinhasReceitasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px auto;
  .receitasContainer {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  .navReceitas {
    margin-left: 5em;
    align-self: flex-start;
    display: flex;
    gap: 120px;
    justify-content: space-between;
  }
`