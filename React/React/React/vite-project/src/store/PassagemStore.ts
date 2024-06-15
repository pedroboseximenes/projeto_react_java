import { create } from "zustand";
import Passagem from "../interfaces/passagem";

interface PassagemStore {
    pagina: number;
    origem: string;
    passagemSelecionada: Passagem;
    tamanho: number;

    setPagina: (pagina: number) => void;
    setOrigem: (origem
: string) => void;
    setPassagemSelecionada: (passagemSelecionada: Passagem) => void;
}

const usePassagemStore = create<PassagemStore>((set) => ({
    pagina: 0,
    origem: "",
    passagemSelecionada: {} as Passagem,
    tamanho: 5,

    setPagina: (pagina: number) => set(() => ({pagina: pagina})),
    setOrigem: (origem
: string) => set(() => ({origem
: origem})),
    setPassagemSelecionada: (passagemSelecionada: Passagem) => set(() => ({passagemSelecionada: passagemSelecionada}))
}));
export default usePassagemStore;