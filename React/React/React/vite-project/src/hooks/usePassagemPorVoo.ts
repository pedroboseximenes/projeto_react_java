import { useQuery } from "@tanstack/react-query";
import useApiPassagem from "./useApiPassagem";

const usePassagemPorVoo = (empresa?: string) => {
  const { recuperarPassagemPorEmpresaDoVoo } = useApiPassagem();

  return useQuery({
    queryKey: empresa ? ["passagens", "voo", empresa] : ["voo"],
    queryFn: () => recuperarPassagemPorEmpresaDoVoo(empresa),
    staleTime: 7 * 24 * 60 * 60 * 1000,
  });
};
export default usePassagemPorVoo;