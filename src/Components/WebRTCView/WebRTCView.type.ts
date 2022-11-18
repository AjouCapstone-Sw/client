export type WebRTCViewProps = { productId: number };
export type UseGetProductDataInAuction = { productId: number };
export type GetProductDataInAuction = { productId: number };
export type auctionProductData = {
  productTitle: string;
  auctionStartPrice: number;
  nowAskPrice: number;
};

export type UseJoinAuction = { productId: number };
export type chatType = { id: number; name: string; message: string };
export type auctionInfoType = {
  joinUserLength: number;
  untilExitAuctionTime: string;
  nowAuctionPrice: number;
  productLikeNum: number;
};
