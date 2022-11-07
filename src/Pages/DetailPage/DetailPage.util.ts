import { axiosInstance } from '@Util/.';

export const getProductDetail = async (productId: number) => {
  const res = await axiosInstance.get(`/product/${productId}`);
  return res.data;
};
