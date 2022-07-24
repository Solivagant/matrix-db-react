import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

const ImageCard = (props) => {
    return (
        <Card key={"image" + props.index}>
            <Card.Img src={props.photo} />
            <Card.Title>{props.name}</Card.Title>
        </Card>
    );
}

export default ImageCard;