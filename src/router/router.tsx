import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Explorar } from "../pages/Explorar/Explorar";
import { MinhasReceitas } from "../pages/MinhasReceitas/MinhasReceitas";
import Receita from "../pages/MinhasReceitas/[Receita]";
import { Favoritas } from "../pages/Favoritas/Favoritas";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/></>,
    errorElement: <h1>Content not found</h1>,
    children: [
      {
        path: "minhas-receitas",
        element: <MinhasReceitas/>,
        children: [
          {
            path: "receitas",
            element: <Receita/>,
          }
        ]
      },
      {
        path: "minhas-receitas/receita/:id",
        element: <Receita/>,
      },
      {
        path: "/explorar",
        element: <Explorar/>,
      },
      {
        path: "favoritas",
        element: <Favoritas/>
      },
    ],
  },
]);