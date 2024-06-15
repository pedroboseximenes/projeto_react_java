import Carrinho from "./carrinho";
import Passagem from "./passagem";

interface Item_Carrinho {
    id?: number;
    quantidade: number;
    passagem: Passagem;
    carrinho: Carrinho
}
export default Item_Carrinho;