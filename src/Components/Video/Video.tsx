import React from 'react';

import VideoStyle from './Video.style';

export const Video = ({
  videoRef,
  id,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  id?: string;
}) => (
  <VideoStyle.Container
    ref={videoRef}
    autoPlay
    id={id}
    muted
  />
);
