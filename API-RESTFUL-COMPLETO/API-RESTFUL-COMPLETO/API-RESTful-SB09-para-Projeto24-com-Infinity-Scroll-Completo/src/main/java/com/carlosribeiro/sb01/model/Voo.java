package com.carlosribeiro.sb01.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(value = {"passagens"})
@Data
@NoArgsConstructor
@Entity
public class Voo {
    //VOO
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String destino;
    private String origem;
    private String empresa;
    private LocalDate data_viagem;

    @OneToMany(mappedBy = "voo")
    private List<Passagem> passagens;

    public Voo(String destino, String origem, String empresa, LocalDate data_viagem) {
       this.destino=destino;
       this.origem=origem;
       this.empresa=empresa;
       this.data_viagem=data_viagem;
        this.passagens = new ArrayList<Passagem>();

    }
}
