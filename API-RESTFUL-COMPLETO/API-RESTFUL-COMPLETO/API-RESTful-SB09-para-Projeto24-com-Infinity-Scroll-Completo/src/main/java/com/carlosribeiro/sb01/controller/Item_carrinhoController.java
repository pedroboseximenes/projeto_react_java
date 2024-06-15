package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Item_carrinho;
import com.carlosribeiro.sb01.model.Passagem;
import com.carlosribeiro.sb01.service.CarrinhoService;
import com.carlosribeiro.sb01.service.Item_CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("item_carrinho")   // http://localhost:8080/item_carrinho
public class Item_carrinhoController {

    @Autowired
    private Item_CarrinhoService item_carrinhoService;

    //Recuperar Itens_carrinho
    @GetMapping("{idCarrinho}")
    List<Item_carrinho> recuperarItens_carrinho(@PathVariable("idCarrinho") Long idCarrinho){
        return item_carrinhoService.recuperarItens_carrinho(idCarrinho);
    }
    //AlterarQuantidade
    @PutMapping
    public Item_carrinho alterarItem_carrinho(@RequestBody Item_carrinho item_carrinho) {
        return item_carrinhoService.alterarItem(item_carrinho);
    }
    //DeletarItem
    @DeleteMapping("{idItem}")
    public Item_carrinho removerItemDoCarrinho(@PathVariable("idItem") Long idItem) {
        Item_carrinho item_carrinho = item_carrinhoService.recuperarItemCarrinho(idItem);
        item_carrinhoService.removerItemDoCarrinho(idItem);
        return item_carrinho;
    }

}
