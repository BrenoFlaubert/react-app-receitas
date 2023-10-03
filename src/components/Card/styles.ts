import { styled } from "styled-components";

export const CardContainer = styled.div`
  a {
    text-decoration: none;
  }
  .card {
    width: 452px;
    height: 565px;
    background: white;
    border-radius: 30px;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    transition: 0.2s ease-in-out;
  }

  .img {
    width: 100%;
    height: 80%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: flex;
    align-items: top;
    justify-content: right;
  }

  .description-container {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }

  .description-container .h3 {
    font-size: 15px;
    font-weight: 600;
    color: black;
  }

  .description .p {
    color: #999999;
    font-size: 13px;
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
  }

  .information-container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    .icons-container {
      display: flex;
      justify-content: space-between;
      gap: 27px;
      margin-top: 10px;
    }
  }
`