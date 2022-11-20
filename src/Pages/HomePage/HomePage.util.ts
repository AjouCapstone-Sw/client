import { axiosInstance } from '@Util/.';

export const getCategoryList = async () => {
  const res = await axiosInstance.get(`/category/getAll`);

  return res.data;
};
