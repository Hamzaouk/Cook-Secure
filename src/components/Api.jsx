import axios from 'axios';

// Create axios instance with default config
const Api = axios.create({
  baseURL: 'http://localhost:3001', // JSON Server default port
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;