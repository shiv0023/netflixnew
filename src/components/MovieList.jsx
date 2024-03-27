import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({ title, Movie }) => {
    return (
        <div className='pl-12'>
            <h1 className=' font-bold text-white text-2xl'>{title}</h1>
            <div className='flex overflow-x-scroll '>
                <div className='flex'>
                    {Array.isArray(Movie) && Movie.map(movie => (
                        <MovieCards key={movie.id} PosterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MovieList;
