import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Styletron
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

// Atomize
import { ThemeProvider, StyleReset } from 'atomize';

// --------- Website ---------
// Setting Custom Theme
const theme = {
  colors: {
    teal: '#2D93AD',
    pink: '#FF6B6C',
    lime: '#CFF27E',
    light: '#FCFBF7',
    dark: '#080F0F',
    lightteal: '#D8E9EA',
  },

  fontFamily: {
    primary: 'Inconsolata',
    display: 'Noto Serif Display',
    heading: 'Noto Serif',
  },
};
// Setting the Website
const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
