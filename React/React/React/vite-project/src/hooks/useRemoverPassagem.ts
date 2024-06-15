import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_PASSAGENS } from "../utils/constants";
import Passagem from "../interfaces/passagem";
import useApi from "./useApis";

const useRemoverPassagem = () => {
  const { removerPorId } = useApi<Passagem>(URL_PASSAGENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => removerPorId(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["passagens"],
      });
    },
  });
};

export default useRemoverPassagem;
