import WebRTCViewHeaderStyle from './WebRTCViewHeader.style';

import { useMovePage } from '@Hook/useMovePage';

export const WebRTCViewHeader = () => {
  const [goHome] = useMovePage('/') as (() => void)[];
  return (
    <>
      <div>
        <span>경매</span>
        <span className='strike'>Live</span>
      </div>
      <WebRTCViewHeaderStyle.HeaderImgContainer>
        <img
          src='/asset/Auction/Sound.svg'
          alt='음소거'
        />
        <img
          src='/asset/Auction/Exit.svg'
          alt='나가기'
          onClick={goHome}
          aria-hidden
        />
      </WebRTCViewHeaderStyle.HeaderImgContainer>
    </>
  );
};
