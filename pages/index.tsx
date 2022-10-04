import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { PageHead } from '@components'
import { Footer } from '@components'
import { footerHeight } from '@themes'

const Main = styled.main`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - ${footerHeight}px);
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`

const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.25rem;
  text-align: center;
`

const Home: NextPage = () => {
  return (
    <>
      <PageHead pageName="Home" />

      <Main>
        <Title>
          Undisclosed
        </Title>

        <Description>
          This page is currently under construction.
        </Description>
      </Main>

      <Footer />
    </>
  )
}

export default Home
