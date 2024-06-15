import { useRef } from "react";
import usePassagemStore from "../store/PassagemStore";

const Pesquisa = () => {
  const setOrigem = usePassagemStore(s=> s.setOrigem);
  const setPagina = usePassagemStore(s => s.setPagina);
  const origem = usePassagemStore(s => s.origem);

  const tratarNomePesquisado = (origem: string) => {
    setOrigem(origem);
    setPagina(0);
  };

  const nomeRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        tratarNomePesquisado(nomeRef.current!.value);
     }} 
     className="d-flex mb-3">
      <input defaultValue={origem} ref={nomeRef} type="text" className="form-control form-control-sm me-2" placeholder="Pesquisar..." />
      <button type="submit" className="btn btn-success btn-sm">Pesquisar</button>
    </form>
  );
};

export default Pesquisa;