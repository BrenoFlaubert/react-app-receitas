import { OnlyIconButtonStyle } from "./sytles";


interface IOnlyIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
}

const OnlyIconButton = ({children, ...rest} : IOnlyIconButton) => {
  return (
    <OnlyIconButtonStyle {...rest} >{children}</OnlyIconButtonStyle>
  )
}

export default OnlyIconButton;