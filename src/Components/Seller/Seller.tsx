import { ReactNode, useRef, useEffect } from 'react';

import { connection, getSenderAnswerEvent, getSenderCandidateEvent } from './Seller.util';

import { Video } from '@Components/.';
import ClientSocket from '@Socket/WebRTC/WebRTC';

const SELLER_ID = 'yj';

export const Seller = ({ children, productId }: { children: ReactNode; productId: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream>();
  useEffect(() => {
    const clientSocket = new ClientSocket(SELLER_ID);
    connection({ streamRef, videoRef, productId });
    clientSocket.socket!.on('getSenderCandidate', getSenderCandidateEvent);
    clientSocket.socket!.on('getSenderAnswer', getSenderAnswerEvent);
    return () => {
      // 방 터지기
      clientSocket.socket!.off('getSenderCandidate', getSenderCandidateEvent);
      clientSocket.socket!.off('getSenderAnswer', getSenderAnswerEvent);
    };
  }, [productId]);
  return (
    <div>
      <Video videoRef={videoRef} />
      {children}
    </div>
  );
};
