import { useEffect, useRef, useState } from 'react';

import ClientSocket from '../../Socket/WebRTC/WebRTC';
import { UseGetVideoStreamBuyer, WebRTCUser } from './Buyer.type';
import { connection, getReceiverAnswerEvent, getReceiverCandidateEvent } from './Buyer.util';

const USER_ID = 'HS';
export const useGetVideoStreamBuyer = ({ productId }: UseGetVideoStreamBuyer) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [productStream, setProductStream] = useState<WebRTCUser | null>(null);

  const addStream = (e: RTCTrackEvent) => {
    console.log(e);
    setProductStream({ id: productId, stream: e.streams[0] });
    // setProductStream({ id: productId, stream: new MediaStream([e.track]) });
  };

  useEffect(() => {
    const clientSocket = new ClientSocket(USER_ID);
    connection({ productId, addStream, userId: USER_ID });
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
