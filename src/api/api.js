import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const api = {
  getLanguage: (code) => {
    console.log("gat leng");
    return axios.get(`${BASE_URL}/language/${code}/`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching posts:', error);
        throw error; 
      });
  },




};

export default api;