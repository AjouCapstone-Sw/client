import { Route, Routes } from 'react-router-dom';

import { FooterPage, LivePage, LoginPage, RegisterPage } from '@Pages/.';
import './App.css';

function App() {
  return (
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
        path='*'
        element={<FooterPage />}
      />
    </Routes>
  );
}
export default App;
