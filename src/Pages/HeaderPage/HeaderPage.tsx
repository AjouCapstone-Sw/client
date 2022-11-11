import { Outlet } from 'react-router-dom';

import HeaderPageStyle from './HeaderPage.style';

import { Header } from '@Components/.';

export const HeaderPage = () => (
  <>
    <Header />
    <HeaderPageStyle.Container>
      <Outlet />
    </HeaderPageStyle.Container>
  </>
);
