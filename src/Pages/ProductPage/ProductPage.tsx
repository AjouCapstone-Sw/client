import { Outlet } from 'react-router-dom';

import { ProductHeader } from '@Components/.';

export const ProductPage = () => (
  <>
    <ProductHeader />
    <Outlet />
  </>
);
