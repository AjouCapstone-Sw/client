import { AuctionChatInput, HandleAskPriceClick } from './WebRTCViewFooter.type';

import ClientSocket from '@Socket/WebRTC/WebRTC';
import { getUserId } from '@Util/LocalStorage';

export const handleAskPriceClick =
  ({ productId, nextAskPrice }: HandleAskPriceClick) =>
  () => {
    const userId = getUserId();
    const clientSocket = new ClientSocket(userId as string);
    clientSocket.socket!.emit('sendAskPrice', { productId, nextAskPrice });
  };

export const handleChatMessageSend =
  (nickName: string, productId: number, cleanField: Function) =>
  ({ message }: AuctionChatInput) => {
    const clientSocket = new ClientSocket(nickName);
    clientSocket.socket!.emit('sendMessage', { userId: nickName, message, productId });
    cleanField();
  };
