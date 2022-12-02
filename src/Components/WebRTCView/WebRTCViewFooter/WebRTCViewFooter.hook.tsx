import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import ClientSocket from '../../../Socket/WebRTC/WebRTC';
import { AuctionChatInput } from './WebRTCViewFooter.type';
import { handleChatMessageSend } from './WebRTCViewFooter.util';

import { UseGetVideoStreamBuyer } from '@Components/Buyer/Buyer.type';
import { getUserId } from '@Util/LocalStorage';

export const useSendChatMessage = ({ productId }: { productId: number }) => {
  const { register, handleSubmit, resetField } = useForm<AuctionChatInput>();
  const userId = getUserId();
  const onSubmitCallback = handleSubmit(
    handleChatMessageSend(userId as string, productId, () => resetField('message')),
  );

  return {
    register: register('message'),
    handleSubmit: onSubmitCallback,
  };
};

export const useAuctionFooterStates = ({
  productId,
}: Pick<UseGetVideoStreamBuyer, 'productId'>) => {
  const [isAuctionStart, setAuctionStart] = useState<boolean>(false);
  useEffect(() => {
    const userId = getUserId();
    if (typeof userId !== 'string') return;
    const clientSocket = new ClientSocket(userId);
    clientSocket.socket!.on('startAuction', () => setAuctionStart(true));
  }, [productId]);

  return { isAuctionStart };
};

export const useAttendBid = ({ nextAskPrice }: { nextAskPrice: number }) => {
  const [attend, setAttend] = useState(false);
  const handleAttendTrue = () => setAttend(true);
  useEffect(() => {
    setAttend(false);
  }, [nextAskPrice]);
  return { attend, handleAttendTrue };
};
