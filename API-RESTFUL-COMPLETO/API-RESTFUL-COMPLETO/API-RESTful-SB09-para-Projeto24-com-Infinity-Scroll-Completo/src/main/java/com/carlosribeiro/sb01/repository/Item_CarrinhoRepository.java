package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Item_carrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface Item_CarrinhoRepository extends JpaRepository<Item_carrinho, Long> {

@Query(
        value="select i from Item_carrinho i left join fetch i.carrinho c where c.id=:idCarrinho"
)
public List<Item_carrinho> recuperarItens_carrinho(Long idCarrinho);
}
