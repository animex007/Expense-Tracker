import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can also add interceptors here if needed
// api.interceptors.request.use(config => {
//   // Modify config before sending the request
//   return config;
// });

export default api;
