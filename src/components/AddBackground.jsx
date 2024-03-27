
import React, { useEffect } from 'react';
import UseMovieTrailer from '../Hooks/UseMovieTrailer';
import { useSelector } from 'react-redux';

const AddBackground = ({ Moveid }) => {
    const trailerVideo = useSelector(store => store.Movies?.trailerVideo);

    UseMovieTrailer(Moveid);

    return (
        <div className=''>
            <iframe
                className='w-full aspect-video '
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}  // Add autoplay=1
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default AddBackground;
