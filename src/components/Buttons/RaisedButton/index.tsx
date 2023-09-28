import { RaisedStyledButton } from "./styles"

interface IRaisedButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
};

const RaisedButton = ({children, ...rest}: IRaisedButton) => {
  return (
    <RaisedStyledButton {...rest}>{children}</RaisedStyledButton>
  )
};

export default RaisedButton
