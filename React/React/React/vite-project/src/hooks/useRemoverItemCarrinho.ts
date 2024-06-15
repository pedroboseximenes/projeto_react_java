import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_ITEM } from "../utils/constants";
import useApi from "./useApis";
import Item_carrinho from "../interfaces/item_carrinho";

const useRemoverItemCarrinho = () => {
  const { removerPorId } = useApi<Item_carrinho>(URL_ITEM);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => removerPorId(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["item_carrinho"],
      });
    },
  });
};

export default useRemoverItemCarrinho;
