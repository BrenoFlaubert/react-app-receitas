import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Explorar } from './pages/Explorar/Explorar.tsx';
import { MinhasReceitas } from './pages/MinhasReceitas/MinhasReceitas.tsx';
import { Favoritas } from './pages/Favoritas/Favoritas.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Content not found</h1>,
    children: [
      {
        path: "/explorar",
        element: <Explorar/>,
      },
      {
        path: "minhas-receitas",
        element: <MinhasReceitas/>,
      },
      {
        path: "/minhas-receitas/:id",
        element: <h1>CRUD PARA RECEITA</h1>
      },
      {
        path: "favoritas",
        element: <Favoritas/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
