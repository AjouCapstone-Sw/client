import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://ec2-3-34-4-214.ap-northeast-2.compute.amazonaws.com:8080/api/v1',
  withCredentials: true,
});
