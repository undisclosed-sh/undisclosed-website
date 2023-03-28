import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { appWithTranslation } from 'next-i18next'

import {
  baseFontSize,
  bodyText,
  breakpoints,
  colorPalette,
  defaultFontFamily,
  headings,
  pxToRem,
} from '@themes'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${baseFontSize}px;

    @media (min-width: 480pxpx) {
      font-size: ${baseFontSize};
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${defaultFontFamily};
    color: ${colorPalette.text.main};
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

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${pxToRem(headings.h1.tablet)};
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${pxToRem(headings.h1.desktop)};
    }

    @media (min-width: ${breakpoints.largeDesktop}px) {
      font-size: ${pxToRem(headings.h1.largeDesktop)};
    }
  }

  h2 {
    font-size: ${pxToRem(headings.h2.mobile)};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${pxToRem(headings.h2.tablet)};
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${pxToRem(headings.h2.desktop)};
    }

    @media (min-width: ${breakpoints.largeDesktop}px) {
      font-size: ${pxToRem(headings.h2.largeDesktop)};
    }
  }

  h3 {
    font-size: ${pxToRem(headings.h3.mobile)};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${pxToRem(headings.h3.tablet)};
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${pxToRem(headings.h3.desktop)};
    }

    @media (min-width: ${breakpoints.largeDesktop}px) {
      font-size: ${pxToRem(headings.h3.largeDesktop)};
    }
  }

  h4 {
    font-size: ${pxToRem(headings.h4.mobile)};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${pxToRem(headings.h4.tablet)};
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${pxToRem(headings.h4.desktop)};
    }

    @media (min-width: ${breakpoints.largeDesktop}px) {
      font-size: ${pxToRem(headings.h4.largeDesktop)};
    }
  }

  h5 {
    font-size: ${pxToRem(headings.h5.mobile)};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${pxToRem(headings.h5.tablet)};
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${pxToRem(headings.h5.desktop)};
    }

    @media (min-width: ${breakpoints.largeDesktop}px) {
      font-size: ${pxToRem(headings.h5.largeDesktop)};
    }
  }

  h6 {
    font-size: ${pxToRem(headings.h5.mobile)};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${pxToRem(headings.h5.tablet)};
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${pxToRem(headings.h5.desktop)};
    }

    @media (min-width: ${breakpoints.largeDesktop}px) {
      font-size: ${pxToRem(headings.h5.largeDesktop)};
    }
  }

  small {
    font-size: ${pxToRem(bodyText.small.mobile)};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${pxToRem(bodyText.small.desktop)};
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${pxToRem(bodyText.small.desktop)};
    }

    @media (min-width: ${breakpoints.largeDesktop}px) {
      font-size: ${pxToRem(bodyText.small.largeDesktop)};
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
