import Voo from "./voo";

interface Passagem {
    id?: number;
    imagem: string;
    tipo: string;
    assento: string;
    data_compra: Date;
    voo: Voo;
    preco: number;
}
export default Passagem;