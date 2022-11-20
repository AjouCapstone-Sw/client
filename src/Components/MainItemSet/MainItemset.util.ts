import { axiosInstance } from '@Util/Axios';

export const getCategoryItemList = async (categoryId: number) => {
  // const res = await axiosInstance.get(`/product?category=${categoryId}?search=''`);

  const res = await axiosInstance.get(`/productList/${categoryId}`);
  const { data } = res;
  console.log(data);
  return data.map((item: any) => ({ ...item, productImage: item.image }));
};
