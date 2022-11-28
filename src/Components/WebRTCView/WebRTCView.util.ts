import { AUCTION_CHAT_SIZE_LIMIT } from './WebRTCView.const';
import type { chatType, GetProductDataInAuction } from './WebRTCView.type';

import { axiosInstance } from '@Util/Axios';

export const getProductDataInAuction = async ({ productId }: GetProductDataInAuction) => {
  const {
    data: { bidPrice, startPrice, title },
  } = await axiosInstance.get(`/product/${productId}`);
  return {
    productTitle: title,
    auctionStartPrice: startPrice,
    nowAskPrice: bidPrice,
  };
};

export const chatLengthLimit20 = (chats: chatType[]) => {
  const res = [];
  const start = Math.max(0, chats.length - AUCTION_CHAT_SIZE_LIMIT);
  for (let i = start; i < chats.length; i++) {
    res.push(chats[i]);
  }

  return res;
};

export const createChatData = (name: string, message: string) => ({
  name,
  message,
  id: Math.floor(Math.random() * Number.MAX_VALUE),
});
