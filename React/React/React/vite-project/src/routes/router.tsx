import { createBrowserRouter } from 'react-router-dom';
import CarrinhoPage from '../pages/Carrinho';
import CadastroPassagemPage from '../pages/CadastrarPassagemPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import HelpPage from '../pages/HelpPage';
import SobreEmpresa from '../pages/SobreEmpresa';

import Layout from './Layout';
import ListaDePassagensPage from '../pages/ListaDePassagensPage';
import ErrorPage from '../pages/ErrorPage';
import CardsPassagemPorEmpresa from '../pages/CardsPassagemPorEmpresa';
import DetalhesPassagem from '../pages/DetalhesPassagem';




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage />,
            children :[
                {
                    path: ":empresa?",
                    element:<CardsPassagemPorEmpresa/>
                }
            ] 
        
        },
            { path: "listar-passagem", element: <ListaDePassagensPage /> },
            { path: "login", element: <LoginPage /> },            
            { path: "cadastrar-passagem", element: <CadastroPassagemPage /> },            
            { path: "carrinho", element: <CarrinhoPage /> },  
            { path: "help", element: <HelpPage /> },  
            { path: "sobre", element: <SobreEmpresa /> }, 
            {path: "detalhesPassagem", element: <DetalhesPassagem/>} 
            
               
            
        ]
    }
]);
export default router;