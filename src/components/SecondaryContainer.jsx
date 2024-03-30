import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const Movies = useSelector(store => store.Movies);

  console.log(Movies, "yy")
  //   if (!Movies || !Movies.length) {
  //     return null; // Render nothing if Movies is undefined, null, or empty
  // }
  return (
    <div className=' bg-black '>
      <div className='-mt-60 z-10 relative '>
        <MovieList title={"Now Playing"} Movie={Movies.NowPlayingMovies} />
        <MovieList title={"Popular Movies"} Movie={Movies.popular} />
        <MovieList title={"Top Rated"} Movie={Movies.TopRated} />
        <MovieList title={"UpComing Movies"} Movie={Movies.Upcoming} />
      </div>



    </div>
  )
}

export default SecondaryContainer;