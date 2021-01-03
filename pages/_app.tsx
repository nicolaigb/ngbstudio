import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../styles";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={DarkTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
