import OutlinedButton from "../../components/Buttons/OutlineButton"
import Card from "../../components/Card"
import Search from "../../components/Input/Search"
import { MinhasReceitasContainer } from "./styles"

export const MinhasReceitas = () => {
  return (
    <MinhasReceitasContainer>
      <nav className="navReceitas">
        <Search type="search" onChange={(e: any) => {console.log(e.target.value)}} placeholder="Pesquisar receita..." />
        <OutlinedButton onClick={() => {}}>NOVA RECEITA</OutlinedButton>
      </nav>
      <div className="receitasContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </MinhasReceitasContainer>
  )
}
