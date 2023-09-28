import { InputStyled } from "./styles";

const Search = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputStyled placeholder={props.placeholder} type="search"/>
  )
};
export default Search;