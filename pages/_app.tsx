import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import store from 'src/app/store'
import { Provider } from 'react-redux'
import { LightTheme } from '../styles'
import '../styles/globals.css'

// eslint-disable-next-line react/function-component-definition
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <Head>
          <title>NGB Studio</title>
          <meta name="title" content="NGB Studio" />
          <meta name="description" content="Design" />
          <meta property="og:title" content="NGB Studio" />
          <meta property="og:description" content="Design" />
          <meta property="og:url" content="https://ngb.studio/" />
          <meta name="og:image" content="https://ngb.studio/og.svg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ngb.studio/" />
          <meta property="twitter:title" content="NG" />
          <meta property="twitter:description" content="Design" />
          <meta property="twitter:image" content="https://ngb.studio/og.svg" />
        </Head>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
