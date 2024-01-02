// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './localeSlice';
import headerReducer from './headerSlice';

const store = configureStore({
  reducer: {
    locale: localeReducer,
    header:headerReducer,
    // тут можеш додати інші reducers за необхідності
  },
});

export default store;
