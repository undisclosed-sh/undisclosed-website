import type { NextPage } from 'next'
import styled from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import clientPromise from '@lib/mongo'
import { Layout, PageHead } from '@components'
import { pxToRem } from '@themes'
import { useTranslation } from 'next-i18next'

const Main = styled.main`
  padding: ${pxToRem(64)} 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const EvenLetter = styled.span`
  transition: transform 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    transform: translateY(-16px);
  }
`

const OddLetter = styled.span`
  transition: transform 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    transform: translateX(8px);
  }
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: ${pxToRem(64)};
  text-align: center;
`

const Description = styled.p`
  margin: ${pxToRem(64)} 0;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
`

export interface HomeProps {
  isConnected?: boolean
}

const Home: NextPage = ({ ...props }: HomeProps) => {
  const { t } = useTranslation(['header', 'home'])

  return (
    <>
      <PageHead pageName={t('header:home')} />

      <Layout>
        <Main>
          {/* <Title>
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
          </Title> */}
          <Title>
            {t('home:hero.heading')}
          </Title>

          <Description>
            {t('home:hero.subheading')}
          </Description>
        </Main>
      </Layout>
    </>
  )
}

export default Home

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'home'])),
  },
});

// export async function getServerSideProps({ locale }: { locale: string }) {
//   try {
//     await clientPromise

//     return {
//       props: {
//         isConnected: true,
//       },
//     }
//   } catch (error) {
//     return {
//       props: {
//         isConnected: false,
//         ...(await serverSideTranslations(locale ?? 'en', ['header'])),
//       },
//     }
//   }
// }
