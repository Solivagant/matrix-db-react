import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EntryCard from '../card/EntryCard';
import '../styles/Gallery.css';

import {
  selectStoryboardsCount,
  selectStoryboards,
  addStoryboard,
  setStoryboardsRanParser,
  selectRanStoryboardsParser
} from '../gallery/gallerySlice';

const StoryboardsGallery = (props) => {
  const allOutput = useSelector(selectStoryboards);
  const ranParser = useSelector(selectRanStoryboardsParser);

  const dispatch = useDispatch();

  function importAll(r) {
    let items = [];
    r.keys().map((item, index) => items.push(r(item)));
    return items;
  }

  const createListOfPersons = () => {
    let index = 0;

    importAll(props.images).map((actor) => {

      //Start the timer
      setTimeout(function () {
        dispatch(
          addStoryboard(<EntryCard index={index} photo={actor.default} />)
        );
      }.bind(this), 250 * index)

      index++;
    });

    dispatch(setStoryboardsRanParser(true));
  }

  useEffect(() => {
    !ranParser && createListOfPersons();
  }, ["hot"]);


  return (
    <div className="EntriesBackground">
      <div className="Entries">
        {allOutput}
      </div>
    </div>
  );
}

export default StoryboardsGallery;