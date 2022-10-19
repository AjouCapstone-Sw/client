import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, DetailPage, ListPage, MyPage } from '..';

import { Footer, ProductHeader } from '@Components/.';

const ProductPage = () => (
  <>
    <ProductHeader />
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/detail'
        element={<DetailPage />}
      />
      <Route
        path='/list'
        element={<ListPage />}
      />
    </Routes>
  </>
);
export const FooterPage = () => (
  <>
    <Routes>
      <Route
        path='/my'
        element={<MyPage />}
      />
      <Route
        path='*'
        element={<ProductPage />}
      />
    </Routes>
    <Footer />
  </>
);
