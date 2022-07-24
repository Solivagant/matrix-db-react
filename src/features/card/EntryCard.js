import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Fade from 'react-bootstrap/Fade'

const EntryCard = (props) => {
  const [isTitleShown, setIsTitleShown] = useState(false);

  return (
    <Card className="Entry" 
      onMouseEnter={() => setIsTitleShown(true)}
      onMouseLeave={() => setIsTitleShown(false)}>

      <Card.Img
        className={isTitleShown ? "EntryImgSmall" : "EntryImg"}

        src={props.photo} />

      {isTitleShown &&
        <Fade appear={true} in={isTitleShown} unmountOnExit={true}>
          <Card.Title className="EntryTitle">{props.photo}</Card.Title>
        </Fade>
      }

    </Card>
  );
}

export default EntryCard;