import axios from 'axios';

import type { GetAuctionReview, GetProductReview, GetUserInfo } from './MyPage.type';

export const getUserInfo = async ({ nickName }: GetUserInfo) => {
  const url = nickName ? `/api/v1/info/${nickName}` : '/api/v1/info';
  const res = await axios.get(url);
  return res.data;
};

export const getAuctionReview = async ({ nickName }: GetAuctionReview) => {
  const url = nickName ? `/api/v1/review/auction/${nickName}` : '/api/v1/review/auction';
  const res = await axios.get(url);
  return res.data;
};

export const getProductReview = async ({ nickName }: GetProductReview) => {
  const url = nickName ? `/api/v1/review/product/${nickName}` : '/api/v1/review/product';
  const res = await axios.get(url);
  return res.data;
};
