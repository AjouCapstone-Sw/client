import { Route, Routes } from 'react-router-dom';

import { DetailPage, HomePage, ListPage, LivePage, LoginPage, RegisterPage } from '@Pages/.';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/register'
        element={<RegisterPage />}
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
        path='/live'
        element={<LivePage />}
      />
    </Routes>
  );
}
export default App;
