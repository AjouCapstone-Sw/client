import { Outlet } from 'react-router-dom';

import ProductPageStyle from './ProductPage.style';

import { Header } from '@Components/.';

export const ProductPage = () => (
  <>
    <Header />
    <ProductPageStyle.Container>
      <Outlet />
    </ProductPageStyle.Container>
  </>
);
