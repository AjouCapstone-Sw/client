import { axiosInstance } from '@Util/.';

export const getCategoryList = async () => {
  const res = await axiosInstance.get(`/category/getAll`);
  console.log(res);
  return res.data;
};
