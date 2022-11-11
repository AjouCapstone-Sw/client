import { AUCTION_HEADER_IMG } from './WebRTCViewHeader.const';
import WebRTCViewHeaderStyle from './WebRTCViewHeader.style';

export const WebRTCViewHeader = () => (
  <>
    <div>
      <span>경매</span>
      <span className='strike'>Live</span>
    </div>
    <WebRTCViewHeaderStyle.HeaderImgContainer>
      {AUCTION_HEADER_IMG.map(({ id, ...info }) => (
        <img
          key={id}
          {...info}
        />
      ))}
    </WebRTCViewHeaderStyle.HeaderImgContainer>
  </>
);
