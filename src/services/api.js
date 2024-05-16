import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.10:3000', //Casa
  // baseURL: 'http://192.168.3.49:3000', //Mamanguape,
  // baseURL: 'http://10.10.2.42:3000', //Jaguaribe
  // baseURL: 'http://192.168.0.4:3000', //Moises
});

export default api;
