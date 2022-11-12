import axios from 'axios';

import type { GetAuctionReview, GetProductReview, GetUserInfo, MakeBodyData } from './MyPage.type';

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

export const makeBodyData = ({
  auctionReview,
  productReview,
  likeList,
  sellList,
  buyList,
}: MakeBodyData) => ({
  판매: sellList,
  구매: buyList,
  찜: likeList,
  경매후기: auctionReview,
  판매후기: productReview,
});
