/* eslint-disable no-new-wrappers */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import ClientSocket from '../../Socket/WebRTC/WebRTC';
import {
  ALERT_ASK_SUCCESS,
  DEFAULT_TIMER,
  INIT_AUCTION_INFO,
  IN_PRODUCT_DATA_IN_AUCTION,
} from './WebRTCView.const';
import type {
  auctionInfoType,
  auctionProductData,
  chatType,
  TimerType,
  UseGetProductDataInAuction,
  UseJoinAuction,
} from './WebRTCView.type';
import { chatLengthLimit20, createChatData, getProductDataInAuction } from './WebRTCView.util';

import { UseGetVideoStreamBuyer } from '@Components/Buyer/Buyer.type';
import { AlertModal } from '@Components/Modals/Alert/AlertModal';
import { AlertModalProps } from '@Components/Modals/Alert/AlertModal.type';
import { useModal } from '@Hook/useModal';
import { getUserId } from '@Util/LocalStorage';

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
    setChats((prev) => chatLengthLimit20([...prev, chatsData]));

  return { chats, addChat };
};

export const useJoinAuction = ({ productId }: UseJoinAuction) => {
  const { auctionInfo } = useGetAuctionInfo();
  const myId = getUserId();
  const clientSocket = new ClientSocket(myId as string);
  const { chats, addChat } = useChatData();
  const [seller, setSeller] = useState<string>('');

  useEffect(() => {
    clientSocket.socket!.on('callSeller', setSeller);
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
  const [remainTime, setRemainTime] = useState<string>('0');
  const [maxPriceUser, setPriceUser] = useState<String>('');
  const [joinedUserLength, setJoinedUserLength] = useState<string>('');
  const [nextAskPrice, setNextAskPrice] = useState<string>('');
  const [timer, setTimer] = useState<TimerType>(DEFAULT_TIMER);

  useEffect(() => {
    const myId = getUserId();
    if (typeof myId !== 'string') return;

    const clientSocket = new ClientSocket(myId);
    clientSocket.socket!.on('updateAuctionStatus', ({ status, nextPrice }) => {
      setPriceUser(new String(status));
      setNextAskPrice(nextPrice);
    });

    clientSocket.socket!.on('joinUser', ({ userId, updatedUserLength }) => {
      addChat(createChatData(`${userId}`, `님이 입장하셨습니다`));
      setJoinedUserLength(updatedUserLength);
    });

    clientSocket.socket!.on('setDescriptionTime', (remainDescriptionTime) => {
      setTimer({ proceedText: '상품 설명 시간', time: Math.floor(remainDescriptionTime / 1000) });
    });

    clientSocket.socket!.on('updateAskTime', (remainAskTime) => {
      setTimer({ proceedText: '호가 시간', time: remainAskTime });
    });
    clientSocket.socket!.on('auctionTimer', setRemainTime);
  }, [productId]);

  return { timer, remainTime, maxPriceUser, joinedUserLength, nextAskPrice };
};

export const useAuctionAlert = (maxPriceUser: String, userId: string) => {
  const { openModal } = useModal();
  const openSuccess = () => openModal(AlertModal as React.FC, ALERT_ASK_SUCCESS);

  useEffect(() => {
    if (userId === maxPriceUser) openSuccess();
  }, [maxPriceUser]);
};
