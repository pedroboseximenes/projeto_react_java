import { useQuery } from "@tanstack/react-query";
import Voo from "../interfaces/voo";
import useApi  from "./useApis";
import { URL_VOOS } from "../utils/constants";
const useVoos = () => {
  const { recuperar } = useApi<Voo>(URL_VOOS);

  return useQuery({
    queryKey: ["voos"],
    queryFn: () => recuperar(),
    staleTime: 7 * 24 * 60 * 60 * 1000,
  });
};
export default useVoos;