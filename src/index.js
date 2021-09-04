import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import customTheme from './customTheme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

