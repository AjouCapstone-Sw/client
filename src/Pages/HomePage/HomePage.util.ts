import { axiosInstance } from '@Util/.';

export const getCategoryList = async () => {
  const res = await axiosInstance.get(`/category`);
  return res.data;
};
