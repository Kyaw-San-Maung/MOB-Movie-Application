import React from 'react';
import '../hero/Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default function Hero({ movies }) {
    
    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`)
    }
  return (
      <>
          <Carousel>
              {
                  movies.map((movie) => {
                      return (
                          <Paper>
                              <div className='movie-card-container'>
                                  <div className='movie-card' >
                                      <div className='movie-detail'>
                                          <div className='movie-poster'>
                                              <img src={movie.poster}></img>
                                          </div>
                                          <div className='movie-title'>
                                              <h4>{movie.title}</h4>
                                          </div>
                                          <div className='movie-buttons-container'>
                                              <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                              <div className='play-button-icon-container'>
                                              <i class="fa-solid fa-circle-play"></i>
                                                  </div>
                                              </Link>
                                              
                                              <div className='movie-review-button-container'>
                                                  <Button variant='info' onClick={() => reviews(movie.imbId)}>Reviews</Button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                            </div>
                          </Paper>
                      )
                  })
              }
          </Carousel>
    </>
  )
}
