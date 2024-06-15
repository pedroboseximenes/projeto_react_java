import { useMutation, useQueryClient } from "@tanstack/react-query";
import Passagem from "../interfaces/passagem";
import useApi from "./useApis";
import { URL_PASSAGENS } from "../utils/constants";

const useCadastrarPassagem = () => {
  const { cadastrar } = useApi<Passagem>(URL_PASSAGENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (passagem: Passagem) => cadastrar(passagem),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["passagens"],
      });
    },
  });
};

export default useCadastrarPassagem;
