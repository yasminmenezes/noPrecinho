import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.10:3000', //Casa
  // baseURL: 'http://192.168.3.49:3000', //Mamanguape
});

export default api;
