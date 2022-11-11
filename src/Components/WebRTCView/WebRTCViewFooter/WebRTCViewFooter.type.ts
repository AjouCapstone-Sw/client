import { chatType } from '../WebRTCView.type';

export type WEbRTCViewFooterProps = {
  chats: chatType[];
  nextAskPrice: number;
  productLikeNum: number;
  productId: number;
};

export type HandleAskPriceClick = {
  productId: number;
  nextAskPrice: number;
};

export type AuctionChatInput = {
  message: string;
};
