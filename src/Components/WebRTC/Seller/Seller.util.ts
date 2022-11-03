import ClientSocket from '@Socket/WebRTC/WebRTC';
import {
  getLocalStream,
  registerRemoteDescriptionToPc,
  getCandidateEvent,
  createOffer,
  makePeerConnection,
} from '@Socket/WebRTC/WebRTC.util';

export const connection = async ({
  streamRef,
  videoRef,
  productId,
}: {
  streamRef: React.MutableRefObject<MediaStream | undefined>;
  videoRef: React.RefObject<HTMLVideoElement>;
  productId: number;
}) => {
  const clientSocket = new ClientSocket('싱글톤');
  if (!clientSocket.socket) return;

  clientSocket.socket!.emit('openAuction', { productId });

  await getLocalStream({ streamRef, videoRef });
  const sendPc = senderPC({ stream: streamRef.current! });
  if (!sendPc) return;

  ClientSocket.sendPC = sendPc;
  const offer = await registerSdpToPC(sendPc);
  clientSocket.socket!.emit('senderOffer', { sdp: offer });
};

const senderPC = ({ stream }: { stream: MediaStream }) => {
  const { socket } = new ClientSocket('싱글톤');
  if (!socket) return null;
  const callback = (e: RTCPeerConnectionIceEvent) =>
    socket.emit('senderCandidate', { candidate: e.candidate });
  const trackCallback = (e: RTCTrackEvent) => console.log(e);
  const pc = makePeerConnection(callback, trackCallback, stream);
  return pc;
};

const registerSdpToPC = async (pc: RTCPeerConnection) => {
  const offer = await createOffer(pc, false);
  return offer;
};

export const getSenderAnswerEvent = async (data: { sdp: RTCSessionDescription }) => {
  await registerRemoteDescriptionToPc(ClientSocket.sendPC, data.sdp);
};

export const getSenderCandidateEvent = (data: { candidate: RTCIceCandidateInit }) => {
  getCandidateEvent(ClientSocket.sendPC, data.candidate);
};
