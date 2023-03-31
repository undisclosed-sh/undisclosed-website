import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

import { Layout, PageHead } from '@components'
import { PageHeading } from '@components/lib/pageH-heading'
import { Translation, TranslationList } from '@custom-types'
import { pxToRem } from '@themes'

const Intro = styled.div`
  font-size: ${pxToRem(16)};
  margin-top: ${pxToRem(18)};
  margin-bottom: ${pxToRem(32)};
  text-align: center;
  color: #adb5bd;
`

const StyledMain = styled.main`
  max-width: ${pxToRem(560)};
  margin: 0 auto;
`

const About: NextPage = () => {
  const { t } = useTranslation(['header', 'footer', 'about'])

  return (
    <>
      <PageHead pageName={t('about')} />

      <Layout flexDirection="column">
        <PageHeading text={t('about:title')} />

        <Intro>
          {t('about:subtitle')}
        </Intro>

        <StyledMain>
          {(
            t('about:mainContent', { returnObjects: true }) as (
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
        </StyledMain>
      </Layout>
    </>
  )
}

export default About

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'about',
      'common',
      'header',
      'footer',
    ])),
  },
})
