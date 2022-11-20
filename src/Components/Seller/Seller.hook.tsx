import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { UseGetVideoStreamSeller } from './Seller.type';
import { connection, getSenderCandidateEvent, getSenderAnswerEvent } from './Seller.util';

import ClientSocket from '@Socket/WebRTC/WebRTC';

const SELLER_ID = 'yj';

export const useGetVideoStreamSeller = ({ productId }: UseGetVideoStreamSeller) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream>();
  useEffect(() => {
    const clientSocket = new ClientSocket(SELLER_ID);
    connection({ streamRef, videoRef, productId, userId: SELLER_ID });
    clientSocket.socket!.on('getSenderCandidate', getSenderCandidateEvent);
    clientSocket.socket!.on('getSenderAnswer', getSenderAnswerEvent);

    return () => {
      // 방 터지기
      clientSocket.socket!.off('getSenderCandidate', getSenderCandidateEvent);
      clientSocket.socket!.off('getSenderAnswer', getSenderAnswerEvent);
    };
  }, [productId]);
  return videoRef;
};

export const useAuctionEnd = () => {
  const navigator = useNavigate();
  useEffect(() => {
    const clientSocket = new ClientSocket(SELLER_ID);
    clientSocket.socket!.on('endAuctionWithSeller', ({ price }: { price: number }) => {
      navigator(`/seller-introduce?price=${price}`);
      clientSocket.socket!.disconnect();
    });
  }, []);
};
