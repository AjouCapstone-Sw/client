import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ClientSocket from '../../Socket/WebRTC/WebRTC';
import { ALERT_BUY_SUCCESS, DONT_OPEN_AUCTION, FORCE_AUCTION_EXIT } from './Buyer.const';
import { UseGetVideoStreamBuyer, WebRTCUser } from './Buyer.type';
import {
  connection,
  getReceiverAnswerEvent,
  getReceiverCandidateEvent,
  goUserAuctionHandler,
} from './Buyer.util';

import { AlertModal } from '@Components/Modals/Alert/AlertModal';
import { ReviewModal } from '@Components/Modals/Review/ReviewModal';
import { useModal } from '@Hook/useModal';
import { getUserId } from '@Util/LocalStorage';

export const useGetVideoStreamBuyer = ({ productId }: UseGetVideoStreamBuyer) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [productStream, setProductStream] = useState<WebRTCUser | null>(null);
  const navigate = useNavigate();
  const addStream = (e: RTCTrackEvent) => setProductStream({ id: productId, stream: e.streams[0] });

  useEffect(() => {
    const userId = getUserId();
    if (typeof userId !== 'string') return;

    const clientSocket = new ClientSocket(userId);
    connection({ productId, addStream, userId });
    clientSocket.socket!.on('getReceiverCandidate', getReceiverCandidateEvent);
    clientSocket.socket!.on('getReceiverAnswer', getReceiverAnswerEvent);
    clientSocket.socket!.on('goUserAuction', goUserAuctionHandler(navigate));
    return () => {
      // 방 퇴장
      ClientSocket.sendPC = null;
      ClientSocket.receivePC = null;
      ClientSocket.instance = null;
      clientSocket.socket!.off('getReceiverCandidate', getReceiverCandidateEvent);
      clientSocket.socket!.off('getReceiverAnswer', getReceiverAnswerEvent);
      clientSocket.socket!.off('goUserAuction', goUserAuctionHandler(navigate));
      clientSocket.socket!.disconnect();
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
  const openForceExitModal = () => openModal(AlertModal as React.FC, FORCE_AUCTION_EXIT);
  const openDontOpenModal = () => openModal(AlertModal as React.FC, DONT_OPEN_AUCTION);

  useEffect(() => {
    const clientSocket = new ClientSocket('');
    clientSocket.socket!.on('dontOpenAuction', () => {
      openDontOpenModal();
      setTimeout(() => {
        navigator('/');
      }, 3000);
    });

    clientSocket.socket!.on('forceAuctionExit', () => {
      openForceExitModal();
      setTimeout(() => {
        navigator('/');
      }, 3000);
    });

    clientSocket.socket!.on(
      'endAuctionWithBuyer',
      ({ price, productId, seller }: { price: number; productId: number; seller: string }) => {
        openSuccessModal();
        setTimeout(() => {
          navigator(
            `/address-register?price=${price}&productId=${productId}&seller=${seller}&type=auction`,
          );
        }, 3000);
      },
    );

    clientSocket.socket!.on('endAuctionWithRemainder', ({ productId, seller }) => {
      setTimeout(() => {
        openModal(ReviewModal as React.FC, { productId, userId: seller, type: 'auction' });
      }, 3000);
    });
  }, []);
};
