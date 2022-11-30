/* eslint-disable no-unused-vars */

export type WebRTCViewProps = { productId: number };
export type UseGetProductDataInAuction = { productId: number };
export type GetProductDataInAuction = { productId: number };
export type auctionProductData = {
  productTitle: string;
  auctionStartPrice: number;
  nowAskPrice: number;
};

export type chatType = { id: number; name: string; message: string };

export type UseJoinAuction = { productId: number };

export type auctionInfoType = {
  joinUserLength: number;
  untilExitAuctionTime: string;
  nowAuctionPrice: number;
  productLikeNum: number;
};

export type TimerType = {
  proceedText: string;
  time: number;
};
