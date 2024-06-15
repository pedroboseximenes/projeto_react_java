package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    public Carrinho recuperarCarrinhoPorId(Long id) {
        return carrinhoRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Carrinho número " + id + " não encontrado."));
    }
    public void removerCarrinho(Long id) {
        carrinhoRepository.deleteById(id);
    }

}
