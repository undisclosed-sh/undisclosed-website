import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import { baseFontSize } from '@themes'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: ${baseFontSize}px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  html,
  body,
  body > div {
    min-height: 100vh;
  }

  body > div {
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
