import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AddMovies } from '../utils/MoviesSlice'
import { options } from '../utils/Constant'

const UseNowPlayingMovies = () => {
  const dispatch = useDispatch()

  const MyData = async () => {
    const MyData = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1'", options)
    const Data = await MyData.json();
    console.log(Data.results)
    dispatch(AddMovies(Data.results))
  }
  useEffect(() => {
    MyData()

  }, [])


}

export default UseNowPlayingMovies;