import { NavLink } from 'react-router-dom';

import HomeHeaderStyle from './HomeHeader.style';
import type { HomeHeaderProps } from './HomeHeader.type';

export const HomeHeader = ({ imgSrc, productId }: HomeHeaderProps) => (
  <HomeHeaderStyle.Container>
    <h1>경매 진행 중</h1>
    <NavLink to={`/live/${productId}`}>
      <HomeHeaderStyle.View>
        <HomeHeaderStyle.ImageBox
          src={imgSrc}
          alt='상품'
        />
        <HomeHeaderStyle.PlayButton
          src='/asset/PlayButton.svg'
          alt='PlayingButton'
        />
      </HomeHeaderStyle.View>
    </NavLink>
  </HomeHeaderStyle.Container>
);
