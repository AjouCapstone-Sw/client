import { axiosInstance } from '@Util/.';

export const getCategoryList = async () => {
  const res = await axiosInstance.get(`/category/getAll`);
  return res.data;
};

export const getLiveItemList = async () => {
  const { data } = await axiosInstance.get(`/product/auctioning/list`);
  return data;
};
