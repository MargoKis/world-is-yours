import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const api = {
  // language switch
  getLanguage: async (code) => {
    try {
      const response = await axios.get(`${BASE_URL}/language/${code}/`);
      return response.data;
    } catch (error) {
      // console.error('Error fetching posts:', error);
      throw error;
    }
  },

  signUp: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/`, userData);
      // console.log('signUp success.  status:', response.status);
      return response;
    } catch (error) {
      console.log('Error registering user in api:', error);
      throw error;
    }
  },


  signIn: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/`, { username: userData.email, password: userData.password });
      // console.log('signIn success  status:', response.status);
      return response;

    } catch (error) {
      console.error('Error login user in api:', error);
      throw error;
    }
  },

  resetPassword: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/password_reset/`, userData);
      return response;
    } catch (error) {
      // console.error('Error registering user in api:', error);
      throw error;
    }
  },




};

export default api;