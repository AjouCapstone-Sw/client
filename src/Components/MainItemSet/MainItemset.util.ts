import axios from 'axios';

export const getCategoryItemList = async (categoryId: number) => {
  const res = await axios.get(`/api/v1/category/${categoryId}`, { withCredentials: true });
  return res.data;
};
