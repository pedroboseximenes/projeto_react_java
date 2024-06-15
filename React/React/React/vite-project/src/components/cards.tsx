import { ReactNode } from "react";

interface Props {
    id: number;
    //imagem: string;
    origem: string;
    destino: string;
    preco: string;
    imagem: string;
    footer: ReactNode;
}

const Card = ({id, origem, destino, preco,imagem, footer}: Props) => {
  return (
    <>
     <div className="card border-0 mb-5">
      <img src={imagem} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{destino}</h5>
        <p className="card-text">Saindo de {origem}</p>
        <p className="card-text fw-bold" style={{color: "rgb(220, 53, 69)"}}>R$ {preco}</p>        
      </div>
      <div className="card-footer border-0 p-0">{footer}</div>
    </div>
          
          </>
  );
};

export default Card;
