'use client'

import { breakpoints } from '@themes'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

const Main = styled.main`
  padding: 64px 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  flex: 1 0 auto;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 32px;
  text-align: center;
  font-family: var(--font-antonio), 'Roboto', sans-serif;

  @media (min-width: ${breakpoints.mobile}px) {
    font-size: 42px;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 64px;
  }

  @media (min-width: ${breakpoints.largeDesktop}px) {
    font-size: 96px;
  }
`

const Subtitle = styled.h2`
  margin: 24px 0 0;
  line-height: 1.415;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  font-family: var(--font-inter), 'Roboto', sans-serif;

  @media (min-width: ${breakpoints.mobile}px) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 24px;
  }
`

export default function Home() {
  const t = useTranslations('Home')

  return (
    <Main>
      <Title>{t('companyName')}</Title>
      <Subtitle>{t('heading')}</Subtitle>
    </Main>
  )
}
