package com.carlosribeiro.sb01.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Item_carrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="quantidade")
    private int quantidade;

    @ManyToOne
    private Carrinho carrinho;
    @ManyToOne
    private Passagem passagem;


    public Item_carrinho(int quantidade, Carrinho carrinho, Passagem passagem){
        this.quantidade = quantidade;
        this.carrinho = carrinho;
        this.passagem = passagem;
    }
}
