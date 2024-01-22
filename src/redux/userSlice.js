// authSlice.js
import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    isAuthenticated:false,
    user:{
      token: null,
      user_id: null,
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      is_verified_email: false,
      image: null,
      is_superuser: false
    }

  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout,updateUser } = userSlice.actions;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
