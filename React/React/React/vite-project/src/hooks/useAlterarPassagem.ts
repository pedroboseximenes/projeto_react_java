import { useMutation, useQueryClient } from "@tanstack/react-query";
import Passagem from "../interfaces/passagem";
import { URL_PASSAGENS } from "../utils/constants";
import useApi from "./useApis";

const useAlterarPassagem = () => {
  const { alterar } = useApi<Passagem>(URL_PASSAGENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (passagem: Passagem) => alterar(passagem),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["passagens"],
      });
    },
  });
};

export default useAlterarPassagem;
