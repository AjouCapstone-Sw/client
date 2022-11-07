import axios from 'axios';

export const getProductDetail = async (productId: number) => {
  const res = await axios.get(`/api/v1/product/${productId}`, { withCredentials: true });
  return res.data;
};
