import type {
  GetAuctionReview,
  GetLikeProducts,
  GetPointHistories,
  GetProductReview,
  GetPurchaseProducts,
  GetSellProducts,
  GetUserInfo,
  MakeBodyData,
  productReviewResponsesType,
} from './MyPage.type';

import { axiosInstance, convertProductsImagePropertyName, getProductThumbNails } from '@Util/.';

export const getUserInfo = async ({ userId }: GetUserInfo) => {
  const res = await axiosInstance.get(`/user/${userId}`);
  return res.data;
};

export const getAuctionReview = async ({ userId }: GetAuctionReview) => {
  const res = await axiosInstance.get(`/review/auction/${userId}`);
  return res.data;
};

export const getProductReview = async ({ userId }: GetProductReview) => {
  const { data: productReviewResponses } = await axiosInstance.get<productReviewResponsesType[]>(
    `/review/product/${userId}`,
  );
  const productIds = productReviewResponses.map(({ productId }) => productId);
  const productThumbNails = await getProductThumbNails(productIds);
  const productReviews = productReviewResponses.map((productReview, idx) => ({
    productImage: productThumbNails[idx],
    ...productReview,
  }));

  return productReviews;
};

export const getPurchaseProducts = async ({ userId }: GetPurchaseProducts) => {
  console.log(userId);
  return [];
};

export const getSellProducts = async ({ userId }: GetSellProducts) => {
  console.log(userId);
  return [];
};

export const getLikeProducts = async ({ userId }: GetLikeProducts) => {
  const { data } = await axiosInstance.get(`/productList/like/${userId}`);
  const products = convertProductsImagePropertyName(data);
  return products;
};

export const getPointHistories = async ({ userId }: GetPointHistories) => {
  const { data } = await axiosInstance.get(`/point/history/${userId}`);
  return data;
};

export const makeBodyData = ({
  auctionReview,
  productReview,
  likeProducts,
  sellProducts,
  purchaseProducts,
  pointHistories,
}: MakeBodyData) => ({
  판매목록: sellProducts,
  구매목록: purchaseProducts,
  찜목록: likeProducts,
  경매후기: auctionReview,
  판매후기: productReview,
  포인트기록: pointHistories,
});
