import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import DadosGame from "./components/games/Dados/DadosGame";
import GatoGame from "./components/games/Gato/GatoGame";
import MemoramaGame from "./components/games/Memorama/MemoramaGame";
import AdivinaNumeroGame from "./components/games/AdivinaNumero/AdivinaNumeroGame";
import RockPaperScissorsGame from "./components/games/RockPaperScissors/RockPaperScissorsGame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "dados", element: <DadosGame /> },
      { path: "gato", element: <GatoGame /> },
      { path: "memorama", element: <MemoramaGame /> },
      { path: "adivina-numero", element: <AdivinaNumeroGame /> },
      { path: "piedra-papel-tijera", element: <RockPaperScissorsGame /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
