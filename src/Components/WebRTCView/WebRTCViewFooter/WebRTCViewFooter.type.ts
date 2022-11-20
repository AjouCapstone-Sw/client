import { chatType } from '../WebRTCView.type';

export type WEbRTCViewFooterProps = {
  nextAskPrice: number;
  productLikeNum: number;
  productId: number;
  chats: chatType[];
  seller: string;
};

export type HandleAskPriceClick = {
  productId: number;
  nextAskPrice: number;
};

export type AuctionChatInput = {
  message: string;
};
