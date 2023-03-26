import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { appWithTranslation } from 'next-i18next'

import { baseFontSize, bodyText, defaultFontFamily, headings, pxToRem } from '@themes'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${baseFontSize}px;

    @media (min-width: 480px) {
      font-size: ${baseFontSize};
    }
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

  h1 {
    font-size: ${pxToRem(headings.h1.mobile)};

    @media (min-width: 480px) {
      font-size: ${pxToRem(headings.h1.desktop)};
    }
  }

  h2 {
    font-size: ${pxToRem(headings.h2.mobile)};

    @media (min-width: 480px) {
      font-size: ${pxToRem(headings.h2.desktop)};
    }
  }

  h3 {
    font-size: ${pxToRem(headings.h3.mobile)};

    @media (min-width: 480px) {
      font-size: ${pxToRem(headings.h3.desktop)};
    }
  }

  h4 {
    font-size: ${pxToRem(headings.h4.mobile)};

    @media (min-width: 480px) {
      font-size: ${pxToRem(headings.h4.desktop)};
    }
  }

  h5 {
    font-size: ${pxToRem(headings.h5.mobile)};

    @media (min-width: 480px) {
      font-size: ${pxToRem(headings.h5.desktop)};
    }
  }

  small {
    font-size: ${bodyText.body2.mobile}px;

    @media (min-width: 480px) {
      font-size: ${bodyText.body2.desktop};
    }
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
