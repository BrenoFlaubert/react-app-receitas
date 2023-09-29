import { Link } from "react-router-dom";
import { CardContainer } from "./styles";
import { IReceita } from "../../types/IReceita";

const Card = ({id, name, imgUrl, description, assessment, owner}: IReceita) => {
  return (
    <Link to={`minhas-receitas/${id}`}>
      <CardContainer>
        <div className="card">
          <img className="img" src={imgUrl} alt="" />
          <div className="description">
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <p className="h3">{name}</p>
              <p className="span">Nota {assessment} / 5</p>
            </div>
            <p className="p">Property: {owner.ownerName}</p>
            <p className="p">{description}</p>
          </div>
        </div>
      </CardContainer>
    </Link>
  );
};

export default Card;
