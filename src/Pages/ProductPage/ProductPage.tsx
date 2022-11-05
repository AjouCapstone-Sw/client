import { Outlet } from 'react-router-dom';

import ProductPageStyle from './ProductPage.style';

import { ProductHeader } from '@Components/.';

export const ProductPage = () => (
  <>
    <ProductHeader />
    <ProductPageStyle.Container>
      <Outlet />
    </ProductPageStyle.Container>
  </>
);
