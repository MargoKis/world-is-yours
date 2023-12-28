import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const api = {
  // language switch
  getLanguage: (code) => {  // lang code
    return axios.get(`${BASE_URL}/language/${code}/`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching posts:', error);
        throw error; 
      });
  },




};

export default api;