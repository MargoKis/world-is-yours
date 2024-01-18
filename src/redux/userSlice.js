<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
=======
// authSlice.js
import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    isAuthenticated:false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0
    },
  },
});

export const { login, logout } = userSlice.actions;
<<<<<<< HEAD
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
=======
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0

export default userSlice.reducer;
