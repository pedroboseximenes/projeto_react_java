import dayjs from "dayjs";
import Passagem from "../interfaces/passagem";
import usePassagemStore from "../store/PassagemStore";
import usePassagensPaginados from "../hooks/usePassagensPaginados";
import useRemoverPassagem from "../hooks/useRemoverPassagem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";



const TabelasDePassagens = () => {
  const pagina = usePassagemStore(s => s.pagina);
  const tamanho = usePassagemStore(s => s.tamanho);
  const origem = usePassagemStore(s => s.origem);

  const setPagina = usePassagemStore(s => s.setPagina);
  const setPassagemSelecionada = usePassagemStore(s => s.setPassagemSelecionada);


  const tratarRemocaoPassagem = (id: number) => {
    removerPassagem(id);
    setPagina(0);
  };
  const tratarPassagemSelecionada = (passagem: Passagem) => setPassagemSelecionada(passagem);

  
  const {
    data: passagemRemovida,
    mutate: removerPassagem,
    isLoading: removendo,
    error: erroRemocao,
  } = useRemoverPassagem();
  
  const {data: passagensPaginados,
    isLoading,
    error,} = usePassagensPaginados({ pagina, tamanho, origem });


    if (isLoading) return <h6>Carregando...</h6>;

    if (error) throw error;
    if (erroRemocao) throw erroRemocao;

    const passagens = passagensPaginados!.itens;
  return (
    <div className="container">
    <table className="table table-responsive table-bordered table-sm table-info">
      <thead className="thead thead-dark">
        <tr>
            <th className="align-middle text-center" scope="col">Id</th>
            <th className="align-middle text-center">Imagem</th>
            <th className="align-middle text-center" scope="col">Origem</th>
            <th className="align-middle text-center" scope="col"></th>
            <th className="align-middle text-center" scope="col">Destino</th>
            <th className="align-middle text-center" scope="col">Data</th>
            <th className="align-middle text-center" scope="col">Tipo</th>
            <th className="align-middle text-center" scope="col">Preço</th>
            <th className="align-middle text-center" scope="col"> <FontAwesomeIcon icon={faTrash} /></th>
        </tr>
      </thead>
      <tbody >
        {passagens.map((passagem) => (
          <tr key={passagem.id}>
            <td width="5%"  className="align-middle text-center">
            <a className="link-underline" onClick={() => tratarPassagemSelecionada(passagem)}>
                {passagem.id}
              </a>{" "}</td>
              <td width="10%" className="align-middle text-center">
              <img src={passagem.imagem} alt={passagem.voo.origem} style={{ width: "250px" }} />{" "}
            </td>
            <td width="10%" className="align-middle text-center">{passagem.voo.origem}</td>
            <td width="10%" className="align-middle text-center">{"——>"} </td>
            <td width="30%" className="align-middle">{passagem.voo.destino}</td>
            <td width="15%" className="align-middle text-center">
               {dayjs(passagem.voo.data_viagem).format("DD/MM/YYYY")}
            </td>
            <td width="10%" className="align-middle text-end pe-3" >{passagem.tipo}</td>
            <td width="10%" className="align-middle text-end pe-3">
              {passagem.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true
              })}
            </td>
            <td width="10%" className="align-middle text-center">
              <button onClick={() => tratarRemocaoPassagem(passagem.id!)} className="btn btn-danger btn-sm">Remover</button>
            </td>
          </tr>
        ))}

      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}></td>
          <td className="align-middle text-center fw-bold">Total...</td>
          <td colSpan={2} className="align-middle text-center fw-bold">
            R$ {" "}
            {passagens
              .reduce((total, passagem) => 1 * passagem.preco + total, 0)
              .toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
};

export default TabelasDePassagens;
