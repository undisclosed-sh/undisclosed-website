import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { appWithTranslation } from 'next-i18next'

import { baseFontSize, defaultFontFamily, pxToRem } from '@themes'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${baseFontSize}px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${defaultFontFamily};
  }

  html,
  body,
  body > div {
    min-height: 100vh;
  }

  body {
    font-size: ${pxToRem(16)};
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
      <UserProvider>
        <ThemeProvider theme={{}}>
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
