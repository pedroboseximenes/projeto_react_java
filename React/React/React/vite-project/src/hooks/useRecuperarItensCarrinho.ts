import { useQuery } from "@tanstack/react-query";
import Item_carrinho from "../interfaces/item_carrinho";
import useApiPassagem from "./useApiPassagem";



const useRecuperarItensCarrinho = () =>{
    const { recuperarItensCarrinho } = useApiPassagem();
    return useQuery({
        queryKey: ["item_carrinho"],
        queryFn: () =>
        recuperarItensCarrinho(1),
        staleTime: 10_000,
    
      });

    }
export default useRecuperarItensCarrinho;