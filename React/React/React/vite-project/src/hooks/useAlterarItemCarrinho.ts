import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_ITEM } from "../utils/constants";
import useApi from "./useApis";
import Item_Carrinho from "../interfaces/item_carrinho";

const useAlterarItemCarrinho = () => {
  const { alterar } = useApi<Item_Carrinho>(URL_ITEM);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item_carrinho: Item_Carrinho) => alterar(item_carrinho),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["item_carrinho"],
      });
    },
  });
};

export default useAlterarItemCarrinho;
