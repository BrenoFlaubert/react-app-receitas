import { styled } from "styled-components";
import Modal from 'react-modal';
import { colors } from "../../colors";

export const MinhasReceitasContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4em;
  flex-wrap: nowrap;
  
  .receitasContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8em;
  }
  .navContainer {
    width: 90%;
    margin-bottom: 2em;
  }
  .navReceitas {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
  }
`;
export const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 90%;
  max-height: 90%;
  padding: 70px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h2 {
    font-weight: bold;
  }
`;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const FormButton = styled.button`
  padding: 0.8em 1.7em;
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

  &::before, &::after {
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: ${colors.primaryColor};
  transition: 1s ease;
  }

  &::before {
  top: -1em;
  left: -1em;
  }

  &::after {
  left: calc(100% + 1em);
  top: calc(100% + 1em);
  }
  &:hover::before, &:hover::after {
  height: 410px;
  width: 410px;
  }

  &:hover {
  color: ${colors.textWhite};
  }

  &:active {
  filter: brightness(.8);
  }
`;
export const FormInput = styled.input`
  position: relative;
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  

  
  &:focus, &:hover {
    outline: none;
    border-color: ${colors.primaryColor};
    background-color: ${colors.textWhite};
    box-shadow: 0 0 0 1px ${colors.primaryColor};
  }
`;
export const CustomModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
