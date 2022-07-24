import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import '../styles/Movie.css';

const Movie = (props) => {

    return (
        <Card key={"movie" + props.index}>
            <Card.Img className="MovieImg" src={props.movie.poster} />

            <Card.Title>{props.movie.name}</Card.Title>
            <Card.Text>{props.movie.year}</Card.Text>
        </Card>
    );
}

export default Movie;