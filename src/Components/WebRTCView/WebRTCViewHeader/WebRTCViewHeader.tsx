import WebRTCViewHeaderStyle from './WebRTCViewHeader.style';
import { WebRTCViewHeaderProps } from './WebRTCViewHeader.type';

import { useMovePage } from '@Hook/useMovePage';
import ClientSocket from '@Socket/WebRTC/WebRTC';
import { getUserId } from '@Util/LocalStorage';

export const WebRTCViewHeader = ({ timer: { proceedText, time } }: WebRTCViewHeaderProps) => {
  const [goHome] = useMovePage('/') as (() => void)[];
  const handleExitAuction = () => {
    const myId = getUserId();
    ClientSocket.instance?.socket?.emit('forceExit', { myId });
    goHome();
  };
  return (
    <>
      <div>
        <span>경매</span>

        <span className='text-Impact'>Live</span>
      </div>
      <div className='timer'>
        {proceedText} {time}초
      </div>
      <WebRTCViewHeaderStyle.HeaderImgContainer>
        <img
          src='/asset/Auction/Sound.svg'
          alt='음소거'
        />
        <img
          src='/asset/Auction/Exit.svg'
          alt='나가기'
          onClick={handleExitAuction}
          aria-hidden
        />
      </WebRTCViewHeaderStyle.HeaderImgContainer>
    </>
  );
};
