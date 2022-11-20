import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { UseGetVideoStreamSeller } from './Seller.type';
import { connection, getSenderCandidateEvent, getSenderAnswerEvent } from './Seller.util';

import ClientSocket from '@Socket/WebRTC/WebRTC';
import { getUserId } from '@Util/LocalStorage';

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
      (ClientSocket.sendPC as RTCPeerConnection).close();
      ClientSocket.sendPC = null;
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
  useEffect(() => {
    const clientSocket = new ClientSocket('');
    clientSocket.socket!.on('endAuctionWithSeller', ({ price }: { price: number }) => {
      navigator(`/seller-introduce?price=${price}`);
      clientSocket.socket!.disconnect();
    });
  }, []);
};
