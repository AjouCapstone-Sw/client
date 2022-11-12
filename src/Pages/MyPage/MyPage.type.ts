import React from 'react';

import type { ItemListCellType } from '@Pages/ListPage/ListPage.type';

export type GetUserInfo = { nickName: string | undefined };
export type UseGetUserInfo = { nickName: string | undefined };
export type UseGetUserReview = { nickName: string | undefined };
export type GetAuctionReview = { nickName: string | undefined };
export type GetProductReview = { nickName: string | undefined };

export type userInfoType = {
  nickName: string;
  profileImage: string;
  point: number;
  likeList: ItemListCellType[];
  sellList: ItemListCellType[];
  buyList: ItemListCellType[];
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
export type UseSelectBodyData = {
  auctionReview: auctionReviewType[];
  productReview: productReviewType[];
  likeList: ItemListCellType[];
  sellList: ItemListCellType[];
  buyList: ItemListCellType[];
};

export type BodySelectType = '판매' | '구매' | '찜' | '판매후기' | '경매후기';
export type MakeBodyData = UseSelectBodyData;
export type BodyDataType = {
  [key in BodySelectType]: UseSelectBodyData[keyof UseSelectBodyData];
};
export type HandleSelectChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export type MyPageBodyProps = {
  bodyDatas: UseSelectBodyData[keyof UseSelectBodyData];
};
