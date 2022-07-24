import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EntryCard from '../card/EntryCard';
import '../styles/Gallery.css';

import {
  selectConceptsCount,
  selectConcepts,
  addConcept,
  setRanConceptsParser,
  selectRanConceptsParser
} from '../gallery/gallerySlice';

const Gallery = (props) => {
  const allOutput = useSelector(selectConcepts);
  const ranParser = useSelector(selectRanConceptsParser);

  const dispatch = useDispatch();

  function importAll(result) {
    let items = [];
    result.keys().map((itemKey, index) => {
      items.push(result(itemKey));
    });

    return items;
  }

  const createList = () => {
    let index = 0;

    importAll(props.images).map((actor) => {

      //Start the timer
      setTimeout(function () {
        dispatch(
          addConcept(<EntryCard index={index} photo={actor.default} />)
        );
      }.bind(this), 250 * index)

      index++;
    });

    dispatch(setRanConceptsParser(true));
  }

  useEffect(() => {
    !ranParser && createList();
  }, ["hot"]);


  return (
    <div className="EntriesBackground">
      <div className="Entries">
        {allOutput}
      </div>
    </div>
  );
}

export default Gallery;