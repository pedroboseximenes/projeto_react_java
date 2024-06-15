package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Passagem;
import com.carlosribeiro.sb01.model.Voo;
import com.carlosribeiro.sb01.service.CarrinhoService;
import com.carlosribeiro.sb01.service.VooService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("carrinho")   // http://localhost:8080/carrinho
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;
    //remover Carrinho
    @DeleteMapping("{idCarrinho}")
    public Carrinho removerCarrinho(@PathVariable("idCarrinho") Long idCarrinho) {
        Carrinho carrinho = carrinhoService.recuperarCarrinhoPorId(idCarrinho);
        carrinhoService.removerCarrinho(idCarrinho);
        return carrinho;
    }
}
