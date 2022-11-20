import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Modals } from '@Components/.';
import {
  DetailPage,
  FooterPage,
  HomePage,
  ListPage,
  LivePage,
  LoginPage,
  MyPage,
  HeaderPage,
  ProductReigsterPage,
  RegisterPage,
  ProductEditPage,
  SellerIntroducePage,
  AddressRegisterPage,
} from '@Pages/.';
import { PrivatePage } from '@Pages/PrivatePage/PrivatePage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={<PrivatePage component={LoginPage} />}
        />
        <Route
          path='/register'
          element={<PrivatePage component={RegisterPage} />}
        />
        <Route
          path='/live/:productId'
          element={<LivePage />}
        />
        <Route
          path='/'
          element={<FooterPage />}
        >
          <Route
            path='/'
            element={<HeaderPage />}
          >
            <Route
              path='/my'
              element={<MyPage />}
            />
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/detail/:productId'
              element={<DetailPage />}
            />
            <Route
              path='/edit/:productId'
              element={<ProductEditPage />}
            />
            <Route
              path='/list'
              element={<ListPage />}
            />
            <Route
              path='/product-register'
              element={<ProductReigsterPage />}
            />
            <Route
              path='/seller-introduce'
              element={<SellerIntroducePage />}
            />
            <Route
              path='/address-register'
              element={<AddressRegisterPage />}
            />
          </Route>
        </Route>
      </Routes>
      <Modals />
    </>
  );
}
export default App;
