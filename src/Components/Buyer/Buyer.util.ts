import {
  makePeerConnection,
  createOffer,
  getCandidateEvent,
  registerRemoteDescriptionToPc,
} from '../../Socket/WebRTC';
import ClientSocket from '../../Socket/WebRTC/WebRTC';

const receivePC = ({ addStream, productId }: { addStream: Function; productId: number }) => {
  const { socket } = new ClientSocket('싱글톤');
  if (!socket) return null;
  const callback = (e: RTCPeerConnectionIceEvent) => {
    console.log('pc에 sdp 두개다 등록했으나 해당 callback이 동작하지 않음');
    socket.emit('receiverCandidate', { candidate: e.candidate, productId });
  };
  const trackCallback = (e: RTCTrackEvent) => addStream(e);
  const pc = makePeerConnection(callback, trackCallback);

  return pc;
};

const createReceiverOffer = async (pc: RTCPeerConnection) => {
  const answer = await createOffer(pc, true);
  return answer;
};

export const connection = async ({
  productId,
  addStream,
}: {
  productId: number;
  addStream: Function;
}) => {
  const clientSocket = new ClientSocket('싱글톤');
  if (!clientSocket.socket) return;
  const pc = receivePC({ addStream, productId });
  if (!pc) return;

  clientSocket.socket!.emit('joinAuction', { productId });

  ClientSocket.receivePC = pc;
  const offer = await createReceiverOffer(pc);
  clientSocket.socket!.emit('receiverOffer', { sdp: offer });
};

// eslint-disable-next-line no-undef
export const getReceiverCandidateEvent = (data: { candidate: RTCIceCandidateInit }) => {
  getCandidateEvent(ClientSocket.receivePC, data.candidate);
};

export const getReceiverAnswerEvent = async (data: { sdp: RTCSessionDescription }) => {
  await registerRemoteDescriptionToPc(ClientSocket.receivePC, data.sdp);
  console.log(ClientSocket.receivePC);
};
