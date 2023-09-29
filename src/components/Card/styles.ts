import { styled } from "styled-components";

export const CardContainer = styled.a`
  .card {
    width: 352px;
    height: 465px;
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

  .description {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }

  .description .h3 {
    font-family: 'Lucida Sans' sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: black;
  }

  .description .p {
    font-family: 'Lucida Sans' sans-serif;
    color: #999999;
    font-size: 13px;
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
  }

`