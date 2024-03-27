import React, { useEffect } from 'react'
import Header from './Header'
import UseNowPlayingMovies from '../Hooks/UseNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../Hooks/UsePopularMovies';
import UseTopRatedMovies from '../Hooks/UseTopRatedMovies';


const Browse = () => {

  UseNowPlayingMovies();
  UsePopularMovies();
  UseTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse