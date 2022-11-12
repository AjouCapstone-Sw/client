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
  nickName: string;
  review: string;
  score: number;
  createdAt: string;
};

export type productReviewType = auctionReviewType & { productId: number };
