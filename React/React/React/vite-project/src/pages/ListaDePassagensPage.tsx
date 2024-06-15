import { useState } from "react";
import TabelasDePassagens from "../components/TabelaDePassagens";
import usePassagensPaginados from "../hooks/usePassagensPaginados";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import useRemoverPassagem from "../hooks/useRemoverPassagem";
import CadastroDePassagemForm from "../components/cadastroPassagem";
import Passagem from "../interfaces/passagem";

const ListaDePassagensPage = () => {
  return (
    <>
    
    
    <div className="mb-4">
    <h5 className="m-3 text-center">Cadastro de passagens</h5>
        <hr className="mt-0" />
      </div>

      <CadastroDePassagemForm/>

      <div className="mb-4">
      <h5 className="m-3 text-center">Lista das passagens</h5>
        <hr className="mt-0" />
      </div>
      <Pesquisa/>
      <TabelasDePassagens />
      <Paginacao/>
    </>
  );
};
export default ListaDePassagensPage;
