import type { MutableRefObject, RefObject } from 'react';

import ClientSocket from '../../Socket/WebRTC/WebRTC';
import {
  getLocalStream,
  registerRemoteDescriptionToPc,
  getCandidateEvent,
  createOffer,
  makePeerConnection,
} from '../../Socket/WebRTC/WebRTC.util';

const senderPC = ({ stream }: { stream: MediaStream }) => {
  const { socket } = new ClientSocket('싱글톤');
  if (!socket) return null;
  const callback = (e: RTCPeerConnectionIceEvent) =>
    socket.emit('senderCandidate', { candidate: e.candidate });

  const trackCallback = (e: RTCTrackEvent) => console.log('track', e);
  const pc = makePeerConnection(callback, trackCallback, stream);
  return pc;
};

const registerSdpToPC = async (pc: RTCPeerConnection) => {
  const offer = await createOffer(pc);
  return offer;
};

export const connection = async ({
  streamRef,
  videoRef,
  productId,
  userId,
}: {
  streamRef: MutableRefObject<MediaStream | undefined>;
  videoRef: RefObject<HTMLVideoElement>;
  productId: number;
  userId: string;
}) => {
  const clientSocket = new ClientSocket('싱글톤');
  if (!clientSocket.socket) return;

  clientSocket.socket!.emit('openAuction', { productId, userId });

  await getLocalStream({ streamRef, videoRef });
  const sendPc = senderPC({ stream: streamRef.current! });
  if (!sendPc) return;

  ClientSocket.sendPC = sendPc;
  const offer = await registerSdpToPC(sendPc);
  clientSocket.socket!.emit('senderOffer', { sdp: offer });
};

export const getSenderAnswerEvent = (data: { sdp: RTCSessionDescription }) => {
  registerRemoteDescriptionToPc(ClientSocket.sendPC, data.sdp);
};

// eslint-disable-next-line no-undef
export const getSenderCandidateEvent = (data: { candidate: RTCIceCandidateInit }) => {
  getCandidateEvent(ClientSocket.sendPC, data.candidate);
};
