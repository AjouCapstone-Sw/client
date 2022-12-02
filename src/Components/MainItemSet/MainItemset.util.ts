import { axiosInstance } from '@Util/Axios';

export const getCategoryItemList = async (categoryId: number) => {
  const { data } = await axiosInstance.get(`/productList/${categoryId}`);
  return data.map((item: any) => ({ ...item, productImage: item.image }));
};

export const getItemListBySearch = async (keyword: string) => {
  const { data } = await axiosInstance.get(`/product/search/${keyword}`);
  return data.map((item: any) => ({ ...item, productImage: item.image }));
};
