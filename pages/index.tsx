import type { NextPage } from 'next'

import { PageHead } from '@components'
import { Layout } from '@components'
import {
  Description,
  Main,
  Title,
} from './index.styled'

const Home: NextPage = () => {
  return (
    <>
      <PageHead pageName="Home" />

      <Layout>
        <Main>
          <Title>
            Undisclosed
          </Title>

          <Description>
            Software development done right, at scale and with a focus on quality.
          </Description>
        </Main>
      </Layout>
    </>
  )
}

export default Home
