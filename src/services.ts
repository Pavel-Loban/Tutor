import axios from 'axios';




// const BASE_URL = 'https://strapi.cleverland.by'
const BASE_URL = 'http://212.193.62.231:8080'

export const instance = axios.create({
  withCredentials: true,
  baseURL: `${BASE_URL}`,
});


instance.interceptors.request.use((config) => {


  const JWTToken = localStorage.getItem('tokenData');

  if (JWTToken) {
  config.headers.Authorization = `Bearer ${localStorage.getItem('tokenData')}`;
}




  return config;
});


