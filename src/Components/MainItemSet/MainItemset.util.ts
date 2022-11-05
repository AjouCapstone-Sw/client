import axios from 'axios';

export const getCategoryItemList = async (categoryId: number) => {
  const res = await axios.get(`/api/v1/category/${categoryId}`);
  console.log(res);
  return res.data;
};
