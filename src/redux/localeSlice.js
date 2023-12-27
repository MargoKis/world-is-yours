// src/features/localeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    locale: 'uk',
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload.locale;
    },
  },
});

export const { setLocale } = localeSlice.actions;

export default localeSlice.reducer;
