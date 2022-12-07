import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ALERT_SELL_SUCCESS } from './Seller.const';
import type { UseGetVideoStreamSeller } from './Seller.type';
import { connection, getSenderCandidateEvent, getSenderAnswerEvent } from './Seller.util';

import { AlertModal } from '@Components/Modals/Alert/AlertModal';
import { useModal } from '@Hook/useModal';
import ClientSocket from '@Socket/WebRTC/WebRTC';
import { getUserId } from '@Util/.';

export const useGetVideoStreamSeller = ({ productId }: UseGetVideoStreamSeller) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream>();
  const userId = getUserId();
  useEffect(() => {
    const clientSocket = new ClientSocket(userId as string);
    connection({ streamRef, videoRef, productId, userId: userId as string });
    clientSocket.socket!.on('getSenderCandidate', getSenderCandidateEvent);
    clientSocket.socket!.on('getSenderAnswer', getSenderAnswerEvent);

    return () => {
      if (streamRef.current) streamRef.current.getTracks().forEach((track) => track.stop());
      ClientSocket.sendPC = null;
      ClientSocket.receivePC = null;
      ClientSocket.instance = null;
      clientSocket.socket!.emit('close', { productId });
      clientSocket.socket!.off('getSenderCandidate', getSenderCandidateEvent);
      clientSocket.socket!.off('getSenderAnswer', getSenderAnswerEvent);
      clientSocket.socket!.disconnect();
    };
  }, [productId]);
  return videoRef;
};

export const useAuctionEnd = () => {
  const navigator = useNavigate();
  const { openModal } = useModal();
  const openSuccessModal = () => openModal(AlertModal as React.FC, ALERT_SELL_SUCCESS);

  useEffect(() => {
    const clientSocket = new ClientSocket('');

    clientSocket.socket!.on(
      'endAuctionWithSeller',
      ({ price, productId }: { price: number; productId: number }) => {
        openSuccessModal();
        setTimeout(() => {
          navigator(`/seller-introduce?price=${price}&productId=${productId}`);
          clientSocket.socket!.disconnect();
        }, 5000);
      },
    );
  }, []);
};
