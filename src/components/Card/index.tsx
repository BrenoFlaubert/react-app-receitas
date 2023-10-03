import { Link } from "react-router-dom";
import { CardContainer } from "./styles";
import { IReceita } from "../../types/IReceita";

const Card = ({id, name, imgUrl, description, assessment, owner}: IReceita) => {
  return (
    <CardContainer>
      <Link to={`receita/${id}`}>
          <div className="card">
            <img className="img" src={imgUrl} alt="" />
            <div className="description">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <p className="h3">{name}</p>
                <p className="h3">Nota {assessment} / 5</p>
              </div>
              <p className="p">Property: {owner?.ownerName}</p>
              <p className="p">{description}</p>
            </div>
          </div>
      </Link>
    </CardContainer>
  );
};

export default Card;
