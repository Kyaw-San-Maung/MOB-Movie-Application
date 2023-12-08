package com.freddy.mobMovies;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {
	
	@Autowired
	private MovieService movieService;
	
	@GetMapping
	public List<Movie>  getAllMovies() {
		return movieService.allMovie();
	}
	
	@GetMapping("/{imdbId}")
	public Optional<Movie> getSinlgeMovie(@PathVariable String imdbId) {
		return movieService.singleMovie(imdbId);
	}
	
	
	
}
