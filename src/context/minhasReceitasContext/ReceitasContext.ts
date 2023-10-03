import { createContext } from "react";
import { IReceita } from "../../types/IReceita";

interface ReceitasContextType {
  receitas: IReceita[];
  adicionarReceita: (receita: IReceita) => void;
}

const ReceitasContext = createContext<ReceitasContextType | undefined>(undefined);

export default ReceitasContext;