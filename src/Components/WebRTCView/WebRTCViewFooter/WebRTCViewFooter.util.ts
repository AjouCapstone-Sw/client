import { AuctionChatInput, HandleAskPriceClick } from './WebRTCViewFooter.type';

import ClientSocket from '@Socket/WebRTC/WebRTC';

const SELLER_ID = 'yj';
export const handleAskPriceClick =
  ({ productId, nextAskPrice }: HandleAskPriceClick) =>
  () => {
    const clientSocket = new ClientSocket(SELLER_ID);
    clientSocket.socket!.emit('sendAskPrice', { productId, nextAskPrice });
  };

export const handleChatMessageSend =
  (nickName: string, cleanField: Function) =>
  ({ message }: AuctionChatInput) => {
    const clientSocket = new ClientSocket(nickName);
    clientSocket.socket!.emit('sendMessage', { nickName, message });
    cleanField();
  };
