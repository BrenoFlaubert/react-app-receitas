import React from "react";
import { InterfaceReceita } from "../../types/IReceita";
import api from "../../data/services/api/api";
import Card from "../../components/Card";
import Search from "../../components/Input/Search";
import OutlinedButton from "../../components/Buttons/OutlineButton";
import { FilterContainer } from "../../components/FilterContainer/styles";


const MinhasReceitas = () => {
  const [receitas, setReceitas] = React.useState<InterfaceReceita[]>([]);
  
  React.useEffect(() => {
    api.get('/api/receitas').then((response) => {
      setReceitas(response.data)
    });
  }, []);

  return (
    <div>
      <FilterContainer>
        <Search placeholder="Pequisar receita..." onChange={() => {}}/>
        <OutlinedButton onClick={() => {}}>Nova Receita</OutlinedButton>
      </FilterContainer>
      {receitas.map((receita) => {
        return (
          <Card 
            id={receita.id} 
            nome={receita.nome} 
            descricao={receita.descricao} 
            modoDePreparo={receita.modoDePreparo} 
            ingredientes={receita.ingredientes} 
            autor={receita.autor} 
            criadoEm={receita.criadoEm}
          />
        )
      })}
    </div>
  )
}

export default MinhasReceitas;