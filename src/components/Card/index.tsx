import { CardContainer } from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <div className="card">
        <img className="img" src="src/images/food-1.jpg" alt="" />
        <div className="description">
          <p className="h3">Refeição Natural Proteíca</p>
          <p className="p">Ideal para Atletas</p>
          <p className="span">550 avaliações</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
