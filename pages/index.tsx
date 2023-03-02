import type { NextPage } from 'next'
import { useIntl } from 'react-intl'

import clientPromise from '@lib/mongo'
import { pageTitles } from '@defs'
import { Layout, PageHead } from '@components'

import { Description, EvenLetter, Main, OddLetter, Title } from './home.styled'

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
