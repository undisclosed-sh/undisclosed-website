import type { NextPage } from 'next'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

import clientPromise from '@lib/mongo'
import { pageTitles } from '@defs'
import { Layout, PageHead } from '@components'
import { pxToRem } from '@themes'

export const Main = styled.main`
  padding: ${pxToRem(64)} 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EvenLetter = styled.span`
  transition: transform 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    transform: translateY(-16px);
  }
`

export const OddLetter = styled.span`
  transition: transform 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    transform: translateX(8px);
  }
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: ${pxToRem(64)};
  text-align: center;
`

export const Description = styled.p`
  margin: ${pxToRem(64)} 0;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
`

export interface HomeProps {
  isConnected?: boolean
}

const Home: NextPage = ({ ...props }: HomeProps) => {
  const { formatMessage } = useIntl()

  return (
    <>
      <PageHead pageName={formatMessage(pageTitles.home)} />

      <Layout>
        <Main>
          <Title>
            <EvenLetter>U</EvenLetter>
            <OddLetter>n</OddLetter>
            <EvenLetter>d</EvenLetter>
            <OddLetter>i</OddLetter>
            <EvenLetter>s</EvenLetter>
            <OddLetter>c</OddLetter>
            <EvenLetter>l</EvenLetter>
            <OddLetter>o</OddLetter>
            <EvenLetter>s</EvenLetter>
            <OddLetter>e</OddLetter>
            <EvenLetter>d</EvenLetter>
          </Title>

          <Description>
            {formatMessage({
              defaultMessage:
                'Building digital products at scale, with focus on quality.',
              id: 'home.description',
            })}
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
