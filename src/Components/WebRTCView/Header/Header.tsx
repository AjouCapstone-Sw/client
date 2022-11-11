import { AUCTION_HEADER_IMG } from './Header.const';
import HeaderStyle from './Header.style';

export const Header = () => (
  <>
    <div>
      <span>경매</span>
      <span className='strike'>Live</span>
    </div>
    <HeaderStyle.HeaderImgContainer>
      {AUCTION_HEADER_IMG.map(({ id, ...info }) => (
        <img
          key={id}
          {...info}
        />
      ))}
    </HeaderStyle.HeaderImgContainer>
  </>
);
