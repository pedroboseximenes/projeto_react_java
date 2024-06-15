package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeDestacadaException;
import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.exception.EntidadeTransienteException;
import com.carlosribeiro.sb01.model.Passagem;
import com.carlosribeiro.sb01.repository.PassagemRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class PassagemService {

    @Autowired
    private PassagemRepository passagemRepository;

    public List<Passagem> recuperarPassagens() {
        return passagemRepository.recuperarassagensComVoo();
    }

    public Passagem cadastrarPassagem(Passagem passagem) {
        if(passagem.getId() == null) {
            return passagemRepository.save(passagem);
        }
        else {
            throw new EntidadeDestacadaException("Tentando cadastrar um objeto destacado");
        }
    }


    @Transactional
    public Passagem alterarPassagem(Passagem passagem) {
        if (passagem.getId() != null) {
            passagemRepository.findById(passagem.getId())
                    .orElseThrow(
                            () -> new EntidadeNaoEncontradaException("Passagem não encontrada."));
            return passagemRepository.save(passagem);
        }
        else {
            throw new EntidadeTransienteException("Tentando alterar um objeto transiente.");
        }
    }


    public void removerPassagem(Long id) {
        passagemRepository.deleteById(id);
    }

    @GetMapping
    public Passagem recuperarPassagemPorId(Long id) {
        return passagemRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Passagem número " + id + " não encontrada."));
    }

    public List<Passagem> recuperarPassagemDeUmVooPorId(Long id) {
        return passagemRepository.findByVooId(id);
    }

    public List<Passagem> recuperarPassagensPorIdVoo(Long id) {
        return passagemRepository.findByVooId(id);
    }

    public List<Passagem> recuperarPassagensPorEmpresaDoVoo(String empresa) {
        return passagemRepository.findByVooEmpresa(empresa);
    }

    public Page<Passagem> recuperarPassagensPorEmpresaDoVooComPaginacao(String empresa, Pageable pageable) {
        if (!empresa.isEmpty())
            return passagemRepository.recuperarPassagensPorEmpresaDoVooComPaginacao(empresa, pageable);
        else
            return passagemRepository.recuperarPassagensComPaginacao(pageable);
    }

    public Page<Passagem> recuperarPassagensPaginados(String origem, Pageable pageable) {
        return passagemRepository.recuperarPassagensPaginados(origem, pageable);
    }
}
