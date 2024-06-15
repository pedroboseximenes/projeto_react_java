import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/cards";
import usePassagensPaginadosPorEmpresaDoVoo from "../hooks/usePassagensPaginadosPorEmpresaDoVoo";
import InfiniteScroll from "react-infinite-scroll-component";
import Passagem from "../interfaces/passagem";


const CardsPassagemPorEmpresa = () => {
  const navigate = useNavigate();

const detalhesPassagem= (passagem: Passagem) => {
  navigate(`/detalhesPassagem`, {state: {data: passagem}})
}

  var { empresa } = useParams();
  const tamanho = 2;
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
  usePassagensPaginadosPorEmpresaDoVoo({
      tamanho,
      empresa,
    });
  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;

  const getQtdPassagens = data?.pages.reduce((total, page) => total + page.itens.length, 0) || 0;

  
  console.log("asdasdads");
  return (
    <>
       <InfiniteScroll
      dataLength={getQtdPassagens}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<h6>Carregando...</h6>}
      style={{overflow: "visible"}}>
      <h5>Passagens</h5>
      <div className="row">
        {data?.pages.map((page) =>
          page.itens.map((passagem) => (
            <div key={passagem.id} className="col-md-4">
              <Card
                id={passagem.id!}
                origem={passagem.voo.origem}
                destino={passagem.voo.destino}
                preco={passagem.preco.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                  useGrouping: true,
                })}
                imagem={passagem.imagem}
                footer={<input type="button" className="btn btn-primary w-100" value="Ver mais" onClick={()=> detalhesPassagem(passagem)} />}
              />
            </div>
          ))
        )}
      </div>
    </InfiniteScroll>
    </>
  );
};

export default CardsPassagemPorEmpresa;
