package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.Passagem;
import com.carlosribeiro.sb01.service.PassagemService;
import com.carlosribeiro.sb01.service.VooService;
import com.carlosribeiro.sb01.util.ResultadoPaginado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("passagens")   // http://localhost:8080/passagens
public class PassagemController {

    @Autowired
    private PassagemService passagemService;

    @Autowired
    private VooService vooService;

    @GetMapping
    public List<Passagem> recuperarPassagens() {
        return passagemService.recuperarPassagens();
    }

    @PostMapping
    public Passagem cadastrarPassagem(@RequestBody Passagem passagem) {
        System.out.println("Servidor recebeu a requisição.");
        vooService.recuperarVooPorId(passagem.getVoo().getId());
        return passagemService.cadastrarPassagem(passagem);
    }

    @PutMapping
    public Passagem alterarPassagem(@RequestBody Passagem passagem) {
        return passagemService.alterarPassagem(passagem);
    }

    // http://localhost:8080/passagens/1
    @DeleteMapping("{idPassagem}")
    public Passagem removerPassagem(@PathVariable("idPassagem") Long id) {
        Passagem passagem = passagemService.recuperarPassagemPorId(id);
        passagemService.removerPassagem(id);
        return passagem;
    }

    // http://localhost:8080/passagens/1
    @GetMapping("{idPassagem}")
    public Passagem recuperarPassagemPorId(@PathVariable("idPassagem") Long id) {
        return passagemService.recuperarPassagemPorId(id);
    }

    // http://localhost:8080/passagens/voo/1/gol
    @GetMapping("voo/{idVoo}/{empresa}")
    public List<Passagem> recuperarPassagensDeUmVooPorId(@PathVariable("idVoo") Long id,
                                                         @PathVariable("empresa") String empresa) {
        return passagemService.recuperarPassagemDeUmVooPorId(id);
    }

    // http://localhost:8080/passagens/voo?idVoo=1&empresa=gol
    @GetMapping("voo")
    public List<Passagem> recuperarPassagensPorIdVoo(@RequestParam("idVoo") Long id,
                                                     @RequestParam("empresa") String empresa) {
        return passagemService.recuperarPassagensPorIdVoo(id);
    }

    @GetMapping("voo/{empresa}")         // http://localhost:8080/passagens/voo/gol
    public List<Passagem> recuperarPassagensPorEmpresaDoVoo(@PathVariable("empresa") String empresa) {
        return passagemService.recuperarPassagensPorEmpresaDoVoo(empresa);
    }

    // http://localhost:8080/passagens/voo/paginacao?empresa=gol&pagina=0
    @GetMapping("voo/paginacao")
    public ResultadoPaginado<Passagem> recuperarPassagensPorEmpresaDoVooComPaginacao(
            @RequestParam(name="empresa", defaultValue = "") String empresa,
            @RequestParam(name="pagina", defaultValue = "0") int pagina,
            @RequestParam(name="tamanho", defaultValue = "3") int tamanho
    ) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        Page<Passagem> paginaDeProduto = passagemService
                .recuperarPassagensPorEmpresaDoVooComPaginacao(empresa, pageable);
        ResultadoPaginado<Passagem> resultadoPaginado = new ResultadoPaginado<>(
                paginaDeProduto.getTotalElements(),
                paginaDeProduto.getTotalPages(),
                paginaDeProduto.getNumber(),
                paginaDeProduto.getContent());
        return resultadoPaginado;
    }

    @GetMapping("paginacao")   // http://localhost:8080/passagens/paginacao?pagina=0&tamanho=5
    public ResultadoPaginado<Passagem> recuperarPassagensPaginados(
            @RequestParam(name="pagina", defaultValue = "0") int pagina,
            @RequestParam(name="tamanho", defaultValue = "3") int tamanho,
            @RequestParam(name= "origem", defaultValue = "") String origem
    ) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        Page<Passagem> paginaDePassagem = passagemService.recuperarPassagensPaginados(origem, pageable);
        return new ResultadoPaginado<Passagem>(
                paginaDePassagem.getTotalElements(),
                paginaDePassagem.getTotalPages(),
                paginaDePassagem.getNumber(),
                paginaDePassagem.getContent());
    }
}
