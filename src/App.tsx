import { Route, Routes } from 'react-router-dom';

import { Modals } from '@Components/.';
import {
  DetailPage,
  FooterPage,
  HomePage,
  ListPage,
  LivePage,
  LoginPage,
  MyPage,
  ProductPage,
  RegisterPage,
} from '@Pages/.';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='/live'
          element={<LivePage />}
        />
        <Route
          path='/'
          element={<FooterPage />}
        >
          <Route
            path='/my'
            element={<MyPage />}
          />
          <Route
            path='/'
            element={<ProductPage />}
          >
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/detail/:productId'
              element={<DetailPage />}
            />
            <Route
              path='/list'
              element={<ListPage />}
            />
          </Route>
        </Route>
      </Routes>
      <Modals />
    </>
  );
}
export default App;
