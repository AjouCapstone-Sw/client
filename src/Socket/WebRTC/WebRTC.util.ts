/* eslint-disable no-undef */

// import ClientSocket from './WebRTC';
import { PC_CONFIG } from './WebRTC.const';
import { GetLocalStream } from './WebRTC.type';

// export const muteMic = (ref: React.MutableRefObject<MediaStream | undefined>) => {
//   if (!ref || !ref.current) return;
//   ref.current.getAudioTracks().forEach((track: MediaStreamTrack) => {
//     track.enabled = !track.enabled;
//   });
// };

// export const muteCam = (ref: React.MutableRefObject<MediaStream | undefined>) => {
//   if (!ref || !ref.current) return;
//   ref.current.getVideoTracks().forEach((track: MediaStreamTrack) => {
//     track.enabled = !track.enabled;
//   });
// };

// export const muteWindow = (ref: React.MutableRefObject<MediaStream | undefined>) => {
//   if (!ref || !ref.current) return;
//   console.log('1');
// };

// 나의 MediaStream 만들기 getLocalStream
export const getLocalStream = async ({ videoRef, streamRef }: GetLocalStream) => {
  if (!videoRef.current) return;
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: {
      width: 1440,
      height: 1440,
    },
  });
  if (videoRef) videoRef.current.srcObject = stream;
  streamRef.current = stream;
};

export const makePeerConnection = (
  onIceCandidate: Function,
  trackCallback: Function,
  stream?: MediaStream,
) => {
  const pc = new RTCPeerConnection(PC_CONFIG);

  // peerConnection 생성 이후 발생
  // socket event로 candidate 전송해야함
  // console.log(stream);

  pc.onicecandidate = (e) => onIceCandidate(e);
  pc.ontrack = (e) => {
    trackCallback(e);
  };
  if (stream) stream.getTracks().forEach((track) => pc.addTrack(track, stream));

  // pc에 sdp 등록하면 발생
  // e.streams[0]을 user의 stream으로 저장해야함

  return pc;
};

export const createOffer = async (pc: RTCPeerConnection) => {
  const offer = await pc.createOffer({
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  });
  const sdp = new RTCSessionDescription(offer);
  // ontrack 발생
  pc.setLocalDescription(sdp);
  return offer;
};

export const getCandidateEvent = (pc: RTCPeerConnection, candidate: RTCIceCandidateInit) => {
  if (!candidate) return;
  pc.addIceCandidate(new RTCIceCandidate(candidate));
};

let flag = false;

export const registerRemoteDescriptionToPc = (
  pc: RTCPeerConnection,
  sdp: RTCSessionDescription,
) => {
  if (!pc.remoteDescription && !flag) {
    flag = true;
    pc.setRemoteDescription(new RTCSessionDescription(sdp));
  }
};

// const registerUser = async (id: string, addUser: Function, chatRoomId: number) => {
//   const pc = receivePC(id, addUser);
//   const clientSocket = new ClientSocket('싱글톤');
//   const answer = await createReceiverOffer(pc as RTCPeerConnection);
//   clientSocket.socket!.emit('receiverOffer', {
//     sdp: new RTCSessionDescription(answer),
//     // receiverSocketID: clientSocket.socket!.id,
//     senderSocketID: id,
//     roomID: chatRoomId,
//   });
// };

// export const handleAllUserEvent =
//   (addUser: Function, chatRoomId: number) =>
//   ({ users }: { users: { id: string }[] }) =>
//     users.forEach((user) => registerUser(user.id, addUser, chatRoomId));

// export const handleUserEnterEvent =
//   (addUser: Function, chatRoomId: number) => async (data: { id: string }) =>
//     registerUser(data.id, addUser, chatRoomId);

// export const handleUserExitEvent = (deleteUser: Function) => (id: string) => {
//   const { receivePCs } = ClientSocket;
//   if (!receivePCs[id]) receivePCs[id].close();
//   delete receivePCs[id];
//   deleteUser(id);
// };
