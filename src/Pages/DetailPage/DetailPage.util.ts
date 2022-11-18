import { axiosInstance } from '@Util/.';

export const getProductDetail = async (productId: number) => {
  const res = await axiosInstance.get(`/product?productId=${productId}`);
  return res.data;
};

export const isSeller = (nickName: string | boolean, seller: string) => nickName === seller;
