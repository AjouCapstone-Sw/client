import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://theajou.shop',
  // withCredentials: true,
});
