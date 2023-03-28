import type { NextPage } from 'next'
import styled from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import clientPromise from '@lib/mongo'
import { Heading, Layout, PageHead } from '@components'
import { pxToRem } from '@themes'
import { useTranslation } from 'next-i18next'

const Main = styled.main`
  padding: ${pxToRem(64)} 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${pxToRem(640)};
  margin: 0 auto;
  min-height: 100vh;
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
  font-size: ${pxToRem(20)};
  text-align: center;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${pxToRem(16)}};
`

const StyledGridItem = styled.div`
  padding: ${pxToRem(16)};
  text-align: center;
`

const ServicesOverview = styled.section`
  padding: ${pxToRem(64)} 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const servicesLabels = [
  'webDevelopment',
  'webAppDevelopment',
  'machineLearning',
  'productDevelopment',
  'productDiscovery',
  'projectManagement',
]

export interface HomeProps {
  isConnected?: boolean
}

const Home: NextPage = ({ ...props }: HomeProps) => {
  const { t } = useTranslation(['header', 'home'])

  return (
    <>
      <PageHead pageName={t('header:home')} />

      <Layout flexDirection="column">
        <Main>
          <Title>{t('home:hero.heading')}</Title>

          <Description>{t('home:hero.subheading')}</Description>
        </Main>

        <ServicesOverview>
          <Heading centered as="h1">
            {t('home:services.heading')}
          </Heading>

          <StyledGrid>
            {servicesLabels.map((label) => (
              <StyledGridItem key={label}>
                <h3>{t(`home:services.services.${label}.heading`)}</h3>
                <p>{t(`home:services.services.${label}.description`)}</p>
              </StyledGridItem>
            ))}
          </StyledGrid>
        </ServicesOverview>
      </Layout>
    </>
  )
}

export default Home

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'header',
      'footer',
      'home',
    ])),
  },
})

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
