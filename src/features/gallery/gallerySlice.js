import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    storyboards: [],
    concepts: [],
    ranStoryboardsParser: false,
    ranConceptsParser: false,
  }
};

export const slice = createSlice({
  name: 'gallery',
  initialState: initialState,
  reducers: {
    clear: state => {
      state.value = [];
    },
    reset: () => initialState,

    addStoryboard: (state, action) => {
      state.value.storyboards.push(action.payload);
    },
    setStoryboardsRanParser: (state, action) => {
      state.value.ranStoryboardsParser = action.payload;
    },

    addConcept: (state, action) => {
      state.value.concepts.push(action.payload);
    },
    setRanConceptsParser: (state, action) => {
      state.value.ranConceptsParser = action.payload;
    }
  },
});

export const {
  clear,
  reset,
  addStoryboard,
  setStoryboardsRanParser,
  addConcept,
  setRanConceptsParser
} = slice.actions;

export const selectStoryboardsCount = state => {
  return state.gallery.value.storyboards.length;
}

export const selectStoryboards = state => {
  return state.gallery.value.storyboards.slice().sort((a, b) => {
    if (a.default < b.default) { return 1; }
    if (a.default > b.default) { return -1; }
    return 0;
  });
}

export const selectRanStoryboardsParser = state => {
  return state.gallery.value.ranStoryboardsParser;
}

export const selectConceptsCount = state => {
  return state.gallery.value.concepts.length;
}

export const selectConcepts = state => {
  return state.gallery.value.concepts;
}

export const selectRanConceptsParser = state => {
  return state.gallery.value.ranConceptsParser;
}

export default slice.reducer;
