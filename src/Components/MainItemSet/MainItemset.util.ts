import { axiosInstance } from '@Util/Axios';

export const getCategoryItemList = async (categoryId: number) => {
  const res = await axiosInstance.get(`/category/${categoryId}`, { withCredentials: true });
  return res.data;
};
