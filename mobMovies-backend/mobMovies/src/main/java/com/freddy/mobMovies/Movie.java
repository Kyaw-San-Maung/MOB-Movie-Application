package com.freddy.mobMovies;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
	
	@Id
	private ObjectId id;
	private String imdbId;
	private String title;
	private String releaseDate;
	private String trailerLink;
	private String poster;
	private List<String> genres;
	private List<String> backdrop;
	
	@DocumentReference
	private List<Review> reviewsIds;
	
	public Movie(ObjectId id, String imdbId, String title, String releaseDate, String trailerLink, String poster,
			List<String> genres, List<String> backdrop, List<Review> reviewsIds) {
		super();
		this.id = id;
		this.imdbId = imdbId;
		this.title = title;
		this.releaseDate = releaseDate;
		this.trailerLink = trailerLink;
		this.poster = poster;
		this.genres = genres;
		this.backdrop = backdrop;
		this.reviewsIds = reviewsIds;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getImdbId() {
		return imdbId;
	}

	public void setImdbId(String imdbId) {
		this.imdbId = imdbId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getTrailerLink() {
		return trailerLink;
	}

	public void setTrailerLink(String trailerLink) {
		this.trailerLink = trailerLink;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}

	public List<String> getGenres() {
		return genres;
	}

	public void setGenres(List<String> genres) {
		this.genres = genres;
	}

	public List<String> getBackdrop() {
		return backdrop;
	}

	public void setBackdrop(List<String> backdrop) {
		this.backdrop = backdrop;
	}

	public List<Review> getReviewsIds() {
		return reviewsIds;
	}

	public void setReviewsIds(List<Review> reviewsIds) {
		this.reviewsIds = reviewsIds;
	}
	
	
	
}
