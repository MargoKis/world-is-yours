import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const api = {
  // language switch
  getLanguage: async (code) => {
    try {
      const response = await axios.get(`${BASE_URL}/language/${code}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },
  


  signUp: async (userData) => {  //data
    try {
      const response = await axios.post(`${BASE_URL}/users/`, userData);
      return response;
    } catch (error) {
      console.error('Error registering user in api:', error);
      throw error;
    }
  },




};

export default api;