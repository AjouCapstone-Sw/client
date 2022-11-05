import axios from 'axios';

export const getCategoryList = async () => {
  const res = await axios.get(`/api/v1/category`, { withCredentials: true });
  return res.data;
};
