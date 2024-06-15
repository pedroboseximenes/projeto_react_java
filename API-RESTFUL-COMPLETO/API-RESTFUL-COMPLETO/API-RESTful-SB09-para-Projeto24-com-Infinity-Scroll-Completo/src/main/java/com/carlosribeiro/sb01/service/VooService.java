package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.model.Voo;
import com.carlosribeiro.sb01.repository.VooRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VooService {

    @Autowired
    private VooRepository vooRepository;

    public List<Voo> recuperarVoos() {
        return vooRepository.findAll(Sort.by("id"));
    }

    public Voo recuperarVooPorId(Long id) {
        return vooRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Voo número " + id + " não encontrado."));
    }
}
