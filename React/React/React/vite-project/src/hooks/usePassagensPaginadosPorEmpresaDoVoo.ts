import { useInfiniteQuery } from "@tanstack/react-query";
import Passagem from "../interfaces/passagem";
import useApiPassagem from "./useApiPassagem";
interface QueryString {
  tamanho: number;
  empresa?: string;
}

// const pessoa1 = {nome: "Joao", salario: 5000};
// const pessoa2 = {nome: "Lucia", salario: 3000};
// const pessoa3 = {...pessoa1, secretaria: pessoa2};  // spread

const usePassagensPaginadosPorEmpresaDoVoo = (query: QueryString) => {
  const { recuperarPassagensPaginadoPorEmpresaDoVoo } = useApiPassagem();

  return useInfiniteQuery<ResultadoPaginado<Passagem>>({
    queryKey: ["passagens", "voo", "paginacao", query],
    queryFn: ({ pageParam = 0 }) =>
    recuperarPassagensPaginadoPorEmpresaDoVoo({
        params: {
          pagina: pageParam,
          tamanho: query.tamanho,
          empresa: query.empresa
        },
      }),
      staleTime: 10_000,
      keepPreviousData: true,
    
    getNextPageParam: (lastPage, allPages) => {
      
      return lastPage.paginaCorrente < lastPage.totalDePaginas -1 ? 
        lastPage.paginaCorrente + 1 : undefined;
    }
  });
};
export default usePassagensPaginadosPorEmpresaDoVoo;
