package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Passagem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PassagemRepository extends JpaRepository<Passagem, Long> {

    @Query("select p from Passagem p left outer join fetch p.voo order by p.id")
    List<Passagem> recuperarassagensComVoo();



    List<Passagem> findByVooId(Long id);

    @Query("select p from Passagem p left join fetch p.voo c where c.empresa = :empresa order by p.id desc")
    List<Passagem> findByVooEmpresa(String empresa);

    @Query(
            value = "select p from Passagem p left join fetch p.voo c where c.origem like %:origem%",
            countQuery = "select count(p) from Passagem p left join  p.voo c where c.origem like %:origem%"
    )
    Page<Passagem> recuperarPassagensPaginados(String origem, Pageable pageable);

    @Query(
            value = "select p from Passagem p left join fetch p.voo c where c.empresa=:empresa order by p.assento asc",
            countQuery = "select count(p) from Passagem p left join p.voo c where c.empresa=:empresa"
    )
    Page<Passagem> recuperarPassagensPorEmpresaDoVooComPaginacao(String empresa, Pageable pageable);

    @Query(
            // Muito importante efetuar a busca de produtos com join fetch para categoria para
            // evitar que para cada produto seja recuperada a respectiva categoria.
            value = "select p from Passagem p left join fetch p.voo order by p.assento asc",
            countQuery = "select count(p) from Passagem p"
    )
    Page<Passagem> recuperarPassagensComPaginacao(Pageable pageable);
}
