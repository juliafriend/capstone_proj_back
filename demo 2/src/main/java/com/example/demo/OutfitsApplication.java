package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
@RestController
public class OutfitsApplication {
	@Autowired

	private OutfitsRepository outfitsRepository;

	public static void main(String[] args) {
		SpringApplication.run(OutfitsApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/pack").allowedOrigins("http://localhost:8080");
			}
		};
	}


	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/pack")
	public Iterable<Outfits> index() {
		return outfitsRepository.findAll();
	}
		


	@PostMapping("/pack")
	public Iterable<Outfits> create (@RequestBody Outfits outfitsData) {
		outfitsRepository.save(outfitsData);
		return outfitsRepository.findAll();
	}

	@DeleteMapping("/pack/{id}")
	public Iterable<Outfits> delete(@PathVariable int id) {
		outfitsRepository.deleteById(id);
		return outfitsRepository.findAll();
	}

	@PutMapping("/pack/{id}")
	public Iterable<Outfits> update(@PathVariable int id, @RequestBody Outfits outfitsData) {
		outfitsData.setId(id);
		outfitsRepository.save(outfitsData);
		return outfitsRepository.findAll();
	}

}
