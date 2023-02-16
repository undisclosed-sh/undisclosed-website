import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { GoogleAnalytics } from "nextjs-google-analytics"

import { baseFontSize } from '@themes'

import English from '../content/locales/en.json'
import Czech from '../content/locales/cs.json'

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
  const { locale } = useRouter()
  const shortLocale = locale?.split('-')[0] || 'en'

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return English
      case 'cs':
        return Czech
      default:
        return English
    }
  }, [shortLocale])

  return (
    <>
      <IntlProvider
        locale={shortLocale}
        messages={messages}
        defaultLocale="en"
        onError={() => null}
      >
        <GlobalStyle />
        <UserProvider>
          <ThemeProvider theme={{}}>
            <GoogleAnalytics trackPageViews />
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
      </IntlProvider>
    </>
  )
}

export default MyApp
