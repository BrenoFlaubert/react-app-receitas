import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNavigation } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <ul>
          <li>
            <Link to={``}>Home</Link>
          </li>
          <li>
            <Link to={`minhas-receitas`}>Minhas receitas</Link>
          </li>
          <li>
            <Link to={`explorar`}>Explorar</Link>
          </li>
        </ul>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;