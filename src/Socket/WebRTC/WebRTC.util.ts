/* eslint-disable no-undef */

import { PC_CONFIG } from './WebRTC.const';
import { GetLocalStream } from './WebRTC.type';

// 나의 MediaStream 만들기 getLocalStream
export const getLocalStream = async ({ videoRef, streamRef }: GetLocalStream) => {
  if (!videoRef.current) return;
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: {
      width: window.screen.width,
      height: window.screen.height,
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

  pc.onicecandidate = (e) => onIceCandidate(e);
  pc.ontrack = (e) => {
    trackCallback(e);
  };
  if (stream) stream.getTracks().forEach((track) => pc.addTrack(track, stream));

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
