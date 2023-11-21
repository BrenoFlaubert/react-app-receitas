import { Link } from "react-router-dom";
import { CardContainer } from "./styles";
import { InterfaceReceita } from "../../types/IReceita";

const Card = ({id, nome, imgUrl, descricao, autor, criadoEm}: InterfaceReceita) => {
  return (
    <CardContainer>
      <Link to={`receita/${id}`}>
          <div className="card">
            <img className="img" src={imgUrl} alt="" />
            <div className="description">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <p className="h3">{nome}</p>
                <p className="h3">Postado em: {criadoEm}</p>
              </div>
              <p className="p">Property: {autor}</p>
              <p className="p">{descricao}</p>
            </div>
          </div>
      </Link>
    </CardContainer>
  );
};

export default Card;
