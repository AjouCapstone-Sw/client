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
  InvoicePage,
} from '@Pages/.';
import { IncomePage } from '@Pages/IncomePage/IncomePage';
import { PrivatePage } from '@Pages/PrivatePage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={<IncomePage component={LoginPage} />}
        />
        <Route
          path='/register'
          element={<IncomePage component={RegisterPage} />}
        />
        <Route
          path='/live/:productId'
          element={<PrivatePage component={LivePage} />}
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
              element={<PrivatePage component={MyPage} />}
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
              element={<PrivatePage component={ProductReigsterPage} />}
            />
            <Route
              path='/seller-introduce'
              element={<SellerIntroducePage />}
            />
            <Route
              path='/address-register'
              element={<AddressRegisterPage />}
            />
            <Route
              path='/invoice'
              element={<InvoicePage />}
            />
          </Route>
        </Route>
      </Routes>
      <Modals />
    </>
  );
}
export default App;
