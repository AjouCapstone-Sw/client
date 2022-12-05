import type {
  GetAuctionReview,
  GetLikeProducts,
  GetPointHistories,
  GetProductReview,
  GetPurchaseProducts,
  GetSellProducts,
  GetUserInfo,
  MakeBodyData,
  ProductPreview,
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
  const productThumbNails = await getProductThumbNails(productIds, Number(userId));
  const productReviews = productReviewResponses.map((productReview, idx) => ({
    productImage: productThumbNails[idx],
    ...productReview,
  }));

  return productReviews;
};

export const getPurchaseProducts = async ({ userId }: GetPurchaseProducts) => {
  const { data: purchaseProductsResponse } = await axiosInstance.get<ProductPreview[]>(
    `/product/buyList/${userId}`,
  );

  const purchaseProducts = purchaseProductsResponse.map((purchaseProduct) => ({
    productImage: purchaseProduct.image,
    ...purchaseProduct,
  }));

  return purchaseProducts;
};

export const getSellProducts = async ({ userId }: GetSellProducts) => {
  const { data: sellProductsResponse } = await axiosInstance.get<ProductPreview[]>(
    `/product/sellList/${userId}`,
  );
  const sellProducts = sellProductsResponse.map((sellProduct) => ({
    productImage: sellProduct.image,
    ...sellProduct,
  }));

  return sellProducts;
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
