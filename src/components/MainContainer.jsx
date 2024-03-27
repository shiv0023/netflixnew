import React from 'react';
import AddTitle from './AddTitle';
import AddBackground from './AddBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const Movies = useSelector(store => store.Movies?.NowPlayingMovies);

    // Check if Movies is undefined or null before accessing its properties
    if (!Movies || !Movies.length) {
        return null; // Render nothing if Movies is undefined, null, or empty
    }

    // Access the first movie in the Movies array
    const MyMovie = Movies[1];

    // Destructure the MyMovie object to extract properties
    const { original_title, overview, id } = MyMovie;

    return (
        <div className=''>
            <AddTitle title={original_title} overview={overview} />
            <AddBackground Moveid={id} />
        </div>
    );
};

export default MainContainer;
