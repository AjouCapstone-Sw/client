import type { auctionProductData } from './WebRTCView.type';

export const IN_PRODUCT_DATA_IN_AUCTION: auctionProductData = {
  productTitle: '',
  auctionStartPrice: 0,
  nowAskPrice: 0,
};

export const AUCTION_CHAT_SIZE_LIMIT = 20;

const INIT_AUCTION_TIME = '10:00';
export const INIT_AUCTION_INFO = {
  joinUserLength: 0,
  untilExitAuctionTime: INIT_AUCTION_TIME,
  nowAuctionPrice: 0,
  productLikeNum: 0,
};
