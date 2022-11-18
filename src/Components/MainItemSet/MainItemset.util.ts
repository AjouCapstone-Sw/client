import { axiosInstance } from '@Util/Axios';

export const getCategoryItemList = async (categoryId: number) => {
  const res = await axiosInstance.get(`/product?category=${categoryId}?search=''`);
  return res.data;
};
