package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.annotation.Bean;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

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
public class PackApplication {
	@Autowired
	private PackListRepository packlistRepository;
	

	public static void main(String[] args) {
		SpringApplication.run(PackApplication.class, args);
	}
	// @Bean
	// public WebMvcConfigurer corsConfigurer() {
	// 	return new WebMvcConfigurer() {
	// 		@Override
	// 		public void addCorsMappings(CorsRegistry registry) {
	// 			registry.addMapping("/pack").allowedOrigins("http://localhost:8080");
	// 		}
	// 	};
	// }

	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/pack")
	public Iterable<PackList> index() {
		return packlistRepository.findAll();
	}
	

	@PostMapping("/pack")
	public Iterable<PackList> create (@RequestBody PackList packlistData) {
		packlistRepository.save(packlistData);
		return packlistRepository.findAll();
	}

	@DeleteMapping("/pack/{id}")
	public Iterable<PackList> delete(@PathVariable int id) {
		packlistRepository.deleteById(id);
		return packlistRepository.findAll();
	}

	@PutMapping("/pack/{id}")
	public Iterable<PackList> update(@PathVariable int id, @RequestBody PackList packlistData) {
		packlistData.setId(id);
		packlistRepository.save(packlistData);
		return packlistRepository.findAll();
	}

}
