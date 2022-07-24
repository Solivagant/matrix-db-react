import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Fade from 'react-bootstrap/Fade'
import '../styles/Actor.css';

const Actor = (props) => {
  const [isCharacterShown, setIsCharacterShown] = useState(false);

  return (
    <Card key={"actor" + props.index}
      onMouseEnter={() => setIsCharacterShown(true)}
      onMouseLeave={() => setIsCharacterShown(false)}>
      {isCharacterShown &&
        <Fade appear={true} in={isCharacterShown} unmountOnExit={true}>
          <Card.Img className="ActorImg" src={props.actor.photoCharacter} />
        </Fade>
      }
      {!isCharacterShown && (
        <Card.Img className="ActorImg" src={props.actor.photo} />
      )}
      <Card.Title>{props.actor.name}</Card.Title>
      <Card.Text>{props.actor.character}</Card.Text>
    </Card>
  );
}

export default Actor;