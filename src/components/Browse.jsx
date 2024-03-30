import React, { useEffect } from 'react'
import Header from './Header'
import UseNowPlayingMovies from '../Hooks/UseNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../Hooks/UsePopularMovies';
import UseTopRatedMovies from '../Hooks/UseTopRatedMovies';
import UpComingMovies from '../Hooks/UpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const GptSearc = useSelector(store => store.Gpt.ToggleGpt)
  UseNowPlayingMovies();
  UsePopularMovies();
  UseTopRatedMovies()
  UpComingMovies();

  return (
    <div>
      <Header />
      {
        GptSearc ? (<>
          <GptSearch />

        </>) : (<>
          <MainContainer />
          <SecondaryContainer />
        </>)
      }

    </div>
  )
}

export default Browse