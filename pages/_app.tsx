import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
          <title>NG</title>
          <meta
            property="og:title"
            content="Nicolai Garcia Beckmann"
            key="title"
          />
          <meta
            name="og:description"
            content="Heavin is the life."
            key="desc"
          />
          <meta property="og:url" content="https://end-i.ng/" />
          <meta name="og:image" content="/open-graph.png" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </Provider>
  )
}

export default MyApp
