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
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
