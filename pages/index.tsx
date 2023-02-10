import type { NextPage } from 'next'
import styled from 'styled-components'

import clientPromise from '@lib/mongo'
import { Layout, PageHead } from '@components'
import { spacing } from '@themes'

export const Main = styled.main`
  padding: ${spacing(8)} 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: ${spacing(8)};
  text-align: center;
`

export const Description = styled.p`
  margin: ${spacing(8)} 0;
  line-height: 1.5;
  font-size: ${spacing(2.5)};
  text-align: center;
`

const Home: NextPage = () => {
  return (
    <>
      <PageHead pageName="Home" />

      <Layout>
        <Main>
          <Title>Undisclosed</Title>

          <Description>
            Software development done right, at scale and with a focus on
            quality.
          </Description>
        </Main>
      </Layout>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  try {
    await clientPromise

    return {
      props: {
        isConnected: true,
      },
    }
  } catch (error) {
    return {
      props: {
        isConnected: false,
      },
    }
  }
}
