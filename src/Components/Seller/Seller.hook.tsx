import { useRef, useEffect } from 'react';

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
