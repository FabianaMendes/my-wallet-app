import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from './hooks/auth';
import { ThemeProvider } from './hooks/theme';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
