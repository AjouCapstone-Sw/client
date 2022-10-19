import { Route, Routes } from 'react-router-dom';

import { HomePage, DetailPage, ListPage, MyPage } from '..';

import { Footer } from '@Components/.';

export const FooterPage = () => (
  <>
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
      <Route
        path='/my'
        element={<MyPage />}
      />
    </Routes>
    <Footer />
  </>
);
