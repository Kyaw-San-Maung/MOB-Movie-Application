package com.freddy.mobMovies;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/movies")
public class ReviewController {
	
	@Autowired
	ReviewService reviewService;
	
	@PostMapping("/reviews")
	public Review createReview(@RequestBody Map<String, String> payload) {
		return reviewService.createReview(payload.get("reviewBody"),payload.get("imdbId"));
	}
}
