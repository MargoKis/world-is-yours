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
<<<<<<< HEAD
  


  signUp: async (userData) => {  
=======



  signUp: async (userData) => {
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0
    try {
      const response = await axios.post(`${BASE_URL}/users/`, userData);
      return response;
    } catch (error) {
      // console.error('Error registering user in api:', error);
      throw error;
    }
  },


<<<<<<< HEAD
  signIn: async (userData) => {  
    try {
      const response = await axios.post(`${BASE_URL}/users/`, userData);
      return response;
    } catch (error) {
      // console.error('Error login user in api:', error);
=======
  signIn: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/`, { username: userData.email, password: userData.password });
      console.log('Error login user in api:', response);
      return response;

    } catch (error) {
      console.error('Error login user in api:', error);
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0
      throw error;
    }
  },


<<<<<<< HEAD
  resetPassword: async (userData) => {  
=======
  resetPassword: async (userData) => {
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0
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