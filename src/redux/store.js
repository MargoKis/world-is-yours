// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './localeSlice';
import headerReducer from './headerSlice';
<<<<<<< HEAD
import userReducer from './userSlice'
=======
import userReducer from './userSlice';
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0

const store = configureStore({
  reducer: {
    locale: localeReducer,
    header:headerReducer,
    user: userReducer,
    // тут можеш додати інші reducers за необхідності
  },
});

export default store;
