package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Passagem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {


}
