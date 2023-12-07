import React from 'react';
import '../hero/Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';


export default function Hero({movies}) {
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
                                              <div className='play-button-icon-container'>
                                              <i class="fa-solid fa-circle-play"></i>
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
