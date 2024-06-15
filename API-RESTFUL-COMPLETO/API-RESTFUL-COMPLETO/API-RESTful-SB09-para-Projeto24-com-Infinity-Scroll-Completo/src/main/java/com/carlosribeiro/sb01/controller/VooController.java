package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.Voo;
import com.carlosribeiro.sb01.service.VooService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("voos")   // http://localhost:8080/voos
public class VooController {

    @Autowired
    private VooService vooService;

    @GetMapping
    public List<Voo> recuperarVoos() {
        return vooService.recuperarVoos();
    }
}
