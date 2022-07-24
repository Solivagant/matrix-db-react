//#region Imports Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import actorsReducer from '../features/actor/actorsSlice';
import moviesReducer from '../features/movie/moviesSlice';
import galleryReducer from '../features/gallery/gallerySlice';
//#endregion

//#region Imports Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
//#endregion

//#region Persist
const persistConfig = {
  key: 'root',
  storage
}

//every reducer must be present here
const persistedActorsReducer = persistReducer(persistConfig, actorsReducer)
const persistedMoviesReducer = persistReducer(persistConfig, moviesReducer)
//#endregion

const store = configureStore({
  reducer: {
    actors: persistedActorsReducer,
    movies: persistedMoviesReducer,
    gallery: galleryReducer,
  },
  middleware: [thunk, logger]
});

let persistor = persistStore(store);

export {
  store,
  persistor,
};