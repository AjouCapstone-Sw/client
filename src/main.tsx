import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { worker } from './_msw';
import App from './App';
import { ModalProvider } from './Context/Modal/ModalProvider';
import { theme } from './Styles/theme';

worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Router>
          <App />
        </Router>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
