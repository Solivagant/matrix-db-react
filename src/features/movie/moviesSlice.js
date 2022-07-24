import { createSlice } from '@reduxjs/toolkit';

import matrixPoster from '../../images/posters/matrix_poster.jpg'
import reloadedPoster from '../../images/posters/reloaded_poster.jpg'
import revolutionsPoster from '../../images/posters/revolutions_poster.jpg'
import resurrectionsPoster from '../../images/posters/resurrections_poster.jpg'

const initialState = {
  value: [
    {
      name: "The Matrix",
      year: "1999",
      poster: matrixPoster,
    },
    {
      name: "The Matrix Reloaded",
      year: "2003",
      poster: reloadedPoster,
    },
    {
      name: "The Matrix Revolutions",
      year: "2003",
      poster: revolutionsPoster,
    },
    {
      name: "The Matrix Resurrections",
      year: "2021",
      poster: resurrectionsPoster,
    },
  ],
};

export const slice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    clear: state => {
      state.value = [];
    },
    reset: () => initialState,
  },
});

export const { clear, reset } = slice.actions;

export const selectCount = state => {
  return state.movies.value.length;
}

export const selectAll = state => {
  return state.movies.value;
}

export default slice.reducer;
