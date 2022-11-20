import { useEffect, useRef, useState } from 'react';

import ClientSocket from '../../Socket/WebRTC/WebRTC';
import { UseGetVideoStreamBuyer, WebRTCUser } from './Buyer.type';
import { connection, getReceiverAnswerEvent, getReceiverCandidateEvent } from './Buyer.util';

import { getUserId } from '@Util/LocalStorage';

export const useGetVideoStreamBuyer = ({ productId }: UseGetVideoStreamBuyer) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [productStream, setProductStream] = useState<WebRTCUser | null>(null);

  const addStream = (e: RTCTrackEvent) => {
    console.log(e);
    setProductStream({ id: productId, stream: e.streams[0] });
    // setProductStream({ id: productId, stream: new MediaStream([e.track]) });
  };

  useEffect(() => {
    const userId = getUserId();
    if (typeof userId !== 'string') return;

    const clientSocket = new ClientSocket(userId);
    connection({ productId, addStream, userId });
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
    console.log(productStream.stream.getTracks());
    videoRef.current!.srcObject = productStream.stream;
    console.log(videoRef.current?.srcObject);
  }, [productStream]);

  return videoRef;
};
