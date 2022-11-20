/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import ClientSocket from '../../Socket/WebRTC/WebRTC';
import { INIT_AUCTION_INFO, IN_PRODUCT_DATA_IN_AUCTION } from './WebRTCView.const';
import type {
  auctionInfoType,
  auctionProductData,
  chatType,
  UseGetProductDataInAuction,
  UseJoinAuction,
} from './WebRTCView.type';
import { chatLengthLimit20, createChatData, getProductDataInAuction } from './WebRTCView.util';

import { UseGetVideoStreamBuyer } from '@Components/Buyer/Buyer.type';

const SELLER_ID = 'yj';
const USER_ID = 'HS';

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

export const useChatData = () => {
  const [chats, setChats] = useState<chatType[]>([]);
  const addChat = (chatsData: chatType) =>
    setChats((prev) => chatLengthLimit20(prev.concat(chatsData)));

  return { chats, addChat };
};

export const useJoinAuction = ({ productId }: UseJoinAuction) => {
  const { auctionInfo } = useGetAuctionInfo();
  const clientSocket = new ClientSocket(SELLER_ID);
  const { chats, addChat } = useChatData();
  const [seller, setSeller] = useState<string>('');

  useEffect(() => {
    clientSocket.socket!.on('a', setSeller);
    clientSocket.socket!.on('receiveMessage', ({ message, userId }) => {
      addChat(createChatData(userId, message));
    });
  }, [productId]);

  return { chats, addChat, ...auctionInfo, seller };
};

export const useAuctionStates = ({
  productId,
  addChat,
}: UseGetVideoStreamBuyer & { addChat: (chatData: chatType) => void }) => {
  const [remainTime, setRemainTime] = useState<string>('');
  const [maxPriceUser, setPriceUser] = useState<string>('');
  const [nowPrice, setNowPrice] = useState<string>('');
  const [joinedUserLength, setJoinedUserLength] = useState<string>('');
  const [nextAskPrice, setNextAskPrice] = useState<string>('');

  const clientSocket = new ClientSocket(USER_ID);

  useEffect(() => {
    clientSocket.socket!.on('updateAuctionStatus', ({ status, price, nextPrice }) => {
      setPriceUser(status);
      setNowPrice(price);
      setNextAskPrice(nextPrice);
    });

    clientSocket.socket!.on('joinUser', ({ userId, updatedUserLength }) => {
      addChat(createChatData('system', `${userId}님이 입장하셨습니다`));
      setJoinedUserLength(updatedUserLength);
    });
    clientSocket.socket!.on('auctionTimer', setRemainTime);
  }, [productId]);

  return { remainTime, maxPriceUser, nowPrice, joinedUserLength, nextAskPrice };
};
