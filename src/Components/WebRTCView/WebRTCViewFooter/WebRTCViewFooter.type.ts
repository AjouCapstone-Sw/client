import { chatType } from '../WebRTCView.type';

export type WEbRTCViewFooterProps = {
  nextAskPrice: number;
  productLikeNum: number;
  productId: number;
  chats: chatType[];
  seller: string;
  maxPriceUser: string;
  point: number;
};

export type HandleAskPriceClick = {
  productId: number;
  nextAskPrice: number;
  handleAttendTrue: Function;
};

export type AuctionChatInput = {
  message: string;
};
