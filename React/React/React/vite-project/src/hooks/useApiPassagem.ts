import CustomError from "../utils/customError";
import useAxios from "./useAxios";
import Passagem from "../interfaces/passagem";
import { URL_ITEM, URL_PASSAGENS } from "../utils/constants";
import { AxiosRequestConfig } from "axios";
import Item_carrinho from "../interfaces/item_carrinho";

const useApiPassagem = () => {

    const axiosInstance = useAxios();

    const recuperarPassagemPorEmpresaDoVoo = (empresa?: string) =>
        axiosInstance
            .get<Passagem[]>(URL_PASSAGENS + (empresa ? ("/voo/" + empresa) : ""))
            .then(res => res.data)
            .catch((error) => {
                if (error.response) {
                    // significa que o servidor respondeu, porém com erro
                    throw new CustomError(
                        error.response.data.message,
                        error.response.data.errorCode
                    )
                }
                else if (error.request) {
                    // significa que a requisição foi enviada mas o servidor não respondeu
                    throw error;
                }
                else {
                    // erro desconhecido
                    throw error;
                }
            })

        const recuperarPassagensPaginadoPorEmpresaDoVoo = (config: AxiosRequestConfig) =>
            axiosInstance
                .get<ResultadoPaginado<Passagem>>(URL_PASSAGENS + "/voo/paginacao", config)
                .then(res => res.data)
                .catch((error) => {
                    if (error.response) {
                        // significa que o servidor respondeu, porém com erro
                        throw new CustomError(
                            error.response.data.message,
                            error.response.data.errorCode
                        )
                    }
                    else if (error.request) {
                        // significa que a requisição foi enviada mas o servidor não respondeu
                        throw error;
                    }
                    else {
                        // erro desconhecido
                        throw error;
                    }
                })

                const recuperarItensCarrinho = (idCarrinho: number) =>
                axiosInstance
                    .get<Item_carrinho[]>(URL_ITEM +'/'+String(idCarrinho) )
                    .then(res => res.data)
                    .catch((error) => {
                        if (error.response) {
                            // significa que o servidor respondeu, porém com erro
                            throw new CustomError(
                                error.response.data.message,
                                error.response.data.errorCode
                            )
                        }
                        else if (error.request) {
                            // significa que a requisição foi enviada mas o servidor não respondeu
                            throw error;
                        }
                        else {
                            // erro desconhecido
                            throw error;
                        }
                    })
        

    return { recuperarPassagemPorEmpresaDoVoo,
        recuperarPassagensPaginadoPorEmpresaDoVoo,
        recuperarItensCarrinho };
}

export default useApiPassagem;
