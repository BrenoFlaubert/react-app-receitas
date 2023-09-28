import Card from "../../components/Card"
import { MinhasReceitasContainer } from "./styles"

export const MinhasReceitas = () => {
  return (
    <MinhasReceitasContainer>
      <nav className="navReceitas">
        <input type="search" onChange={(e: any) => {console.log(e.target.value)}} />
        <input type="button" value="CADASTRAR" />
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
