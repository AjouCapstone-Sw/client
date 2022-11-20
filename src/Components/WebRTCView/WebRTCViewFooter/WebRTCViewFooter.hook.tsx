import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import ClientSocket from '../../../Socket/WebRTC/WebRTC';
import { AuctionChatInput } from './WebRTCViewFooter.type';
import { handleChatMessageSend } from './WebRTCViewFooter.util';

import { UseGetVideoStreamBuyer } from '@Components/Buyer/Buyer.type';

const NICKNAME = 'yj';
const USER_ID = 'HS';

export const useSendChatMessage = () => {
  const { register, handleSubmit, resetField } = useForm<AuctionChatInput>();
  const onSubmitCallback = handleSubmit(
    handleChatMessageSend(NICKNAME, () => resetField('message')),
  );

  return {
    register: register('message'),
    handleSubmit: onSubmitCallback,
  };
};

export const useAuctionFooterStates = ({ productId }: UseGetVideoStreamBuyer) => {
  const [isAuctionStart, setAuctionStart] = useState<boolean>(false);

  const clientSocket = new ClientSocket(USER_ID);
  useEffect(() => {
    clientSocket.socket!.on('startAuction', () => setAuctionStart(true));
  }, [productId]);

  return { isAuctionStart };
};
