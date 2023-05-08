import type { NextPage } from 'next'
import styled from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import ReactMarkdown from 'react-markdown'

import clientPromise from '@lib/mongo'
import { Heading, Layout, Link, PageHead } from '@components'
import { breakpoints, pxToRem } from '@themes'
import { navigation } from '@defs'
import { Translation, TranslationList } from '@custom-types'

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
  align-items: flex-start;

  @media (min-width: ${breakpoints.largeDesktop}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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

const CTA = styled.section`
  padding: ${pxToRem(64)} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${pxToRem(640)};
  margin: 0 auto;
  text-align: center;
`

const StyledLink = styled(Link)`
  margin: ${pxToRem(16)} auto;
`

const FAQ = styled.section`
  padding: ${pxToRem(64)} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${pxToRem(640)};
  margin: 0 auto;

  h2 {
    font-size: ${pxToRem(24)};
    margin-top: ${pxToRem(16)};
    margin-bottom: ${pxToRem(16)};
  }

  p {
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const servicesLabels = [
  'productDevelopment',
  'projectManagement',
  'webDevelopment',
  'webAppDevelopment',
  'machineLearning',
]

export interface HomeProps {
  isConnected?: boolean
}

const Home: NextPage = ({ ...props }: HomeProps) => {
  const { t } = useTranslation(['header', 'home'])
  const includeServices = false
  const includeFAQ = false
  const includeCTA = false

  return (
    <>
      <PageHead pageName={t('header:home')} />

      <Layout flexDirection="column">
        <Main>
          <Title>{t('home:hero.heading')}</Title>

          <Description>{t('home:hero.subheading')}</Description>
        </Main>

        {includeServices && (
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
        )}

        {includeFAQ && (
          <FAQ>
            <Heading centered as="h1">
              {t('home:faq.heading')}
            </Heading>

            {(
              t('home:faq.mainContent', { returnObjects: true }) as (
                | Translation
                | TranslationList
              )[]
            ).map((paragraph, index: number) =>
              paragraph.contentType === 'list' ? (
                <ul key={`about_paragraph_${index}`}>
                  {(paragraph as TranslationList).list.map(
                    (listItem, index: number) => (
                      <li key={`about_list_item_${index}`}>
                        {listItem.contentType.toLowerCase().includes('rich') ? (
                          <ReactMarkdown>{listItem.text}</ReactMarkdown>
                        ) : (
                          listItem.text
                        )}
                      </li>
                    ),
                  )}
                </ul>
              ) : paragraph.contentType.toLowerCase().includes('rich') ? (
                <ReactMarkdown>{paragraph.text}</ReactMarkdown>
              ) : (
                <p key={`about_paragraph_${index}`}>{paragraph.text}</p>
              ),
            )}
          </FAQ>
        )}

        {includeCTA && (
          <CTA>
            <Heading centered as="h1">
              {t('home:cta.heading')}
            </Heading>

            <Heading centered as="h5">
              {t('home:cta.subheading')}
            </Heading>

            <p>{t('home:cta.description')}</p>

            <StyledLink href={navigation.contact.route}>
              {t('home:cta.cta')}
            </StyledLink>
          </CTA>
        )}
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
