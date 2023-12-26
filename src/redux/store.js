// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './localeSlice';

const store = configureStore({
  reducer: {
    locale: localeReducer,
    // тут можеш додати інші reducers за необхідності
  },
});

export default store;
