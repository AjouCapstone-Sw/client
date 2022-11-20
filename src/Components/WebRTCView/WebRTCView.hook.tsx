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
import { chatLengthLimit20, getProductDataInAuction } from './WebRTCView.util';

import { UseGetVideoStreamBuyer } from '@Components/Buyer/Buyer.type';

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
const USER_ID = 'HS';

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

export const useAuctionStates = ({ productId }: UseGetVideoStreamBuyer) => {
  const [remainTime, setRemainTime] = useState<string>('');
  const [maxPriceUser, setPriceUser] = useState<string>('');
  const [nowPrice, setNowPrice] = useState<string>('');
  const [joinedUserLength, setJoinedUserLength] = useState<string>('');
  const [nextAskPrice, setNextAskPrice] = useState<string>('');

  const clientSocket = new ClientSocket(USER_ID);

  useEffect(() => {
    clientSocket.socket!.on(
      'updateAuctionStatus',
      ({ status, price, joinedUserLength: userLength, nextPrice }) => {
        setPriceUser(status);
        setNowPrice(price);
        setJoinedUserLength(userLength);
        setNextAskPrice(nextPrice);
      },
    );
    clientSocket.socket!.on('auctionTimer', setRemainTime);
  }, [productId]);

  return { remainTime, maxPriceUser, nowPrice, joinedUserLength, nextAskPrice };
};
