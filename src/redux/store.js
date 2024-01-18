// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './localeSlice';
import headerReducer from './headerSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    locale: localeReducer,
    header:headerReducer,
    user: userReducer,
    // тут можеш додати інші reducers за необхідності
  },
});

export default store;
