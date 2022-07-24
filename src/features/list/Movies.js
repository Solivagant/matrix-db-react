import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Movie from '../card/Movie';
import '../styles/Movies.css';

import {
    selectCount,
    selectAll,
    reset
} from '../movie/moviesSlice';

const Movies = (props) => {
    const count = useSelector(selectCount);
    const allActors = useSelector(selectAll);
    const dispatch = useDispatch();

    const createMovieList = () => {
        let table = []

        let index = 0;
        allActors.map((movie) => {
            table.push(
                <Movie key={"movie" + index} movie={movie} />
            );
            index++;
        });

        return table;
    }

    useEffect(() => {
        dispatch(reset());
    }, ["hot"]);

    return (
        <div className="ActorsBackground">
            <div className="MovieCards">
                {createMovieList()}
            </div>
        </div>
    );
}

export default Movies;