import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@Components/.';

export const FooterPage = () => (
  <>
    <Outlet />
    <Footer />
  </>
);
