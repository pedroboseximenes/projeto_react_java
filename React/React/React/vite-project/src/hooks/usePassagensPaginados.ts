import { useQuery } from "@tanstack/react-query";
import Passagem from "../interfaces/passagem";
import { URL_PASSAGENS } from "../utils/constants";
import useApi from "./useApis";

interface QueryString {
  pagina: number;
  tamanho: number;
  origem: string;
}

// const pessoa1 = {nome: "Joao", salario: 5000};
// const pessoa2 = {nome: "Lucia", salario: 3000};
// const pessoa3 = {...pessoa1, secretaria: pessoa2};  // spread

const usePassagensPaginados = (query: QueryString) => {
  const { recuperarPagina } = useApi<Passagem>(URL_PASSAGENS);

  return useQuery({
    queryKey: ["passagens", "paginacao", query],
    queryFn: () =>
      recuperarPagina({
        params: {
          // pagina: query.pagina,
          // tamanho: query.tamanho,
          // nome: query.nome
          ...query,
        },
      }),
    staleTime: 10_000,

  });
};
export default usePassagensPaginados;
