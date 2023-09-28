import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNavigation } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <ul>
          <li>
            <Link to={`minhas-receitas`}>Minhas receitas</Link>
          </li>
          <li>
            <Link to={`explorar`}>Explorar</Link>
          </li>
          {/* <li>
            <Link to={`favoritas`}>Favoritas</Link>
          </li> */}
        </ul>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;