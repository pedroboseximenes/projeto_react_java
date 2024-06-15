package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.exception.EntidadeTransienteException;
import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Item_carrinho;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import com.carlosribeiro.sb01.repository.Item_CarrinhoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class Item_CarrinhoService {

    @Autowired
    private Item_CarrinhoRepository item_carrinhoRepository;

    public List<Item_carrinho> recuperarItens_carrinho(Long idCarrinho){
        return item_carrinhoRepository.recuperarItens_carrinho(idCarrinho);
    }

    @Transactional
    public Item_carrinho alterarItem(Item_carrinho item_carrinho){
        if (item_carrinho.getId() != null) {
            item_carrinhoRepository.findById(item_carrinho.getId())
                    .orElseThrow(
                            () -> new EntidadeNaoEncontradaException("Item não encontrado."));
            return item_carrinhoRepository.save(item_carrinho);
        }
        else {
            throw new EntidadeTransienteException("Tentando alterar um objeto transiente.");
        }
    }

    public Item_carrinho recuperarItemCarrinho(Long idItem) {
        return item_carrinhoRepository.findById(idItem)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Item número " + idItem + " não encontrado."));
    }
    public void removerItemDoCarrinho(Long idItem) {
        item_carrinhoRepository.deleteById(idItem);
    }

}
