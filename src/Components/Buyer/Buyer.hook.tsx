import { useEffect, useRef, useState } from 'react';

import { UseGetVideoStreamBuyer, WebRTCUser } from './Buyer.type';
import { connection, getReceiverAnswerEvent, getReceiverCandidateEvent } from './Buyer.util';

import ClientSocket from '@Socket/WebRTC/WebRTC';

const USER_ID = 'HS';
export const useGetVideoStreamBuyer = ({ productId }: UseGetVideoStreamBuyer) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [productStream, setProductStream] = useState<WebRTCUser | null>(null);
  const addStream = (e: RTCTrackEvent) => setProductStream({ id: productId, stream: e.streams[0] });
  useEffect(() => {
    const clientSocket = new ClientSocket(USER_ID);
    connection({ productId, addStream });
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
