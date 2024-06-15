import { useLocation, useNavigate } from "react-router-dom";
import Passagem from "../interfaces/passagem";
import 'bootstrap/dist/css/bootstrap.css';
import useRemoverPassagem from "../hooks/useRemoverPassagem";
import { useState } from "react";
import usePassagemStore from "../store/PassagemStore";

const DetalhesPassagem = () => {
    const [isDisabled, setDisabled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    var passagem = location.state.data;

    const tratarRemocaoPassagem = (id: number) => {
        removerPassagem(id);
        setDisabled(true);


      };

      const setPassagemSelecionada = usePassagemStore(s => s.setPassagemSelecionada);

      const tratarPassagemSelecionada = (passagem: Passagem) => {
        setPassagemSelecionada(passagem);
        navigate('/listar-passagem');
      }

      const {
        data: passagemRemovida,
        mutate: removerPassagem,
        isLoading: removendo,
        error: erroRemocao,
      } = useRemoverPassagem();

      if (erroRemocao) throw erroRemocao;

      const handleVoltar = () => {
        navigate(-1);
        };
    return (
        <>
      <h1>Detalhes Passagem</h1>
      {passagemRemovida && <p className="m-3 text-danger">A passagem foi removida com sucesso!</p>}
      <div className="row">
  <div className="col-lg-4">
    <img src={passagem.imagem} alt="Imagem da Passagem"  style={{ width: '100%', maxHeight: '250px', objectFit: 'cover' }} />
  </div>

 
  <div className="col-lg-4">
    <h5>Id: {passagem.id}</h5>
    <p>Assento: {passagem.assento}</p>
    <p>Tipo: {passagem.tipo}</p>
    <p>Empresa: {passagem.voo.empresa}</p>
    <p>Origem: {passagem.voo.origem}</p>
    <p>Destino: {passagem.voo.destino}</p>
    <p>Preco: {passagem.preco.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      useGrouping: true,
    })}</p>
  </div>
</div>
    
      <button type="button" className="btn btn-lg btn-danger m-4" disabled={isDisabled} onClick={() => tratarRemocaoPassagem(passagem.id!)}>Deletar</button>
      <button className="btn btn-lg btn-info" disabled={isDisabled} onClick={() => tratarPassagemSelecionada(passagem)}>Alterar</button>
      

      <button onClick={handleVoltar} className="mt-5 btn btn-sm btn-success d-block">Voltar</button>
      </>
    )

  }
  
  export default DetalhesPassagem