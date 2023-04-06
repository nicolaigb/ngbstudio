import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from 'src/app/store';
import { Provider } from 'react-redux';
import { LightTheme } from '../styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
