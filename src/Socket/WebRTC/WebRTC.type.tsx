import React from 'react';

export type WebRTCUser = {
  id: string;
  stream: MediaStream;
};

export type WebRTCState = {
  MeetingToggleButton: () => Element;
  meetingState: boolean;
  micState: boolean;
  windowState: boolean;
  camState: boolean;
  handleMicToggle: () => void;
  handleWindowToggle: () => void;
  handleCamToggle: () => void;
  users: WebRTCUser[];
};

export type GetLocalStream = {
  videoRef: React.RefObject<HTMLVideoElement>;
  streamRef: React.MutableRefObject<MediaStream | undefined>;
};
