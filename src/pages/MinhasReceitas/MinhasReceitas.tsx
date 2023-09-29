import React, { useState } from "react"
import OutlinedButton from "../../components/Buttons/OutlineButton"
import Card from "../../components/Card"
import Search from "../../components/Input/Search"
import { IReceita } from "../../types/IReceita"
import { MinhasReceitasContainer } from "./styles"

export const MinhasReceitas = () => {
  const [arrayDeReceitas, setArrayDeReceitas] = useState([]);
  const populator = () => {
    const newArrayDeReceitas = [];
    for (let i = 1; i <= 8; i++) {
      const receita = {
        id: i,
        name: `Receita ${i}`,
        imgUrl: `src/images/food-1.jpg`,
        description: `Descrição da Receita ${i}`,
        assessment: Math.floor(Math.random() * 5) + 1,
        owner: {
          id: i,
          name: `Proprietário ${i}`,
        },
      };
      newArrayDeReceitas.push(receita);
    }
    //@ts-ignore
    setArrayDeReceitas(newArrayDeReceitas);
  };

  React.useEffect(() => {
    populator();
  }, []);

  return (
    <MinhasReceitasContainer>
      <nav className="navReceitas">
        <Search
          type="search"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder="Pesquisar receita..."
        />
        <OutlinedButton onClick={() => {}}>NOVA RECEITA</OutlinedButton>
      </nav>
      <div className="receitasContainer">
        {arrayDeReceitas.map(({id, name, imgUrl, description, assessment, owner}: IReceita) => (
          <Card 
            name={name}
            imgUrl={imgUrl}
            description={description}
            assessment={assessment}
            owner={owner}
            id={id}
          />
        ))}
      </div>
    </MinhasReceitasContainer>
  );
};
