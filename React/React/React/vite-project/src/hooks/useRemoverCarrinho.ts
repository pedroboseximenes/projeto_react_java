import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_CARRINHO, URL_ITEM } from "../utils/constants";
import useApi from "./useApis";
import Carrinho from "../interfaces/carrinho";

const useRemoverCarrinho = () => {
  const { removerPorId } = useApi<Carrinho>(URL_CARRINHO);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => removerPorId(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carrinho"],
      });
    },
  });
};

export default useRemoverCarrinho;
