import { NavLink } from 'react-router-dom';

import HomeLiveItemStyle from './HomeLiveItem.style';
import type { HomeLiveItemProps } from './HomeLiveItem.type';

export const HomeLiveItem = ({ imgSrc, productId }: HomeLiveItemProps) => (
  <HomeLiveItemStyle.Container>
    <h1>경매 진행 중</h1>
    <NavLink to={`/live/${productId}`}>
      <HomeLiveItemStyle.View>
        <HomeLiveItemStyle.ImageBox
          src={imgSrc}
          alt='상품'
        />
        <HomeLiveItemStyle.PlayButton
          src='/asset/PlayButton.svg'
          alt='PlayingButton'
        />
      </HomeLiveItemStyle.View>
    </NavLink>
  </HomeLiveItemStyle.Container>
);
