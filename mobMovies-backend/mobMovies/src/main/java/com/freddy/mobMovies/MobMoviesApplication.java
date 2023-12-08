package com.freddy.mobMovies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MobMoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MobMoviesApplication.class, args);
	}
}
