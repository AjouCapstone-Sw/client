import VideoStyle from './Video.style';

export const Video = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => (
  <VideoStyle.Container
    muted
    ref={videoRef}
    autoPlay
  />
);
