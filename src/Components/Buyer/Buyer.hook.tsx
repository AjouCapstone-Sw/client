import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ClientSocket from '../../Socket/WebRTC/WebRTC';
import { ALERT_BUY_SUCCESS } from './Buyer.const';
import { UseGetVideoStreamBuyer, WebRTCUser } from './Buyer.type';
import { connection, getReceiverAnswerEvent, getReceiverCandidateEvent } from './Buyer.util';

import { AlertModal } from '@Components/Modals/Alert/AlertModal';
import { useModal } from '@Hook/useModal';

const USER_ID = 'HS';
export const useGetVideoStreamBuyer = ({ productId }: UseGetVideoStreamBuyer) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [productStream, setProductStream] = useState<WebRTCUser | null>(null);

  const addStream = (e: RTCTrackEvent) => setProductStream({ id: productId, stream: e.streams[0] });

  useEffect(() => {
    const clientSocket = new ClientSocket(USER_ID);
    connection({ productId, addStream, userId: USER_ID! });
    clientSocket.socket!.on('getReceiverCandidate', getReceiverCandidateEvent);
    clientSocket.socket!.on('getReceiverAnswer', getReceiverAnswerEvent);

    return () => {
      // 방 퇴장
      clientSocket.socket!.off('getReceiverCandidate', getReceiverCandidateEvent);
      clientSocket.socket!.off('getReceiverAnswer', getReceiverAnswerEvent);
    };
  }, [productId]);

  useEffect(() => {
    if (!productStream) return;
    videoRef.current!.srcObject = productStream.stream;
  }, [productStream]);

  return videoRef;
};

export const useAuctionEnd = () => {
  const navigator = useNavigate();
  const { openModal } = useModal();
  const openSuccessModal = () => openModal(AlertModal as React.FC, ALERT_BUY_SUCCESS);

  useEffect(() => {
    const clientSocket = new ClientSocket(USER_ID!);
    clientSocket.socket!.on(
      'endAuctionWithBuyer',
      ({ price, productId }: { price: number; productId: number }) => {
        openSuccessModal();
        setTimeout(() => {
          navigator(`/address-register?price=${price}&productId=${productId}`);
          clientSocket.socket!.disconnect();
        }, 5000);
      },
    );
  }, []);
};
