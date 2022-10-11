import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

import { worker } from './_msw';
import App from './App';

// const GlobalStyle = createGlobalStyle`${reset}`;
worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      {/* <GlobalStyle /> */}
      <App />
    </Router>
  </React.StrictMode>,
);
