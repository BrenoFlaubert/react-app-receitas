import { createBrowserRouter } from "react-router-dom";
import MinhasReceitas from "../pages/MinhasReceitas";
import Explorar from "../pages/Explorar";
import OutletContent from "../components/OutletContent";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletContent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/minhas-receitas",
        element: <MinhasReceitas />,
      },
      {
        path: "/explorar",
        element: <Explorar />,
      },
    ]
  },
]);