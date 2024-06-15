import { useQuery } from "@tanstack/react-query";
import Passagem from "../interfaces/passagem";
import axios from "axios";

const usePassagens = () => useQuery({
  queryKey: ['passagens'],
  queryFn: () => axios
    .get<Passagem[]>("http://localhost:8080/passagens")
    .then(res => res.data),
  staleTime: 10_000  
});
export default usePassagens;