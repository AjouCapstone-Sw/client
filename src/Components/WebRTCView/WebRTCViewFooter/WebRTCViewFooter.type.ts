import { chatType } from '../WebRTCView.type';

export type WEbRTCViewFooterProps = {
  nextAskPrice: number;
  productLikeNum: number;
  productId: number;
  chats: chatType[];
  seller: string;
  maxPriceUser: string;
};

export type HandleAskPriceClick = {
  productId: number;
  nextAskPrice: number;
  handleAttendTrue: Function;
};

export type AuctionChatInput = {
  message: string;
};
