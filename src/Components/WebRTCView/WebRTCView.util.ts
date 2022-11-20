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
  for (let i = chats.length - 1; i >= 0; i--) {
    if (res.length <= AUCTION_CHAT_SIZE_LIMIT) res.push(chats[i]);
  }
  return res;
};

export const createChatData = (name: string, message: string) => ({
  name,
  message,
  id: Math.floor(Math.random() * Number.MAX_VALUE),
});
