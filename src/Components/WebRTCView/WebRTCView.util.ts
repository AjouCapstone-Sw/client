import axios from 'axios';

import { AUCTION_CHAT_SIZE_LIMIT } from './WebRTCView.const';
import type { chatType, GetProductDataInAuction } from './WebRTCView.type';

export const getProductDataInAuction = async ({ productId }: GetProductDataInAuction) => {
  const res = await axios.get(`/api/v1/auction/${productId}`);
  return res.data;
};

export const chatLengthLimit20 = (chats: chatType[]) => {
  const res = [];
  for (let i = chats.length - 1; i >= 0; i--) {
    if (res.length <= AUCTION_CHAT_SIZE_LIMIT) res.push(chats[i]);
  }
  return res;
};
