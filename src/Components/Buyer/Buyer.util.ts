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

  const trackCallback = (e: RTCTrackEvent) => addStream(e);

  const callback = (e: RTCPeerConnectionIceEvent) => {
    socket.emit('receiverCandidate', { candidate: e.candidate, productId });
  };

  const pc = makePeerConnection(callback, trackCallback);

  return pc;
};

const createReceiverOffer = async (pc: RTCPeerConnection) => {
  const answer = await createOffer(pc);
  return answer;
};

export const connection = async ({
  productId,
  addStream,
  userId,
}: {
  productId: number;
  addStream: Function;
  userId: string;
}) => {
  const clientSocket = new ClientSocket('싱글톤');
  if (!clientSocket.socket) return;
  const pc = receivePC({ addStream, productId });
  if (!pc) return;

  clientSocket.socket!.emit('joinAuction', { productId, userId });
  ClientSocket.receivePC = pc;

  const offer = await createReceiverOffer(pc);
  clientSocket.socket!.emit('receiverOffer', { sdp: offer });
};

// eslint-disable-next-line no-undef
export const getReceiverCandidateEvent = async (data: { candidate: RTCIceCandidateInit }) => {
  if (!ClientSocket.receivePC) return;
  getCandidateEvent(ClientSocket.receivePC, data.candidate);
};

export const getReceiverAnswerEvent = async (data: { sdp: RTCSessionDescription }) => {
  if (!ClientSocket.receivePC) return;
  registerRemoteDescriptionToPc(ClientSocket.receivePC, data.sdp);
};
