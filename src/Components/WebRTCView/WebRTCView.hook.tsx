import { useEffect, useState } from 'react';

import { INIT_AUCTION_INFO, IN_PRODUCT_DATA_IN_AUCTION } from './WebRTCView.const';
import type {
  auctionInfoType,
  auctionProductData,
  chatType,
  UseGetProductDataInAuction,
  UseJoinAuction,
} from './WebRTCView.type';
import { chatLengthLimit20, getProductDataInAuction } from './WebRTCView.util';

import ClientSocket from '@Socket/WebRTC/WebRTC';

export const useGetProductDataInAuction = ({ productId }: UseGetProductDataInAuction) => {
  const [productData, setProductData] = useState<auctionProductData>(IN_PRODUCT_DATA_IN_AUCTION);

  useEffect(() => {
    getProductDataInAuction({ productId })
      .then(setProductData)
      .catch(() => setProductData(IN_PRODUCT_DATA_IN_AUCTION as auctionProductData));
  }, [productId]);

  return productData;
};

const useGetAuctionInfo = () => {
  const [auctionInfo, setAuctionInfo] = useState<auctionInfoType>(INIT_AUCTION_INFO);
  const updateAuctionInfo = (newAuctionInfo: Partial<auctionInfoType>) =>
    setAuctionInfo({ ...auctionInfo, ...newAuctionInfo });
  return { auctionInfo, updateAuctionInfo };
};

const useChatData = () => {
  const [chats, setChats] = useState<chatType[]>([]);
  const addChat = (chatsData: chatType[]) =>
    setChats((prev) => chatLengthLimit20(prev.concat(chatsData)));
  return { chats, addChat };
};

const SELLER_ID = 'yj';
export const useJoinAuction = ({ productId }: UseJoinAuction) => {
  const { chats, addChat } = useChatData();
  const { auctionInfo, updateAuctionInfo } = useGetAuctionInfo();
  useEffect(() => {
    const clientSocket = new ClientSocket(SELLER_ID);
    clientSocket.socket!.on('joinAuction', ({ chats: initChat, ...rest }) => {
      addChat(initChat);
      updateAuctionInfo(rest);
    });
    clientSocket.socket!.on('receiveMessage', (chatsData: chatType[]) => {
      addChat(chatsData);
    });
  }, [productId]);

  return { chats, ...auctionInfo };
};
