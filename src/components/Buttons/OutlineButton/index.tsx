import { OutlinedStyledButton } from "./styles";

interface IOutlinedButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
}

const OutlinedButton = ({children, ...rest} : IOutlinedButton) => {
  return (
    <OutlinedStyledButton {...rest} >{children}</OutlinedStyledButton>
  )
}

export default OutlinedButton;