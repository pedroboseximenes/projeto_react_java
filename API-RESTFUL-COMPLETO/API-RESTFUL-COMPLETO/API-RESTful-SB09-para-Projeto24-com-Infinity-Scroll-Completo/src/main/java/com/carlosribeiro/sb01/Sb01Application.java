package com.carlosribeiro.sb01;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Item_carrinho;
import com.carlosribeiro.sb01.model.Passagem;
import com.carlosribeiro.sb01.model.Voo;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import com.carlosribeiro.sb01.repository.Item_CarrinhoRepository;
import com.carlosribeiro.sb01.repository.VooRepository;
import com.carlosribeiro.sb01.repository.PassagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class Sb01Application implements CommandLineRunner {

	@Autowired
	private PassagemRepository passagemRepository;

	@Autowired
	private CarrinhoRepository carrinhoRepository;

	@Autowired
	private Item_CarrinhoRepository item_carrinhoRepository;

	@Autowired
	private VooRepository vooRepository;

	public static void main(String[] args) {
		SpringApplication.run(Sb01Application.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		Voo curitiba_Gol = new Voo("Curitiba","Rio De Janeiro","GOL", LocalDate.of(2024,6,28));
		vooRepository.save(curitiba_Gol);
		Voo manaus_Azul = new Voo("Manaus","Rio De Janeiro","Azul", LocalDate.of(2023,12,25));
		vooRepository.save(manaus_Azul);
		Voo jalapao_Latam = new Voo("Jalapão","São Paulo","LATAM", LocalDate.of(2025,1,8));
		vooRepository.save(jalapao_Latam);



		Passagem passagem = new Passagem(
				curitiba_Gol,
				"IDA",
				"assets/images/curitiba_img.jpg",
				"30-B",
				LocalDate.now(),
				BigDecimal.valueOf(5000.99)


		);
		passagemRepository.save(passagem);

		Passagem passagem2 = new Passagem(
				manaus_Azul,
				"IDA",
				"assets/images/manaus_img.jpg",
				"30-B",
				LocalDate.now(),
				BigDecimal.valueOf(5000.99)


		);
		passagemRepository.save(passagem2);

		Passagem passagem3 = new Passagem(
				jalapao_Latam,
				"IDA",
				"assets/images/jalapao_img.jpg",
				"30-B",
				LocalDate.now(),
				BigDecimal.valueOf(5000.99)


		);
		passagemRepository.save(passagem3);


		Passagem passagem4 = new Passagem(
				manaus_Azul,
				"IDA",
				"assets/images/manaus_img.jpg",
				"30-B",
				LocalDate.now(),
				BigDecimal.valueOf(5000.99)


		);
		passagemRepository.save(passagem4);

		Carrinho carrinho = new Carrinho(
				LocalDate.now()
		);
		carrinhoRepository.save(carrinho);
		Item_carrinho item1 = new Item_carrinho(
				3,
				carrinho,
				passagem
		);
		item_carrinhoRepository.save(item1);

		Item_carrinho item2 = new Item_carrinho(
				5,
				carrinho,
				passagem2
		);
		item_carrinhoRepository.save(item2);




	}
}
