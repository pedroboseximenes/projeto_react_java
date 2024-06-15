import usePassagensPaginados from "../hooks/usePassagensPaginados";
import usePassagemStore from "../store/PassagemStore";

interface Props {
    pagina: number;
    totalDePaginas: number;
    tratarPaginaSelecionada: (pagina: number) => void;
  }
  
  const Paginacao = () => {
    const pagina = usePassagemStore(s => s.pagina);
    const tamanho = usePassagemStore(s => s.tamanho);
    const origem = usePassagemStore(s => s.origem);

    const setPagina = usePassagemStore(s => s.setPagina);

    const tratarPaginaSelecionada = (page: number) => setPagina(page);

    const {data: passagensPaginados,
      isLoading,
      error,} = usePassagensPaginados({ pagina, tamanho, origem });


      if (isLoading) return <h6>Carregando...</h6>;

      if (error) throw error;
    
      const totalDePaginas = passagensPaginados!.totalDePaginas;
    
      const arrayDePaginas = [];
  
    if (totalDePaginas < 2) return null;
    for (let i = 0; i < totalDePaginas; i++) {
      arrayDePaginas.push(
        <li key={i} className={pagina === i ? "page-item active" : "page-item"} aria-current="page">
          <a onClick={() => tratarPaginaSelecionada(i)} className="page-link">
            {i + 1}
          </a>
        </li>
      );
    }
    return (
      <nav aria-label="Paginacao" >
        <ul className="pagination">
          <li  className={pagina === 0 ? "page-item disabled" : "page-item"}>
            <a onClick={() => tratarPaginaSelecionada(pagina - 1)} className="page-link">Anterior</a>
          </li>
          {arrayDePaginas}
          <li className={pagina === totalDePaginas - 1 ? "page-item disabled" : "page-item"}>
            <a onClick={() => tratarPaginaSelecionada(pagina + 1)} className="page-link">
              Próxima
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Paginacao;
  