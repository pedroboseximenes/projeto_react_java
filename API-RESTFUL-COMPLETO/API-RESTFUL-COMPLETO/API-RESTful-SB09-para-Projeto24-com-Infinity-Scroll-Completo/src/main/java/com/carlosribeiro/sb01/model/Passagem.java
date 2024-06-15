package com.carlosribeiro.sb01.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Passagem {
    //passagem
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O 'Assento' deve ser informado.")
    private String assento;

    @NotNull(message = "O 'Preço' deve ser informado.")
    @DecimalMin(inclusive = true, value="0.1", message = "O 'Preço' deve ser maior ou igual a 0,1.")
    private BigDecimal preco;

    @NotNull(message = "A 'Data de compra' deve ser informada.")
    @Column(name = "data_compra")
    private LocalDate data_compra;

    @ManyToOne
    private Voo voo;

    @NotEmpty(message = "O 'Tipo' deve ser informado.")
    private String tipo;

    @NotEmpty(message = "A 'imagem' deve ser informado.")
    private String imagem;


    @JsonIgnore
    @OneToMany(mappedBy = "passagem", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Item_carrinho> itens_carrinho;

    public Passagem(Voo voo,
                    String tipo,
                    String imagem,
                    String assento,
                    LocalDate data_compra,
                    BigDecimal preco) {
        this.voo = voo;
        this.assento=assento;
        this.preco = preco;
        this.data_compra=data_compra;
        this.tipo = tipo;
        this.imagem = imagem;
    }
}
