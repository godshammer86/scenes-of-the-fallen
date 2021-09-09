import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../src/styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

