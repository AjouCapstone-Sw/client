/* eslint-disable no-unused-vars */
import React from 'react';

import type { ItemListCellType } from '@Pages/ListPage/ListPage.type';

export type GetUserInfo = { userId: string | undefined };
export type UseGetUserInfo = { userId: string | undefined };
export type UseGetUserReview = { userId: string | undefined };
export type GetAuctionReview = { userId: string | undefined };
export type GetProductReview = { userId: string | undefined };
export type GetPurchaseProducts = { userId: string | undefined };
export type GetSellProducts = { userId: string | undefined };
export type GetLikeProducts = { userId: string | undefined };
export type GetPointHistories = { userId: string | undefined };
export type UseGetPersonalProducts = { userId: string | undefined };
export type UseGetPointHistories = { userId: string | undefined };

export type userInfoType = {
  nickName: string;
  profileImage: string;
  point: number;
};

export type auctionReviewType = {
  reviewId: number;
  nickName: string;
  review: string;
  score: number;
  createdAt: string;
};

export type productReviewType = auctionReviewType & {
  productId: number;
  productImage: string;
};

export type PointHistoryType = {
  createdAt: string;
  point: number;
  userId: number;
  id: number;
};

export type ProductPreview = {
  buyNowPrice: number;
  image: string;
  like: boolean;
  live: boolean;
  productId: number;
  title: string;
};

export type productReviewResponsesType = Omit<productReviewType, 'productImage'>;

export type UseSelectBodyData = {
  auctionReview: auctionReviewType[];
  productReview: productReviewType[];
  likeProducts: ItemListCellType[];
  sellProducts: ProductPreview[];
  purchaseProducts: ProductPreview[];
  pointHistories: PointHistoryType[];
};

export type BodySelectType =
  | '판매목록'
  | '구매목록'
  | '찜목록'
  | '판매후기'
  | '경매후기'
  | '포인트기록';

export type MakeBodyData = UseSelectBodyData;

export type BodyDataType = {
  [key in BodySelectType]: UseSelectBodyData[keyof UseSelectBodyData];
};
export type HandleSelectChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type MyPageBodyProps = {
  bodyDatas: UseSelectBodyData[keyof UseSelectBodyData];
};
