import axios from 'axios';

import type { GetProductDataInAuction } from './WebRTCView.type';

export const getProductDataInAuction = async ({ productId }: GetProductDataInAuction) => {
  const res = await axios.get(`/api/v1/auction/${productId}`);
  return res.data;
};
