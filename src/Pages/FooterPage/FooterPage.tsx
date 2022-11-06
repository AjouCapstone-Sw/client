import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterPageStyle from './FooterPage.style';

import { Footer } from '@Components/.';

export const FooterPage = () => (
  <>
    <FooterPageStyle.Container>
      <Outlet />
    </FooterPageStyle.Container>
    <Footer />
  </>
);
